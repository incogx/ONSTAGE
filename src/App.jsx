import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Camera,
  Check,
  Lightbulb,
  Mail,
  MapPin,
  Mic,
  Monitor,
  Phone,
  Volume2,
  Wrench,
} from 'lucide-react'

const navItems = ['Home', 'Production Catalogue', 'Solutions', 'Our Work', 'About', 'Contact']

const categoryCards = [
  {
    title: 'SOUND',
    text: 'Professional audio systems for powerful, clear and reliable event sound.',
    icon: Volume2,
  },
  {
    title: 'LIGHT',
    text: 'Stage lighting designed to create energy, atmosphere and impact.',
    icon: Lightbulb,
  },
  {
    title: 'LED WALL',
    text: 'High-quality visual display systems for stages, branding and live content.',
    icon: Monitor,
  },
  {
    title: 'STAGE & STRUCTURE',
    text: 'Professional stage structures, masking and event infrastructure.',
    icon: Building2,
  },
  {
    title: 'TECHNICAL PRODUCTION',
    text: 'Professional consoles, processors, operators and technical support.',
    icon: Wrench,
  },
]

const soundEquipment = [
  {
    name: 'RCF TOP HDL 30',
    description: 'Professional line-array loudspeaker designed for high-impact event sound reinforcement.',
    image: '/images/RCF-HDL%2030.jpeg',
  },
  {
    name: 'RCF SUB 9006',
    description: 'High-output subwoofer designed to deliver powerful low-frequency performance for large events.',
    image: '/images/RCF%20SUB%209006.jpeg',
  },
  {
    name: 'QSC K-12 MONITOR',
    description: 'Professional stage monitor for clear performer monitoring and reliable stage audio.',
    image: '/images/QSK-12%20MONITOR.jpeg',
  },
  {
    name: 'SHURE SLX-D MIC',
    description: 'Digital wireless microphone system for professional presentations, performances and live events.',
    image: '/images/SHURE%20SLX-D.jpeg',
  },
  {
    name: 'ALLEN & HEATH SQ-6 DIGITAL CONSOLE',
    description: 'Professional digital mixing console for precise control of live event audio.',
    image: '/images/ALLEN%20HEATH.jpeg',
  },
]

const lightEquipment = [
  {
    name: 'ARENA CONSOLE',
    description: 'Professional lighting control for dynamic and synchronized stage lighting.',
    image: '/images/ARENA%20CONSOLE%20OG.jpeg',
  },
  {
    name: 'SHARPIES',
    description: 'High-impact beam lighting for energetic stage looks and large-scale events.',
    image: '/images/Ultimo_Sharpy_highlights_smooth_dimming.webp',
  },
  {
    name: 'LED PAR CAN',
    description: 'Versatile LED lighting for stage wash, color effects and event ambience.',
    image: '/images/LED%20PAR.jpeg',
  },
  {
    name: 'HAZE',
    description: 'Atmospheric haze designed to enhance lighting beams and create depth on stage.',
    image: '/images/HAZE.jpeg',
  },
]

const ledEquipment = [
  {
    name: 'P3 LED WALL',
    description: 'High-impact LED display solution for stage visuals, branding, presentations and live content.',
    image: '/images/P3%20LED%20WALL.jpeg',
  },
  {
    name: '4K PROCESSOR',
    description: 'Professional video processing for high-quality event visuals and LED display management.',
    image: '/images/4K%20LED%20PROCESSOR.jpeg',
  },
  {
    name: 'SLIDE CHANGER',
    description: 'Professional presentation control for smooth switching between presentation content and event visuals.',
    image: '/images/SLIDE%20CHANGER.jpeg',
  },
]

const stageEquipment = [
  {
    name: 'CONSOLE MASKING',
    description: 'Clean and professional masking solutions for technical console areas.',
    image: '/images/bg_2.jpeg',
  },
  {
    name: 'PODIUM MASKING',
    description: 'Professional podium masking for a clean and polished stage presentation.',
    image: '/images/PODIUM%20MASKING.jpeg',
  },
  {
    name: 'GOALPOST',
    description: 'Stage goalpost structure for supporting event production and visual elements.',
    specs: '520 × 400 — 1 NO',
    image: '/images/bg_3.jpeg',
  },
]

