import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Github,
  Globe,
  Layers3,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const stats = [
    { label: "Projects launched", value: "12+" },
    { label: "Years of design thinking", value: "5" },
    { label: "Client satisfaction", value: "98%" },
  ];

  const strengths = [
    "Conversion-focused UI design",
    "Clean front-end architecture",
    "Web experiences tailored to your brand",
  ];

  const projects = [
    {
      title: "Modern Login Page",
      description:
        "A responsive login page built with React and Tailwind. Includes form validation and google authentication.",
      tech: ["React", "TailwindCSS", "FontAwesomeIcon", "react-hook-form", "Firebase", "Google Auth"],
      live: "https://fashion.amanisky.tech/login",
      github: "https://github.com/KingToochi/Amani-design.git",
    },
    {
      title: "E-commerce Landing Page",
      description:
        "Interactive e-commerce landing page with product showcase, shopping cart, and checkout flow. SEO optimized.",
      tech: ["React", "TailwindCSS", "Stripe", "Redux"],
      live: "https://fashion.amanisky.tech",
      github: "https://github.com/KingToochi/Amani-design.git",
    },
    {
      title: "Fashion Store",
      description:
        "Full-featured fashion e-commerce platform with product filtering, wishlist, reviews, and secure payment processing.",
      tech: ["React", "Next.js", "TailwindCSS", "Stripe", "PostgreSQL"],
      live: "https://fashion.amanisky.tech/products",
      github: "https://github.com/KingToochi/Amani-design.git",
    },
    {
      title: "Full-stack Hospital Website",
      description:
        "Complete hospital management system for collecting patient and doctor data. Features appointment scheduling, diagnosis history, and admin dashboard for record keeping.",
      tech: ["React", "TailwindCSS", "Context API", "Rest API", "Material UI", "react-hook-form"],
      live: "https://hospital-c4wu.vercel.app/",
      github: "https://github.com/KingToochi/Hospital.git",
    },
    {
      title: "Tech Products Marketplace",
      description:
        "Multi-vendor tech marketplace with advanced search, product comparisons, and customer review systems.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      live: "/projects/tech-marketplace",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics dashboard with real-time data visualization, charts, metrics tracking, and export functionality.",
      tech: ["React", "Chart.js", "TailwindCSS", "D3.js", "REST API"],
      live: "/projects/analytics-dashboard",
      github: "#",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-violet-200">
              A
            </div>
            <div>
              <p className="text-base font-bold tracking-tight text-slate-900">Amanisky NexTech</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Digital peace</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#projects" className="transition hover:text-slate-900">Work</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </div>

          <Button asChild className="hidden rounded-full bg-slate-900 text-white shadow-lg shadow-slate-200 hover:bg-slate-800 sm:inline-flex">
            <a href="#contact">Book a call</a>
          </Button>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700">
                <Sparkles className="h-4 w-4" /> Calm digital experiences
              </span>

              <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
                Design, build, and grow with a <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">peaceful</span> digital strategy.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Amanisky NexTech blends strong branding, seamless UX, and clean development to turn ideas into polished online experiences that feel effortless to use.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="rounded-full bg-slate-900 px-6 py-6 text-base font-medium text-white shadow-lg shadow-slate-200 hover:bg-slate-800">
                  <a href="#contact">
                    Book a discovery call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button asChild variant="outline" className="rounded-full border-slate-200 bg-white px-6 py-6 text-base font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                  <a href="#projects">View projects</a>
                </Button>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                    <p className="text-2xl font-black tracking-tight text-slate-900">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-violet-200/60 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-cyan-200/60 blur-3xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Currently booking
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available
                  </span>
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-slate-900 p-5 text-white shadow-inner shadow-slate-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Focus</p>
                      <h2 className="mt-2 text-2xl font-bold">Brand + Product UX</h2>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-2">
                      <Layers3 className="h-6 w-6 text-violet-300" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {strengths.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-200">
                        <Star className="h-4 w-4 text-amber-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <Code2 className="h-5 w-5 text-violet-600" />
                    <p className="mt-3 text-xl font-bold text-slate-900">Clean code</p>
                    <p className="mt-1 text-sm text-slate-500">Scalable front ends</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <Globe className="h-5 w-5 text-cyan-600" />
                    <p className="mt-3 text-xl font-bold text-slate-900">Web-first</p>
                    <p className="mt-1 text-sm text-slate-500">Responsive by default</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">About us</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
                Thoughtful design meets dependable execution.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                At Amanisky NexTech, we believe technology should feel calm, focused, and effortless. “Amani” means peace, and that philosophy shapes every digital experience we create.
              </p>
              <p>
                We partner with founders and businesses to design high-performing websites, product experiences, and custom interfaces that look premium and convert with clarity.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Featured work</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl">Selected projects</h2>
              </div>
              <p className="max-w-xl text-slate-300">
                A mix of storefronts, dashboards, and product experiences created to look great and guide user action with confidence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="h-full"
                >
                  <Card className="h-full border-slate-800 bg-slate-950/70 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.9)]">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <div>
                        <div className="mb-4 flex items-center justify-between">
                          <span className="rounded-full bg-violet-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                            Project {index + 1}
                          </span>
                          <span className="text-xs text-slate-400">{project.tech.length} tools</span>
                        </div>

                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={`${tech}-${i}`}
                              className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <Button asChild variant="outline" className="flex-1 border-slate-700 bg-slate-900 text-sm text-white hover:bg-slate-800">
                          {project.live.startsWith("http") ? (
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <Globe className="mr-2 h-4 w-4" /> Live
                            </a>
                          ) : (
                            <Link to={project.live}>
                              <Globe className="mr-2 h-4 w-4" /> Live
                            </Link>
                          )}
                        </Button>

                        {project.github && project.github !== "#" ? (
                          <Button asChild variant="outline" className="flex-1 border-slate-700 bg-slate-900 text-sm text-white hover:bg-slate-800">
                            <a href={project.github} target="_blank" rel="noreferrer">
                              <Github className="mr-2 h-4 w-4" /> Code
                            </a>
                          </Button>
                        ) : (
                          <Button asChild variant="outline" className="flex-1 border-slate-700 bg-slate-900 text-sm text-white hover:bg-slate-800" disabled>
                            <span className="flex items-center">
                              <Github className="mr-2 h-4 w-4" /> Code
                            </span>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Let’s build</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-5xl">
              Ready to elevate your digital presence?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you need a new website, a stronger brand, or a smoother product experience, we can help you make it feel clear, premium, and easy to trust.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild className="rounded-full bg-slate-900 px-6 py-6 text-base font-medium text-white shadow-lg shadow-slate-200 hover:bg-slate-800">
                <a href="mailto:contact@amanisky.tech">contact@amanisky.tech</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-slate-200 bg-white px-6 py-6 text-base font-medium text-slate-700 hover:bg-slate-50">
                <a href="#top">Back to top</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-8 text-center text-sm text-slate-500">
        &copy; 2025 Amanisky NexTech. Crafted with clarity and care.
      </footer>
    </div>
  );
}
