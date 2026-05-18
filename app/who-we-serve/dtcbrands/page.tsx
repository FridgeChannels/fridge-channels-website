"use client";

import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

/**
 * FC for DTC Brands — CMO / Brand Leader landing page
 *
 * STANDALONE design — does NOT use your existing Navigation/SiteFooter or design tokens.
 * Self-contained editorial design: cream + forest + terracotta, Instrument Serif + Plus Jakarta Sans.
 *
 * Install:
 *   1. Drop this file at: app/who-we-serve/dtcbrands/page.tsx
 *   2. Copy public/dtc-cmo/ folder into your project's /public/ directory
 *   3. Visit /who-we-serve/dtcbrands
 */

const CALENDLY = "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting";

const CSS = `
  .fc-cmo{
    --bg:#EFE6DB;
    --bg-2:#E7DCCD;
    --paper:#FBF7F1;
    --ink:#1A1714;
    --ink-2:#3A332C;
    --muted:#7A7167;
    --line:rgba(26,23,20,.12);
    --line-soft:rgba(26,23,20,.07);
    --accent:#0B3B2E;
    --accent-2:#C8553D;
    background:var(--bg);
    color:var(--ink);
    font-family:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif;
    font-size:16px;
    line-height:1.55;
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
    min-height:100vh;
  }
  .fc-cmo *{box-sizing:border-box}
  .fc-cmo img{max-width:100%;display:block}
  .fc-cmo a{color:inherit;text-decoration:none}
  .fc-cmo .serif{font-family:'Instrument Serif',serif;font-weight:400;letter-spacing:-.01em}
  .fc-cmo .mono{font-family:'JetBrains Mono',ui-monospace,monospace;font-weight:500}
  .fc-cmo .wrap{width:100%;max-width:none;margin:0 auto;padding:0 68px}
  .fc-cmo section{position:relative}

  .fc-cmo nav.top{position:sticky;top:0;z-index:50;backdrop-filter:saturate(120%) blur(10px);background:rgba(239,230,219,.85);border-bottom:1px solid var(--line-soft)}
  .fc-cmo nav.top .row{display:flex;align-items:center;justify-content:space-between;height:64px}
  .fc-cmo .logo{display:flex;align-items:center;gap:10px;font-weight:700;letter-spacing:-.02em;font-size:18px}
  .fc-cmo .logo .mark{width:26px;height:26px;border-radius:7px;background:var(--ink);display:grid;place-items:center}
  .fc-cmo .logo .mark img{width:16px;height:16px;filter:invert(1)}
  .fc-cmo .nav-links{display:flex;gap:28px;font-size:14px;color:var(--ink-2)}
  .fc-cmo .nav-links a:hover{color:var(--ink)}
  .fc-cmo .nav-cta{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border-radius:999px;background:var(--ink);color:#fff;font-size:13.5px;font-weight:500;transition:transform .2s, background .2s}
  .fc-cmo .nav-cta:hover{background:#000;transform:translateY(-1px)}
  .fc-cmo .nav-cta .arrow{transition:transform .2s}
  .fc-cmo .nav-cta:hover .arrow{transform:translate(2px,-2px)}

  .fc-cmo .hero-grid,.fc-cmo .retention-statement,.fc-cmo .sec-head,.fc-cmo .table,.fc-cmo .addon-grid,.fc-cmo .what-item,.fc-cmo .steps,.fc-cmo .final{animation:fc-cmo-rise .72s cubic-bezier(.22,1,.36,1) both}
  .fc-cmo .table,.fc-cmo .addon-grid,.fc-cmo .steps{animation-delay:.16s}
  .fc-cmo .what-item:nth-child(1){animation-delay:.08s}
  .fc-cmo .what-item:nth-child(2){animation-delay:.16s}
  .fc-cmo .what-item:nth-child(3){animation-delay:.24s}
  @keyframes fc-cmo-rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
  .fc-cmo .reveal-section .hero-grid,.fc-cmo .reveal-section .retention-statement,.fc-cmo .reveal-section .sec-head,.fc-cmo .reveal-section .table,.fc-cmo .reveal-section .addon-grid,.fc-cmo .reveal-section .what-item,.fc-cmo .reveal-section .steps{animation:none}
  .fc-cmo .reveal-section .hero-grid,.fc-cmo .reveal-section .retention-statement,.fc-cmo .reveal-section .sec-head,.fc-cmo .reveal-section .table,.fc-cmo .reveal-section .addon-panel,.fc-cmo .reveal-section .what-item,.fc-cmo .reveal-section .step{opacity:0;transform:translateY(34px);filter:blur(10px);transition:opacity 1s cubic-bezier(.22,1,.36,1),transform 1s cubic-bezier(.22,1,.36,1),filter 1s cubic-bezier(.22,1,.36,1)}
  .fc-cmo .reveal-section.is-visible .hero-grid,.fc-cmo .reveal-section.is-visible .retention-statement,.fc-cmo .reveal-section.is-visible .sec-head,.fc-cmo .reveal-section.is-visible .table,.fc-cmo .reveal-section.is-visible .addon-panel,.fc-cmo .reveal-section.is-visible .what-item,.fc-cmo .reveal-section.is-visible .step{opacity:1;transform:translateY(0);filter:blur(0)}
  .fc-cmo .reveal-section.is-visible .table,.fc-cmo .reveal-section.is-visible .what-item:nth-child(1),.fc-cmo .reveal-section.is-visible .step:nth-child(1),.fc-cmo .reveal-section.is-visible .addon-panel:nth-child(1){transition-delay:.08s}
  .fc-cmo .reveal-section.is-visible .what-item:nth-child(2),.fc-cmo .reveal-section.is-visible .step:nth-child(2),.fc-cmo .reveal-section.is-visible .addon-panel:nth-child(2){transition-delay:.36s}
  .fc-cmo .reveal-section.is-visible .what-item:nth-child(3),.fc-cmo .reveal-section.is-visible .step:nth-child(3),.fc-cmo .reveal-section.is-visible .addon-panel:nth-child(3){transition-delay:.62s}
  .fc-cmo .reveal-section.is-visible .step:nth-child(4){transition-delay:.82s}

  .fc-cmo .hero{padding:0;min-height:720px;background:linear-gradient(90deg,rgba(26,23,20,.72),rgba(26,23,20,.42),rgba(26,23,20,.08)),url('/dtc-cmo-pics/DTC-CMO-HERO.png');background-size:cover;background-position:center;display:flex;align-items:flex-end}
  .fc-cmo .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:999px;border:1px solid var(--line);background:rgba(255,255,255,.4);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-2);font-weight:600}
  .fc-cmo .eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--accent-2);box-shadow:0 0 0 4px rgba(200,85,61,.18)}
  .fc-cmo .hero h1{font-family:'Instrument Serif',serif;font-weight:400;font-size:clamp(48px,7.2vw,108px);line-height:.95;letter-spacing:-.025em;margin:22px 0 0;max-width:14ch;color:#fff}
  .fc-cmo .hero h1 em{font-style:italic;color:var(--accent)}
  .fc-cmo .hero .lede{margin-top:28px;max-width:62ch;font-size:19px;line-height:1.55;color:rgba(255,255,255,.84)}
  .fc-cmo .hero .lede strong{color:var(--ink);font-weight:600}
  .fc-cmo .hero-grid{display:block;padding:160px 0 96px}
  .fc-cmo .micro-list{display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:26px;font-size:13.5px;color:var(--ink-2)}
  .fc-cmo .micro-list span{display:inline-flex;align-items:center;gap:8px}
  .fc-cmo .micro-list span::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--ink);opacity:.55}
  .fc-cmo .cta-row{display:flex;gap:14px;align-items:center;margin-top:34px;flex-wrap:wrap}
  .fc-cmo .btn-primary{display:inline-flex;align-items:center;gap:10px;background:var(--ink);color:#fff;padding:14px 22px;border-radius:999px;font-weight:500;font-size:15px;transition:transform .2s, background .2s}
  .fc-cmo .btn-primary:hover{background:#000;transform:translateY(-1px)}
  .fc-cmo .btn-ghost{display:inline-flex;align-items:center;gap:8px;color:var(--ink);font-weight:500;font-size:15px;padding:14px 6px;border-bottom:1px solid var(--ink)}
  .fc-cmo .btn-ghost:hover{color:var(--accent)}
  .fc-cmo .hero-card{display:none;position:relative;border-radius:18px;overflow:hidden;height:clamp(460px,42vw,600px);background:#000;transition:transform .32s ease,box-shadow .32s ease}
  .fc-cmo .hero-card:hover{transform:translateY(-6px);box-shadow:0 28px 80px -58px rgba(26,23,20,.75)}
  .fc-cmo .hero-card img{width:100%;height:100%;object-fit:cover;transform:scale(1.02);transition:transform .7s cubic-bezier(.22,1,.36,1)}
  .fc-cmo .hero-card:hover img{transform:scale(1.06)}
  .fc-cmo .hero-card .overlay{position:absolute;inset:auto 0 0 0;padding:18px 20px;background:linear-gradient(to top,rgba(0,0,0,.7),transparent);color:#fff;font-size:13px;display:flex;justify-content:space-between;align-items:center;letter-spacing:.02em}
  .fc-cmo .hero-card .pill{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,.18);backdrop-filter:blur(8px);font-size:12px}
  .fc-cmo .hero-card .pill .dot{width:6px;height:6px;border-radius:50%;background:#69d39a;box-shadow:0 0 0 3px rgba(105,211,154,.25)}

  .fc-cmo .retention-layer{padding:92px 0;background:#FBF7F0}
  .fc-cmo .retention-statement{width:100%;max-width:120ch;color:var(--accent)}
  .fc-cmo .retention-statement h1{font-family:'Instrument Serif',serif;font-weight:400;font-size:104px;line-height:.95;letter-spacing:0;margin:0;color:inherit}
  .fc-cmo .retention-statement svg{color:inherit}

  @keyframes fc-cmo-slide{to{transform:translateX(-50%)}}

  .fc-cmo .sec-head{display:grid;grid-template-columns:2fr .4fr;gap:48px;padding:96px 0 40px;border-top:0}
  .fc-cmo .sec-head .num{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:13px;color:var(--muted);letter-spacing:.08em}
  .fc-cmo .sec-head h2{font-family:'Instrument Serif',serif;font-weight:400;font-size:clamp(36px,4.6vw,64px);line-height:1.02;letter-spacing:-.02em;margin:10px 0 0}
  .fc-cmo .sec-head h2 em{font-style:italic;color:var(--accent)}
  .fc-cmo .sec-head .lede{font-size:17.5px;line-height:1.6;color:var(--ink-2);max-width:60ch}

  .fc-cmo .mechanism{padding:0 0 32px}
  .fc-cmo .table{margin:20px auto 0;max-width:1240px;border:1px solid var(--line);border-radius:16px;overflow:hidden;background:var(--paper)}
  .fc-cmo .table .row{display:grid;grid-template-columns:1.05fr 1.15fr 1.45fr 1.15fr .9fr;gap:0;border-bottom:1px solid var(--line-soft)}
  .fc-cmo .table .row:last-child{border-bottom:0}
  .fc-cmo .table .row > div{padding:18px 22px;font-size:14.5px;color:var(--ink-2);display:flex;align-items:center}
  .fc-cmo .table .row:not(.head){transition:background .22s ease,transform .22s ease}
  .fc-cmo .table .row:not(.head):hover{background:rgba(255,255,255,.48);transform:translateX(4px)}
  .fc-cmo .table .row.head > div{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);background:rgba(0,0,0,.025);font-weight:600}
  .fc-cmo .table .row .label{font-weight:600;color:var(--ink);font-size:15px}
  .fc-cmo .table .row .calc{align-items:flex-start;flex-direction:column;line-height:1.45}
  .fc-cmo .table .row .calc .source{display:block;margin-top:5px;color:var(--muted);font-size:11.5px;line-height:1.35;font-style:italic}
  .fc-cmo .table .row.fc-row{background:#181311;color:#fff}
  .fc-cmo .table .row.fc-row:hover{background:#221a16}
  .fc-cmo .table .row.fc-row > div{color:rgba(255,255,255,.85)}
  .fc-cmo .table .row.fc-row .label{color:#fff;display:flex;align-items:center;gap:10px}
  .fc-cmo .table .row.fc-row .label::before{content:"";width:8px;height:8px;background:#9CC9B5;border-radius:50%}
  .fc-cmo .table .row.fc-row .big{font-family:'Instrument Serif',serif;font-size:22px;color:#fff;font-weight:400}
  .fc-cmo .table .row.fc-row .calc .source{color:rgba(255,255,255,.62)}
  .fc-cmo .table .trend-down{color:#C8553D;font-weight:500}
  .fc-cmo .table .trend-up{color:#7BA081;font-weight:500}
  .fc-cmo .mech-footnote{margin-top:18px;font-size:13px;color:var(--muted);max-width:none;white-space:nowrap;text-align:center}

  .fc-cmo .addon{padding:42px 0 32px}
  .fc-cmo .addon-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:24px}
  .fc-cmo .addon-panel{background:var(--accent);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:26px;min-height:260px;display:flex;flex-direction:column;color:#fff;transform-origin:center;transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease,filter .28s ease}
  .fc-cmo .addon-panel:hover{transform:translateY(-10px) scale(1.025);border-color:rgba(255,255,255,.38);box-shadow:0 34px 90px -48px rgba(0,75,64,.9);filter:saturate(1.08) brightness(1.04)}
  .fc-cmo .addon-panel h3{font-family:'Instrument Serif',serif;font-weight:400;font-size:clamp(31px,3vw,42px);line-height:1.04;letter-spacing:-.01em;margin:0;color:#fff}
  .fc-cmo .addon-panel h4{display:flex;align-items:flex-end;gap:10px;font-size:18px;line-height:1.15;letter-spacing:-.01em;margin:22px 0 0;color:#F2C99A;font-weight:800}
  .fc-cmo .addon-panel h4 .metric-number{font-family:'Instrument Serif',serif;font-size:clamp(52px,5vw,76px);line-height:.82;font-weight:400;letter-spacing:-.02em}
  .fc-cmo .addon-panel h4 .metric-label{display:block;padding-bottom:4px}
  .fc-cmo .addon-panel p{font-size:17px;line-height:1.48;color:rgba(255,255,255,.78);margin:12px 0 0}
  .fc-cmo .addon-panel .metrics{margin-top:22px;padding-top:20px;border-top:1px dashed var(--line);display:grid;gap:12px}
  .fc-cmo .addon-panel .metric-card{border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.42);padding:15px 16px;min-height:116px}
  .fc-cmo .addon-panel .metric-card b{display:block;color:var(--ink);font-size:15px;line-height:1.2;font-weight:700}
  .fc-cmo .addon-panel .metric-card span{display:block;margin-top:8px;font-size:12.8px;line-height:1.5;color:var(--ink-2)}
  .fc-cmo .addon-panel.dark{background:var(--accent);color:#fff;border-color:rgba(255,255,255,.18)}
  .fc-cmo .addon-panel.dark h3{color:#fff}
  .fc-cmo .addon-panel.dark p{color:rgba(255,255,255,.72)}
  .fc-cmo .addon-panel.dark .metrics{border-top-color:rgba(255,255,255,.14)}
  .fc-cmo .addon-panel.dark .metric-card{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.13)}
  .fc-cmo .addon-panel.dark .metric-card b{color:#F2C99A}
  .fc-cmo .addon-panel.dark .metric-card span{color:rgba(255,255,255,.72)}

  .fc-cmo .what-can{padding:84px 0 56px}
  .fc-cmo .what-list{display:grid;gap:144px;margin-top:0}
  .fc-cmo .what-item{display:grid;grid-template-columns:minmax(0,1fr) minmax(360px,.84fr);gap:34px;align-items:stretch;border:1px solid var(--line);border-radius:20px;background:var(--paper);overflow:hidden;transition:transform .32s ease,box-shadow .32s ease,border-color .32s ease}
  .fc-cmo .what-item:hover{transform:translateY(-7px);border-color:rgba(26,23,20,.24);box-shadow:0 30px 86px -62px rgba(26,23,20,.7)}
  .fc-cmo .what-copy{padding:34px 34px 32px;display:flex;flex-direction:column;min-height:430px}
  .fc-cmo .what-copy h3{font-family:'Instrument Serif',serif;font-weight:400;font-size:clamp(34px,3.8vw,58px);line-height:1.02;letter-spacing:-.018em;margin:0;color:var(--ink);max-width:24ch}
  .fc-cmo .what-copy p{font-size:16px;line-height:1.65;color:var(--ink-2);margin:18px 0 0;max-width:58ch}
  .fc-cmo .what-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:20px;padding-top:0}
  .fc-cmo .what-stats.one-up{grid-template-columns:minmax(0,1fr)}
  .fc-cmo .what-stats.two-up{grid-template-columns:repeat(2,minmax(0,1fr))}
  .fc-cmo .what-stat{border-right:1px solid var(--line);padding-right:18px;min-width:0}
  .fc-cmo .what-stat:last-child{border-right:0;padding-right:0}
  .fc-cmo .what-stat strong{display:block;font-family:'Instrument Serif',serif;font-weight:400;font-size:clamp(44px,4.8vw,76px);line-height:.9;letter-spacing:-.02em;color:var(--accent)}
  .fc-cmo .what-stat b{display:block;margin-top:14px;font-size:clamp(19px,1.55vw,26px);line-height:1.08;letter-spacing:-.015em;color:var(--accent);font-weight:800}
  .fc-cmo .what-stat span{display:block;margin-top:10px;font-size:13.5px;line-height:1.45;color:var(--ink);font-weight:500}
  .fc-cmo .what-stats.metric-stats .what-stat b{margin-top:0}
  .fc-cmo .what-stats.metric-stats .what-stat.numeric-stat b{margin-top:14px}
  .fc-cmo .what-media{position:relative;min-height:430px;background:var(--bg-2);overflow:hidden}
  .fc-cmo .what-media img{width:100%;height:100%;object-fit:cover;transition:transform .75s cubic-bezier(.22,1,.36,1)}
  .fc-cmo .what-item:hover .what-media img{transform:scale(1.045)}
  .fc-cmo .what-item.balanced{width:100%;max-width:none;margin-inline:0;grid-template-columns:var(--what-media-width,42%) minmax(0,1fr);gap:0;align-items:stretch}
  .fc-cmo .what-item.balanced:not(.flip){grid-template-columns:minmax(0,1fr) var(--what-media-width,42%)}
  .fc-cmo .what-item.balanced .what-copy{min-height:0}
  .fc-cmo .what-item.balanced .what-media{position:relative;min-height:0;padding:0;height:auto;align-self:stretch;overflow:hidden}
  .fc-cmo .what-item.balanced .what-media img{position:absolute;inset:0;width:100%;height:100%;max-width:none;max-height:none;object-fit:contain;object-position:center}
  .fc-cmo .what-item.presence-card .what-media img{object-fit:cover;object-position:center;transform:scale(1.08)}
  .fc-cmo .what-item.presence-card:hover .what-media img{transform:scale(1.12)}
  .fc-cmo .what-list .custom-design-fusion-card{position:relative;display:grid;grid-template-columns:minmax(0,.56fr) minmax(0,.44fr);min-height:560px;overflow:hidden;isolation:isolate;background:var(--bg);margin-right:0}
  .fc-cmo .what-list .custom-design-fusion-card::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,var(--bg) 0%,rgba(241,232,219,.97) 36%,rgba(241,232,219,.7) 57%,rgba(241,232,219,0) 78%);pointer-events:none}
  .fc-cmo .what-list .custom-design-fusion-card .what-copy{position:relative;z-index:2;order:1;grid-column:1/2;min-height:560px;justify-content:center;padding:64px 0;max-width:760px}
  .fc-cmo .what-list .custom-design-fusion-card .what-copy h3{font-size:clamp(52px,6vw,92px);line-height:.98;max-width:24ch}
  .fc-cmo .what-list .custom-design-fusion-card .what-copy p{font-size:18px;line-height:1.7;max-width:48ch;margin-top:26px;color:#211a16}
  .fc-cmo .what-list .custom-design-fusion-card .what-media{position:relative;order:2;height:100%!important;aspect-ratio:auto!important;background:transparent!important;align-self:stretch;border-radius:0;overflow:hidden}
  .fc-cmo .what-list .custom-design-fusion-card .what-media img{object-fit:contain!important;object-position:center right}
  .fc-cmo .what-item.dashboard-card{grid-template-columns:minmax(0,1fr) minmax(420px,44%)}
  .fc-cmo .what-item.dashboard-card.flip{grid-template-columns:minmax(420px,44%) minmax(0,1fr)}
  .fc-cmo .what-item.dashboard-card .what-media{min-height:320px}
  .fc-cmo .what-item.dashboard-card .what-copy{min-height:320px;justify-content:center}
  .fc-cmo .what-item.compact .what-copy{min-height:0}
  .fc-cmo .what-item.compact .what-media{min-height:0;height:auto}
  .fc-cmo .what-item.compact.dashboard-card .what-copy{min-height:320px}
  .fc-cmo .what-item.compact.dashboard-card .what-media{min-height:320px}
  .fc-cmo .what-list .what-media{border:0!important;outline:0!important;box-shadow:none!important}
  .fc-cmo .what-list .what-media img{display:block;border:0!important;outline:0!important;box-shadow:none!important;transform:none}
  .fc-cmo .what-list .what-item:hover .what-media img{transform:none}
  .fc-cmo .what-list .what-item{border-color:transparent}
  .fc-cmo .what-list .what-item:hover{border-color:transparent}
  .fc-cmo .what-item.custom-design-card .what-media img,.fc-cmo .what-item.custom-design-card:hover .what-media img{transform:none}
  .fc-cmo .what-item:nth-child(even){background:#181311;color:#fff;border-color:transparent}
  .fc-cmo .what-item:nth-child(even):hover{border-color:transparent}
  .fc-cmo .what-item:nth-child(even) .what-copy h3{color:#fff}
  .fc-cmo .what-item:nth-child(even) .what-copy p{color:rgba(255,255,255,.72)}
  .fc-cmo .what-item:nth-child(even) .what-stat{border-right-color:rgba(255,255,255,.18)}
  .fc-cmo .what-item:nth-child(even) .what-stat b{color:#F2C99A}
  .fc-cmo .what-item:nth-child(even) .what-stat strong{color:#F2C99A}
  .fc-cmo .what-item:nth-child(even) .what-stat span{color:rgba(255,255,255,.88)}
  .fc-cmo .what-item:nth-child(even) .what-media{background:#2c2521}
  .fc-cmo .what-list .what-item{background:var(--bg);border:0;border-radius:0;box-shadow:none;color:var(--ink)}
  .fc-cmo .what-list .what-item + .what-item{border-top:0}
  .fc-cmo .what-list .what-item:hover{transform:none;border-color:transparent;box-shadow:none}
  .fc-cmo .what-list .what-item:nth-child(even){background:var(--bg);color:var(--ink)}
  .fc-cmo .what-list .what-item:nth-child(even) .what-copy h3{color:var(--ink)}
  .fc-cmo .what-list .what-item:nth-child(even) .what-copy p{color:var(--ink-2)}
  .fc-cmo .what-list .what-item:nth-child(even) .what-stat b,.fc-cmo .what-list .what-item:nth-child(even) .what-stat strong{color:var(--accent)}
  .fc-cmo .what-list .what-item:nth-child(even) .what-stat span{color:var(--ink)}
  .fc-cmo .what-list .what-copy h3{color:var(--ink)}
  .fc-cmo .what-list .what-copy p{color:var(--ink-2)}
  .fc-cmo .what-list .what-stat{border-right-color:var(--line)}
  .fc-cmo .what-list .what-stat b,.fc-cmo .what-list .what-stat strong{color:var(--accent)}
  .fc-cmo .what-list .what-stat span{color:var(--ink)}
  .fc-cmo .what-list .what-media{background:var(--bg)!important}
  .fc-cmo .what-list .half-split-card{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  .fc-cmo .what-list .what-item.balanced.half-split-card{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  .fc-cmo .what-list .half-split-card .what-copy{padding:34px 56px 34px 0}
  .fc-cmo .what-list .half-split-card.flip .what-copy{padding:34px 0 34px 56px}
  .fc-cmo .what-list .what-media{aspect-ratio:4/3;min-height:0!important;height:auto!important;align-self:center}
  .fc-cmo .what-list .what-media img{position:absolute!important;inset:0;width:100%;height:100%;object-fit:contain!important;object-position:center}
  .fc-cmo .what-item.custom-design-card .what-media{aspect-ratio:4/3}
  .fc-cmo .what-item.custom-design-card .what-media img{position:absolute!important;inset:0;width:100%;height:100%;object-fit:contain!important}
  .fc-cmo .what-list .tap-fusion-card{position:relative;display:grid;grid-template-columns:minmax(0,.68fr) minmax(0,.32fr);min-height:620px;overflow:hidden;isolation:isolate;background:var(--bg);margin-right:-68px}
  .fc-cmo .what-list .tap-fusion-card::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,var(--bg) 0%,rgba(241,232,219,.97) 36%,rgba(241,232,219,.7) 57%,rgba(241,232,219,0) 78%);pointer-events:none}
  .fc-cmo .what-list .content-fusion-card{position:relative;display:grid;grid-template-columns:minmax(0,.44fr) minmax(0,.56fr);min-height:560px;overflow:hidden;isolation:isolate;background:var(--bg);margin-left:0}
  .fc-cmo .what-list .content-fusion-card::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(270deg,var(--bg) 0%,rgba(241,232,219,.97) 36%,rgba(241,232,219,.7) 57%,rgba(241,232,219,0) 78%);pointer-events:none}
  .fc-cmo .what-list .content-fusion-card .what-copy{position:relative;z-index:2;order:2;grid-column:2/3;min-height:560px;justify-content:center;padding:64px 0;max-width:760px}
  .fc-cmo .what-list .content-fusion-card .what-copy h3{font-size:clamp(40px,4.8vw,72px);line-height:.98;max-width:18ch}
  .fc-cmo .what-list .content-fusion-card .what-copy p{font-size:18px;line-height:1.7;max-width:45ch;margin-top:26px;color:#211a16}
  .fc-cmo .what-list .content-fusion-card .what-stats.one-up{grid-template-columns:1fr;width:max-content;gap:12px;margin-top:34px;max-width:480px}
  .fc-cmo .what-list .content-fusion-card .what-stat{border:1px solid rgba(74,40,24,.16);border-radius:8px;background:rgba(255,255,255,.42);padding:24px 22px 26px;backdrop-filter:blur(4px);box-shadow:0 18px 52px -46px rgba(74,40,24,.72)}
  .fc-cmo .what-list .content-fusion-card .what-stat strong{font-size:clamp(44px,4.5vw,72px)}
  .fc-cmo .what-list .content-fusion-card .what-stat b{font-size:clamp(17px,1.4vw,22px);line-height:1.08}
  .fc-cmo .what-list .content-fusion-card .what-media{position:relative;order:1;height:100%!important;aspect-ratio:auto!important;background:transparent!important;align-self:stretch;border-radius:0;overflow:hidden}
  .fc-cmo .what-list .content-fusion-card .what-media img{object-fit:cover!important;object-position:center left}
  .fc-cmo .what-list .tap-fusion-card .what-copy{position:relative;z-index:2;order:1;grid-column:1/2;min-height:620px;justify-content:center;padding:64px 0;max-width:760px}
  .fc-cmo .what-list .tap-fusion-card .tap-eyebrow{display:block;width:max-content;margin:0 0 26px;font-size:14px;line-height:1;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#4a2818}
  .fc-cmo .what-list .tap-fusion-card .tap-eyebrow::after{content:"";display:block;width:34px;height:1px;background:#4a2818;margin-top:18px}
  .fc-cmo .what-list .tap-fusion-card .what-copy h3{font-size:clamp(52px,6vw,92px);line-height:.98;max-width:11ch}
  .fc-cmo .what-list .tap-fusion-card .what-copy p{font-size:18px;line-height:1.7;max-width:45ch;margin-top:26px;color:#211a16}
  .fc-cmo .what-list .tap-fusion-card .what-stats.metric-stats{grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:34px;max-width:760px}
  .fc-cmo .what-list .tap-fusion-card .what-stat{border:1px solid rgba(74,40,24,.16);border-radius:8px;background:rgba(255,255,255,.42);padding:24px 22px 26px;backdrop-filter:blur(4px);box-shadow:0 18px 52px -46px rgba(74,40,24,.72)}
  .fc-cmo .what-list .tap-fusion-card .what-stat strong{font-size:clamp(54px,5.2vw,84px)}
  .fc-cmo .what-list .tap-fusion-card .what-stat b{font-size:clamp(18px,1.45vw,24px);line-height:1.08}
  .fc-cmo .what-list .tap-fusion-card .what-media{position:absolute!important;inset:0 0 0 auto;z-index:0;order:2;width:62%;height:100%!important;aspect-ratio:auto!important;background:transparent!important;align-self:stretch}
  .fc-cmo .what-list .tap-fusion-card .what-media img{object-fit:cover!important;object-position:center right}
  .fc-cmo .what-item.custom-design-card .what-copy h3{font-size:clamp(52px,6vw,92px);line-height:.98}
  .fc-cmo .what-item.custom-design-card .what-copy p{font-size:18px;line-height:1.7;margin-top:26px;color:#211a16}
  .fc-cmo .what-list .dashboard-fusion-card{position:relative;display:grid;grid-template-columns:minmax(0,.42fr) minmax(0,.58fr);min-height:560px;overflow:hidden;isolation:isolate;background:var(--bg);margin-left:-68px}
  .fc-cmo .what-list .dashboard-fusion-card::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(270deg,var(--bg) 0%,rgba(241,232,219,.97) 36%,rgba(241,232,219,.7) 57%,rgba(241,232,219,0) 78%);pointer-events:none}
  .fc-cmo .what-list .dashboard-fusion-card .what-copy{position:relative;z-index:2;order:2;grid-column:2/3;min-height:560px;justify-content:center;padding:64px 0 64px 60px;max-width:760px}
  .fc-cmo .what-list .dashboard-fusion-card .what-copy h3{font-size:clamp(52px,6vw,92px);line-height:.98;max-width:18ch}
  .fc-cmo .what-list .dashboard-fusion-card .what-copy p{font-size:18px;line-height:1.7;max-width:45ch;margin-top:26px;color:#211a16}
  .fc-cmo .what-list .dashboard-fusion-card .what-media{position:absolute!important;inset:0 auto 0 0;z-index:0;order:1;width:62%;height:100%!important;aspect-ratio:auto!important;background:transparent!important;align-self:stretch}
  .fc-cmo .what-list .dashboard-fusion-card .what-media img{object-fit:cover!important;object-position:center left}
  .fc-cmo .what-item.flip .what-media{order:1}
  .fc-cmo .what-item.flip .what-copy{order:2}
  .fc-cmo .cmo{padding:24px 0 32px;position:relative}
  .fc-cmo .cmo-intro{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;padding:24px 0 40px}
  .fc-cmo .cmo-intro .quote{font-family:'Instrument Serif',serif;font-size:clamp(28px,3vw,42px);line-height:1.15;letter-spacing:-.015em;color:var(--ink)}
  .fc-cmo .cmo-intro .quote em{font-style:italic;color:var(--accent)}
  .fc-cmo .cmo-intro .quote-attr{margin-top:14px;font-size:13px;color:var(--muted);font-family:'JetBrains Mono',ui-monospace,monospace}
  .fc-cmo .cmo-intro .panel{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:28px}
  .fc-cmo .cmo-intro .panel h4{margin:0;font-size:14px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600}
  .fc-cmo .cmo-intro .panel ul{list-style:none;padding:0;margin:18px 0 0}
  .fc-cmo .cmo-intro .panel li{display:flex;justify-content:space-between;align-items:baseline;padding:14px 0;border-bottom:1px dashed var(--line-soft);font-size:14.5px;color:var(--ink-2)}
  .fc-cmo .cmo-intro .panel li:last-child{border-bottom:0}
  .fc-cmo .cmo-intro .panel li b{font-family:'Instrument Serif',serif;font-weight:400;font-size:22px;color:var(--ink)}

  .fc-cmo .cmo-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:18px;margin-top:8px}
  .fc-cmo .card{background:var(--paper);border:1px solid var(--line);border-radius:18px;padding:26px;display:flex;flex-direction:column;justify-content:space-between;min-height:280px;transition:transform .25s ease, box-shadow .25s ease;position:relative;overflow:hidden}
  .fc-cmo .card:hover{transform:translateY(-3px);box-shadow:0 16px 40px -28px rgba(0,0,0,.25)}
  .fc-cmo .card .tag{display:inline-flex;align-items:center;gap:8px;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
  .fc-cmo .card .tag .dotg{width:6px;height:6px;border-radius:50%;background:var(--accent)}
  .fc-cmo .card h3{font-family:'Instrument Serif',serif;font-weight:400;font-size:30px;line-height:1.1;letter-spacing:-.01em;margin:12px 0 0}
  .fc-cmo .card p{font-size:14px;line-height:1.55;color:var(--ink-2);margin:12px 0 0}
  .fc-cmo .card .stat{font-family:'Instrument Serif',serif;font-weight:400;font-size:48px;line-height:1;letter-spacing:-.02em;color:var(--ink)}
  .fc-cmo .card .stat sup{font-size:18px;vertical-align:super;color:var(--muted)}
  .fc-cmo .card .foot{margin-top:16px;font-size:12.5px;color:var(--muted);font-family:'JetBrains Mono',ui-monospace,monospace;letter-spacing:.02em}
  .fc-cmo .card.span-3{grid-column:span 3}
  .fc-cmo .card.span-2{grid-column:span 2}
  .fc-cmo .card.span-6{grid-column:span 6}
  .fc-cmo .card.dark{background:#181311;color:#fff;border-color:#2c2521}
  .fc-cmo .card.dark h3,.fc-cmo .card.dark .stat{color:#fff}
  .fc-cmo .card.dark p,.fc-cmo .card.dark .foot{color:rgba(255,255,255,.7)}
  .fc-cmo .card.dark .tag{color:rgba(255,255,255,.6)}
  .fc-cmo .card.dark .tag .dotg{background:#9CC9B5}
  .fc-cmo .card.image{padding:0;border:none;overflow:hidden;background:#000;min-height:280px}
  .fc-cmo .card.image > img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}
  .fc-cmo .card.image .ovl{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,.15),rgba(0,0,0,.6));padding:26px;display:flex;flex-direction:column;justify-content:space-between;color:#fff}
  .fc-cmo .card.image h3{color:#fff}
  .fc-cmo .card.image .tag{color:rgba(255,255,255,.85)}
  .fc-cmo .card.image .tag .dotg{background:#9CC9B5}

  .fc-cmo .bars{display:flex;align-items:flex-end;gap:10px;height:120px;margin-top:18px}
  .fc-cmo .bar{flex:1;background:#E2D7C5;border-radius:6px 6px 2px 2px;position:relative}
  .fc-cmo .bar.fc-bar{background:var(--accent)}
  .fc-cmo .bar .lbl{position:absolute;bottom:-22px;left:0;right:0;text-align:center;font-size:11px;color:var(--muted);font-family:'JetBrains Mono',ui-monospace,monospace}
  .fc-cmo .bar .val{position:absolute;top:-22px;left:0;right:0;text-align:center;font-size:12px;color:var(--ink);font-weight:600}

  .fc-cmo .crm{padding:0 0 80px}
  .fc-cmo .crm-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:28px}
  .fc-cmo .crm-summary{background:var(--paper);border:1px solid var(--line);border-radius:16px;padding:26px 28px;align-self:start}
  .fc-cmo .crm-summary h4{margin:0;font-size:14px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600}
  .fc-cmo .crm-summary ul{list-style:none;padding:0;margin:16px 0 0}
  .fc-cmo .crm-summary li{display:flex;justify-content:space-between;gap:18px;align-items:baseline;padding:12px 0;border-bottom:1px dashed var(--line-soft);font-size:14px;color:var(--ink-2)}
  .fc-cmo .crm-summary li:last-child{border-bottom:0}
  .fc-cmo .crm-summary b{font-family:'Instrument Serif',serif;font-weight:400;font-size:21px;color:var(--ink);white-space:nowrap}
  .fc-cmo .mini{border:1px solid var(--line);border-radius:14px;padding:20px;background:rgba(255,255,255,.35)}
  .fc-cmo .mini .k{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)}
  .fc-cmo .mini .v{font-family:'Instrument Serif',serif;font-size:34px;line-height:1.05;margin-top:6px}
  .fc-cmo .mini .d{font-size:12.5px;color:var(--ink-2);margin-top:8px;line-height:1.5}
  .fc-cmo .mini .v small{font-size:14px;color:var(--muted);font-family:'Plus Jakarta Sans',sans-serif;display:inline-block;margin-left:4px;font-weight:400}
  .fc-cmo .integration-strip{margin-top:18px;padding:14px 16px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.42);display:flex;align-items:center;justify-content:space-between;gap:18px}
  .fc-cmo .integration-strip img{width:132px;height:auto;flex:0 0 auto}
  .fc-cmo .integration-strip span{font-size:12px;line-height:1.4;color:var(--muted);max-width:28ch}

  .fc-cmo .how{padding:0 0 96px}
  .fc-cmo .steps{display:grid;grid-template-columns:minmax(0,.86fr) minmax(420px,1fr);gap:56px;align-items:start;margin-top:24px}
  .fc-cmo .steps-copy{display:grid;gap:0}
  .fc-cmo .step{position:relative;border-top:1px solid rgba(26,23,20,.22);padding:34px 0 42px;min-height:42vh;display:flex;flex-direction:column;justify-content:center;transition:opacity .32s ease,border-color .32s ease,transform .32s ease}
  .fc-cmo .step:not(.is-active){opacity:.46}
  .fc-cmo .step.is-active{border-top-color:var(--accent);opacity:1;transform:translateX(8px)}
  .fc-cmo .step-copy{min-height:0;max-width:620px}
  .fc-cmo .step .n{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;color:var(--muted);letter-spacing:.06em}
  .fc-cmo .step h4{font-family:'Instrument Serif',serif;font-weight:400;font-size:clamp(34px,3.4vw,56px);letter-spacing:-.018em;line-height:1.02;margin:0}
  .fc-cmo .step p{font-size:17px;color:var(--ink-2);margin:18px 0 0;line-height:1.65;max-width:48ch}
  .fc-cmo .step .ico{display:none;margin-top:16px;width:100%;aspect-ratio:4/3;border-radius:10px;background:var(--paper);border:1px solid var(--line);place-items:center;color:var(--muted);font-size:12px;overflow:hidden}
  .fc-cmo .step .ico img{width:100%;height:100%;object-fit:cover;transition:transform .55s ease}
  .fc-cmo .step:hover .ico img{transform:scale(1.05)}
  .fc-cmo .steps-media{position:sticky;top:112px;height:min(64vh,640px);min-height:460px;border-radius:18px;background:var(--paper);border:1px solid var(--line);overflow:hidden;box-shadow:0 30px 92px -72px rgba(26,23,20,.78)}
  .fc-cmo .step-media-panel{position:absolute;inset:0;opacity:0;transform:scale(1.03);transition:opacity .42s ease,transform .64s cubic-bezier(.22,1,.36,1);pointer-events:none}
  .fc-cmo .step-media-panel.is-active{opacity:1;transform:scale(1)}
  .fc-cmo .step-media-panel img{width:100%;height:100%;object-fit:cover}

  .fc-cmo #pilot{width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}
  .fc-cmo #pilot .wrap{padding:0;max-width:none}
  .fc-cmo .final{position:relative;border-radius:0;overflow:hidden;margin:0;background:#fff;border:0;width:100%}
  .fc-cmo .final .bg{display:none}
  .fc-cmo .final .body{position:relative;padding:88px 56px;color:var(--ink);max-width:1080px;margin:0 auto;text-align:center}
  .fc-cmo .final .eyebrow{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.15);color:rgba(255,255,255,.85)}
  .fc-cmo .final h2{font-family:'Instrument Serif',serif;font-weight:400;font-size:clamp(40px,5.2vw,76px);line-height:1.02;letter-spacing:-.02em;margin:20px auto 0}
  .fc-cmo .final h2 em{font-style:italic;color:var(--accent)}
  .fc-cmo .final .lede{font-size:18px;color:rgba(255,255,255,.82);margin-top:22px;max-width:54ch}
  .fc-cmo .final .cta-row{margin-top:34px;justify-content:center}
  .fc-cmo .final .btn-primary{background:var(--accent);color:#fff;border-color:var(--accent);box-shadow:0 18px 48px -26px rgba(0,75,64,.8)}
  .fc-cmo .final .btn-primary:hover{background:var(--ink);border-color:var(--ink);color:#fff;transform:translateY(-2px)}
  .fc-cmo .final .btn-ghost{color:#fff;border-color:rgba(255,255,255,.5)}

  .fc-cmo footer.foot{padding:48px 0 64px;border-top:1px solid var(--line)}
  .fc-cmo footer.foot .row{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:18px;font-size:13px;color:var(--muted)}

  @media (prefers-reduced-motion:reduce){
    .fc-cmo .hero-grid,.fc-cmo .retention-statement,.fc-cmo .sec-head,.fc-cmo .table,.fc-cmo .addon-grid,.fc-cmo .what-item,.fc-cmo .steps,.fc-cmo .final{animation:none}
    .fc-cmo .reveal-section .hero-grid,.fc-cmo .reveal-section .retention-statement,.fc-cmo .reveal-section .sec-head,.fc-cmo .reveal-section .table,.fc-cmo .reveal-section .addon-panel,.fc-cmo .reveal-section .what-item,.fc-cmo .reveal-section .step{opacity:1;transform:none;filter:none}
    .fc-cmo *{transition:none!important}
  }

  @media (min-width:1440px){
    .fc-cmo .wrap{padding:0 128px}
    .fc-cmo .what-item{grid-template-columns:minmax(0,1.08fr) minmax(460px,.92fr);gap:42px}
    .fc-cmo .what-list .tap-fusion-card{margin-right:-128px}
    .fc-cmo .what-list .dashboard-fusion-card{margin-left:-128px}
  }

  @media (max-width:960px){
    .fc-cmo .hero-grid{grid-template-columns:1fr}
    .fc-cmo .hero-card{height:auto;aspect-ratio:4/5}
    .fc-cmo .sec-head{grid-template-columns:1fr;padding-top:64px}
    .fc-cmo .cmo-intro{grid-template-columns:1fr;gap:36px}
    .fc-cmo .cmo-grid{grid-template-columns:repeat(2,1fr)}
    .fc-cmo .card.span-3,.fc-cmo .card.span-2,.fc-cmo .card.span-6{grid-column:span 2}
    .fc-cmo .table .row{grid-template-columns:1fr 1fr;gap:0}
    .fc-cmo .table .row.head{display:none}
    .fc-cmo .table .row > div{padding:14px 18px;font-size:13.5px}
    .fc-cmo .addon-grid{grid-template-columns:1fr}
    .fc-cmo .retention-layer{padding:72px 0}
    .fc-cmo .retention-statement{font-size:72px;max-width:12ch}
    .fc-cmo .what-item{grid-template-columns:1fr}
    .fc-cmo .what-item.custom-design-card{grid-template-columns:1fr}
    .fc-cmo .what-item.custom-design-card .what-copy{padding:28px 0 0}
    .fc-cmo .what-list .half-split-card{grid-template-columns:1fr}
    .fc-cmo .what-list .half-split-card .what-copy{padding:28px 0}
    .fc-cmo .what-item.balanced{grid-template-columns:1fr;max-width:none}
    .fc-cmo .what-item.balanced .what-media{min-height:260px}
    .fc-cmo .what-item.balanced .what-media img{width:100%;height:100%;max-width:none;object-fit:cover}
    .fc-cmo .what-item.flip .what-media,.fc-cmo .what-item.flip .what-copy{order:initial}
    .fc-cmo .what-list .tap-fusion-card, .fc-cmo .what-list .custom-design-fusion-card, .fc-cmo .what-list .dashboard-fusion-card{grid-template-columns:1fr;min-height:0;margin:0 -68px}
    .fc-cmo .what-list .tap-fusion-card::before, .fc-cmo .what-list .custom-design-fusion-card::before, .fc-cmo .what-list .dashboard-fusion-card::before{background:linear-gradient(180deg,rgba(241,232,219,0) 0%,var(--bg) 62%)}
    .fc-cmo .what-list .tap-fusion-card .what-media, .fc-cmo .what-list .custom-design-fusion-card .what-media, .fc-cmo .what-list .dashboard-fusion-card .what-media{position:relative!important;inset:auto;width:100%;height:auto!important;aspect-ratio:4/3!important;grid-row:1}
    .fc-cmo .what-list .tap-fusion-card .what-copy, .fc-cmo .what-list .custom-design-fusion-card .what-copy, .fc-cmo .what-list .dashboard-fusion-card .what-copy{grid-row:2;grid-column:auto;min-height:0;padding:32px 68px}
    .fc-cmo .what-list .tap-fusion-card .what-copy h3, .fc-cmo .what-list .custom-design-fusion-card .what-copy h3, .fc-cmo .what-list .dashboard-fusion-card .what-copy h3{font-size:clamp(42px,9vw,64px)}
    .fc-cmo .what-list .content-fusion-card{grid-template-columns:1fr;min-height:0;margin:0}
    .fc-cmo .what-list .content-fusion-card::before{background:linear-gradient(180deg,rgba(241,232,219,0) 0%,var(--bg) 62%)}
    .fc-cmo .what-list .content-fusion-card .what-media{position:relative!important;inset:auto;width:100%;height:auto!important;aspect-ratio:4/3!important;grid-row:1;grid-column:1/2;border-radius:0}
    .fc-cmo .what-list .content-fusion-card .what-copy{grid-row:2;grid-column:1/2;min-height:0;padding:32px 68px}
    .fc-cmo .what-copy{min-height:0}
    .fc-cmo .what-media{min-height:320px}
    .fc-cmo .crm-row{grid-template-columns:repeat(2,1fr)}
    .fc-cmo .steps{grid-template-columns:1fr;gap:28px}
    .fc-cmo .steps-copy{gap:28px}
    .fc-cmo .steps-media{display:none}
    .fc-cmo .step{min-height:0;opacity:1!important;transform:none!important;padding:22px 0 0}
    .fc-cmo .step-copy{min-height:0}
    .fc-cmo .step .ico{display:grid}
    .fc-cmo .final .body{padding:56px 28px}
  }
  @media (max-width:560px){
    .fc-cmo .nav-links{display:none}
    .fc-cmo .wrap{padding:0 24px}
    .fc-cmo .cmo-grid{grid-template-columns:1fr}
    .fc-cmo .card.span-3,.fc-cmo .card.span-2,.fc-cmo .card.span-6{grid-column:span 1}
    .fc-cmo .crm-row{grid-template-columns:1fr}
    .fc-cmo .steps{grid-template-columns:1fr}
    .fc-cmo .step-copy{min-height:0}
    .fc-cmo .what-copy{padding:28px 24px}
    .fc-cmo .what-stats{grid-template-columns:1fr;gap:16px;padding-top:28px}
    .fc-cmo .what-media{min-height:260px}
    .fc-cmo .what-list .tap-fusion-card, .fc-cmo .what-list .custom-design-fusion-card, .fc-cmo .what-list .dashboard-fusion-card{margin:0 -24px}
    .fc-cmo .what-list .tap-fusion-card .what-copy, .fc-cmo .what-list .custom-design-fusion-card .what-copy, .fc-cmo .what-list .dashboard-fusion-card .what-copy{padding:32px 24px}
    .fc-cmo .what-list .content-fusion-card .what-copy{padding:32px 24px}
    .fc-cmo .sec-head h2{font-size:clamp(32px, 8vw, 42px)}
    .fc-cmo .retention-layer{padding:56px 0}
    .fc-cmo .retention-statement{font-size:48px;line-height:1;max-width:11ch}
    .fc-cmo .final .body{padding:48px 24px}
  }
`;