const technicalRoles = [
  { title: 'AUDIO TECHNICIANS', text: 'Professional sound operation and monitoring.' },
  { title: 'LIGHTING TECHNICIANS', text: 'Lighting programming and live operation.' },
  { title: 'LED / VIDEO TECHNICIANS', text: 'LED processing, presentation and visual playback.' },
  { title: 'STAGE CREW', text: 'Setup, installation, dismantling and event support.' },
  { title: 'ON-SITE TECHNICAL SUPPORT', text: 'Technical team available throughout the event.' },
]

const eventTypes = [
  'CORPORATE EVENTS',
  'COLLEGE CULTURALS',
  'PRODUCT LAUNCHES',
  'AWARD NIGHTS',
  'CONCERTS & ENTERTAINMENT',
  'CONFERENCES',
]

const portfolioFilters = ['ALL', 'SOUND', 'LIGHT', 'LED', 'STAGE', 'EVENTS']

const reelItems = [
  {
    category: 'sound',
    title: 'Reel 01',
    url: 'https://www.instagram.com/reel/DbbWLCUynFX/?igsi=MzRlODBiNWFlZA==',
    embedUrl: 'https://www.instagram.com/reel/DbbWLCUynFX/embed/?utm_source=ig_web_copy_link',
  },
  {
    category: 'light',
    title: 'Reel 02',
    url: 'https://www.instagram.com/reel/DadJxkISDft/?igsi=MzRlODBiNWFlZA==',
    embedUrl: 'https://www.instagram.com/reel/DadJxkISDft/embed/?utm_source=ig_web_copy_link',
  },
  {
    category: 'led',
    title: 'Reel 03',
    url: 'https://www.instagram.com/reel/DE1gweWyaYc/?igsi=MzRlODBiNWFlZA==',
    embedUrl: 'https://www.instagram.com/reel/DE1gweWyaYc/embed/?utm_source=ig_web_copy_link',
  },
  
]

const serviceOptions = ['Sound', 'Lighting', 'LED Wall', 'Stage & Structure', 'Technical Crew', 'Complete Production']

const workSteps = [
  'SHARE YOUR REQUIREMENT',
  'WE DESIGN THE SETUP',
  'WE INSTALL & TEST',
  'WE RUN THE SHOW',
  'YOU TAKE THE STAGE',
]

