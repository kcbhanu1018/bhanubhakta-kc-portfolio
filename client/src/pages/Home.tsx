/**
 * SERVICE LEDGER DESIGN SYSTEM
 * Editorial industrial portfolio: ink navy, warm ivory, and service brass.
 * Layout favors an asymmetric dossier structure, inspection rules, and concise operational language.
 */
import { useEffect, useState } from "react";
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
  ["Education", "education"],
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

const nepaliCopy: Record<string, string> = {
  "Profile": "प्रोफाइल", "Experience": "अनुभव", "Capabilities": "क्षमताहरू", "Credentials": "प्रमाणपत्रहरू", "Contact": "सम्पर्क",
  "Start a conversation": "कुराकानी सुरु गर्नुहोस्", "Housekeeping operations · Facility services": "हाउसकिपिङ सञ्चालन · सुविधा सेवाहरू",
  "Order behind every exceptional environment.": "हरेक उत्कृष्ट वातावरण पछाडिको सुव्यवस्था।",
  "Housekeeping operations leader with experience across high-security facilities and luxury hospitality environments. Focused on reliable standards, practical leadership, continuous learning, and measurable service quality.": "उच्च-सुरक्षा सुविधा र लक्जरी आतिथ्य वातावरणमा अनुभव भएको हाउसकिपिङ सञ्चालन नेतृत्वकर्ता। भरपर्दो मापदण्ड, व्यावहारिक नेतृत्व, निरन्तर सिकाइ र मापनयोग्य सेवा गुणस्तरमा केन्द्रित।",
  "View experience": "अनुभव हेर्नुहोस्", "Download résumé": "रिजुमे डाउनलोड गर्नुहोस्", "Direct contact · Abu Dhabi, UAE": "प्रत्यक्ष सम्पर्क · Abu Dhabi, UAE",
  "Connected community": "सम्पर्कित समुदाय", "Follow the journey.": "यात्रासँग जोडिनुहोस्।", "Followers": "फलोअर्स",
  "01 / Professional profile": "०१ / व्यावसायिक प्रोफाइल", "Built for the details that make a facility work.": "सुविधालाई प्रभावकारी बनाउने सूक्ष्म विवरणका लागि तयार।", "Operational standard": "सञ्चालन मापदण्ड",
  "Results-driven and BICSc-certified, Bhanubhakta combines hands-on housekeeping leadership with the discipline required by complex, safety-led environments.": "नतिजामुखी र BICSc-प्रमाणित, Bhanubhakta ले जटिल तथा सुरक्षामा केन्द्रित वातावरणका लागि आवश्यक अनुशासनसँग प्रत्यक्ष हाउसकिपिङ नेतृत्वलाई जोड्नुहुन्छ।",
  "Safety first": "सुरक्षा पहिलो", "COSHH-aware systems, chemical safety, hygiene compliance, and secure-site discipline.": "COSHH-सचेत प्रणाली, रासायनिक सुरक्षा, स्वच्छता अनुपालन र सुरक्षित-स्थल अनुशासन।",
  "Quality made visible": "देख्न सकिने गुणस्तर", "Routine inspections and presentation standards that keep every area consistently ready.": "नियमित निरीक्षण र प्रस्तुति मापदण्ड जसले प्रत्येक क्षेत्रलाई निरन्तर तयारी अवस्थामा राख्छ।",
  "Teams in rhythm": "तालमेलमा टोली", "Clear rosters, practical coaching, and considered task allocation for dependable daily delivery.": "स्पष्ट रोस्टर, व्यावहारिक कोचिङ र भरपर्दो दैनिक सेवाका लागि विचारपूर्वक कार्य बाँडफाँड।",
  "Service with finish": "उत्कृष्ट सेवाको समाप्ति", "An eye for the polished guest experience expected within premium hospitality settings.": "प्रिमियम आतिथ्य वातावरणमा अपेक्षित परिष्कृत अतिथि अनुभवप्रतिको ध्यान।",
  "A considered approach to cleanliness, compliance, and continuity across demanding environments.": "मागपूर्ण वातावरणमा सरसफाइ, अनुपालन र निरन्तरताप्रति विचारशील दृष्टिकोण।",
  "High-security facilities": "उच्च-सुरक्षा सुविधाहरू", "Luxury hospitality": "लक्जरी आतिथ्य", "Team leadership": "टोली नेतृत्व",
  "02 / Career record": "०२ / करियर विवरण", "Experience that holds the standard.": "मापदण्ड कायम राख्ने अनुभव।", "From energy infrastructure to luxury guest spaces, the work is grounded in consistent service, safe systems, and teams that know what excellent looks like.": "ऊर्जा पूर्वाधारदेखि लक्जरी अतिथि क्षेत्रसम्म, काम निरन्तर सेवा, सुरक्षित प्रणाली र उत्कृष्टताको अर्थ बुझ्ने टोलीमा आधारित छ।",
  "03 / Core capabilities": "०३ / मुख्य क्षमताहरू", "The practical toolkit behind reliable delivery.": "भरपर्दो सेवाको पछाडि रहेको व्यावहारिक उपकरणसमूह।", "Review full résumé": "पूरा रिजुमे हेर्नुहोस्",
  "Operating principles": "सञ्चालनका सिद्धान्तहरू", "High standards start with systems.": "उच्च मापदण्ड प्रणालीबाट सुरु हुन्छ।", "Every role has strengthened the same principle: the best guest and workplace experiences are created when safety, stock, schedules, and service are all given equal attention.": "हरेक भूमिकाले एउटै सिद्धान्तलाई बलियो बनाएको छ: सुरक्षा, स्टक, समयतालिका र सेवालाई समान ध्यान दिँदा उत्कृष्ट अतिथि र कार्यस्थल अनुभव सिर्जना हुन्छ।",
  "04 / Credentials": "०४ / प्रमाणपत्रहरू", "Standards backed by training.": "तालिमद्वारा समर्थित मापदण्डहरू।", "Verified learning": "प्रमाणित सिकाइ", "Education": "शिक्षा", "Languages": "भाषाहरू", "Credential": "प्रमाणपत्र",
  "05 / Education": "०५ / शिक्षा", "Academic foundations for practical leadership.": "व्यावहारिक नेतृत्वका लागि शैक्षिक आधार।", "Academic record": "शैक्षिक विवरण", "06 / Contact": "०६ / सम्पर्क",
  "A professional ethic": "व्यावसायिक नैतिकता", "“A clean environment is never accidental. It is the visible result of people, process, and pride working together.”": "“स्वच्छ वातावरण कहिल्यै संयोगले बन्दैन। यो मानिस, प्रक्रिया र गर्वले सँगै काम गरेको देखिने परिणाम हो।”",
  "05 / Contact": "०५ / सम्पर्क", "Let’s discuss a stronger standard of operations.": "अझ बलियो सञ्चालन मापदण्डबारे छलफल गरौँ।", "Available to connect regarding housekeeping leadership, facilities operations, and service-quality opportunities in the UAE and beyond.": "UAE र अन्य स्थानमा हाउसकिपिङ नेतृत्व, सुविधा सञ्चालन र सेवा-गुणस्तरका अवसरबारे सम्पर्क गर्न उपलब्ध।", "Email": "इमेल", "Phone": "फोन", "Location": "स्थान",
  "Housekeeping Operations": "हाउसकिपिङ सञ्चालन", "All rights reserved.": "सर्वाधिकार सुरक्षित।", "Back to top": "माथि जानुहोस्",
  "Lead daily housekeeping operations, staff allocation, and facility maintenance across the Barakah Nuclear Power Plant project.": "Barakah Nuclear Power Plant परियोजनामा दैनिक हाउसकिपिङ सञ्चालन, कर्मचारी बाँडफाँड र सुविधा मर्मतसम्भारको नेतृत्व।",
  "Enforce high standards of safety, hygiene, and nuclear-security environmental protocols alongside systematic daily inspections.": "प्रणालीगत दैनिक निरीक्षणसँगै सुरक्षा, स्वच्छता र आणविक-सुरक्षा वातावरणीय प्रोटोकलका उच्च मापदण्ड लागू।",
  "Manage staff scheduling, performance evaluations, and operational workflow optimization across teams.": "टोलीभरि कर्मचारी समयतालिका, कार्यसम्पादन मूल्याङ्कन र सञ्चालन कार्यप्रवाह अनुकूलन व्यवस्थापन।",
  "Managed daily housekeeping operations across luxury guest areas, pool deck, and back-of-house facilities.": "लक्जरी अतिथि क्षेत्र, पूल डेक र पछाडिका सुविधामा दैनिक हाउसकिपिङ सञ्चालन व्यवस्थापन।",
  "Supervised and mentored team members, assigned shifts, and performed detailed quality inspections.": "टोली सदस्यहरूको पर्यवेक्षण र मार्गदर्शन, सिफ्ट बाँडफाँड र विस्तृत गुणस्तर निरीक्षण।",
  "Upheld luxury service-presentation standards while maintaining strict health, safety, and hygiene compliance.": "कडा स्वास्थ्य, सुरक्षा र स्वच्छता अनुपालन कायम राख्दै लक्जरी सेवा-प्रस्तुति मापदण्ड पालना।",
  "Assigned operational tasks, created monthly staff rosters, and delivered detailed orientation and hands-on training.": "सञ्चालन कार्य बाँडफाँड, मासिक कर्मचारी रोस्टर निर्माण र विस्तृत अभिमुखीकरण तथा प्रत्यक्ष तालिम प्रदान।",
  "Managed chemical and cleaning-supply inventories, issued equipment, and optimized stock reordering.": "रसायन तथा सरसफाइ आपूर्ति सूची व्यवस्थापन, उपकरण जारी र स्टक पुनःअर्डर अनुकूलन।",
  "Assisted in recruitment, performance reviews, promotions, and team transfers.": "भर्ती, कार्यसम्पादन समीक्षा, पदोन्नति र टोली स्थानान्तरणमा सहयोग।",
  "Inspected guest and corporate areas to ensure compliance with strict ADNOC cleanliness standards.": "कडा ADNOC सरसफाइ मापदण्डको अनुपालन सुनिश्चित गर्न अतिथि र कर्पोरेट क्षेत्र निरीक्षण।",
  "Organized shift replacements, resolved service complaints promptly, and conducted chemical-safety training.": "सिफ्ट प्रतिस्थापन व्यवस्थित, सेवा गुनासो छिटो समाधान र रासायनिक-सुरक्षा तालिम सञ्चालन।",
};

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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [openingContact, setOpeningContact] = useState("");
  const [language, setLanguage] = useState<"en" | "ne">(() => new URLSearchParams(window.location.search).get("lang") === "ne" ? "ne" : "en");
  const t = (copy: string) => language === "ne" ? nepaliCopy[copy] ?? copy : copy;
  const closeMenu = () => setMenuOpen(false);
  const runContactAction = (event: { preventDefault: () => void }, target: string, card: string) => {
    event.preventDefault();
    setOpeningContact(card);
    window.setTimeout(() => {
      window.location.href = target;
      setOpeningContact("");
    }, 220);
  };

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 32);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "ne" ? "ne" : "en";
  }, [language]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observedSections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setActiveSection(entry.target.id);
      }),
      { rootMargin: "-28% 0px -62% 0px", threshold: 0.01 },
    );
    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const turnSections = Array.from(document.querySelectorAll<HTMLElement>(".page-turn"));
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("page-turn-active")),
      { threshold: 0.52 },
    );
    turnSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3F0EA] text-[#142B42] selection:bg-[#D4A64A] selection:text-[#142B42]">
      <header className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-300 sm:px-5 ${scrolled ? "pt-2.5 sm:pt-3" : "pt-3 sm:pt-5"}`}>
        <div className={`mx-auto flex max-w-[1440px] items-center justify-between border px-4 py-2.5 text-[#142B42] backdrop-blur-xl transition-[background-color,border-color,box-shadow,border-radius] duration-300 sm:px-5 ${scrolled ? "rounded-xl border-white/45 bg-[#EEF3EF]/58 shadow-[0_10px_28px_rgba(22,43,58,0.10)]" : "rounded-[1.35rem] border-[#D3DBD5]/90 bg-[#E7EEE9]/82 shadow-[0_16px_34px_rgba(22,43,58,0.12)]"}`}>
          <a href="#top" className="flex items-center" aria-label="Go to top">
            <img src="/manus-storage/bhanubhakta-kc-logo_72579765.png" alt="Bhanubhakta KC logo" className="header-logo h-12 w-16 object-contain sm:h-14 sm:w-[5.25rem]" />
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`nav-link text-[0.67rem] font-bold uppercase tracking-[0.15em] text-[#395161] ${activeSection === id ? "nav-link-active" : ""}`}>
                {t(label)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center overflow-hidden rounded-lg border border-[#C7D2CD] bg-white/45 text-[0.58rem] font-extrabold tracking-[0.08em] sm:flex">
            <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} className={`px-2.5 py-2 transition ${language === "en" ? "bg-[#173A52] text-white" : "text-[#48616D] hover:bg-white/60"}`}>EN</button>
            <button type="button" onClick={() => setLanguage("ne")} aria-pressed={language === "ne"} className={`px-2.5 py-2 font-sans transition ${language === "ne" ? "bg-[#173A52] text-white" : "text-[#48616D] hover:bg-white/60"}`}>नेपाली</button>
          </div>

          <a href="#contact" className="hidden items-center gap-2 bg-[#D4A64A] px-4 py-2 text-[0.67rem] font-extrabold uppercase tracking-[0.14em] text-[#10263C] transition hover:bg-[#F2CC79] active:scale-[0.97] sm:flex">
            {t("Start a conversation")} <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-[#C7CFCB] text-[#173A52] lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className={`mx-auto mt-2 max-w-[1440px] rounded-xl border px-5 py-5 backdrop-blur-xl shadow-[0_12px_28px_rgba(22,43,58,0.1)] lg:hidden ${scrolled ? "border-white/45 bg-[#EEF3EF]/80" : "border-[#D3DBD5]/90 bg-[#E7EEE9]/95"}`}>
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={closeMenu} className={`flex items-center justify-between border-b border-[#D8D7D0] py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#173A52] ${activeSection === id ? "text-[#8D661F]" : ""}`}>
                  {t(label)} <ChevronRight size={16} className="text-[#D4A64A]" />
                </a>
              ))}
            </nav>
            <div className="mt-4 flex overflow-hidden rounded-lg border border-[#C7D2CD] bg-white/45 text-xs font-extrabold">
              <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} className={`flex-1 px-3 py-2.5 transition ${language === "en" ? "bg-[#173A52] text-white" : "text-[#48616D]"}`}>English</button>
              <button type="button" onClick={() => setLanguage("ne")} aria-pressed={language === "ne"} className={`flex-1 px-3 py-2.5 font-sans transition ${language === "ne" ? "bg-[#173A52] text-white" : "text-[#48616D]"}`}>नेपाली</button>
            </div>
            <a href="#contact" onClick={closeMenu} className="mt-5 flex items-center justify-center gap-2 bg-[#D4A64A] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#10263C]">
              {t("Start a conversation")} <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-depth relative min-h-[660px] overflow-hidden pt-28 sm:min-h-[700px] sm:pt-32">
          <img src="/manus-storage/bhanubhakta-hero_c4e16ab6.jpg" alt="Premium facility corridor representing housekeeping operations and service quality" className="hero-image absolute inset-0 h-full w-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative mx-auto flex min-h-[560px] max-w-[1440px] items-end px-5 pb-14 sm:min-h-[590px] sm:px-8 sm:pb-16 lg:min-h-[620px] lg:px-12 lg:pb-20">
            <div className="z-10 max-w-4xl">
              <div className="mb-6 flex items-center gap-3 text-[#E5BB63]">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                <span className="text-[0.64rem] font-bold uppercase tracking-[0.2em]">{t("Housekeeping operations · Facility services")}</span>
              </div>
              <h1 className="max-w-3xl font-sans text-[clamp(3.15rem,6.5vw,6.75rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.065em] text-white">
                BHANUBHAKTA <span className="text-[#E5BB63]">KC</span>
              </h1>
              <div className="mt-7 flex max-w-xl items-center gap-3">
                <span className="h-px w-10 shrink-0 bg-[#D4A64A]" />
                <p className="text-[0.62rem] font-bold uppercase leading-5 tracking-[0.16em] text-[#DCE7EA]">{t("Order behind every exceptional environment.")}</p>
              </div>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-[#DCE7EA] sm:text-lg">
                {t("Housekeeping operations leader with experience across high-security facilities and luxury hospitality environments. Focused on reliable standards, practical leadership, continuous learning, and measurable service quality.")}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#experience" className="hero-action group flex items-center justify-center gap-3 rounded-xl bg-[#D4A64A] px-5 py-3.5 text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-[#10263C] transition hover:bg-[#F2CC79] active:scale-[0.97]">
                  {t("View experience")} <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
                </a>
                <a href="/manus-storage/Bhanubhakta_KC_Resume_d682a5d8.pdf" target="_blank" rel="noreferrer" className="hero-action group flex items-center justify-center gap-3 rounded-xl border border-white/60 bg-white/10 px-5 py-3.5 text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-white transition hover:border-[#F2CC79] hover:bg-white/20 hover:text-[#F2CC79] active:scale-[0.97]">
                  {t("Download résumé")} <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
              <a href="#contact" className="hero-contact-cue mt-6 inline-flex items-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-[#DCE7EA] transition hover:text-[#F2CC79]"><span className="grid h-5 w-5 place-items-center rounded-full border border-[#E5BB63]/80 text-[#E5BB63]"><Mail size={11} /></span> {t("Direct contact · Abu Dhabi, UAE")} <ArrowUpRight size={13} /></a>
            </div>

          </div>
        </section>

        <section className="social-ledger bg-[#F4F0E8] px-5 py-9 text-[#142B42] sm:px-8 lg:px-11" aria-label="Social media presence">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[1.35rem] border border-[#C6D1D0] bg-[#FCFBF7] shadow-[0_18px_38px_rgba(28,60,75,0.08)] lg:grid-cols-[0.28fr_0.72fr] lg:items-stretch">
            <div>
              <div className="h-full border-b border-[#C6D1D0] bg-[linear-gradient(135deg,#F2D28D_0%,#E5B85D_100%)] px-6 py-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-7">
                <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.19em] text-[#29475B]">{t("Connected community")}</p>
                <p className="mt-2 max-w-[12rem] font-display text-[1.75rem] leading-[0.92] tracking-[-0.04em] text-[#142B42]">{t("Follow the journey.")}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3">
              <a href="https://www.facebook.com/bhanu622" target="_blank" rel="noreferrer" className="social-ledger-link group flex items-center gap-4 border-b border-[#D1DAD8] px-6 py-5 transition sm:border-b-0 sm:border-r sm:px-5 lg:px-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1877F2] text-white shadow-[0_5px_12px_rgba(24,119,242,0.24)] transition group-hover:-translate-y-0.5"><svg aria-label="Facebook" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d={siFacebook.path} /></svg></span>
                <span className="min-w-0 flex-1"><span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#536B78]">Facebook</span><strong className="mt-1 block font-display text-xl font-normal text-[#142B42]">10,000+ <small className="font-sans text-[0.57rem] font-bold uppercase tracking-[0.12em] text-[#9B7022]">{t("Followers")}</small></strong></span>
                <ExternalLink size={15} className="shrink-0 text-[#9B7022] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="https://www.linkedin.com/in/bhanubhakta-kc/" target="_blank" rel="noreferrer" className="social-ledger-link group flex items-center gap-4 border-b border-[#D1DAD8] px-6 py-5 transition sm:border-b-0 sm:border-r sm:px-5 lg:px-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white shadow-[0_5px_12px_rgba(10,102,194,0.24)] transition group-hover:-translate-y-0.5"><img src="/manus-storage/linkedin-official-mark_551cf140.png" alt="LinkedIn" className="h-6 w-6 object-contain" /></span>
                <span className="min-w-0 flex-1"><span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#536B78]">LinkedIn</span><strong className="mt-1 block font-display text-xl font-normal text-[#142B42]">1,200+ <small className="font-sans text-[0.57rem] font-bold uppercase tracking-[0.12em] text-[#9B7022]">{t("Followers")}</small></strong></span>
                <ExternalLink size={15} className="shrink-0 text-[#9B7022] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="https://tiktok.com/bhanu1018" target="_blank" rel="noreferrer" className="social-ledger-link group flex items-center gap-4 px-6 py-5 transition sm:px-5 lg:px-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#111827] text-white shadow-[0_5px_12px_rgba(17,24,39,0.2)] transition group-hover:-translate-y-0.5"><svg aria-label="TikTok" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d={siTiktok.path} /></svg></span>
                <span className="min-w-0 flex-1"><span className="block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#536B78]">TikTok</span><strong className="mt-1 block font-display text-xl font-normal text-[#142B42]">3,000+ <small className="font-sans text-[0.57rem] font-bold uppercase tracking-[0.12em] text-[#9B7022]">{t("Followers")}</small></strong></span>
                <ExternalLink size={15} className="shrink-0 text-[#9B7022] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        <section id="profile" className="reveal-on-scroll relative bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-20">
            <div>
              <p className="eyebrow section-kicker">{t("01 / Professional profile")}</p>
              <h2 className="section-title mt-5">{t("Built for the details that make a facility work.")}</h2>
              <InspectionRule label={t("Operational standard")} />
            </div>
            <div className="lg:pt-10">
              <p className="text-xl leading-9 text-[#25415A] sm:text-2xl sm:leading-10">
                {t("Results-driven and BICSc-certified, Bhanubhakta combines hands-on housekeeping leadership with the discipline required by complex, safety-led environments.")}
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
                    <article key={title as string} className="group rounded-[1.15rem] border border-[#CBD0CF] bg-[#F9F7F2] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#D4A64A] hover:shadow-[0_16px_30px_rgba(26,53,70,0.08)]">
                      <IconComponent size={22} className="text-[#B48224]" strokeWidth={1.8} />
                      <h3 className="mt-5 text-sm font-extrabold uppercase tracking-[0.09em] text-[#142B42]">{t(title as string)}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#5E6E78]">{t(copy as string)}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E8E4DA] px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4"><BadgeCheck size={21} className="shrink-0 text-[#A37624]" /><p className="max-w-xl text-sm leading-6 text-[#415464]">{t("A considered approach to cleanliness, compliance, and continuity across demanding environments.")}</p></div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.63rem] font-bold uppercase tracking-[0.17em] text-[#40566A]"><span>{t("High-security facilities")}</span><span>{t("Luxury hospitality")}</span><span>{t("Team leadership")}</span></div>
          </div>
        </section>

        <section id="experience" className="reveal-on-scroll career-record relative px-5 py-20 text-[#142B42] sm:px-8 lg:px-12 lg:py-28">
          <div className="blueprint-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-20">
              <div>
                <p className="eyebrow section-kicker text-[#D4A64A]">{t("02 / Career record")}</p>
                <h2 className="section-title mt-5 text-[#F7F4ED]">{t("Experience that holds the standard.")}</h2>
                <p className="mt-6 max-w-sm border-l border-[#B78428] pl-4 text-sm leading-7 text-[#405B6B]">{t("From energy infrastructure to luxury guest spaces, the work is grounded in consistent service, safe systems, and teams that know what excellent looks like.")}</p>
              </div>
              <div className="border-t border-[#8FA5AD]">
                {experience.map((job, index) => (
                  <article key={job.company} className="group my-2 grid gap-5 rounded-[1.15rem] border border-transparent py-8 transition duration-200 hover:border-[#C8D5D3] hover:bg-white/70 sm:grid-cols-[138px_1fr] sm:gap-8 sm:px-4 lg:py-10 lg:px-5">
                    <div>
                      <p className="inline-block border-b border-[#B78428] pb-1 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#8D661F]">{job.period}</p>
                      <p className="mt-3 flex items-center gap-2 text-xs leading-5 text-[#4F6876]"><MapPin size={13} className="shrink-0 text-[#A37624]" /> {job.location}</p>
                    </div>
                    <div>
                      <span className="mb-4 inline-flex h-7 w-7 items-center justify-center border border-[#B78428] bg-[#F7F4ED] font-display text-base text-[#8D661F]">0{index + 1}</span>
                      <h3 className="font-display text-2xl leading-tight text-[#142B42] sm:text-3xl">{job.role}</h3>
                      <p className="mt-2 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-[#8D661F]">{job.company}</p>
                      <ul className="mt-5 grid gap-3">
                        {job.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-[#28495B]"><Check size={17} className="mt-0.5 shrink-0 text-[#A37624]" strokeWidth={2.6} /><span>{t(point)}</span></li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="reveal-on-scroll relative bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="eyebrow section-kicker">{t("03 / Core capabilities")}</p>
              <h2 className="section-title mt-5">{t("The practical toolkit behind reliable delivery.")}</h2>
              <a href="/manus-storage/Bhanubhakta_KC_Resume_d682a5d8.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-[#D4A64A] pb-2 text-[0.67rem] font-extrabold uppercase tracking-[0.14em] text-[#142B42] transition hover:text-[#B48224]">{t("Review full résumé")} <ArrowUpRight size={15} /></a>
            </div>
            <div className="border-t border-[#BFC7C6]">
              {capabilities.map((capability, index) => (
                <div key={capability} className="group my-1 flex items-center justify-between gap-5 rounded-xl border border-transparent px-3 py-4 transition hover:border-[#CAD6D2] hover:bg-white/50 sm:px-4 sm:py-5">
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
            <div><p className="eyebrow text-[#355066]">{t("Operating principles")}</p><h2 className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.04em] text-[#10263C] sm:text-5xl">{t("High standards start with systems.")}</h2></div>
            <p className="max-w-2xl self-end text-lg leading-8 text-[#19354C] sm:text-xl">{t("Every role has strengthened the same principle: the best guest and workplace experiences are created when safety, stock, schedules, and service are all given equal attention.")}</p>
          </div>
        </section>

        <section id="credentials" className="reveal-on-scroll relative bg-[#E8E4DA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.39fr_0.61fr] lg:gap-20">
            <div>
              <p className="eyebrow section-kicker">{t("04 / Credentials")}</p>
              <h2 className="section-title mt-5">{t("Standards backed by training.")}</h2>
              <InspectionRule label={t("Verified learning")} />
              <div className="mt-9 flex items-start gap-3 border-t border-[#C7C6BD] pt-6"><Languages size={20} className="mt-0.5 text-[#A37624]" /><div><p className="text-[0.64rem] font-bold uppercase tracking-[0.17em] text-[#6B7B82]">{t("Languages")}</p><p className="mt-2 text-sm leading-6 text-[#405664]">English (Fluent/B1) · Hindi (Fluent) · Nepali (Native)</p></div></div>
            </div>
            <div className="grid gap-3 lg:pt-10">
              {certifications.map(([name, issuer], index) => (
                <article key={name} className="flex gap-5 rounded-[1.15rem] border border-[#C7C6BD] bg-[#F5F2EC] p-5 transition hover:-translate-y-1 hover:border-[#D4A64A] hover:shadow-[0_14px_28px_rgba(24,48,63,0.08)] sm:items-center sm:p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#D4A64A] text-[#A37624]"><Award size={21} strokeWidth={1.7} /></div>
                  <div className="min-w-0 flex-1"><p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#A37624]">{t("Credential")} / 0{index + 1}</p><h3 className="mt-2 font-display text-xl leading-tight text-[#142B42] sm:text-2xl">{name}</h3><p className="mt-2 text-sm leading-6 text-[#5C6E76]">{issuer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="reveal-on-scroll relative bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
            <div>
              <p className="eyebrow section-kicker">{t("05 / Education")}</p>
              <h2 className="section-title mt-5">{t("Academic foundations for practical leadership.")}</h2>
              <InspectionRule label={t("Academic record")} />
            </div>
            <div className="grid gap-4 lg:pt-8">
              <article className="education-card rounded-[1.15rem] border border-[#CBD7D3] bg-[#FBFCF9] p-6 sm:p-7"><span className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-[#A37624]">01</span><h3 className="mt-4 font-display text-3xl leading-tight text-[#142B42]">12th Intermediate</h3><p className="mt-3 text-base leading-7 text-[#566973]">Saraswati Higher Secondary School, Nepal · 2017</p></article>
              <article className="education-card rounded-[1.15rem] border border-[#CBD7D3] bg-[#FBFCF9] p-6 sm:p-7"><span className="text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-[#A37624]">02</span><h3 className="mt-4 font-display text-3xl leading-tight text-[#142B42]">10th Grade (SLC)</h3><p className="mt-3 text-base leading-7 text-[#566973]">Birendra Secondary School, Nepal · 2015</p></article>
            </div>
          </div>
        </section>

        <section className="relative min-h-[540px] overflow-hidden bg-[#10263C] px-5 py-20 text-[#F7F4ED] sm:px-8 lg:px-12 lg:py-28">
          <img src="/manus-storage/bhanubhakta-standard_8a6edfb4.jpg" alt="Precision hospitality details" className="absolute inset-y-0 right-0 h-full w-full object-cover object-left opacity-35 lg:w-[54%]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,38,60,1)_0%,rgba(16,38,60,0.96)_46%,rgba(16,38,60,0.26)_100%)]" />
          <div className="relative mx-auto max-w-[1440px]"><div className="max-w-2xl"><p className="eyebrow text-[#D4A64A]">{t("A professional ethic")}</p><blockquote className="mt-6 font-display text-4xl leading-[1.03] tracking-[-0.04em] text-[#F7F4ED] sm:text-5xl lg:text-6xl">{t("“A clean environment is never accidental. It is the visible result of people, process, and pride working together.”")}</blockquote></div></div>
        </section>

        <section id="contact" className="reveal-on-scroll relative bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:gap-20">
            <div><p className="eyebrow section-kicker">{t("06 / Contact")}</p><h2 className="section-title mt-5 max-w-xl">{t("Let’s discuss a stronger standard of operations.")}</h2><p className="mt-7 max-w-lg text-base leading-7 text-[#536772]">{t("Available to connect regarding housekeeping leadership, facilities operations, and service-quality opportunities in the UAE and beyond.")}</p></div>
            <div className="contact-wallet border-t-2 border-[#142B42] pt-2">
              <a href="mailto:bhanubhakta622@gmail.com" onClick={(event) => runContactAction(event, "mailto:bhanubhakta622@gmail.com", "email")} aria-label="Send an email to Bhanubhakta KC" title="Open your default email application" className={`contact-wallet-card group flex items-center gap-4 ${openingContact === "email" ? "is-opening" : ""}`}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F3E2B7] text-[#8D661F]"><Mail size={20} /></span><span className="min-w-0 flex-1"><span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#6A7A81]">{t("Email")}</span><strong className="mt-1 block break-all font-display text-xl font-normal text-[#142B42] sm:text-2xl">bhanubhakta622@gmail.com</strong></span><ArrowUpRight className="shrink-0 text-[#A37624] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
              <a href="tel:+971545435736" onClick={(event) => runContactAction(event, "tel:+971545435736", "phone")} aria-label="Call Bhanubhakta KC at +971 54 543 5736" title="Open your phone dialer" className={`contact-wallet-card group flex items-center gap-4 ${openingContact === "phone" ? "is-opening" : ""}`}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#DCE9E8] text-[#28566B]"><Phone size={20} /></span><span className="flex-1"><span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#6A7A81]">{t("Phone")}</span><strong className="mt-1 block font-display text-xl font-normal text-[#142B42] sm:text-2xl">+971 54 543 5736</strong></span><ArrowUpRight className="shrink-0 text-[#A37624] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Ghayathi%2C%20Abu%20Dhabi%2C%20UAE" target="_blank" rel="noreferrer" onClick={(event) => runContactAction(event, "https://www.google.com/maps/search/?api=1&query=Ghayathi%2C%20Abu%20Dhabi%2C%20UAE", "location")} aria-label="Open Ghayathi, Abu Dhabi, UAE in maps" className={`contact-wallet-card group flex items-center gap-4 ${openingContact === "location" ? "is-opening" : ""}`}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#E9E2F0] text-[#66507B]"><MapPin size={20} /></span><span className="flex-1"><span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#6A7A81]">{t("Location")}</span><strong className="mt-1 block font-display text-xl font-normal text-[#142B42] sm:text-2xl">Ghayathi, Abu Dhabi, UAE</strong></span><ArrowUpRight className="shrink-0 text-[#A37624] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#CDD6D1] bg-[linear-gradient(115deg,#E7EEE9_0%,#F4F1E9_55%,#E4ECE7_100%)] px-5 py-7 text-[#385364] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 text-[0.62rem] font-bold uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between"><p className="flex items-center gap-3"><img src="/manus-storage/bhanubhakta-kc-logo_72579765.png" alt="BK logo" className="h-11 w-16 object-contain" /> Bhanubhakta KC · {t("Housekeeping Operations")}</p><p>© 2026 Bhanubhakta KC. {t("All rights reserved.")}</p><a href="#top" className="flex items-center gap-2 text-[#8D661F] transition hover:-translate-y-0.5 hover:text-[#142B42]">{t("Back to top")} <ArrowUpRight size={14} /></a></div>
      </footer>
    </div>
  );
}
