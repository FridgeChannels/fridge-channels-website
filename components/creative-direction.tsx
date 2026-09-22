"use client";

import { useEffect } from "react";

const CREATIVE_DIRECTION_CSS = `
  @font-face{font-family:"CI Messina";src:url("https://creative.inc/fonts/MessinaSansWeb-Regular.otf") format("opentype");font-weight:400;font-style:normal;font-display:swap}
  @font-face{font-family:"CI Messina";src:url("https://creative.inc/fonts/MessinaSansWeb-SemiBold.otf") format("opentype");font-weight:600;font-style:normal;font-display:swap}
  @font-face{font-family:"CI Yetson";src:url("https://creative.inc/fonts/YetsonSans-Regular.otf") format("opentype");font-weight:400;font-style:normal;font-display:swap}
  @font-face{font-family:"CI Albaro";src:url("https://creative.inc/fonts/AlbaroText-Book.otf") format("opentype");font-weight:400;font-style:normal;font-display:swap}

  .creative-inc-theme{
    --ci-ink:#1c1b17;
    --ci-cream:#f3f2e9;
    --ci-night:#191816;
    --ci-line:#dfded5;
    --ci-muted:rgba(28,27,23,.58);
    --ci-ease:cubic-bezier(.22,1,.36,1);
    background:var(--ci-cream)!important;
    color:var(--ci-ink)!important;
    font-family:"CI Messina","Helvetica Neue",Arial,sans-serif!important;
    line-height:1.3;
    overflow:clip;
  }
  .creative-inc-theme *{box-sizing:border-box}
  .creative-inc-theme h1,.creative-inc-theme h2,.creative-inc-theme h3{
    font-family:"CI Messina","Helvetica Neue",Arial,sans-serif!important;
    font-weight:400!important;
    letter-spacing:-.055em!important;
  }
  .creative-inc-theme p,.creative-inc-theme li,.creative-inc-theme a{font-family:"CI Messina","Helvetica Neue",Arial,sans-serif}
  .creative-inc-theme .fc-overline,.creative-inc-theme .fc-kicker,.creative-inc-theme .asin-label,.creative-inc-theme .eyebrow,.creative-inc-theme small,.creative-inc-theme [class*="label"]{
    font-family:"CI Yetson","Helvetica Neue",Arial,sans-serif!important;
    letter-spacing:0!important;
    text-transform:none!important;
  }
  .creative-inc-theme .fc-statement h2,.creative-inc-theme .retention-statement h1,.creative-inc-theme .asin-compound h2,.creative-inc-theme .final h2{
    font-family:"CI Albaro",Georgia,serif!important;
    letter-spacing:-.03em!important;
  }
  .creative-inc-theme section{isolation:isolate}
  .creative-inc-theme .ci-image-placeholder{position:relative;display:flex;min-height:240px;overflow:hidden;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#e5e4da 0%,#f3f2e9 48%,#d9d8ce 100%);color:rgba(28,27,23,.68);border:1px solid rgba(28,27,23,.22);isolation:isolate}
  .creative-inc-theme .ci-image-placeholder:before,.creative-inc-theme .ci-image-placeholder:after{content:"";position:absolute;inset:14px;border:1px dashed rgba(28,27,23,.25);pointer-events:none}
  .creative-inc-theme .ci-image-placeholder:after{inset:50% auto auto 14px;width:calc(100% - 28px);height:1px;border:0;background:rgba(28,27,23,.18)}
  .creative-inc-theme .ci-image-placeholder-mark{position:relative;z-index:1;display:grid;place-items:center;width:42px;height:42px;border:1px solid rgba(28,27,23,.42);border-radius:50%;font-size:25px;font-weight:300;line-height:1}
  .creative-inc-theme .ci-image-placeholder-label{position:relative;z-index:1;font-family:"CI Yetson","Helvetica Neue",Arial,sans-serif;font-size:13px;letter-spacing:.04em;text-align:center}
  .creative-inc-theme .ci-image-placeholder-meta{position:relative;z-index:1;font-family:"CI Yetson","Helvetica Neue",Arial,sans-serif;font-size:10px;opacity:.7;text-align:center}
  .creative-inc-theme .fc-hero-media{position:absolute;right:0;bottom:8%;width:min(42vw,620px);aspect-ratio:1/1.08;border-radius:0;overflow:hidden;transform:rotate(3deg);box-shadow:18px 22px 50px rgba(28,27,23,.12)}
  .creative-inc-theme .fc-hero-media .ci-image-placeholder{height:100%;min-height:0}
  .creative-inc-theme .fc-hero-media .ci-image-placeholder:before{inset:18px}
  .creative-inc-theme .fc-hero-media .ci-image-placeholder:after{left:18px;width:calc(100% - 36px)}
  @media(min-width:768px){.creative-inc-theme .fc-hero-copy{width:min(62%,860px)!important}.creative-inc-theme .fc-hero-copy>p{margin-left:0!important}.creative-inc-theme .fc-hero h1{max-width:9ch!important}}
  .creative-inc-theme .ci-section{--ci-progress:0;position:relative}
  .creative-inc-theme .ci-section>*,.creative-inc-theme .ci-section>*>*{
    transition:opacity .9s var(--ci-ease),transform .9s var(--ci-ease),clip-path 1.05s var(--ci-ease),filter .9s var(--ci-ease);
  }
  .creative-inc-theme .ci-section:not(.ci-visible)>*{opacity:0;transform:translateY(42px)}
  .creative-inc-theme .ci-section.ci-visible>*{opacity:1;transform:translateY(0)}
  .creative-inc-theme .ci-section h1,.creative-inc-theme .ci-section h2{
    transform-origin:0 100%;
    transition:opacity .85s var(--ci-ease),transform .85s var(--ci-ease),clip-path .85s var(--ci-ease)!important;
  }
  .creative-inc-theme .ci-section:not(.ci-visible) h1,.creative-inc-theme .ci-section:not(.ci-visible) h2{
    opacity:0;transform:translateY(112%) rotate(2.5deg);clip-path:inset(0 0 18% 0)
  }
  .creative-inc-theme .ci-section.ci-visible h1,.creative-inc-theme .ci-section.ci-visible h2{opacity:1;transform:none;clip-path:inset(0)}
  .creative-inc-theme .ci-media{overflow:hidden!important}
  .creative-inc-theme .ci-media img{
    clip-path:inset(0);transform:scale(calc(1.035 + var(--ci-progress,0) * .025)) translateY(calc((var(--ci-progress,0) - .5) * -14px));
    transition:clip-path 1.1s var(--ci-ease),transform .15s linear,filter .6s ease!important;
    will-change:transform,clip-path;
  }
  .creative-inc-theme .ci-section:not(.ci-visible) .ci-media img{clip-path:inset(14% 10%);transform:scale(1.12)}

  :is(.creative-inc-theme,.creative-inc-shell) nav.fixed{height:72px;color:var(--ci-ink)!important;transition:height .5s var(--ci-ease),transform .5s var(--ci-ease)}
  :is(.creative-inc-theme,.creative-inc-shell) nav.fixed>div{height:72px;padding-top:8px!important;padding-bottom:8px!important;background:rgba(243,242,233,.94)!important;backdrop-filter:blur(14px) saturate(120%);transition:height .5s var(--ci-ease),margin .5s var(--ci-ease),border-radius .5s var(--ci-ease),width .5s var(--ci-ease)!important}
  :is(.creative-inc-theme,.creative-inc-shell) nav.fixed *{color:var(--ci-ink)!important}
  :is(.creative-inc-theme,.creative-inc-shell) nav.fixed a,:is(.creative-inc-theme,.creative-inc-shell) nav.fixed button,:is(.creative-inc-theme,.creative-inc-shell) nav.fixed span{font-family:"CI Yetson","Helvetica Neue",Arial,sans-serif!important}
  :is(.creative-inc-theme,.creative-inc-shell) nav.fixed img{filter:invert(1)!important;opacity:.82!important}
  :is(.creative-inc-theme,.creative-inc-shell) nav.fixed.ci-nav-compact{height:58px}
  :is(.creative-inc-theme,.creative-inc-shell) nav.fixed.ci-nav-compact>div{height:58px;width:min(720px,calc(100% - 32px))!important;margin-top:8px;border-radius:999px;box-shadow:0 8px 30px rgba(28,27,23,.08)}

  .creative-inc-theme.fc-home{--paper:var(--ci-cream);--cream:var(--ci-cream);--ink:var(--ci-ink);--muted:var(--ci-muted);--green:var(--ci-night);--green2:var(--ci-ink);--line:var(--ci-line)}
  .creative-inc-theme .fc-wrap{width:min(1512px,calc(100% - 40px))!important}
  .creative-inc-theme .fc-hero{min-height:100svh!important;padding:138px 0 92px!important;align-items:flex-end!important}
  .creative-inc-theme .fc-hero-copy{width:100%}
  .creative-inc-theme .fc-hero h1{font-size:clamp(64px,8.5vw,120px)!important;line-height:.86!important;letter-spacing:-.04em!important;max-width:12ch!important;margin:0 0 48px!important}
  .creative-inc-theme .fc-hero h1 em{font-family:"CI Albaro",Georgia,serif!important;color:inherit!important;font-style:normal}
  .creative-inc-theme .fc-hero-copy>p{max-width:38ch!important;font-size:17px!important;line-height:1.42!important;margin-left:auto!important}
  .creative-inc-theme .fc-main-cta,.creative-inc-theme .btn-primary,.creative-inc-theme .asin-button{border-radius:999px!important;background:var(--ci-ink)!important;color:var(--ci-cream)!important;box-shadow:none!important;transition:transform .35s var(--ci-ease),background .3s ease!important}
  .creative-inc-theme .fc-main-cta:hover,.creative-inc-theme .btn-primary:hover,.creative-inc-theme .asin-button:hover{transform:scale(1.04)!important;background:#000!important}
  .creative-inc-theme .fc-statement{min-height:82vh;padding:140px 0!important;background:var(--ci-night)!important;color:var(--ci-cream)!important;display:flex;align-items:center}
  .creative-inc-theme .fc-statement-inner{grid-template-columns:.72fr 1.28fr!important;gap:8vw!important}
  .creative-inc-theme .fc-statement h2{font-size:clamp(54px,7vw,108px)!important;line-height:.98!important;max-width:10ch!important}
  .creative-inc-theme .fc-statement p{color:rgba(243,242,233,.72)!important;line-height:1.45!important}
  .creative-inc-theme .fc-overline{color:rgba(243,242,233,.6)!important;font-size:13px!important}
  .creative-inc-theme .fc-metrics{padding:144px 0!important}
  .creative-inc-theme .fc-metric-grid{border:0!important;gap:6vw!important}
  .creative-inc-theme .fc-metric,.creative-inc-theme .fc-metric+.fc-metric{border:0!important;padding:0!important;min-height:330px!important;display:flex;flex-direction:column;justify-content:flex-start}
  .creative-inc-theme .fc-metric-icon{border:0!important;width:auto!important;height:auto!important;display:block!important;margin-bottom:72px!important;color:var(--ci-ink)!important}
  .creative-inc-theme .fc-metric-icon svg{width:28px!important;height:28px!important;stroke-width:1.35}
  .creative-inc-theme .fc-metric h3{font-size:clamp(31px,3vw,48px)!important;line-height:.98!important;min-height:1.96em;margin:0 0 20px!important;max-width:9ch}
  .creative-inc-theme .fc-metric p{font-size:15px!important;line-height:1.5!important;color:var(--ci-muted)!important}
  .creative-inc-theme .fc-how{padding:150px 0!important;background:#e9e8df!important}
  .creative-inc-theme .fc-how-grid{grid-template-columns:.55fr 1.45fr!important;gap:6vw!important}
  .creative-inc-theme .fc-how-copy h2{font-size:clamp(68px,8vw,122px)!important;line-height:.84!important;max-width:5ch!important}
  .creative-inc-theme .fc-step-cards{gap:28px 24px!important;padding:28px 12px 34px!important}
  .creative-inc-theme .fc-steps li{min-height:218px!important;padding:18px 18px 20px!important;border:0!important;border-radius:0!important;box-shadow:none!important;background:transparent!important;transform:none!important;transition:transform .3s var(--ci-ease)!important}
  .creative-inc-theme .fc-steps li:hover{transform:translateY(-5px)!important}
  .creative-inc-theme .fc-steps li:before{inset:52px 12px 12px!important;border:0!important;border-radius:6px!important;background:#e5e5e0!important}
  .creative-inc-theme .fc-steps li:nth-child(3n+1):before,.creative-inc-theme .fc-steps li:nth-child(3n):before{background:#e5e5e0!important}
  .creative-inc-theme .fc-steps li svg:first-child{width:20px!important;height:20px!important;margin:0 0 18px auto!important;color:var(--ci-ink)!important;stroke-width:1.3}
  .creative-inc-theme .fc-steps li>span:first-of-type{font-family:"CI Messina",sans-serif!important;font-size:12px!important;line-height:1!important;letter-spacing:.12em!important;margin:0 0 auto!important;color:var(--ci-muted)!important}
  .creative-inc-theme .fc-steps li>span:nth-of-type(2){font-family:"CI Messina",sans-serif!important;font-weight:400!important;font-size:22px!important;letter-spacing:-.035em;line-height:1.06}
  .creative-inc-theme .fc-step-path path{stroke:var(--ci-ink)!important;stroke-width:1.4!important;opacity:.35!important}
  .creative-inc-theme .daily-moments{padding:150px 0!important;background:var(--ci-cream)!important}
  .creative-inc-theme .daily-moments h2{font-size:clamp(68px,8vw,122px)!important;line-height:.88!important;max-width:11ch!important}
  .creative-inc-theme .daily-moments h2 em{font-family:"CI Albaro",Georgia,serif!important;color:inherit!important;font-style:normal}
  .creative-inc-theme .daily-moments-grid{gap:8px!important}
  .creative-inc-theme .daily-moment{border-radius:8px;min-height:560px}
  .creative-inc-theme .daily-moment .ci-image-placeholder{height:100%;min-height:560px;border:0;background:linear-gradient(135deg,#d8d7cd,#f3f2e9 52%,#c6c5bb)}
  .creative-inc-theme .daily-moment .ci-image-placeholder:before{inset:18px;border-color:rgba(28,27,23,.32)}
  .creative-inc-theme .daily-moment .ci-image-placeholder:after{display:none}
  .creative-inc-theme .daily-moment img{filter:saturate(.72) contrast(.94)!important}
  .creative-inc-theme .daily-moment:hover img{filter:saturate(1) contrast(1)!important}
  .creative-inc-theme .fc-paths{padding:150px 0!important;background:var(--ci-cream)!important}
  .creative-inc-theme .fc-paths-head{text-align:center!important;margin:0 auto 76px!important;max-width:980px!important}
  .creative-inc-theme .fc-paths h2{font-size:clamp(52px,6vw,88px)!important;line-height:.92!important;max-width:12ch}
  .creative-inc-theme .fc-path-grid{max-width:1080px!important;margin:0 auto!important;gap:14px!important}
  .creative-inc-theme .fc-path{min-height:268px!important;border-radius:8px;padding:32px!important;background:#95bf47!important;color:#fff!important;justify-content:center!important}
  .creative-inc-theme .fc-path:nth-child(2){background:#ff9900!important;color:#fff!important}
  .creative-inc-theme .fc-path:first-child *,.creative-inc-theme .fc-path:nth-child(2) *{color:#fff!important}
  .creative-inc-theme .fc-path:first-child:hover{background:#7fa53b!important}.creative-inc-theme .fc-path:nth-child(2):hover{background:#e68a00!important}
  .creative-inc-theme .fc-path small{font-size:clamp(28px,3vw,46px)!important;line-height:.98!important;letter-spacing:-.045em!important;opacity:1!important}
  .creative-inc-theme .fc-footer{border-color:var(--ci-line)!important;padding:36px 0 46px!important}

  @media(prefers-reduced-motion:no-preference){
    .creative-inc-theme.fc-home .fc-hero-media{will-change:transform,opacity,clip-path;transition:opacity .7s var(--ci-ease),transform .7s var(--ci-ease),clip-path .8s var(--ci-ease)!important}
    .creative-inc-theme.fc-home .fc-hero.ci-section:not(.ci-visible) .fc-hero-media{opacity:0;transform:translate(5vw,7vh) rotate(8deg) scale(.9);clip-path:inset(12% 12% 0 0)}
    .creative-inc-theme.fc-home .fc-hero.ci-section.ci-visible .fc-hero-media{opacity:1;transform:rotate(3deg) scale(1);clip-path:inset(0)}
    .creative-inc-theme.fc-home .fc-hero-media video{transform:scale(calc(1.06 - var(--ci-progress,0) * .035));transition:transform .18s linear;will-change:transform}
    .creative-inc-theme.fc-home .fc-main-cta svg{transition:transform .2s var(--ci-ease)}
    .creative-inc-theme.fc-home .fc-main-cta:hover svg{transform:translateX(5px)}
    .creative-inc-theme.fc-home .fc-metric{opacity:0;transform:translateY(32px);filter:blur(4px);transition:opacity .72s var(--ci-ease),transform .72s var(--ci-ease),filter .72s var(--ci-ease)!important}
    .creative-inc-theme.fc-home .fc-metrics.ci-visible .fc-metric{opacity:1;transform:translateY(0);filter:blur(0)}
    .creative-inc-theme.fc-home .fc-metrics.ci-visible .fc-metric:nth-child(2){transition-delay:.16s!important}.creative-inc-theme.fc-home .fc-metrics.ci-visible .fc-metric:nth-child(3){transition-delay:.32s!important}
    .creative-inc-theme.fc-home .fc-metric-icon{transition:transform .3s var(--ci-ease),color .2s ease!important}
    .creative-inc-theme.fc-home .fc-metric:hover .fc-metric-icon{transform:translateY(-5px) rotate(-6deg);color:var(--ci-muted)!important}
    .creative-inc-theme.fc-home .fc-step-cards{perspective:900px}
    .creative-inc-theme.fc-home .fc-steps li{opacity:0;transform:translateY(26px) rotate(0deg);transition:opacity .42s var(--ci-ease),transform .42s var(--ci-ease),box-shadow .25s ease!important}
    .creative-inc-theme.fc-home .fc-how.ci-visible .fc-steps li{opacity:1;transform:translateY(0) rotate(3deg)}
    .creative-inc-theme.fc-home .fc-how.ci-visible .fc-steps li:nth-child(2){transform:translateY(0) rotate(-3deg);transition-delay:.08s!important}
    .creative-inc-theme.fc-home .fc-how.ci-visible .fc-steps li:nth-child(3){transform:translateY(0) rotate(2deg);transition-delay:.16s!important}
    .creative-inc-theme.fc-home .fc-how.ci-visible .fc-steps li:nth-child(4){transform:translateY(0) rotate(3deg);transition-delay:.24s!important}
    .creative-inc-theme.fc-home .fc-how.ci-visible .fc-steps li:nth-child(5){transform:translateY(0) rotate(-3deg);transition-delay:.32s!important}
    .creative-inc-theme.fc-home .fc-how.ci-visible .fc-steps li:nth-child(6){transform:translateY(0) rotate(2deg);transition-delay:.4s!important}
    .creative-inc-theme.fc-home .fc-steps li:hover{transform:translateY(-8px) scale(1.035) rotate(0deg)!important}
    .creative-inc-theme.fc-home .fc-step-path path{stroke-dashoffset:0;transition:stroke-dashoffset 1.2s var(--ci-ease)}
    .creative-inc-theme.fc-home .fc-how.ci-visible .fc-step-path path{stroke-dashoffset:-30}
    .creative-inc-theme.fc-home .daily-moment{opacity:0;transform:translateY(30px);clip-path:inset(10% 0 0);transition:opacity .45s var(--ci-ease),transform .55s var(--ci-ease),clip-path .65s var(--ci-ease)!important}
    .creative-inc-theme.fc-home .daily-moments.ci-visible .daily-moment{opacity:1;transform:translateY(0);clip-path:inset(0)}
    .creative-inc-theme.fc-home .daily-moments.ci-visible .daily-moment:nth-child(2){transition-delay:.08s!important}.creative-inc-theme.fc-home .daily-moments.ci-visible .daily-moment:nth-child(3){transition-delay:.16s!important}.creative-inc-theme.fc-home .daily-moments.ci-visible .daily-moment:nth-child(4){transition-delay:.24s!important}
    .creative-inc-theme.fc-home .daily-moment img{transform:scale(1.06);transition:transform .75s var(--ci-ease),filter .4s ease!important}
    .creative-inc-theme.fc-home .daily-moments.ci-visible .daily-moment img{transform:scale(1)}
    .creative-inc-theme.fc-home .daily-moment:hover img{transform:scale(1.055)!important}
    .creative-inc-theme.fc-home .fc-path{opacity:0;transform:translateY(24px);transition:opacity .45s var(--ci-ease),transform .45s var(--ci-ease),background .25s ease!important}
    .creative-inc-theme.fc-home .fc-paths.ci-visible .fc-path{opacity:1;transform:translateY(0)}
    .creative-inc-theme.fc-home .fc-paths.ci-visible .fc-path:nth-child(2){transition-delay:.12s!important}
    .creative-inc-theme.fc-home .fc-path:hover{transform:translateY(-7px)!important}
    .creative-inc-theme.fc-home .fc-path svg{transition:transform .2s var(--ci-ease)}
    .creative-inc-theme.fc-home .fc-path:hover svg{transform:translate(4px,-4px)}
    .creative-inc-theme.fc-home .fc-kicker:before{transform-origin:left;transition:transform .55s var(--ci-ease)}
    .creative-inc-theme.fc-home .ci-visible .fc-kicker:before{transform:scaleX(1.7)}
  }
  @media(prefers-reduced-motion:reduce){
    .creative-inc-theme.fc-home .fc-hero-media,.creative-inc-theme.fc-home .fc-metric,.creative-inc-theme.fc-home .fc-steps li,.creative-inc-theme.fc-home .daily-moment,.creative-inc-theme.fc-home .fc-path{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}
    .creative-inc-theme.fc-home .fc-hero-media video,.creative-inc-theme.fc-home .daily-moment img{transform:none!important;transition:none!important}
  }

  .creative-inc-theme.fc-cmo{--bg:var(--ci-cream);--bg-2:#e7e6dc;--paper:var(--ci-cream);--ink:var(--ci-ink);--ink-2:rgba(28,27,23,.78);--muted:var(--ci-muted);--line:var(--ci-line);--line-soft:rgba(28,27,23,.08);--accent:var(--ci-ink);--accent-2:var(--ci-ink);background:var(--ci-cream)!important}
  .creative-inc-theme.fc-cmo .wrap{padding:0 20px!important;max-width:1512px!important}
  .creative-inc-theme.fc-cmo .hero{min-height:100svh!important;background-position:center!important}
  .creative-inc-theme.fc-cmo .hero:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(25,24,22,.08),rgba(25,24,22,.7));pointer-events:none}
  .creative-inc-theme.fc-cmo .hero-grid{position:relative;z-index:1;padding:180px 0 72px!important;justify-content:flex-start!important}
  .creative-inc-theme.fc-cmo .hero-grid>div{width:min(90%,1180px)!important}
  .creative-inc-theme.fc-cmo .hero h1{font-size:clamp(60px,7vw,108px)!important;line-height:.88!important;letter-spacing:-.045em!important;max-width:15ch!important}
  .creative-inc-theme.fc-cmo .hero .lede{max-width:42ch!important;margin-left:auto!important;font-size:17px!important;line-height:1.42!important}
  .creative-inc-theme.fc-cmo .sec-head{grid-template-columns:minmax(0,1.6fr) minmax(260px,.4fr)!important;padding:150px 0 68px!important;gap:6vw!important}
  .creative-inc-theme.fc-cmo .sec-head h2{font-size:clamp(64px,7.4vw,112px)!important;line-height:.88!important;max-width:12ch!important}
  .creative-inc-theme.fc-cmo .sec-head .lede{font-size:16px!important;line-height:1.45!important;align-self:end}
  .creative-inc-theme.fc-cmo .addon{padding-bottom:140px!important;background:var(--ci-cream)!important}
  .creative-inc-theme.fc-cmo .addon-grid{gap:7vw!important}
  .creative-inc-theme.fc-cmo .addon-panel{border:0!important;border-radius:0!important;background:transparent!important;color:var(--ci-ink)!important;padding:0!important;min-height:300px!important;box-shadow:none!important;justify-content:flex-start}
  .creative-inc-theme.fc-cmo .addon-panel h3,.creative-inc-theme.fc-cmo .addon-panel h4,.creative-inc-theme.fc-cmo .addon-panel p{color:var(--ci-ink)!important}
  .creative-inc-theme.fc-cmo .addon-panel h3{font-size:clamp(30px,3vw,46px)!important;line-height:.96!important}
  .creative-inc-theme.fc-cmo .addon-panel h4{margin:42px 0 14px!important;padding-top:0!important}.creative-inc-theme.fc-cmo .addon-panel p{font-size:14px!important;line-height:1.5!important;opacity:.62}
  .creative-inc-theme.fc-cmo .mechanism{padding-bottom:144px!important;background:#e9e8df!important}
  .creative-inc-theme.fc-cmo .table{border:0!important;border-radius:0!important;background:transparent!important;max-width:none!important}
  .creative-inc-theme.fc-cmo .table .row{border-color:rgba(28,27,23,.14)!important}.creative-inc-theme.fc-cmo .table .row>div{padding:22px 12px!important}
  .creative-inc-theme.fc-cmo .table .row.fc-row{background:var(--ci-night)!important}
  .creative-inc-theme.fc-cmo .what-can{padding:0 0 150px!important}
  .creative-inc-theme.fc-cmo .what-list{gap:180px!important}
  .creative-inc-theme.fc-cmo .what-item{border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;gap:6vw!important;overflow:visible!important}
  .creative-inc-theme.fc-cmo .what-copy{padding:0!important;justify-content:center}
  .creative-inc-theme.fc-cmo .what-copy h3,.creative-inc-theme.fc-cmo .launch-dashboard-copy h3{font-size:clamp(58px,6.6vw,100px)!important;line-height:.88!important;max-width:11ch!important}
  .creative-inc-theme.fc-cmo .what-media,.creative-inc-theme.fc-cmo .launch-dashboard-preview{border-radius:8px!important;box-shadow:none!important;background:#e4e3da!important}
  .creative-inc-theme.fc-cmo .mission-steps{gap:8px!important}.creative-inc-theme.fc-cmo .mission-step{border:0!important;border-radius:8px!important;background:#e9e8df!important;box-shadow:none!important}.creative-inc-theme.fc-cmo .mission-step:not(:last-child):after{display:none!important}
  .creative-inc-theme.fc-cmo .launch-dashboard-module{gap:7vw!important}.creative-inc-theme.fc-cmo .launch-dashboard-tags{border-color:var(--ci-line)!important}
  .creative-inc-theme.fc-cmo .retention-layer{min-height:86vh;display:flex;align-items:center;padding:140px 0!important;background:var(--ci-night)!important}
  .creative-inc-theme.fc-cmo .retention-statement,.creative-inc-theme.fc-cmo .retention-statement h1{color:var(--ci-cream)!important;font-size:clamp(52px,6vw,96px)!important;line-height:.92!important;max-width:13ch!important}
  .creative-inc-theme.fc-cmo #pilot{padding:140px 0!important}.creative-inc-theme.fc-cmo .final .body{padding:84px 20px!important}.creative-inc-theme.fc-cmo .final h2{font-size:clamp(64px,8vw,118px)!important;line-height:.9!important;max-width:12ch}

  .creative-inc-theme.asin-page{--asin-bg:var(--ci-cream);--asin-paper:#e9e8df;--asin-ink:var(--ci-ink);--asin-copy:rgba(28,27,23,.76);--asin-muted:var(--ci-muted);--asin-green:var(--ci-night);--asin-terracotta:var(--ci-ink);--asin-sun:var(--ci-cream);background:var(--ci-cream)!important}
  .creative-inc-theme.asin-page .asin-shell{max-width:1512px!important;padding-inline:20px!important}
  .creative-inc-theme.asin-page .asin-hero{min-height:100svh!important;background:var(--ci-night)!important}
  .creative-inc-theme.asin-page .asin-hero-copy{padding-top:180px!important;padding-bottom:68px!important}
  .creative-inc-theme.asin-page .asin-hero h1{font-size:clamp(60px,7vw,108px)!important;line-height:.88!important;max-width:14ch!important}
  .creative-inc-theme.asin-page .asin-hero h1 em{font-family:"CI Albaro",Georgia,serif!important;color:var(--ci-cream)!important;font-style:normal}
  .creative-inc-theme.asin-page .asin-hero-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center center}
  .creative-inc-theme.asin-page .asin-hero-image:before,.creative-inc-theme.asin-page .asin-hero-image:after,.creative-inc-theme.asin-page .asin-hero-refrigerator{display:none!important}
  .creative-inc-theme.asin-page .asin-lede{font-size:17px!important;line-height:1.42!important;max-width:42ch!important;margin-left:auto!important}
  .creative-inc-theme.asin-page .asin-intro{min-height:80vh;display:flex;flex-direction:column;justify-content:center;padding-top:150px!important;padding-bottom:150px!important}
  .creative-inc-theme.asin-page .asin-intro h2,.creative-inc-theme.asin-page .asin-how h2,.creative-inc-theme.asin-page .asin-capabilities>h2,.creative-inc-theme.asin-page .asin-network h2,.creative-inc-theme.asin-page .asin-final h2{font-size:clamp(66px,8vw,122px)!important;line-height:.88!important;max-width:11ch!important}
  .creative-inc-theme.asin-page .asin-final .asin-final-hero-title{font-size:clamp(32px,5vw,72px)!important;line-height:.92!important;max-width:none!important;white-space:nowrap!important}
  .creative-inc-theme.asin-page .asin-story-flow{--asin-story-progress:0;position:relative;min-height:300vh;background:#e9e8df!important;overflow:clip}
  .creative-inc-theme.asin-page .asin-story-sticky{position:sticky;top:0;height:100svh;overflow:hidden}
  .creative-inc-theme.asin-page .asin-story-copy{position:relative;z-index:5;padding-top:clamp(104px,13vh,168px)!important}.creative-inc-theme.asin-page .asin-story-copy h2{max-width:10ch!important;font-size:clamp(48px,6.4vw,102px)!important;line-height:.9!important}
  .creative-inc-theme.asin-page .asin-story-card{position:absolute;z-index:2;overflow:hidden;box-shadow:0 26px 70px rgba(28,27,23,.15);transition:filter .25s linear;will-change:transform,opacity}.creative-inc-theme.asin-page .asin-story-media{display:block;width:100%;height:100%;object-fit:cover}
  .creative-inc-theme.asin-page .asin-story-package{left:7%;top:24%;width:clamp(155px,18vw,310px);aspect-ratio:9/16;opacity:clamp(0,calc(1 - var(--asin-story-progress) * 3),1);transform:translate(calc(var(--asin-story-progress) * 22vw),calc(var(--asin-story-progress) * 16vh)) rotate(calc(-7deg + var(--asin-story-progress) * 8deg)) scale(calc(1 - var(--asin-story-progress) * .16))}
  .creative-inc-theme.asin-page .asin-story-magnet{right:9%;top:20%;width:clamp(170px,20vw,340px);aspect-ratio:9/16;opacity:clamp(0,calc((var(--asin-story-progress) - .14) * 3.6),1);transform:translate(calc((.56 - var(--asin-story-progress)) * 16vw),calc((.48 - var(--asin-story-progress)) * 6vh)) rotate(calc(7deg - var(--asin-story-progress) * 9deg)) scale(clamp(.82,calc(.78 + var(--asin-story-progress) * .45),1.1))}
  .creative-inc-theme.asin-page .asin-story-phone{left:22%;bottom:7%;width:clamp(100px,10vw,190px);aspect-ratio:9/16;opacity:clamp(0,calc((var(--asin-story-progress) - .48) * 4),1);transform:translate(calc((.86 - var(--asin-story-progress)) * 8vw),calc((.9 - var(--asin-story-progress)) * 16vh)) rotate(calc(9deg - var(--asin-story-progress) * 12deg)) scale(clamp(.76,calc(.72 + var(--asin-story-progress) * .44),1.06))}
  .creative-inc-theme.asin-page .asin-story-steps{position:absolute;z-index:6;right:5vw;bottom:clamp(34px,6vh,68px);width:min(62vw,920px)!important;display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(22px,2.6vw,46px)!important;margin:0!important;padding:0!important;list-style:none}.creative-inc-theme.asin-page .asin-story-steps li{display:grid!important;grid-template-columns:auto minmax(0,1fr)!important;gap:12px!important;align-items:start!important;min-width:0;color:var(--ci-ink);opacity:clamp(0,calc((var(--asin-story-progress) - .1) * 4),1);transform:translateY(calc((.68 - var(--asin-story-progress)) * 30px));transition:opacity .25s linear,transform .25s linear!important}.creative-inc-theme.asin-page .asin-story-steps li:nth-child(2){opacity:clamp(0,calc((var(--asin-story-progress) - .34) * 4),1);transform:translateY(calc((.82 - var(--asin-story-progress)) * 30px))}.creative-inc-theme.asin-page .asin-story-steps li:nth-child(3){opacity:clamp(0,calc((var(--asin-story-progress) - .58) * 4),1);transform:translateY(calc((1 - var(--asin-story-progress)) * 30px))}.creative-inc-theme.asin-page .asin-story-steps li>span{font-family:"CI Yetson",sans-serif;font-size:12px;padding-top:3px}.creative-inc-theme.asin-page .asin-story-steps h3{font-size:clamp(18px,1.55vw,25px)!important;line-height:.98!important;margin:0!important}.creative-inc-theme.asin-page .asin-story-steps p{margin:10px 0 0!important;color:var(--ci-muted)!important;font-size:12px!important;line-height:1.45!important}
  .creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene{position:relative;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));min-height:auto!important;align-items:start;margin:0!important;padding:0!important;background:var(--ci-cream)!important}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene:nth-child(even){background:#e9e8df!important}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene .asin-core-visual{grid-column:1;grid-row:1;order:initial!important;margin:0!important;min-height:0!important;border-radius:0!important;box-shadow:none!important}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene.asin-core-presence .asin-core-visual{aspect-ratio:1672/941;align-self:start}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene .asin-core-copy{grid-column:2;grid-row:1;order:initial!important;align-self:center;padding:clamp(70px,10vw,160px)!important}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene:nth-child(even) .asin-core-visual{grid-column:2}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene:nth-child(even) .asin-core-copy{grid-column:1;padding:clamp(70px,10vw,160px)!important;align-self:center}.creative-inc-theme.asin-page .asin-core-copy h2{font-size:clamp(44px,5.1vw,82px)!important;line-height:.9!important;max-width:10ch!important}.creative-inc-theme.asin-page .asin-core-copy>p{font-size:15px!important;line-height:1.5!important}.creative-inc-theme.asin-page .asin-core-copy strong{margin-top:20px!important}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene .asin-visual-index{top:20px!important;left:20px!important}
  .creative-inc-theme.asin-page .asin-capabilities{padding-top:150px!important;padding-bottom:150px!important}.creative-inc-theme.asin-page .asin-capability-list{gap:7vw!important;margin-top:100px!important}.creative-inc-theme.asin-page .asin-capability-list h3{font-size:clamp(30px,3vw,46px)!important;line-height:.98!important}
  .creative-inc-theme.asin-page .asin-compound{min-height:138vh;padding:0!important;background:var(--ci-night)!important;position:relative}.creative-inc-theme.asin-page .asin-compound>.asin-shell{position:sticky;top:0;min-height:100svh;display:flex;flex-direction:column;justify-content:center;padding-top:110px!important;padding-bottom:90px!important}.creative-inc-theme.asin-page .asin-compound h2{font-size:clamp(54px,7.2vw,112px)!important;line-height:.86!important;max-width:10ch!important}.creative-inc-theme.asin-page .asin-loop{position:relative;margin:clamp(54px,10vh,120px) 0 0!important;padding:0!important;gap:0!important;justify-content:space-between!important;overflow:visible!important}.creative-inc-theme.asin-page .asin-loop:before{content:"";position:absolute;left:4%;right:4%;top:17px;height:1px;background:rgba(243,242,233,.38);transform:scaleX(var(--ci-progress));transform-origin:left}.creative-inc-theme.asin-page .asin-loop>div{position:relative;z-index:1;flex:0 0 auto!important;gap:10px!important}.creative-inc-theme.asin-page .asin-loop>div:not(:last-child):after{display:none!important}.creative-inc-theme.asin-page .asin-loop>div svg{display:grid;place-items:center;width:36px!important;height:36px!important;padding:8px;border-radius:50%;background:var(--ci-night);outline:1px solid rgba(243,242,233,.6)}.creative-inc-theme.asin-page .asin-loop>div span{font-family:"CI Yetson",sans-serif!important;font-size:11px!important}.creative-inc-theme.asin-page .asin-compound-copy{margin-top:clamp(48px,8vh,88px)!important;max-width:45ch!important}.creative-inc-theme.asin-page .asin-measurement{margin-top:38px!important;padding-top:0!important}
  .creative-inc-theme.asin-page .asin-network{padding-top:150px!important;padding-bottom:150px!important}.creative-inc-theme.asin-page .asin-network-path{padding:90px 0 40px!important}
  .creative-inc-theme.asin-page .asin-final{min-height:82vh;padding:150px 0!important;background:#e9e8df!important;display:flex;align-items:center}
  .creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene.asin-core-traffic .asin-funnel-visual{padding:0!important;min-height:0!important;aspect-ratio:3/2;align-self:start;background:var(--ci-cream)!important;display:flex;align-items:center;justify-content:center}.creative-inc-theme.asin-page .asin-traffic-photo{display:block;width:100%;height:100%;object-fit:contain}
  .creative-inc-theme.asin-page .asin-core-item.asin-core-reorder .asin-core-copy{align-self:start!important;padding-top:clamp(48px,6vw,96px)!important}
  .creative-inc-theme.asin-page .asin-core-copy h2{font-size:clamp(34px,3.4vw,56px)!important;line-height:.96!important;max-width:12ch!important}
  .creative-inc-theme.asin-page .asin-phone{height:auto;aspect-ratio:9/16;padding:0;overflow:hidden}
  .creative-inc-theme.asin-page .asin-order-video{display:block;width:100%;height:100%;object-fit:cover;background:#0c0c0c;border-radius:24px}
  .creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene{align-items:stretch!important}
  .creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene .asin-core-visual{height:100%;min-height:100%!important;aspect-ratio:auto!important}

  @media(prefers-reduced-motion:no-preference){
    .creative-inc-theme.asin-page .asin-hero-image:before,.creative-inc-theme.asin-page .asin-hero-refrigerator,.creative-inc-theme.asin-page .asin-steps li,.creative-inc-theme.asin-page .asin-capability-list article,.creative-inc-theme.asin-page .asin-loop>div,.creative-inc-theme.asin-page .asin-network-path>span,.creative-inc-theme.asin-page .asin-core-visual>*{transition:opacity .46s var(--ci-ease),transform .46s var(--ci-ease),filter .46s var(--ci-ease)!important}
    .creative-inc-theme.asin-page .asin-hero.ci-section:not(.ci-visible) .asin-hero-image:before{opacity:0;transform:translate(9%,8%) rotate(7deg) scale(.9)}
    .creative-inc-theme.asin-page .asin-hero.ci-section:not(.ci-visible) .asin-hero-refrigerator{opacity:0;transform:translate(20px,28px) rotate(-8deg) scale(.85)}
    .creative-inc-theme.asin-page .asin-hero.ci-section.ci-visible .asin-hero-image:before{opacity:1;transform:translate(0) rotate(7deg) scale(1)}
    .creative-inc-theme.asin-page .asin-hero.ci-section.ci-visible .asin-hero-refrigerator{opacity:1;transform:translate(0) rotate(-8deg) scale(1);transition-delay:.12s!important}
    .creative-inc-theme.asin-page .ci-section .asin-steps li,.creative-inc-theme.asin-page .ci-section .asin-capability-list article,.creative-inc-theme.asin-page .ci-section .asin-loop>div,.creative-inc-theme.asin-page .ci-section .asin-network-path>span{opacity:0;transform:translateY(18px)}
    .creative-inc-theme.asin-page .ci-section.ci-visible .asin-steps li,.creative-inc-theme.asin-page .ci-section.ci-visible .asin-capability-list article,.creative-inc-theme.asin-page .ci-section.ci-visible .asin-loop>div,.creative-inc-theme.asin-page .ci-section.ci-visible .asin-network-path>span{opacity:1;transform:translateY(0)}
    .creative-inc-theme.asin-page .ci-section.ci-visible .asin-steps li:nth-child(2),.creative-inc-theme.asin-page .ci-section.ci-visible .asin-capability-list article:nth-child(2),.creative-inc-theme.asin-page .ci-section.ci-visible .asin-loop>div:nth-child(2),.creative-inc-theme.asin-page .ci-section.ci-visible .asin-network-path>span:nth-of-type(2){transition-delay:.1s!important}
    .creative-inc-theme.asin-page .ci-section.ci-visible .asin-steps li:nth-child(3),.creative-inc-theme.asin-page .ci-section.ci-visible .asin-capability-list article:nth-child(3),.creative-inc-theme.asin-page .ci-section.ci-visible .asin-loop>div:nth-child(3),.creative-inc-theme.asin-page .ci-section.ci-visible .asin-network-path>span:nth-of-type(3){transition-delay:.2s!important}
    .creative-inc-theme.asin-page .ci-section.ci-visible .asin-loop>div:nth-child(4){transition-delay:.28s!important}.creative-inc-theme.asin-page .ci-section.ci-visible .asin-loop>div:nth-child(5){transition-delay:.34s!important}.creative-inc-theme.asin-page .ci-section.ci-visible .asin-loop>div:nth-child(6){transition-delay:.4s!important}.creative-inc-theme.asin-page .ci-section.ci-visible .asin-loop>div:nth-child(7){transition-delay:.46s!important}
    .creative-inc-theme.asin-page .asin-core-item.ci-section:not(.ci-visible) .asin-core-visual{opacity:0;transform:scale(.95);filter:blur(5px)}
    .creative-inc-theme.asin-page .asin-core-item.ci-section.ci-visible .asin-core-visual{opacity:1;transform:scale(1);filter:blur(0);transition-delay:.06s!important}
    .creative-inc-theme.asin-page .asin-core-item.ci-section:not(.ci-visible) .asin-presence-magnet{opacity:0;transform:translateY(26px) rotate(-7deg) scale(.82)}
    .creative-inc-theme.asin-page .asin-core-item.ci-section.ci-visible .asin-presence-magnet{opacity:1;transform:translateY(0) rotate(-7deg) scale(1);transition-delay:.18s!important}
    .creative-inc-theme.asin-page .asin-core-item.ci-section:not(.ci-visible) .asin-phone{opacity:0;transform:translateY(28px) rotate(4deg) scale(.88)}
    .creative-inc-theme.asin-page .asin-core-item.ci-section.ci-visible .asin-phone{opacity:1;transform:translateY(0) rotate(4deg) scale(1);transition-delay:.16s!important}
    .creative-inc-theme.asin-page .asin-core-item.ci-section:not(.ci-visible) .asin-funnel>div{opacity:0;transform:translateY(14px)}
    .creative-inc-theme.asin-page .asin-core-item.ci-section.ci-visible .asin-funnel>div{opacity:1;transform:translateY(0)}
    .creative-inc-theme.asin-page .asin-core-item.ci-section.ci-visible .asin-funnel>div:nth-child(2){transition-delay:.1s!important}.creative-inc-theme.asin-page .asin-core-item.ci-section.ci-visible .asin-funnel>div:nth-child(3){transition-delay:.2s!important}
    .creative-inc-theme.asin-page .asin-core-visual:hover .asin-presence-magnet{transform:translateY(-7px) rotate(-5deg) scale(1.035)!important}.creative-inc-theme.asin-page .asin-core-visual:hover .asin-phone{transform:translateY(-8px) rotate(2deg) scale(1.025)!important}
  }

  @media(max-width:767px){
    :is(.creative-inc-theme,.creative-inc-shell) nav.fixed{height:64px}:is(.creative-inc-theme,.creative-inc-shell) nav.fixed>div{height:64px;padding-inline:20px!important}:is(.creative-inc-theme,.creative-inc-shell) nav.fixed.ci-nav-compact>div{width:calc(100% - 20px)!important}
    .creative-inc-theme .fc-wrap{width:calc(100% - 32px)!important}
    .creative-inc-theme .ci-section:not(.ci-visible)>*{transform:translateY(26px)}
    .creative-inc-theme .fc-hero{min-height:92svh!important;padding:116px 0 52px!important}.creative-inc-theme .fc-hero h1{font-size:clamp(52px,15vw,72px)!important;line-height:.88!important;margin-bottom:34px!important}.creative-inc-theme .fc-hero-copy>p{margin-left:0!important;font-size:15px!important}
    .creative-inc-theme .fc-hero-media{position:relative;right:auto;bottom:auto;width:88vw;max-width:none;margin:18px auto 0;aspect-ratio:1/1.05;transform:rotate(1deg);order:2}
    .creative-inc-theme .fc-statement{min-height:auto;padding:88px 0!important}.creative-inc-theme .fc-statement-inner{grid-template-columns:1fr!important;gap:38px!important}.creative-inc-theme .fc-statement h2{font-size:52px!important}
    .creative-inc-theme .fc-metrics{padding:94px 0!important}.creative-inc-theme .fc-metric-grid{gap:76px!important}.creative-inc-theme .fc-metric,.creative-inc-theme .fc-metric+.fc-metric{min-height:280px!important}.creative-inc-theme .fc-metric h3{margin-top:56px!important;font-size:36px!important}
    .creative-inc-theme .fc-how,.creative-inc-theme .daily-moments,.creative-inc-theme .fc-paths{padding:96px 0!important}.creative-inc-theme .fc-how-grid{grid-template-columns:1fr!important}.creative-inc-theme .fc-how-copy h2,.creative-inc-theme .daily-moments h2,.creative-inc-theme .fc-paths h2{font-size:58px!important;line-height:.88!important}.creative-inc-theme .fc-step-cards{padding:30px 2px!important;gap:34px!important}.creative-inc-theme .fc-steps li{min-height:220px!important}.creative-inc-theme .daily-moment{min-height:470px}.creative-inc-theme .daily-moment .ci-image-placeholder{min-height:470px}
    .creative-inc-theme.fc-cmo .wrap{padding:0 16px!important}.creative-inc-theme.fc-cmo .hero-grid{padding:130px 0 52px!important}.creative-inc-theme.fc-cmo .hero-grid>div{width:100%!important}.creative-inc-theme.fc-cmo .hero h1{font-size:clamp(58px,17vw,80px)!important}.creative-inc-theme.fc-cmo .hero .lede{margin-left:0!important;font-size:15px!important}.creative-inc-theme.fc-cmo .sec-head{grid-template-columns:1fr!important;padding:96px 0 48px!important}.creative-inc-theme.fc-cmo .sec-head h2{font-size:56px!important}.creative-inc-theme.fc-cmo .addon{padding-bottom:96px!important}.creative-inc-theme.fc-cmo .addon-grid{gap:72px!important}.creative-inc-theme.fc-cmo .addon-panel{min-height:300px!important}.creative-inc-theme.fc-cmo .what-list{gap:110px!important}.creative-inc-theme.fc-cmo .what-copy h3,.creative-inc-theme.fc-cmo .launch-dashboard-copy h3{font-size:54px!important}.creative-inc-theme.fc-cmo .retention-layer{min-height:72vh;padding:96px 0!important}.creative-inc-theme.fc-cmo .retention-statement,.creative-inc-theme.fc-cmo .retention-statement h1,.creative-inc-theme.fc-cmo .final h2{font-size:54px!important}
    .creative-inc-theme.asin-page .asin-shell{padding-inline:16px!important}.creative-inc-theme.asin-page .asin-hero-copy{padding-top:132px!important;padding-bottom:48px!important}.creative-inc-theme.asin-page .asin-hero h1{font-size:clamp(58px,17vw,80px)!important}.creative-inc-theme.asin-page .asin-lede{margin-left:0!important;font-size:15px!important}.creative-inc-theme.asin-page .asin-intro,.creative-inc-theme.asin-page .asin-how,.creative-inc-theme.asin-page .asin-capabilities,.creative-inc-theme.asin-page .asin-network,.creative-inc-theme.asin-page .asin-final{min-height:auto;padding-top:96px!important;padding-bottom:96px!important}.creative-inc-theme.asin-page .asin-intro h2,.creative-inc-theme.asin-page .asin-how h2,.creative-inc-theme.asin-page .asin-capabilities>h2,.creative-inc-theme.asin-page .asin-network h2,.creative-inc-theme.asin-page .asin-final h2{font-size:56px!important}.creative-inc-theme.asin-page .asin-final .asin-final-hero-title{font-size:clamp(30px,8vw,56px)!important;white-space:normal!important}.creative-inc-theme.asin-page .asin-steps{gap:70px!important;margin-top:70px!important}.creative-inc-theme.asin-page .asin-core-item{min-height:auto!important}.creative-inc-theme.asin-page .asin-core-copy{padding:88px 16px!important}.creative-inc-theme.asin-page .asin-core-copy h2{font-size:52px!important}.creative-inc-theme.asin-page .asin-core-visual{margin:0;min-height:520px!important;border-radius:0}.creative-inc-theme.asin-page .asin-capability-list{gap:72px!important;margin-top:72px!important}.creative-inc-theme.asin-page .asin-compound{min-height:auto;padding:96px 0!important}.creative-inc-theme.asin-page .asin-loop{margin-top:70px!important}
    .creative-inc-theme.asin-page .asin-story-flow{min-height:auto!important;padding:88px 0 96px!important;overflow:visible!important}.creative-inc-theme.asin-page .asin-story-sticky{position:static!important;height:auto!important;overflow:visible!important}.creative-inc-theme.asin-page .asin-story-copy{position:static!important;padding-top:0!important}.creative-inc-theme.asin-page .asin-story-copy h2{font-size:52px!important;max-width:9ch!important}.creative-inc-theme.asin-page .asin-story-card{position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;width:calc(100% - 32px)!important;margin:32px 16px 0!important;opacity:1!important;transform:none!important;box-shadow:0 20px 46px rgba(28,27,23,.12)!important}.creative-inc-theme.asin-page .asin-story-package{aspect-ratio:9/16!important}.creative-inc-theme.asin-page .asin-story-magnet{aspect-ratio:9/16!important}.creative-inc-theme.asin-page .asin-story-phone{width:min(52vw,230px)!important;aspect-ratio:9/16!important;margin:32px auto 0!important}.creative-inc-theme.asin-page .asin-story-steps{position:static!important;display:grid!important;grid-template-columns:1fr!important;gap:32px!important;margin:56px 16px 0!important;padding:0!important}.creative-inc-theme.asin-page .asin-story-steps li,.creative-inc-theme.asin-page .asin-story-steps li:nth-child(2),.creative-inc-theme.asin-page .asin-story-steps li:nth-child(3){opacity:1!important;transform:none!important}.creative-inc-theme.asin-page .asin-story-steps h3{font-size:27px!important}.creative-inc-theme.asin-page .asin-story-steps p{font-size:14px!important}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene{display:flex!important;flex-direction:column!important;min-height:auto!important;padding:0!important}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene .asin-core-visual{order:1!important;width:100%!important;min-height:520px!important}.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene .asin-core-copy,.creative-inc-theme.asin-page .asin-core-item.asin-editorial-scene:nth-child(even) .asin-core-copy{order:2!important;width:100%!important;padding:72px 16px 92px!important;align-self:stretch!important}.creative-inc-theme.asin-page .asin-core-copy h2{font-size:52px!important;max-width:9ch!important}.creative-inc-theme.asin-page .asin-compound{min-height:auto!important;padding:96px 0!important}.creative-inc-theme.asin-page .asin-compound>.asin-shell{position:static!important;min-height:auto!important;padding-top:0!important;padding-bottom:0!important}.creative-inc-theme.asin-page .asin-loop{justify-content:flex-start!important;overflow-x:auto!important}.creative-inc-theme.asin-page .asin-loop:before{display:none!important}
    .creative-inc-theme.fc-cmo .hero h1,.creative-inc-theme.asin-page .asin-hero h1{font-size:clamp(52px,15vw,72px)!important}.creative-inc-theme .fc-metric h3{margin-top:0!important}.creative-inc-theme .fc-paths h2{font-size:48px!important}.creative-inc-theme .fc-path h3{font-size:30px!important}.creative-inc-theme.asin-page .asin-core-item.asin-core-presence .asin-core-visual{min-height:0!important;aspect-ratio:1672/941!important}.creative-inc-theme.asin-page .asin-core-item.asin-core-reorder .asin-core-copy{align-self:stretch!important;padding-top:72px!important}.creative-inc-theme.asin-page .asin-core-copy h2{font-size:40px!important;max-width:11ch!important}
  }
  .creative-inc-theme.creative-inc-theme.creative-inc-theme :is(h1,h2,h3,h4,p){max-width:none!important}
  @media(prefers-reduced-motion:reduce){.creative-inc-theme .ci-section>*,.creative-inc-theme .ci-section h1,.creative-inc-theme .ci-section h2,.creative-inc-theme .ci-media img{opacity:1!important;transform:none!important;clip-path:none!important;transition:none!important}}
`;

export function CreativeDirection() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".creative-inc-theme");
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(root.querySelectorAll<HTMLElement>("section, article.asin-core-item"));
    const media = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".daily-moment,.what-media,.launch-dashboard-preview,.mission-step-visual,.asin-core-visual,.hero-card,.final .bg"
      )
    );
    const nav = document.querySelector<HTMLElement>("nav.fixed");

    sections.forEach((section) => section.classList.add("ci-section"));
    media.forEach((item) => item.classList.add("ci-media"));

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) section.classList.add("ci-visible");
    });

    if (reduceMotion) {
      sections.forEach((section) => section.classList.add("ci-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("ci-visible");
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -6%" }
    );
    sections.forEach((section) => observer.observe(section));

    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > viewport) return;
        const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
        section.style.setProperty("--ci-progress", progress.toFixed(3));
      });
      nav?.classList.toggle("ci-nav-compact", window.scrollY > 96);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      nav?.classList.remove("ci-nav-compact");
    };
  }, []);

  return <style dangerouslySetInnerHTML={{ __html: CREATIVE_DIRECTION_CSS }} />;
}
