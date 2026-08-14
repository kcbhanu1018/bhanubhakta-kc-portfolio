/**
 * SERVICE LEDGER DESIGN SYSTEM
 * Editorial industrial portfolio: ink navy, warm ivory, and service brass.
 * Layout favors an asymmetric dossier structure, inspection rules, and concise operational language.
 */
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  ClipboardCheck,
  Download,
  ExternalLink,
  FileText,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { siFacebook, siTiktok } from "simple-icons/icons";

const navItems = [
  ["Profile", "profile"],
  ["Experience", "experience"],
  ["Capabilities", "capabilities"],
  ["Credentials", "credentials"],
  ["Contact", "contact"],
] as const;

const experience = [
  {
    role: "Housekeeping Senior Supervisor",
    company: "Barakah Nuclear Power Plant (ENEC Barakah)",
    location: "Abu Dhabi, UAE",
    period: "Jun 2026 — Present",
    points: [
      "Lead daily housekeeping operations, staff allocation, and facility maintenance across the Barakah Nuclear Power Plant project.",
      "Enforce high standards of safety, hygiene, and nuclear-security environmental protocols alongside systematic daily inspections.",
      "Manage staff scheduling, performance evaluations, and operational workflow optimization across teams.",
    ],
  },
  {
    role: "Housekeeping Supervisor",
    company: "Aura Skypool And Lounge LLC (Sunset Hospitality Group)",
    location: "Dubai, UAE",
    period: "Jan 2025 — May 2026",
    points: [
      "Managed daily housekeeping operations across luxury guest areas, pool deck, and back-of-house facilities.",
      "Supervised and mentored team members, assigned shifts, and performed detailed quality inspections.",
      "Upheld luxury service-presentation standards while maintaining strict health, safety, and hygiene compliance.",
    ],
  },
  {
    role: "Housekeeping Supervisor",
    company: "Royal Catering Services Co. LLC (ENEC Barakah)",
    location: "Abu Dhabi, UAE",
    period: "Jul 2023 — Jan 2025",
    points: [
      "Assigned operational tasks, created monthly staff rosters, and delivered detailed orientation and hands-on training.",
      "Managed chemical and cleaning-supply inventories, issued equipment, and optimized stock reordering.",
      "Assisted in recruitment, performance reviews, promotions, and team transfers.",
    ],
  },
  {
    role: "Assistant Housekeeping Supervisor",
    company: "Global Emirates Services Co. LLC (ADNOC)",
    location: "Abu Dhabi, UAE",
    period: "Aug 2019 — Jun 2023",
    points: [
      "Inspected guest and corporate areas to ensure compliance with strict ADNOC cleanliness standards.",
      "Organized shift replacements, resolved service complaints promptly, and conducted chemical-safety training.",
    ],
  },
];

const capabilities = [
  "Housekeeping Operations Leadership",
  "Quality Control & Room Inspection",
  "COSHH & Hygiene Compliance",
  "BICSc Cleaning Standards",
  "Staff Roster & Scheduling",
  "Inventory & Stock Management",
  "Team Training & Onboarding",
  "Microsoft Office Suite",
  "Graphic Design (Photoshop / Illustrator)",
];

const certifications = [
  ["BICSc License To Practice (LTP)", "British Institute of Cleaning Science · 2024"],
  ["COSHH Certification", "Control of Substances Hazardous to Health · Ecosafe Training · 2024"],
  ["Emergency First Aid & Fire Warden", "Ecosafe Training · 2023"],
  ["Computer Operator Training", "National Skill Testing Board (NSTB), Nepal · 2017"],
];