export default function DtcBrandsCmoPage() {
  useEffect(() => {
    // Inject Google Fonts on mount (avoids touching layout.tsx)
    const id = "fc-cmo-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".fc-cmo .what-item.balanced"));

    const updateCard = (card: HTMLElement) => {
      const copy = card.querySelector<HTMLElement>(".what-copy");
      const media = card.querySelector<HTMLElement>(".what-media");
      const img = media?.querySelector<HTMLImageElement>("img");
      if (!copy || !media || !img || !img.naturalHeight) return;

      const copyHeight = copy.getBoundingClientRect().height;
      const ratio = 4 / 3;
      const mediaWidth = Math.round(copyHeight * ratio);
      const nextWidth = `${mediaWidth}px`;

      if (card.style.getPropertyValue("--what-media-width") !== nextWidth) {
        card.style.setProperty("--what-media-width", nextWidth);
      }
    };

    const updateAllCards = () => {
      window.requestAnimationFrame(() => cards.forEach(updateCard));
    };

    const cleanupImageListeners = cards.map((card) => {
      const media = card.querySelector<HTMLElement>(".what-media");
      const img = media?.querySelector<HTMLImageElement>("img");

      if (!img) return () => { };

      const onLoad = () => updateCard(card);
      if (img.complete) {
        onLoad();
      }
      img.addEventListener("load", onLoad);

      return () => img.removeEventListener("load", onLoad);
    });

    document.fonts?.ready.then(updateAllCards).catch(() => { });

    const onResize = () => updateAllCards();
    window.addEventListener("resize", onResize);
    updateAllCards();

    return () => {
      cleanupImageListeners.forEach((cleanup) => cleanup());
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const containers = Array.from(document.querySelectorAll<HTMLElement>(".fc-cmo .steps"));
    if (!containers.length) return;

    let frame = 0;
    const cleanups: Array<() => void> = [];

    const updateAllActiveSteps = () => {
      containers.forEach((container) => {
        const steps = Array.from(container.querySelectorAll<HTMLElement>(".step[data-step]"));
        const panels = Array.from(container.querySelectorAll<HTMLElement>(".step-media-panel[data-step]"));
        const media = container.querySelector<HTMLElement>(".steps-media");
        if (!steps.length || !panels.length || !media || getComputedStyle(media).display === "none") return;

        const mediaRect = media.getBoundingClientRect();
        const switchLine = mediaRect.top + mediaRect.height * 0.5;
        const activeStep =
          steps.reduce((closest, step) => {
            const closestRect = closest.getBoundingClientRect();
            const stepRect = step.getBoundingClientRect();
            const closestDistance = Math.abs(closestRect.top + closestRect.height * 0.5 - switchLine);
            const stepDistance = Math.abs(stepRect.top + stepRect.height * 0.5 - switchLine);
            return stepDistance < closestDistance ? step : closest;
          }, steps[0])?.dataset.step || "1";

        steps.forEach((step) => step.classList.toggle("is-active", step.dataset.step === activeStep));
        panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.step === activeStep));
      });
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateAllActiveSteps();
      });
    };

    const observer = new IntersectionObserver(scheduleUpdate, {
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      rootMargin: "-20% 0px -20% 0px",
    });

    containers.forEach((container) => {
      const steps = Array.from(container.querySelectorAll<HTMLElement>(".step[data-step]"));
      steps.forEach((step) => observer.observe(step));
    });

    const resizeObserver =
      "ResizeObserver" in window
        ? new ResizeObserver(scheduleUpdate)
        : null;
    if (resizeObserver) {
      containers.forEach((container) => {
        resizeObserver.observe(container);
        const media = container.querySelector<HTMLElement>(".steps-media");
        if (media) resizeObserver.observe(media);
      });
      cleanups.push(() => resizeObserver.disconnect());
    }

    document.fonts?.ready.then(scheduleUpdate).catch(() => { });
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);
    cleanups.push(() => observer.disconnect());

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".fc-cmo .reveal-section"));
    if (!sections.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Navigation />

      <main className="fc-cmo flex-1">

        {/* HERO */}
        <section className="hero reveal-section">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <h1>Turn Every Delivered Order Into a Post-Purchase Growth Surface</h1>
                <p className="lede">Places your brand on the customer’s life after purchase — turning reorder, subscription, loyalty, referral, and education moments into one-tap actions.</p>

                <div className="cta-row">
                  <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Request a pilot <span>→</span></a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* RETENTION LAYER */}
        <section className="retention-layer reveal-section">
          <div className="wrap">
            <AnimatedText
              text="FC powers the Physical Layer of Retention Infrastructure"
              className="retention-statement items-start"
              textClassName="text-left !font-normal"
              underlineClassName="w-full"
            />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="addon reveal-section">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2>Built on a moat digital channels can&apos;t copy.</h2>
              </div>
            </div>

            <div className="addon-grid">
              <div className="addon-panel">
                <h3>Ambient Presence &gt; Campaigns</h3>
                <h4><span className="metric-number">10+</span><span className="metric-label">Daily Family Impressions</span></h4>
                <p>
                  FridgeChannel turns repeated home routines into an always-on brand surface, keeping visibility alive long after the purchase, campaign, or email send is over.
                </p>
              </div>
              <div className="addon-panel">
                <h3>Direct Connection &gt; Algorithmic Distribution</h3>
                <h4><span className="metric-number">0</span><span className="metric-label">Algorithm &amp; Ad-Blockers</span></h4>
                <p>
                  FridgeChannel gives brands a hardware-based retention surface they fully control inside the customer&apos;s home.
                </p>
              </div>
              <div className="addon-panel">
                <h3>Habit Activation &gt; Passive Exposure</h3>
                <h4><span className="metric-number">8+</span><span className="metric-label">Post-Purchase Actions From One Tap</span></h4>
                <p>
                  Because each tap happens inside a daily household routine, the signal is closer to real purchase intent than a standard digital click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MECHANISM */}
        <section className="mechanism reveal-section" id="mechanism">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2>Retention is moving from digital messaging to <em>ambient physical presence</em>.</h2>
              </div>
            </div>

            <div className="table">
              <div className="row head">
                <div>Channel</div><div>Exposure / customer / year</div><div>How it&apos;s calculated</div><div>Engagement</div><div>Trend</div>
              </div>
              <div className="row">
                <div className="label">Email</div>
                <div>~150 sends</div>
                <div className="calc">
                  <span>3 sends/wk × 52 wks</span>
                  <span className="source">Klaviyo / Omnisend DTC lifecycle benchmarks</span>
                </div>
                <div>~20% open · ~2% CTR</div>
                <div className="trend-down">↓ ~30% open in 5 yrs</div>
              </div>
              <div className="row">
                <div className="label">SMS</div>
                <div>~30 sends</div>
                <div className="calc">
                  <span>2–3 sends/mo × 12 mos</span>
                  <span className="source">Postscript / Attentive DTC benchmarks</span>
                </div>
                <div>~3–5% CTR</div>
                <div className="trend-down">opt-out fatigue ↑</div>
              </div>
              <div className="row fc-row">
                <div className="label">FridgeChannel</div>
                <div><span className="big">~3,600</span></div>
                <div className="calc">
                  <span>10 fridge opens/day × 365 days</span>
                  <span className="source">NielsenIQ — household fridge-open frequency</span>
                  <span className="source">Conservative floor: 2 intentional glances/day × 365 ≈ 730</span>
                </div>
                <div>Unblockable, unmuted</div>
                <div className="trend-up">↑ open category</div>
              </div>
            </div>
            <p className="mech-footnote">Source: NielsenIQ household behavior data; Klaviyo benchmark reports. ~10 fridge opens per household per day. No opt-in. No algorithm. No competing tabs.</p>
          </div>
        </section>

        {/* WHAT CAN WE DO */}
        <section className="what-can reveal-section">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <h2>You insert into your fulfillment. FC Run the Rest.</h2>
              </div>
            </div>

            <div className="what-list">
              <article className="what-item custom-design-fusion-card">
                <div className="what-copy">
                  <h3>FC Design and manufacture</h3>
                  <p>
                    FC custom-designs the unit&apos;s visual exterior in your brand language and manufactures every piece in our factory — delivered to your warehouse, ready to drop into your customer&apos;s order.
                  </p>
                </div>
                <div className="what-media">
                  <img src="/dtc-cmo-pics/dtc-custom-design.png" alt="Custom-designed branded FridgeChannel unit" />
                </div>
              </article>

              <article className="what-item content-fusion-card">
                <div className="what-media">
                  <img src="/dtc-cmo-pics/dtctap.png" alt="Brand content activation preview" />
                </div>
                <div className="what-copy">
                  <h3>FC-Crafted Habit-Proximity Content</h3>
                  <p>
                    Every listen is engineered to deepen habit proximity: useful tips, founder stories, product education, recipes, routines, offers, and loyalty prompts — each one a higher-intent retention signal that pulls the customer closer to the brand.
                  </p>
                  <div className="what-stats one-up">
                    <div className="what-stat">
                      <strong>+20–50%</strong>
                      <b>Referral Rate ↑</b>
                    </div>
                  </div>
                </div>
              </article>

              <article className="what-item flip balanced tap-fusion-card">
                <div className="what-copy">
                  <h3>One Tap Drives One Next Step.</h3>
                  <p>
                    Every tap can guide the customer to the expected next step — reorder, subscription, loyalty, referral, education, discovery, review, or a campaign page — with one tap.
                  </p>
                  <div className="what-stats metric-stats">
                    <div className="what-stat numeric-stat">
                      <strong>1.3x</strong>
                      <b>Purchase Frequency ↑</b>
                    </div>
                    <div className="what-stat numeric-stat">
                      <strong>+10pp</strong>
                      <b>Repeat Purchase Rate ↑</b>
                    </div>
                    <div className="what-stat numeric-stat">
                      <strong>1.8x</strong>
                      <b>Retention Revenue ↑</b>
                    </div>
                  </div>
                </div>
                <div className="what-media">
                  <img src="/dtc-cmo-pics/activate-bgp.png" alt="Real-world next-step activation" />
                </div>
              </article>

              <article className="what-item dashboard-fusion-card">
                <div className="what-copy">
                  <h3>Your Metrics Live in One Dashboard.</h3>
                  <p>
                    Every metric your care already tracks — surfaced in one dashboard, sliced by cohort, with a built-in holdout for every campaign.
                  </p>
                </div>
                <div className="what-media">
                  <img src="/dtc-cmo-pics/dtc-dashboard3.png" alt="FridgeChannel campaign metrics dashboard" />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="pilot">
          <div className="wrap">
            <div className="final">
              <div className="bg"><img src="/dtc-cmo/refrigemagnet.jpeg" alt="" /></div>
              <div className="body">
                <h2>Own the physical lifecycle channel <em>before your competitors do</em></h2>
                <div className="cta-row">
                  <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-primary">Request a pilot <span>→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
