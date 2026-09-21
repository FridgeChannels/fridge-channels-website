import {
  ArrowRight,
  Boxes,
  ClipboardList,
  Gauge,
  Home,
  Lightbulb,
  Link2,
  MapPin,
  Package,
  RefreshCw,
  Smartphone,
  Store,
  UserRoundCheck,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { Navigation } from "@/components/navigation";

const CALENDLY = "https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting";

const journeySteps = [
  {
    title: "Add it to the shipment.",
    copy: "Add the NFC-enabled brand magnet during a brand-controlled production or packaging stage, then ship it with the participating product.",
  },
  {
    title: "Make the next action one tap away.",
    copy: "The customer places the magnet on the fridge. A tap opens the remotely managed destination whenever the next purchase moment arrives.",
  },
  {
    title: "Route, learn, and improve.",
    copy: "Send customers to your Amazon Brand Store or another selected experience. Measure engagement and optimize the next journey.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="asin-label">{children}</p>;
}

function AssetNote({ number, title, desktop, mobile }: { number: string; title: string; desktop: string; mobile: string }) {
  return (
    <div className="asin-asset-note">
      <span>Image {number} · {title}</span>
      <small>Desktop {desktop} · Mobile {mobile}</small>
    </div>
  );
}

export default function AsinPlusLanding() {
  return (
    <div className="asin-page">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Navigation />

      <main>
        <section className="asin-hero" id="top">
          <div className="asin-hero-image" aria-hidden="true">
            <div className="asin-hero-refrigerator"><span>your<br />brand</span></div>
            <AssetNote number="01" title="Hero lifestyle scene" desktop="2400 × 1600 px" mobile="1200 × 1800 px" />
          </div>
          <div className="asin-hero-wash" aria-hidden="true" />
          <div className="asin-shell asin-hero-copy">
            <SectionLabel>ASIN+ for Amazon brands</SectionLabel>
            <h1>Make the next purchase happen <em>without search.</em></h1>
            <p className="asin-lede">
              FC ASIN+ turns every equipped product sold through Amazon into a persistent, attributable, and remotely editable brand entry point in the customer&apos;s home.
            </p>
            <p className="asin-hero-detail">
              Ship an NFC-enabled magnet with your product. Customers can tap it anytime to reach a dedicated page within your Amazon Brand Store.
            </p>
            <a className="asin-button" href="#request-sample">
              Request a sample <ArrowRight aria-hidden="true" />
            </a>
            <div className="asin-hero-notes" aria-label="ASIN+ benefits">
              <span>Fast reorder</span>
              <span>Opt-in customer insights</span>
              <span>Attributable traffic</span>
              <span>Portable beyond Amazon</span>
            </div>
          </div>
        </section>

        <section className="asin-intro asin-shell">
          <SectionLabel>Built for the moment after delivery</SectionLabel>
          <h2>Every product can become a lasting path back to your brand.</h2>
        </section>

        <section className="asin-how" id="how-it-works">
          <div className="asin-shell">
            <SectionLabel>How it works</SectionLabel>
            <h2>A physical touchpoint with a digital destination.</h2>
            <ol className="asin-steps">
              {journeySteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="asin-core">
          <article className="asin-core-item asin-core-presence">
            <div className="asin-core-visual asin-presence-visual">
              <span className="asin-visual-index">01</span>
              <div className="asin-presence-magnet"><span>your<br />brand</span></div>
              <p>Visible at home, every day.</p>
              <AssetNote number="02" title="NFC magnet in a real home" desktop="1600 × 1200 px" mobile="1080 × 1350 px" />
            </div>
            <div className="asin-core-copy">
              <SectionLabel>Lasting brand asset</SectionLabel>
              <h2>Stay present in the customer&apos;s home after delivery.</h2>
              <p>A branded NFC magnet turns each equipped product into a persistent household touchpoint, creating repeated brand exposure, 10+ daily visibility opportunities, and new opportunities for repeat purchase, with no incremental media cost after delivery.</p>
              <strong>10+ daily visibility opportunities</strong>
            </div>
          </article>

          <article className="asin-core-item asin-core-reorder">
            <div className="asin-core-visual asin-phone-visual">
              <span className="asin-visual-index">02</span>
              <div className="asin-phone">
                <div className="asin-phone-speaker" />
                <div className="asin-phone-content">
                  <span className="asin-phone-brand">your brand</span>
                  <span className="asin-phone-title">Restock your favorites</span>
                  <span className="asin-phone-product"><Package aria-hidden="true" /> Everyday essential</span>
                  <span className="asin-phone-button">Shop in Brand Store <ArrowRight aria-hidden="true" /></span>
                </div>
              </div>
              <div className="asin-tap-pulse"><span>tap</span></div>
              <AssetNote number="03" title="Brand Store mobile screen" desktop="1290 × 2796 px" mobile="1290 × 2796 px" />
            </div>
            <div className="asin-core-copy">
              <SectionLabel>Zero-search reorder</SectionLabel>
              <h2>Bring customers back without paying to win the same search again.</h2>
              <p>One tap takes customers directly to a brand-curated page within your Amazon Brand Store, bypassing search, removing the paid search click, and keeping competitors out of the first landing experience.</p>
              <strong>Tap <ArrowRight aria-hidden="true" /> Brand Store <ArrowRight aria-hidden="true" /> Reorder</strong>
            </div>
          </article>

          <article className="asin-core-item asin-core-traffic">
            <div className="asin-core-visual asin-funnel-visual">
              <span className="asin-visual-index">03</span>
              <div className="asin-funnel">
                <div><span>Tap</span><b>100</b></div>
                <div><span>Visit</span><b>68</b></div>
                <div><span>Purchase</span><b>24</b></div>
              </div>
              <p>See the journey, then improve it.</p>
              <AssetNote number="04" title="Attribution funnel or dashboard" desktop="1600 × 1200 px" mobile="1080 × 1350 px" />
            </div>
            <div className="asin-core-copy">
              <SectionLabel>Attributable traffic</SectionLabel>
              <h2>Turn household engagement into measurable Amazon traffic.</h2>
              <p>Taps can be routed through Amazon Attribution, allowing brands to measure traffic and conversions. Eligible purchases through the brand&apos;s selling account may qualify for Amazon Brand Referral Bonus credits.</p>
              <strong>Tap <ArrowRight aria-hidden="true" /> Visit <ArrowRight aria-hidden="true" /> Purchase</strong>
              <a className="asin-legal-link" href="#eligibility">Eligibility and measurement notes <ArrowRight aria-hidden="true" /></a>
            </div>
          </article>
        </section>

        <section className="asin-capabilities asin-shell">
          <SectionLabel>Built to stay useful</SectionLabel>
          <h2>Keep learning, adapting, and expanding after the product leaves the warehouse.</h2>
          <div className="asin-capability-list">
            <article>
              <UserRoundCheck aria-hidden="true" />
              <h3>Learn with permission.</h3>
              <p>With a clear value exchange and customer consent, selected taps can collect replenishment needs, preferences, usage patterns, feedback, and contact information as actionable zero-party data.</p>
            </article>
            <article>
              <RefreshCw aria-hidden="true" />
              <h3>Change the destination remotely.</h3>
              <p>Update the experience, feature a new product, respond to policy changes, or redirect customers to DTC, Walmart, or another channel without recalling or reprinting the magnet.</p>
            </article>
            <article>
              <Boxes aria-hidden="true" />
              <h3>Expand the network with every shipment.</h3>
              <p>When permitted by the distribution arrangement, ASIN+ can travel with products fulfilled by the brand or participating resellers while the brand retains control of the destination and customer experience.</p>
            </article>
          </div>
        </section>

        <section className="asin-compound">
          <div className="asin-shell">
            <SectionLabel>How ASIN+ creates compounding value</SectionLabel>
            <h2>One shipment becomes the start of a smarter next journey.</h2>
            <div className="asin-loop" aria-label="Ship then install then stay visible then tap then reorder then learn then optimize">
              {[
                [Package, "Ship"], [MapPin, "Install"], [Home, "Stay visible"], [Smartphone, "Tap"], [Store, "Reorder"], [Lightbulb, "Learn"], [Gauge, "Optimize"],
              ].map(([Icon, label]) => {
                const LoopIcon = Icon as typeof Package;
                return <div key={label as string}><LoopIcon aria-hidden="true" /><span>{label as string}</span></div>;
              })}
            </div>
            <p className="asin-compound-copy">Every equipped shipment can add another household entry point. Every successfully completed tap can generate measurable engagement. Every insight can improve the next content experience, product selection, or customer journey.</p>
            <div className="asin-measurement">
              <p>Pilot measurement funnel</p>
              <div><span>Tap attempt</span><ArrowRight aria-hidden="true" /><span>Notification opened</span><ArrowRight aria-hidden="true" /><span>Landing page loaded</span><ArrowRight aria-hidden="true" /><span>Amazon outbound click</span><ArrowRight aria-hidden="true" /><span>Attributed purchase</span></div>
            </div>
          </div>
        </section>

        <section className="asin-network asin-shell">
          <SectionLabel>Participating channel network</SectionLabel>
          <h2>The channel delivers the product. Your brand retains control of the destination.</h2>
          <div className="asin-network-path">
            <span><Package aria-hidden="true" /> Brand-controlled packaging</span>
            <ArrowRight aria-hidden="true" />
            <span><Link2 aria-hidden="true" /> Brand / participating reseller</span>
            <ArrowRight aria-hidden="true" />
            <span><Home aria-hidden="true" /> Customer home</span>
          </div>
          <p>When added during a brand-controlled production or packaging stage—and permitted by the applicable distribution arrangement—ASIN+ can travel with products fulfilled by the brand or participating resellers, while the brand retains control of the destination and customer experience.</p>
        </section>

        <section className="asin-final" id="request-sample">
          <div className="asin-shell">
            <SectionLabel>Request a sample</SectionLabel>
            <h2>See the experience your customer can keep on the fridge.</h2>
            <p>Your ASIN+ sample request will start with your brand, your primary ASIN, and the next action you want customers to take.</p>
            <div className="asin-sample-includes" aria-label="Sample request includes">
              <span>Branded NFC magnet sample</span>
              <span>Destination recommendation</span>
              <span>Attribution path outline</span>
            </div>
          </div>
        </section>

        <aside className="asin-disclaimer asin-shell" id="eligibility">
          <ClipboardList aria-hidden="true" />
          <p>Amazon Attribution and Brand Referral Bonus eligibility, measurement, and credits are determined by Amazon&apos;s current policies and the brand&apos;s selling-account setup. BRB credits are capped by the referral fee charged to the brand&apos;s selling account on each qualifying transaction. Marketplace competition may appear after a customer proceeds to a product detail page.</p>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}

const CSS = `
  .asin-page{--asin-bg:#efe6db;--asin-paper:#fbf7f1;--asin-ink:#1a1714;--asin-copy:#473f37;--asin-muted:#786e64;--asin-green:#0b3b2e;--asin-terracotta:#c8553d;--asin-sun:#f2c99a;background:var(--asin-bg);color:var(--asin-ink);font-family:var(--font-plus-jakarta),"Plus Jakarta Sans",sans-serif;overflow:hidden}
  .asin-page *{box-sizing:border-box}.asin-page a{color:inherit;text-decoration:none}.asin-page svg{width:1em;height:1em;stroke-width:1.8}.asin-shell{width:100%;max-width:1440px;margin:0 auto;padding-inline:24px}.asin-label{color:var(--asin-muted);font-size:11px;font-weight:700;letter-spacing:.08em;margin:0 0 16px}.asin-page h1,.asin-page h2,.asin-page h3{font-family:"Instrument Serif",Georgia,serif;font-weight:400;letter-spacing:-.025em}.asin-page h2{font-size:clamp(40px,8vw,82px);line-height:.96;margin:0}.asin-page p{margin:0}
  .asin-nav{position:sticky;z-index:5;top:0;display:grid;grid-template-columns:1fr auto;align-items:center;padding:16px 24px;background:rgba(11,59,46,.88);backdrop-filter:blur(18px) saturate(120%);color:white}.asin-brand{display:inline-flex;align-items:center;gap:9px;font-size:15px;font-weight:700;line-height:1}.asin-brand-mark{display:grid;place-items:center;width:26px;height:26px;border-radius:7px;background:white}.asin-brand-mark span{width:11px;height:11px;border:2px solid var(--asin-green);border-radius:50%;position:relative}.asin-brand-mark span:after{content:"";position:absolute;inset:2px;border-radius:50%;background:var(--asin-green)}.asin-nav-link{display:none}.asin-page .asin-nav-cta{display:inline-flex;align-items:center;gap:7px;min-height:44px;padding:10px 14px;border-radius:99px;background:white;color:var(--asin-ink);font-size:12px;font-weight:700;transition:transform .2s ease}.asin-nav-cta:active,.asin-button:active{transform:scale(.97)}.asin-nav-cta svg{font-size:15px}.asin-nav-cta-long{display:none}
  .asin-hero{min-height:800px;min-height:100svh;position:relative;display:flex;align-items:flex-end;background:#1e211c;color:white}.asin-hero-image{position:absolute;inset:0;overflow:hidden;background:radial-gradient(circle at 82% 26%,rgba(242,201,154,.25),transparent 22%),linear-gradient(145deg,#294b3d 0%,#17362a 54%,#0b2119 100%)}.asin-hero-image:before{content:"";position:absolute;right:-7%;bottom:-12%;width:58%;height:84%;border-radius:46px 46px 0 0;background:linear-gradient(120deg,#ded4c8,#8d8f87);box-shadow:inset 22px 0 35px rgba(255,255,255,.24),-22px 16px 50px rgba(0,0,0,.18);transform:rotate(7deg)}.asin-hero-image:after{content:"";position:absolute;right:15%;bottom:13%;width:105px;height:105px;border-radius:20px;background:var(--asin-terracotta);box-shadow:0 16px 32px -14px rgba(0,0,0,.7);transform:rotate(-8deg)}.asin-hero-refrigerator{position:absolute;z-index:1;right:17%;bottom:20%;width:105px;height:105px;display:grid;place-items:center;color:white;text-align:center;font-family:"Instrument Serif",Georgia,serif;font-size:23px;line-height:.85;transform:rotate(-8deg)}.asin-hero-wash{position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,19,15,.08) 0%,rgba(8,19,15,.12) 24%,rgba(8,19,15,.8) 70%,rgba(8,19,15,.96) 100%)}.asin-hero-copy{position:relative;padding-top:170px;padding-bottom:40px}.asin-hero .asin-label{color:rgba(255,255,255,.7)}.asin-hero h1{font-size:clamp(54px,15vw,130px);line-height:.9;margin:0;max-width:10ch}.asin-hero h1 em{display:block;color:var(--asin-sun);font-style:italic}.asin-lede{font-size:18px;line-height:1.5;max-width:610px;margin-top:30px!important;color:rgba(255,255,255,.95)}.asin-hero-detail{display:none}.asin-page .asin-button{display:inline-flex;align-items:center;gap:11px;margin-top:28px;border-radius:999px;background:white;color:var(--asin-ink);padding:15px 20px;font-size:14px;font-weight:700;box-shadow:0 12px 36px -20px rgba(0,0,0,.75);transition:transform .2s ease,background .2s ease}.asin-button:hover{background:var(--asin-sun)}.asin-button svg{font-size:18px}.asin-hero-notes{display:flex;gap:9px 16px;flex-wrap:wrap;margin-top:38px;color:rgba(255,255,255,.78);font-size:11px}.asin-hero-notes span{display:inline-flex;align-items:center;gap:7px}.asin-hero-notes span:before{content:"";width:5px;height:5px;border-radius:50%;background:var(--asin-sun)}.asin-asset-note{position:absolute;z-index:3;left:24px;right:24px;bottom:22px;display:grid;gap:5px;color:rgba(255,255,255,.82);font-size:10px;font-weight:700;letter-spacing:.04em}.asin-asset-note small{color:rgba(255,255,255,.6);font-size:9px;font-weight:500;letter-spacing:0}.asin-hero-image .asin-asset-note{top:104px;bottom:auto;color:rgba(255,255,255,.78)}
  .asin-intro{padding-top:104px;padding-bottom:64px}.asin-intro h2{max-width:13ch}.asin-core{max-width:1440px;margin:0 auto}.asin-core-item{display:flex;flex-direction:column}.asin-core-visual{position:relative;min-height:500px;overflow:hidden}.asin-core-copy{padding:56px 24px 90px}.asin-core-copy h2{font-size:clamp(42px,10vw,76px);max-width:11ch}.asin-core-copy>p{font-size:16px;line-height:1.65;color:var(--asin-copy);max-width:580px;margin-top:24px}.asin-core-copy strong{display:flex;align-items:center;flex-wrap:wrap;gap:8px;color:var(--asin-green);font-size:13px;line-height:1.4;margin-top:28px}.asin-core-copy strong svg{font-size:16px}.asin-visual-index{position:absolute;top:22px;left:24px;z-index:2;color:var(--asin-muted);font-size:12px;font-weight:700;letter-spacing:.08em}
  .asin-presence-visual{background:linear-gradient(145deg,#45695b 0%,#1b3c31 72%,#102820 100%);display:flex;align-items:flex-end;padding:0 24px 30px;color:white}.asin-presence-visual:before{content:"";position:absolute;inset:12% 9% 0;border-radius:120px 120px 0 0;background:linear-gradient(108deg,#cfcbc1,#858b87);box-shadow:inset 18px 0 28px rgba(255,255,255,.32)}.asin-presence-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 45%,rgba(4,20,14,.7) 100%)}.asin-presence-visual .asin-visual-index{color:rgba(255,255,255,.75)}.asin-presence-visual p{position:relative;z-index:1;font-family:"Instrument Serif",Georgia,serif;font-size:39px;line-height:.95;max-width:6ch}.asin-presence-magnet{position:absolute;z-index:1;right:18%;top:34%;display:grid;place-items:center;width:94px;height:94px;border-radius:18px;background:var(--asin-terracotta);box-shadow:0 16px 32px -14px rgba(0,0,0,.7);transform:rotate(-7deg);text-align:center;font-family:"Instrument Serif",Georgia,serif;font-size:20px;line-height:.85}.asin-presence-magnet:after{content:"";position:absolute;inset:8px;border:1px solid rgba(255,255,255,.65);border-radius:12px}.asin-presence-visual .asin-asset-note{left:24px;right:24px;bottom:20px}
  .asin-phone-visual{background:#d5c5b4;display:grid;place-items:center;min-height:580px}.asin-phone-visual .asin-asset-note{color:var(--asin-copy)}.asin-phone-visual .asin-asset-note small{color:var(--asin-muted)}.asin-phone{position:relative;width:222px;height:456px;border:8px solid #181717;border-radius:34px;background:#f5eee5;box-shadow:0 32px 45px -25px rgba(35,24,18,.7);padding:34px 13px 14px;transform:rotate(4deg)}.asin-phone-speaker{position:absolute;top:10px;left:50%;width:58px;height:12px;transform:translateX(-50%);border-radius:0 0 10px 10px;background:#181717}.asin-phone-content{display:flex;flex-direction:column;height:100%;padding:16px 13px 14px;background:linear-gradient(155deg,#f2d8b1,#efeee8 47%,#c6dfd0);border-radius:20px}.asin-phone-brand{font-size:10px;font-weight:700;color:var(--asin-green)}.asin-phone-title{font-family:"Instrument Serif",Georgia,serif;font-size:30px;line-height:.9;margin-top:42px;color:var(--asin-ink)}.asin-phone-product{display:flex;align-items:center;gap:7px;margin-top:auto;padding:12px 0;font-size:11px;font-weight:700}.asin-phone-product svg{font-size:17px}.asin-phone-button{display:flex;align-items:center;justify-content:space-between;background:var(--asin-green);color:white;border-radius:999px;padding:11px 12px;font-size:10px;font-weight:700}.asin-phone-button svg{font-size:13px}.asin-tap-pulse{position:absolute;right:12%;bottom:20%;display:grid;place-items:center;width:80px;height:80px;border-radius:50%;background:rgba(251,247,241,.76);box-shadow:0 0 0 14px rgba(251,247,241,.24),0 0 0 28px rgba(251,247,241,.12);font-size:12px;font-weight:700;color:var(--asin-green)}
  .asin-funnel-visual{background:var(--asin-green);color:white;padding:72px 24px 94px;display:flex;flex-direction:column;justify-content:flex-end}.asin-funnel-visual .asin-visual-index{color:rgba(255,255,255,.63)}.asin-funnel{display:grid;gap:12px;width:100%;max-width:360px;margin-inline:auto}.asin-funnel>div{display:flex;justify-content:space-between;align-items:center;margin-inline:auto;height:70px;padding:0 22px;background:rgba(255,255,255,.12);font-family:"Instrument Serif",Georgia,serif;font-size:27px;transition:transform .3s ease}.asin-funnel>div:nth-child(1){width:100%}.asin-funnel>div:nth-child(2){width:76%}.asin-funnel>div:nth-child(3){width:53%;background:var(--asin-terracotta)}.asin-funnel b{font-family:var(--font-plus-jakarta),sans-serif;font-size:13px}.asin-funnel-visual p{margin-top:54px;font-size:13px;color:rgba(255,255,255,.73)}
  .asin-capabilities{padding-top:98px;padding-bottom:100px}.asin-capabilities>h2{max-width:14ch}.asin-capability-list{display:grid;gap:54px;margin-top:56px}.asin-capability-list article svg{font-size:28px;color:var(--asin-terracotta)}.asin-capability-list h3{font-size:33px;line-height:1;margin:18px 0 0;max-width:10ch}.asin-capability-list p{font-size:15px;line-height:1.65;color:var(--asin-copy);max-width:33ch;margin-top:16px}
  .asin-how{padding:90px 0;background:var(--asin-paper)}.asin-how h2{max-width:12ch}.asin-steps{list-style:none;padding:0;margin:54px 0 0;display:grid;gap:44px}.asin-steps li{display:grid;grid-template-columns:46px 1fr;column-gap:16px;align-items:start}.asin-steps li span{grid-row:span 2;color:var(--asin-terracotta);font-size:12px;font-weight:700;letter-spacing:.08em;padding-top:5px}.asin-steps li h3{font-size:30px;line-height:1;margin:0}.asin-steps li p{font-size:16px;line-height:1.55;color:var(--asin-copy);max-width:38ch;margin-top:12px}.asin-legal-link{display:inline-flex;align-items:center;gap:7px;margin-top:22px;color:var(--asin-muted);font-size:12px;font-weight:700}.asin-legal-link svg{font-size:14px}
  .asin-compound{padding:96px 0;background:var(--asin-green);color:white}.asin-compound .asin-label{color:rgba(255,255,255,.62)}.asin-compound h2{max-width:11ch}.asin-loop{display:flex;align-items:center;gap:16px;overflow-x:auto;margin-top:56px;padding-bottom:12px;scrollbar-width:none}.asin-loop::-webkit-scrollbar{display:none}.asin-loop>div{flex:0 0 96px;display:grid;gap:11px;place-items:center;text-align:center;color:white}.asin-loop>div:not(:last-child):after{content:"→";position:absolute;margin-left:125px;color:var(--asin-sun);font-size:16px}.asin-loop svg{font-size:25px;color:var(--asin-sun)}.asin-loop span{font-size:12px;font-weight:700;white-space:nowrap}.asin-compound-copy{max-width:610px;font-size:16px;line-height:1.65;color:rgba(255,255,255,.78);margin-top:36px!important}.asin-measurement{margin-top:54px;padding:24px 0 0;color:rgba(255,255,255,.7)}.asin-measurement>p{font-size:11px;letter-spacing:.08em;font-weight:700;margin-bottom:18px}.asin-measurement>div{display:flex;align-items:center;gap:12px;overflow-x:auto;padding-bottom:8px;scrollbar-width:none}.asin-measurement>div::-webkit-scrollbar{display:none}.asin-measurement span{flex:0 0 auto;font-size:12px;white-space:nowrap}.asin-measurement svg{flex:0 0 auto;color:var(--asin-sun);font-size:15px}
  .asin-network{padding-top:100px;padding-bottom:100px}.asin-network h2{max-width:12ch}.asin-network-path{display:flex;align-items:center;gap:16px;overflow-x:auto;padding:44px 0 24px;scrollbar-width:none}.asin-network-path::-webkit-scrollbar{display:none}.asin-network-path>span{flex:0 0 auto;display:flex;flex-direction:column;gap:13px;min-width:168px;font-family:"Instrument Serif",Georgia,serif;font-size:26px;line-height:.95}.asin-network-path>span svg{font-size:25px;color:var(--asin-terracotta)}.asin-network-path>svg{flex:0 0 auto;color:var(--asin-terracotta);font-size:20px}.asin-network>p{max-width:760px;margin-top:26px;font-size:16px;line-height:1.65;color:var(--asin-copy)}
  .asin-final{padding:100px 0;background:#ddcfbf}.asin-final h2{max-width:12ch}.asin-final p{max-width:520px;margin-top:24px;font-size:17px;line-height:1.55;color:var(--asin-copy)}.asin-sample-includes{display:grid;gap:12px;margin-top:36px;color:var(--asin-green);font-size:13px;font-weight:700}.asin-sample-includes span{display:flex;align-items:center;gap:10px}.asin-sample-includes span:before{content:"";width:7px;height:7px;border-radius:50%;background:var(--asin-terracotta)}.asin-disclaimer{display:flex;gap:14px;align-items:flex-start;padding-top:30px;padding-bottom:30px;color:var(--asin-muted)}.asin-disclaimer svg{flex:0 0 auto;font-size:17px;margin-top:3px}.asin-disclaimer p{max-width:920px;font-size:11px;line-height:1.55}
  @media (min-width:720px){.asin-shell{padding-inline:48px}.asin-nav{padding:18px 48px;grid-template-columns:1fr auto auto;gap:34px}.asin-nav-link{display:block;font-size:13px;font-weight:700}.asin-nav-cta-short{display:none}.asin-nav-cta-long{display:inline}.asin-hero{min-height:820px}.asin-hero-copy{padding-top:170px;padding-bottom:76px}.asin-hero-detail{display:block;max-width:590px;margin-top:14px!important;font-size:15px;line-height:1.55;color:rgba(255,255,255,.73)}.asin-core-item{display:grid;grid-template-columns:1fr 1fr;min-height:580px}.asin-core-item:nth-child(even) .asin-core-visual{order:2}.asin-core-copy{display:flex;flex-direction:column;justify-content:center;padding:72px clamp(44px,7vw,128px)}.asin-core-item:nth-child(even) .asin-core-copy{order:1}.asin-capability-list{grid-template-columns:repeat(3,1fr);gap:46px}.asin-how{padding:130px 0}.asin-steps{grid-template-columns:repeat(3,1fr);column-gap:42px;row-gap:56px}.asin-steps li{display:block}.asin-steps li p{margin-top:16px}.asin-loop{gap:36px;justify-content:space-between}.asin-loop>div{flex-basis:auto}.asin-loop>div:not(:last-child):after{margin-left:118px}.asin-network-path{gap:30px}.asin-network-path>span{min-width:190px}.asin-final{padding:140px 0}.asin-sample-includes{grid-template-columns:repeat(3,max-content);gap:28px}}
  @media (min-width:1100px){.asin-shell{padding-inline:68px}.asin-hero h1{font-size:108px}.asin-intro{padding-top:144px;padding-bottom:92px}.asin-core-visual{min-height:650px}.asin-core-copy{padding:88px clamp(68px,8vw,160px)}.asin-capabilities{padding-top:142px;padding-bottom:144px}.asin-capability-list{margin-top:76px}.asin-phone{transform:rotate(5deg) scale(1.12)}.asin-tap-pulse{right:20%;bottom:19%}.asin-compound,.asin-final{padding:144px 0}}
  @media (prefers-reduced-motion: no-preference){.asin-core-item{opacity:0;transform:translateY(24px);animation:asin-rise .7s ease-out forwards}.asin-core-item:nth-child(2){animation-delay:.12s}.asin-core-item:nth-child(3){animation-delay:.2s}.asin-funnel>div:hover{transform:translateX(8px)}@keyframes asin-rise{to{opacity:1;transform:translateY(0)}}}
  @media (prefers-reduced-motion: reduce){.asin-page *{scroll-behavior:auto!important;animation:none!important;transition:none!important}}
`;