function App() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedServices, setSelectedServices] = useState([])

  const selectedSummary = useMemo(() => {
    if (!selectedServices.length) return ['No services selected yet.']
    return selectedServices
  }, [selectedServices])

  const toggleService = (service) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white antialiased selection:bg-violet-500/40">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0C]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="text-xl font-black tracking-[0.22em] text-white drop-shadow-[0_0_18px_rgba(110,58,255,0.5)]">
              ONSTAGE
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full border border-violet-400/40 bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(110,58,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(0,240,255,0.25)]">
            GET A QUOTE
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(110,58,255,0.25),transparent_35%),linear-gradient(90deg,rgba(10,10,12,0.85),rgba(10,10,12,0.48),rgba(10,10,12,0.82))]" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('/images/bg_2.jpeg')",
            }}
          />
          <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-300">
                EVENT PRODUCTION / TECHNICAL AV
              </p>
              <h1 className="text-5xl font-black tracking-[-0.08em] text-white sm:text-7xl lg:text-[7rem]">
                ONSTAGE
              </h1>
              <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                PRODUCTION THAT MAKES EVERY MOMENT MATTER.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Professional sound, lighting, LED and technical production for events that demand more.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(110,58,255,0.35)] transition hover:-translate-y-0.5">
                  EXPLORE OUR PRODUCTION
                </button>
                <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-violet-400/50 hover:bg-white/10">
                  GET A QUOTE
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                <span>SOUND</span>
                <span className="text-slate-500">•</span>
                <span>LIGHTING</span>
                <span className="text-slate-500">•</span>
                <span>LED</span>
                <span className="text-slate-500">•</span>
                <span>STAGE</span>
                <span className="text-slate-500">•</span>
                <span>TECHNICAL PRODUCTION</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#0E1117] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                THE ONSTAGE PRODUCTION CATALOGUE
              </p>
              <h3 className="mt-3 max-w-4xl text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">
                Everything you need to take your event from setup to showtime.
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {categoryCards.map(({ title, text, icon: Icon }, index) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:border-violet-400/60 hover:shadow-[0_0_40px_rgba(110,58,255,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-12 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-violet-300">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-xl font-bold tracking-[-0.05em] text-white">{title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A0A0C] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  PRODUCTION MENU / EQUIPMENT CATALOGUE
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">
                  Premium equipment built for live, visual and technical impact.
                </h3>
              </div>
            </div>

            <div className="space-y-20">
              <CategorySection
                title="SOUND"
                subtitle="POWER. CLARITY. CONTROL."
                items={soundEquipment}
                accent="violet"
              />
              <CategorySection
                title="LIGHT"
                subtitle="LIGHT THE MOMENT."
                items={lightEquipment}
                accent="cyan"
              />
              <CategorySection
                title="LED WALL"
                subtitle="YOUR BRAND. YOUR VISUALS. BIGGER."
                items={ledEquipment}
                accent="violet"
              />
              <CategorySection
                title="STAGE & STRUCTURE"
                subtitle="THE FRAMEWORK BEHIND THE SHOW."
                items={stageEquipment}
                accent="cyan"
              />
            </div>

            <div className="mt-12 rounded-[24px] border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">TECHNICAL PRODUCTION</p>
                <a href="#quote" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">
                  Build your sound system <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0d1016] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                TECHNICAL PRODUCTION
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">
                ONSTAGE provides the technical personnel required to operate the production.
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {technicalRoles.map((role) => (
                <div key={role.title} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-300">{role.title}</div>
                  <p className="text-sm leading-6 text-slate-300">{role.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-8">
              <div className="mb-8 md:flex md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    BUILD YOUR EVENT
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">
                    Build the technical package your event needs.
                  </h3>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-[#121316] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400/50 hover:bg-[#151a20]">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                      className="h-4 w-4 accent-violet-500"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-[#0C1015] p-5 md:flex md:items-center md:justify-between md:gap-6">
                <div className="mb-4 md:mb-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Selected Production
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {selectedSummary.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(110,58,255,0.35)] transition hover:-translate-y-0.5">
                  REQUEST A QUOTE WITH SELECTED GEAR
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0E1117] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                MADE FOR EVERY KIND OF SHOW
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {eventTypes.map((eventType) => (
                <div key={eventType} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6">
                  <h4 className="text-2xl font-bold tracking-[-0.05em] text-white">{eventType}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {eventType === 'CORPORATE EVENTS' && 'Conferences, annual meets, town halls and corporate celebrations.'}
                    {eventType === 'COLLEGE CULTURALS' && 'High-energy sound, lighting, LED and stage production.'}
                    {eventType === 'PRODUCT LAUNCHES' && 'Visual-first production designed around brand impact.'}
                    {eventType === 'AWARD NIGHTS' && 'Premium stage, lighting, audio and visual production.'}
                    {eventType === 'CONCERTS & ENTERTAINMENT' && 'Large-scale sound, lighting and LED production.'}
                    {eventType === 'CONFERENCES' && 'Professional audio, presentation and visual systems.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  PORTFOLIO
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">
                  ONSTAGE IN ACTION
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {portfolioFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                      activeFilter === filter
                        ? 'border-violet-400/60 bg-gradient-to-r from-violet-600/30 to-cyan-500/20 text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {reelItems
                .filter((item) => activeFilter === 'ALL' || item.category === activeFilter.toLowerCase())
                .map((item, idx) => (
                  <div
                    key={`${item.category}-${idx}`}
                    className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-black/30 shadow-[0_25px_55px_rgba(0,0,0,0.45)]"
                    style={{ aspectRatio: '9 / 16' }}
                  >
                    <a href={item.url} target="_blank" rel="noreferrer" className="block h-full w-full">
                      <iframe
                        src={item.embedUrl}
                        title={item.title}
                        className="h-full w-full border-0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </a>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/80">
                      <span className="text-[10px]">▶</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0d1016] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                HOW IT WORKS
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {workSteps.map((step, idx) => (
                <div key={step} className="rounded-[24px] border border-white/10 bg-white/[0.02] p-5">
                  <div className="mb-4 text-4xl font-black tracking-[-0.08em] text-violet-300">{String(idx + 1).padStart(2, '0')}</div>
                  <h4 className="text-lg font-bold uppercase tracking-[0.04em] text-white">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,12,0.85),rgba(10,10,12,0.5)),url('/images/bg_1.jpeg')] bg-cover bg-center opacity-70" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                PLANNING AN EVENT?
              </p>
              <h3 className="mt-3 text-4xl font-black tracking-[-0.07em] text-white sm:text-6xl">
                LET&apos;S PUT IT ONSTAGE.
              </h3>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                Tell us your event requirements and our production team will build the right technical setup for you.
              </p>
              <button className="mt-8 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(110,58,255,0.35)] transition hover:-translate-y-0.5">
                GET A QUOTE
              </button>
            </div>
          </div>
        </section>

        <section id="quote" className="py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.5fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                QUOTE REQUEST
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">
                Tell us about your event.
              </h3>
              <p className="mt-5 max-w-md text-slate-300">
                We&apos;ll confirm the production setup and build a technical recommendation around your venue, audience and live requirements.
              </p>
            </div>

            <form className="rounded-[30px] border border-white/10 bg-white/[0.02] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" placeholder="Your name" />
                <Field label="Company / Organization" placeholder="Company or organization" />
                <Field label="Phone" placeholder="Phone number" />
                <Field label="Email" placeholder="Email address" type="email" />
                <Field label="Event Type" placeholder="Conference, launch, cultural, etc." />
                <Field label="Event Date" type="date" />
                <Field label="Venue" placeholder="Venue name" />
                <Field label="City" placeholder="City" />
                <div className="md:col-span-2">
                  <Field label="Expected Audience" placeholder="Expected audience size" />
                </div>
                <div className="md:col-span-2 rounded-[20px] border border-white/10 bg-[#121316] p-4">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Required Services
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                        <input type="checkbox" className="h-4 w-4 accent-violet-500" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Additional Requirements
                    </span>
                    <textarea
                      rows={5}
                      placeholder="Tell us more about your event, setup requirements and timelines."
                      className="w-full rounded-[18px] border border-white/10 bg-[#121316] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/60 focus:outline-none"
                    />
                  </label>
                </div>
              </div>

              <button className="mt-6 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(110,58,255,0.35)] transition hover:-translate-y-0.5">
                REQUEST A QUOTE
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#08090C] py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="text-xl font-black tracking-[0.2em] text-white">ONSTAGE</div>
            <p className="mt-4 max-w-xs text-sm text-slate-300">
              Production that makes every moment matter.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Production</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>Sound</li>
              <li>Light</li>
              <li>LED Wall</li>
              <li>Stage &amp; Structure</li>
              <li>Technical Production</li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li className="flex items-center gap-2"><Camera size={14} /> Instagram</li>
              <li className="flex items-center gap-2"><BriefcaseBusiness size={14} /> LinkedIn</li>
              <li className="flex items-center gap-2"><Mail size={14} /> naveenchennai2005@gmail.com</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +91 9884397271</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Chennai, India</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CategorySection({ title, subtitle, items, accent }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">CATEGORY {title === 'SOUND' ? '01' : title === 'LIGHT' ? '02' : title === 'LED WALL' ? '03' : '04'}</p>
          <h4 className="mt-2 text-3xl font-black tracking-[-0.06em] text-white sm:text-5xl">{title}</h4>
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">{subtitle}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item.name} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#101317] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-violet-400/60 hover:shadow-[0_0_30px_rgba(110,58,255,0.12)]">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.name} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
            </div>
            <div className="p-5">
              <h5 className="text-2xl font-bold tracking-[-0.05em] text-white">{item.name}</h5>
              {item.specs && (
                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">{item.specs}</div>
              )}
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:border-violet-400/50 hover:bg-violet-500/10">
                  Add to Event
                </button>
                <button className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300 transition hover:text-white">
                  Request Quote <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Field({ label, placeholder, type = 'text' }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[18px] border border-white/10 bg-[#121316] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/60 focus:outline-none"
      />
    </label>
  )
}

export default App
