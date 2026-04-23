export default function LuxuryInteriorLandingPage() {
  const navLinks = ["Home", "About", "Projects", "Services"];

  const logos = [
    "Noble Hotels",
    "Hilton",
    "Hyatt",
    "Waldorf Astoria",
    "Edition",
  ];

  const projects = [
    {
      title: "Contemporary Lounge",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      className: "md:col-span-1 md:row-span-1 h-64 sm:h-72",
    },
    {
      title: "Architectural Light",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      className: "md:col-span-1 md:row-span-2 h-[28rem] sm:h-[32rem]",
    },
    {
      title: "Boutique Bedroom",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      className: "md:col-span-1 md:row-span-1 h-64 sm:h-72",
    },
    {
      title: "Refined Living",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      className: "md:col-span-1 md:row-span-1 h-64 sm:h-72",
    },
    {
      title: "Textured Warmth",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=80",
      className: "md:col-span-1 md:row-span-1 h-64 sm:h-72",
    },
    {
      title: "Statement Details",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=950&q=80",
      className: "md:col-span-1 md:row-span-2 h-[28rem] sm:h-[32rem]",
    },
  ];

  const stats = [
    { value: "+1000", label: "Completed Projects" },
    { value: "+250", label: "Happy Customers" },
    { value: "+32", label: "Years of Experience" },
  ];

  const services = [
    {
      title: "Interior Design",
      description:
        "We create refined indoor spaces that balance function, comfort, and atmosphere through curated materials, custom furnishings, and spatial planning.",
    },
    {
      title: "Exterior Design",
      description:
        "From façade character to outdoor flow, we shape architectural exteriors that feel cohesive, timeless, and tailored to their surroundings.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1f1f20] text-[#f1e4d3]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #1f1f20;
          font-family: 'Inter', sans-serif;
        }

        .editorial-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        .gold-line {
          position: relative;
        }

        .gold-line::before {
          content: '';
          position: absolute;
          inset: -14px;
          border: 1px solid rgba(214, 187, 149, 0.28);
          pointer-events: none;
        }
      `}</style>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#1f1f20]/90 backdrop-blur">
          <div className="mx-auto flex max-w-[1320px] items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <div className="border border-[#cbb08a]/40 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-[#e7d3ba]">
                Maison
              </div>
            </div>

            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm uppercase tracking-[0.18em] text-[#d3c1aa] transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden border border-[#cbb08a]/55 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#f0e2cf] transition hover:bg-[#cbb08a] hover:text-[#1f1f20] sm:block">
                Contact Us
              </button>
              <button className="flex h-10 w-10 items-center justify-center border border-[#cbb08a]/35 text-[#ecdac2] md:hidden">
                <span className="text-lg">≡</span>
              </button>
            </div>
          </div>
        </header>

        <main>
          <section
            id="home"
            className="grid gap-14 border-b border-white/5 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-24 xl:py-28"
          >
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-px w-14 bg-[#cbb08a]/55" />
                <span className="text-xs uppercase tracking-[0.35em] text-[#bda489]">
                  Boutique Interior Studio
                </span>
              </div>

              <h1 className="editorial-serif max-w-[10ch] text-5xl font-medium leading-[0.95] text-[#ead6bf] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Stylish &amp; Functional Space Design
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#c8b7a2] sm:text-base">
                We craft luxurious residential and hospitality spaces with a calm,
                architectural eye — blending warm materials, bespoke furnishings,
                and timeless composition into interiors that feel elevated and deeply lived in.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button className="border border-[#cbb08a]/55 px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#f2e3d0] transition hover:bg-[#cbb08a] hover:text-[#201f1f]">
                  View Projects
                </button>
                <span className="text-xs uppercase tracking-[0.28em] text-[#a58d73]">
                  Luxury spaces since 1991
                </span>
              </div>
            </div>

            <div className="relative min-h-[520px] sm:min-h-[620px]">
              <div className="gold-line absolute left-0 top-16 w-[58%]">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury interior seating area"
                  className="h-[320px] w-full object-cover shadow-2xl shadow-black/30 sm:h-[420px] lg:h-[460px]"
                />
              </div>

              <div className="gold-line absolute right-3 top-0 w-[44%] sm:right-8 lg:right-0 lg:top-2">
                <img
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury dining interior"
                  className="h-[270px] w-full object-cover shadow-2xl shadow-black/30 sm:h-[360px] lg:h-[420px]"
                />
              </div>

              <div className="absolute bottom-8 right-0 hidden max-w-[260px] border border-[#cbb08a]/20 bg-black/10 p-5 backdrop-blur-sm lg:block">
                <p className="text-xs uppercase tracking-[0.28em] text-[#bda489]">
                  Curated Spaces
                </p>
                <p className="mt-3 text-sm leading-6 text-[#d9c7b0]">
                  Editorial layouts, warm lighting, tailored details, and refined material palettes.
                </p>
              </div>
            </div>
          </section>

          <section className="border-b border-white/5 py-10 sm:py-14">
            <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center border border-white/0 px-4 py-4 text-sm uppercase tracking-[0.22em] text-[#6f675f]"
                >
                  {logo}
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="editorial-serif text-4xl text-[#ead6bf] sm:text-5xl">Projects</p>
              <p className="mt-4 text-3xl font-light text-[#f2ebe3] sm:text-4xl">
                +1000 Completed Projects
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#b8aa98] sm:text-base">
                Our portfolio spans refined residences, boutique hospitality, and tailored commercial spaces,
                each designed with calm luxury, considered proportions, and material richness.
              </p>
            </div>

            <div className="mt-12 grid auto-rows-auto gap-4 sm:gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className={`group relative overflow-hidden border border-[#d6bb95]/15 bg-[#262627] ${project.className}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#f1e2d0]">
                      {project.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button className="border border-[#cbb08a]/55 px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#f2e3d0] transition hover:bg-[#cbb08a] hover:text-[#201f1f]">
                View All Projects
              </button>
            </div>
          </section>

          <section
            id="services"
            className="grid gap-12 border-t border-white/5 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:py-24"
          >
            <div>
              <h2 className="editorial-serif text-4xl text-[#ead6bf] sm:text-5xl">What We Do</h2>

              <div className="mt-10 space-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l border-[#cbb08a]/25 pl-6">
                    <div className="editorial-serif text-5xl text-[#ead6bf] sm:text-6xl">{stat.value}</div>
                    <div className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b29c84]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="relative border border-[#d6bb95]/22 px-6 py-7 sm:px-8 sm:py-9"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cbb08a]/30 text-xs text-[#ddc7aa]">
                      0{index + 1}
                    </div>
                    <div className="h-px flex-1 bg-[#cbb08a]/25" />
                  </div>
                  <h3 className="text-2xl font-light text-[#f5ece3] sm:text-3xl">{service.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#bbaa97] sm:text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-[#ffffff12] py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
            <div>
              <div className="inline-flex border border-[#cbb08a]/40 px-4 py-3 text-xs uppercase tracking-[0.3em] text-[#ecd7bd]">
                Maison Atelier
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#b6a896]">
                Subscribe to our journal for design notes, studio updates, and curated inspiration from our latest spaces.
              </p>
              <div className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 border border-[#cbb08a]/20 bg-transparent px-4 py-3 text-sm text-[#f3e5d3] outline-none placeholder:text-[#887966]"
                />
                <button className="border border-[#cbb08a]/55 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#f2e3d0] transition hover:bg-[#cbb08a] hover:text-[#201f1f]">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#e7d3ba]">Explore</p>
              <div className="mt-5 space-y-3 text-sm text-[#bba994]">
                {navLinks.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block transition hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#e7d3ba]">About</p>
              <div className="mt-5 space-y-3 text-sm text-[#bba994]">
                <a href="#" className="block transition hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="block transition hover:text-white">
                  Terms &amp; Conditions
                </a>
                <a href="#" className="block transition hover:text-white">
                  Studio Journal
                </a>
              </div>
            </div>

            <div id="about">
              <p className="text-sm uppercase tracking-[0.24em] text-[#e7d3ba]">Contact</p>
              <div className="mt-5 space-y-3 text-sm text-[#bba994]">
                <p>hello@maisonatelier.com</p>
                <p>+1 (212) 555-0147</p>
                <p>27 Mercer Street, New York, NY</p>
              </div>
              <div className="mt-6 flex gap-3 text-sm text-[#d8c5ad]">
                {['in', 'be', 'ig', 'pi'].map((icon) => (
                  <div
                    key={icon}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cbb08a]/25 uppercase"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/5 pt-6 text-xs uppercase tracking-[0.16em] text-[#7f7468]">
            © 2025 Maison Atelier. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