function InspectionRule({ label }: { label?: string }) {
  return (
    <div className="inspection-rule" aria-hidden="true">
      <span />
      {label && <em>{label}</em>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3F0EA] text-[#142B42] selection:bg-[#D4A64A] selection:text-[#142B42]">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border border-white/20 bg-[#173A52]/92 px-4 py-3 text-[#F7F4ED] shadow-[0_18px_40px_rgba(33,65,82,0.18)] backdrop-blur-md sm:px-5">
          <a href="#top" className="flex items-center gap-3" aria-label="Go to top">
            <img src="/manus-storage/bk-inspection-mark_5c92d9c6.png" alt="BK inspection mark" className="h-10 w-10 object-contain" />
            <span className="header-signature leading-none">
              <small className="block text-[0.54rem] font-extrabold uppercase tracking-[0.2em] text-[#D4A64A]">Housekeeping operations</small>
              <strong className="mt-1 block font-display text-[1.25rem] font-normal tracking-[-0.02em] text-[#F7F4ED]">Bhanubhakta <i className="text-[#E5BB63]">KC</i></strong>
              <span className="mt-1 flex items-center gap-1.5 text-[0.5rem] font-bold uppercase tracking-[0.16em] text-[#AEBEC7]"><span className="h-1 w-1 bg-[#D4A64A]" /> Senior supervisor</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link text-[0.67rem] font-bold uppercase tracking-[0.15em] text-[#DCE3E4]">
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden items-center gap-2 bg-[#D4A64A] px-4 py-2 text-[0.67rem] font-extrabold uppercase tracking-[0.14em] text-[#10263C] transition hover:bg-[#F2CC79] active:scale-[0.97] sm:flex">
            Start a conversation <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/20 text-[#F7F4ED] lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-auto max-w-[1440px] border-x border-b border-white/10 bg-[#10263C] px-5 py-5 lg:hidden">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={closeMenu} className="flex items-center justify-between border-b border-white/10 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#F7F4ED]">
                  {label} <ChevronRight size={16} className="text-[#D4A64A]" />
                </a>
              ))}
            </nav>
            <a href="#contact" onClick={closeMenu} className="mt-5 flex items-center justify-center gap-2 bg-[#D4A64A] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#10263C]">
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-depth relative min-h-[760px] overflow-hidden pt-28 sm:pt-32 lg:min-h-[820px]">
          <div className="blueprint-grid absolute inset-0 opacity-30" />
          <div className="hero-orbit absolute -right-24 top-24 h-[30rem] w-[30rem] rounded-full border border-[#D4A64A]/25 sm:h-[39rem] sm:w-[39rem]" />
          <div className="hero-orbit absolute -right-8 top-44 h-[23rem] w-[23rem] rounded-full border border-white/10 sm:h-[31rem] sm:w-[31rem]" />

          <div className="relative mx-auto grid min-h-[630px] max-w-[1440px] items-end px-5 pb-16 sm:px-8 sm:pb-20 lg:min-h-[690px] lg:grid-cols-[minmax(0,0.69fr)_minmax(330px,0.31fr)] lg:gap-8 lg:px-12 lg:pb-12">
            <div className="z-10 max-w-4xl">
              <div className="mb-7 flex items-center gap-3 text-[#E5BB63]">
                <span className="h-2 w-2 bg-current" />
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em]">Senior Housekeeping Supervisor</span>
              </div>
              <h1 className="hero-name font-display font-normal leading-[0.76] tracking-[-0.075em] text-[#F7F4ED]">
                <span className="block text-[clamp(3.8rem,9vw,9.3rem)]">Bhanubhakta</span>
                <span className="ml-[0.06em] block text-[clamp(4.4rem,10.8vw,11.3rem)] italic text-[#E5BB63]">KC</span>
              </h1>
              <div className="mt-8 flex max-w-2xl items-start gap-4 border-y border-white/20 py-4">
                <span className="mt-1 h-7 w-[3px] shrink-0 bg-[#D4A64A]" />
                <p className="text-[0.66rem] font-extrabold uppercase leading-6 tracking-[0.18em] text-[#DCE7EA] sm:text-[0.72rem]">Order behind every exceptional environment.</p>
              </div>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#DCE7EA] sm:text-lg">
                Leading housekeeping operations for high-security facilities and luxury hospitality spaces, with a focus on quality, safety, and team performance.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#experience" className="group flex items-center justify-center gap-3 bg-[#D4A64A] px-5 py-3.5 text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-[#10263C] transition hover:bg-[#F2CC79] active:scale-[0.97]">
                  View experience <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
                </a>
                <a href="/manus-storage/Bhanubhakta_KC_Resume_d682a5d8.pdf" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 border border-white/35 px-5 py-3.5 text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-[#F7F4ED] transition hover:border-[#D4A64A] hover:text-[#D4A64A] active:scale-[0.97]">
                  Download résumé <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>

            <aside className="relative mt-10 min-h-[360px] lg:mt-0 lg:min-h-[670px]">
              <div className="hero-portrait-panel absolute inset-x-2 bottom-0 top-12 border border-white/15 bg-[#204760]/40 backdrop-blur-[1px] lg:inset-x-0 lg:top-6" />
              <img src="/manus-storage/bhanubhakta-kc-portrait_8ebafbda.png" alt="Bhanubhakta KC" className="hero-portrait absolute bottom-0 left-1/2 z-10 h-[375px] max-w-none -translate-x-1/2 object-contain sm:h-[455px] lg:h-[650px]" />
              <div className="absolute bottom-5 left-5 z-20 border-l-2 border-[#D4A64A] bg-[#10263C]/80 px-4 py-3 backdrop-blur-md lg:bottom-7 lg:left-7">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#AEBEC7]">Based in</p>
                <p className="mt-1 flex items-center gap-2 font-display text-xl text-[#F7F4ED]"><MapPin size={16} className="text-[#D4A64A]" /> Abu Dhabi, UAE</p>
              </div>
              <div className="absolute right-5 top-4 z-20 hidden border border-white/20 bg-[#F7F4ED]/95 px-4 py-3 text-[#142B42] shadow-[0_12px_30px_rgba(5,22,35,0.16)] sm:block lg:right-0 lg:top-8">
                <span className="block text-[0.55rem] font-extrabold uppercase tracking-[0.17em] text-[#8D661F]">Professional record</span>
                <strong className="mt-1 block font-display text-2xl font-normal">7+ years</strong>
              </div>
            </aside>
          </div>
        </section>

        <section className="social-ledger bg-[#F4F0E8] px-5 py-9 text-[#142B42] sm:px-8 lg:px-11" aria-label="Social media presence">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden border border-[#C6D1D0] bg-[#FCFBF7] shadow-[0_18px_38px_rgba(28,60,75,0.08)] lg:grid-cols-[0.28fr_0.72fr] lg:items-stretch">
            <div>
              <div className="h-full border-b border-[#C6D1D0] bg-[linear-gradient(135deg,#F2D28D_0%,#E5B85D_100%)] px-6 py-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-7">
                <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.19em] text-[#29475B]">Connected community</p>
                <p className="mt-2 max-w-[12rem] font-display text-[1.75rem] leading-[0.92] tracking-[-0.04em] text-[#142B42]">Follow the journey.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3">
              <a href="https://www.facebook.com/bhanu622" target="_blank" rel="noreferrer" className="social-ledger-link group flex items-center gap-4 border-b border-[#D1DAD8] px-6 py-5 transition sm:border-b-0 sm:border-r sm:px-5 lg:px-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1877F2] text-white shadow-[0_5px_12px_rgba(24,119,242,0.24)] transition group-hover:-translate-y-0.5"><svg aria-label="Facebook" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d={siFacebook.path} /></svg></span>
                <span className="min-w-0 flex-1"><span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#536B78]">Facebook</span><strong className="mt-1 block font-display text-xl font-normal text-[#142B42]">10,000+ <small className="font-sans text-[0.57rem] font-bold uppercase tracking-[0.12em] text-[#9B7022]">Followers</small></strong></span>
                <ExternalLink size={15} className="shrink-0 text-[#9B7022] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="https://www.linkedin.com/in/bhanubhakta-kc/" target="_blank" rel="noreferrer" className="social-ledger-link group flex items-center gap-4 border-b border-[#D1DAD8] px-6 py-5 transition sm:border-b-0 sm:border-r sm:px-5 lg:px-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white shadow-[0_5px_12px_rgba(10,102,194,0.24)] transition group-hover:-translate-y-0.5"><img src="/manus-storage/linkedin-official-mark_551cf140.png" alt="LinkedIn" className="h-6 w-6 object-contain" /></span>
                <span className="min-w-0 flex-1"><span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#536B78]">LinkedIn</span><strong className="mt-1 block font-display text-xl font-normal text-[#142B42]">1,200+ <small className="font-sans text-[0.57rem] font-bold uppercase tracking-[0.12em] text-[#9B7022]">Followers</small></strong></span>
                <ExternalLink size={15} className="shrink-0 text-[#9B7022] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="https://tiktok.com/bhanu1018" target="_blank" rel="noreferrer" className="social-ledger-link group flex items-center gap-4 px-6 py-5 transition sm:px-5 lg:px-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#111827] text-white shadow-[0_5px_12px_rgba(17,24,39,0.2)] transition group-hover:-translate-y-0.5"><svg aria-label="TikTok" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d={siTiktok.path} /></svg></span>
                <span className="min-w-0 flex-1"><span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#536B78]">TikTok</span><strong className="mt-1 block font-display text-xl font-normal text-[#142B42]">3,000+ <small className="font-sans text-[0.57rem] font-bold uppercase tracking-[0.12em] text-[#9B7022]">Followers</small></strong></span>
                <ExternalLink size={15} className="shrink-0 text-[#9B7022] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        <section id="profile" className="relative bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
            <div>
              <p className="eyebrow">01 / Professional profile</p>
              <h2 className="section-title mt-5">Built for the details that make a facility work.</h2>
              <InspectionRule label="Operational standard" />
            </div>
            <div className="lg:pt-10">
              <p className="text-xl leading-9 text-[#25415A] sm:text-2xl sm:leading-10">
                Results-driven and BICSc-certified, Bhanubhakta combines hands-on housekeeping leadership with the discipline required by complex, safety-led environments.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  [ShieldCheck, "Safety first", "COSHH-aware systems, chemical safety, hygiene compliance, and secure-site discipline."],
                  [ClipboardCheck, "Quality made visible", "Routine inspections and presentation standards that keep every area consistently ready."],
                  [BriefcaseBusiness, "Teams in rhythm", "Clear rosters, practical coaching, and considered task allocation for dependable daily delivery."],
                  [Sparkles, "Service with finish", "An eye for the polished guest experience expected within premium hospitality settings."],
                ].map(([Icon, title, copy]) => {
                  const IconComponent = Icon as typeof ShieldCheck;
                  return (
                    <article key={title as string} className="group border border-[#CBD0CF] bg-[#F9F7F2] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#D4A64A] hover:shadow-[0_16px_30px_rgba(26,53,70,0.08)]">
                      <IconComponent size={22} className="text-[#B48224]" strokeWidth={1.8} />
                      <h3 className="mt-5 text-sm font-extrabold uppercase tracking-[0.09em] text-[#142B42]">{title as string}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#5E6E78]">{copy as string}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E8E4DA] px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4"><img src="/manus-storage/bk-inspection-mark_5c92d9c6.png" alt="" className="h-12 w-12 object-contain" /><p className="max-w-xl text-sm leading-6 text-[#415464]">A considered approach to cleanliness, compliance, and continuity across demanding environments.</p></div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.63rem] font-bold uppercase tracking-[0.17em] text-[#40566A]"><span>High-security facilities</span><span>Luxury hospitality</span><span>Team leadership</span></div>
          </div>
        </section>

        <section id="experience" className="career-record relative px-5 py-20 text-[#142B42] sm:px-8 lg:px-12 lg:py-28">
          <div className="blueprint-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
              <div>
                <p className="eyebrow text-[#D4A64A]">02 / Career record</p>
                <h2 className="section-title mt-5 text-[#F7F4ED]">Experience that holds the standard.</h2>
                <p className="mt-6 max-w-sm border-l border-[#B78428] pl-4 text-sm leading-7 text-[#405B6B]">From energy infrastructure to luxury guest spaces, the work is grounded in consistent service, safe systems, and teams that know what excellent looks like.</p>
              </div>
              <div className="border-t border-[#8FA5AD]">
                {experience.map((job, index) => (
                  <article key={job.company} className="group grid gap-5 border-b border-[#A7BBC0] py-8 transition duration-200 hover:bg-white/70 sm:grid-cols-[138px_1fr] sm:gap-8 sm:px-4 lg:py-10 lg:px-5">
                    <div>
                      <p className="inline-block border-b border-[#B78428] pb-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#8D661F]">{job.period}</p>
                      <p className="mt-3 flex items-center gap-2 text-xs leading-5 text-[#4F6876]"><MapPin size={13} className="shrink-0 text-[#A37624]" /> {job.location}</p>
                    </div>
                    <div>
                      <span className="mb-4 inline-flex h-7 w-7 items-center justify-center border border-[#B78428] bg-[#F7F4ED] font-display text-base text-[#8D661F]">0{index + 1}</span>
                      <h3 className="font-display text-2xl leading-tight text-[#142B42] sm:text-3xl">{job.role}</h3>
                      <p className="mt-2 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-[#8D661F]">{job.company}</p>
                      <ul className="mt-5 grid gap-3">
                        {job.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-[#28495B]"><Check size={17} className="mt-0.5 shrink-0 text-[#A37624]" strokeWidth={2.6} /><span>{point}</span></li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="eyebrow">03 / Core capabilities</p>
              <h2 className="section-title mt-5">The practical toolkit behind reliable delivery.</h2>
              <a href="/manus-storage/Bhanubhakta_KC_Resume_d682a5d8.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-[#D4A64A] pb-2 text-[0.67rem] font-extrabold uppercase tracking-[0.14em] text-[#142B42] transition hover:text-[#B48224]">Review full résumé <ArrowUpRight size={15} /></a>
            </div>
            <div className="border-t border-[#BFC7C6]">
              {capabilities.map((capability, index) => (
                <div key={capability} className="group flex items-center justify-between gap-5 border-b border-[#BFC7C6] py-4 sm:py-5">
                  <span className="text-[0.62rem] font-bold tracking-[0.14em] text-[#A37624]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="flex-1 font-display text-[1.35rem] leading-tight text-[#25415A] transition group-hover:translate-x-1 group-hover:text-[#142B42] sm:text-[1.7rem]">{capability}</p>
                  <ArrowUpRight size={18} className="text-[#A37624] transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#D4A64A] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <img src="/manus-storage/bhanubhakta-operations_77dc2108.jpg" alt="Facilities inspection desk" className="absolute inset-y-0 right-0 h-full w-full object-cover object-center opacity-30 mix-blend-multiply lg:w-[47%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#D4A64A_0%,#D4A64A_47%,rgba(212,166,74,0.67)_72%,rgba(212,166,74,0.15)_100%)]" />
          <div className="relative mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.33fr_0.67fr] lg:gap-20">
            <div><p className="eyebrow text-[#355066]">Operating principles</p><h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[#10263C] sm:text-5xl">High standards start with systems.</h2></div>
            <p className="max-w-2xl self-end text-lg leading-8 text-[#19354C] sm:text-xl">Every role has strengthened the same principle: the best guest and workplace experiences are created when safety, stock, schedules, and service are all given equal attention.</p>
          </div>
        </section>

        <section id="credentials" className="bg-[#E8E4DA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.39fr_0.61fr] lg:gap-20">
            <div>
              <p className="eyebrow">04 / Credentials & education</p>
              <h2 className="section-title mt-5">Standards backed by training.</h2>
              <InspectionRule label="Verified learning" />
              <div className="mt-10 border-l-2 border-[#D4A64A] pl-5">
                <p className="text-[0.64rem] font-bold uppercase tracking-[0.17em] text-[#6B7B82]">Education</p>
                <p className="mt-3 font-display text-xl text-[#142B42]">12th Intermediate</p>
                <p className="mt-1 text-sm leading-6 text-[#566973]">Saraswati Higher Secondary School, Nepal · 2017</p>
                <p className="mt-5 font-display text-xl text-[#142B42]">10th Grade (SLC)</p>
                <p className="mt-1 text-sm leading-6 text-[#566973]">Birendra Secondary School, Nepal · 2015</p>
              </div>
              <div className="mt-9 flex items-start gap-3 border-t border-[#C7C6BD] pt-6"><Languages size={20} className="mt-0.5 text-[#A37624]" /><div><p className="text-[0.64rem] font-bold uppercase tracking-[0.17em] text-[#6B7B82]">Languages</p><p className="mt-2 text-sm leading-6 text-[#405664]">English (Fluent/B1) · Hindi (Fluent) · Nepali (Native)</p></div></div>
            </div>
            <div className="grid gap-3 lg:pt-10">
              {certifications.map(([name, issuer], index) => (
                <article key={name} className="flex gap-5 border border-[#C7C6BD] bg-[#F5F2EC] p-5 transition hover:-translate-y-1 hover:border-[#D4A64A] hover:shadow-[0_14px_28px_rgba(24,48,63,0.08)] sm:items-center sm:p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center border border-[#D4A64A] text-[#A37624]"><Award size={21} strokeWidth={1.7} /></div>
                  <div className="min-w-0 flex-1"><p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#A37624]">Credential / 0{index + 1}</p><h3 className="mt-2 font-display text-xl leading-tight text-[#142B42] sm:text-2xl">{name}</h3><p className="mt-2 text-sm leading-6 text-[#5C6E76]">{issuer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative min-h-[540px] overflow-hidden bg-[#10263C] px-5 py-20 text-[#F7F4ED] sm:px-8 lg:px-12 lg:py-28">
          <img src="/manus-storage/bhanubhakta-standard_8a6edfb4.jpg" alt="Precision hospitality details" className="absolute inset-y-0 right-0 h-full w-full object-cover object-left opacity-35 lg:w-[54%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,38,60,1)_0%,rgba(16,38,60,0.96)_46%,rgba(16,38,60,0.26)_100%)]" />
          <div className="relative mx-auto max-w-[1440px]"><div className="max-w-2xl"><p className="eyebrow text-[#D4A64A]">A professional ethic</p><blockquote className="mt-6 font-display text-4xl leading-[1.03] tracking-[-0.04em] text-[#F7F4ED] sm:text-5xl lg:text-6xl">“A clean environment is never accidental. It is the visible result of people, process, and pride working together.”</blockquote></div></div>
        </section>

        <section id="contact" className="bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
            <div><p className="eyebrow">05 / Contact</p><h2 className="section-title mt-5 max-w-xl">Let’s discuss a stronger standard of operations.</h2><p className="mt-7 max-w-lg text-base leading-7 text-[#536772]">Available to connect regarding housekeeping leadership, facilities operations, and service-quality opportunities in the UAE and beyond.</p></div>
            <div className="border-t-2 border-[#142B42]">
              <a href="mailto:bhanubhakta622@gmail.com" className="group flex items-center gap-4 border-b border-[#BFC7C6] py-6 transition hover:bg-[#E8E4DA] sm:px-2"><Mail size={22} className="text-[#A37624]" /><div className="min-w-0 flex-1"><p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#6A7A81]">Email</p><p className="mt-1 break-all font-display text-xl text-[#142B42] sm:text-2xl">bhanubhakta622@gmail.com</p></div><ArrowUpRight className="shrink-0 text-[#A37624] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
              <a href="tel:+971545435736" className="group flex items-center gap-4 border-b border-[#BFC7C6] py-6 transition hover:bg-[#E8E4DA] sm:px-2"><Phone size={22} className="text-[#A37624]" /><div className="flex-1"><p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#6A7A81]">Phone</p><p className="mt-1 font-display text-xl text-[#142B42] sm:text-2xl">+971 54 543 5736</p></div><ArrowUpRight className="shrink-0 text-[#A37624] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
              <div className="flex items-center gap-4 border-b border-[#BFC7C6] py-6 sm:px-2"><MapPin size={22} className="text-[#A37624]" /><div><p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#6A7A81]">Location</p><p className="mt-1 font-display text-xl text-[#142B42] sm:text-2xl">Ghayathi, Abu Dhabi, UAE</p></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0B1D2E] px-5 py-7 text-[#B6C2C9] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 text-[0.62rem] font-bold uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between"><p className="flex items-center gap-2"><BadgeCheck size={15} className="text-[#D4A64A]" /> Bhanubhakta KC · Housekeeping Operations</p><p>© {new Date().getFullYear()} · Abu Dhabi, UAE</p><a href="#top" className="flex items-center gap-2 text-[#D4A64A] transition hover:text-[#F2CC79]">Back to top <ArrowUpRight size={14} /></a></div>
      </footer>
    </div>
  );
}
