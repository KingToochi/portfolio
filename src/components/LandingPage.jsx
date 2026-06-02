import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { Link } from "react-router-dom"; // Correct package

export default function Portfolio() {
  const projects = [
    // Web Development Projects
    {
      title: "Modern Login Page",
      description:
        "A responsive login page built with React and Tailwind. Includes form validation and google authentication.",
      tech: ["React", "TailwindCSS", "FontAwesomeIcon", "react-hook-form", "Firebase", "Google Auth"],
      live: "https://amanidesign.vercel.app/",
      github: "https://github.com/KingToochi/Amani-design.git"
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
      title: "Corporate Website",
      description:
        "Professional corporate website with service showcase, team profiles, and contact management. Fully responsive and optimized for conversions.",
      tech: ["React", "TailwindCSS", "Framer Motion", "EmailJS"],
      live: "/projects/corporate-website",
      github: "#"
    },
    {
      title: "SaaS Landing Page",
      description:
        "High-converting SaaS landing page with pricing tiers, feature comparison, and testimonials. Built for maximum engagement.",
      tech: ["Next.js", "TailwindCSS", "React", "Vercel"],
      live: "/projects/saas-landing",
      github: "#"
    },
    {
      title: "Restaurant Website",
      description:
        "Modern restaurant website with menu display, reservation system, and online ordering capabilities. Mobile-first design.",
      tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
      live: "/projects/restaurant-website",
      github: "#"
    },

    // E-Commerce Projects
    {
      title: "E-commerce Landing Page",
      description:
        "Interactive e-commerce landing page with product showcase, shopping cart, and checkout flow. SEO optimized.",
      tech: ["React", "TailwindCSS", "Stripe", "Redux"],
      live: "/Landingpage",
      github: "https://github.com/KingToochi/portfolio.git"
    },
    {
      title: "Fashion Store",
      description:
        "Full-featured fashion e-commerce platform with product filtering, wishlist, reviews, and secure payment processing.",
      tech: ["React", "Next.js", "TailwindCSS", "Stripe", "PostgreSQL"],
      live: "/projects/fashion-store",
      github: "#"
    },
    {
      title: "Tech Products Marketplace",
      description:
        "Multi-vendor tech marketplace with advanced search, product comparisons, and customer review systems.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      live: "/projects/tech-marketplace",
      github: "#"
    },

    // Dashboard Projects
    {
      title: "Analytics Dashboard",
      description:
        "Comprehensive analytics dashboard with real-time data visualization, charts, metrics tracking, and export functionality.",
      tech: ["React", "Chart.js", "TailwindCSS", "D3.js", "REST API"],
      live: "/projects/analytics-dashboard",
      github: "#"
    },
    {
      title: "Mobile App Dashboard",
      description:
        "Mobile-first dashboard for app management with user metrics, app performance tracking, and push notification management.",
      tech: ["React Native", "React", "TailwindCSS", "Firebase", "Redux"],
      live: "/projects/mobile-app-dashboard",
      github: "#"
    },
    {
      title: "Admin Dashboard UI",
      description:
        "Interactive admin dashboard with data tables, user management, role permissions, and system monitoring.",
      tech: ["React", "TailwindCSS", "lucide-react"],
      live: "/dashboard",
      github: "https://github.com/KingToochi/portfolio.git",
    },
    {
      title: "Sales Dashboard",
      description:
        "Sales management dashboard with revenue tracking, pipeline visualization, forecasting, and team performance metrics.",
      tech: ["React", "ApexCharts", "TailwindCSS", "REST API"],
      live: "/projects/sales-dashboard",
      github: "#"
    },

    // Streaming/Entertainment
    {
      title: "Netflix Clone",
      description:
        "Feature-rich streaming platform clone with video library, personalized recommendations, watch history, and user profiles.",
      tech: ["React", "Firebase", "TailwindCSS", "Redux", "Stripe"],
      live: "/projects/netflix-clone",
      github: "#"
    },
    {
      title: "Video Streaming Platform",
      description:
        "Complete video streaming solution with HD playback, playlist creation, social sharing, and monetization features.",
      tech: ["React", "Node.js", "HLS.js", "AWS S3", "MongoDB"],
      live: "/projects/video-streaming",
      github: "#"
    },

    // Graphic Design Projects
    {
      title: "Brand Identity Package",
      description:
        "Complete brand identity design including logo, color palette, typography guidelines, and brand asset collection.",
      tech: ["Figma", "Adobe Creative Suite", "Branding"],
      live: "/projects/brand-identity",
      github: "#"
    },
    {
      title: "Logo Design Collection",
      description:
        "Portfolio of modern, minimalist logo designs for various industries including tech, finance, healthcare, and retail.",
      tech: ["Adobe Illustrator", "Figma", "Design"],
      live: "/projects/logo-designs",
      github: "#"
    },
    {
      title: "Social Media Graphics",
      description:
        "Cohesive social media content package with Instagram posts, stories, banners, and promotional graphics.",
      tech: ["Figma", "Canva Pro", "Adobe Photoshop"],
      live: "/projects/social-media-graphics",
      github: "#"
    },

    // Software/Custom Solutions
    {
      title: "Task Management Software",
      description:
        "Collaborative task management application with real-time updates, team workspaces, Gantt charts, and time tracking.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "TailwindCSS"],
      live: "/projects/task-management",
      github: "#"
    },
    {
      title: "CRM System",
      description:
        "Customer relationship management platform with contact management, sales pipeline, email integration, and reporting.",
      tech: ["React", "Express", "MongoDB", "Node.js", "TailwindCSS"],
      live: "/projects/crm-system",
      github: "#"
    },
    {
      title: "Inventory Management System",
      description:
        "Smart inventory tracking system with stock alerts, automated reordering, barcode scanning, and analytics.",
      tech: ["React", "Node.js", "MySQL", "Express", "QR Code Library"],
      live: "/projects/inventory-management",
      github: "#"
    },

    // Content & Blog
    {
      title: "Blog Platform",
      description:
        "Responsive blog platform with markdown support, categories, tags, search functionality, and comment system.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://amani-design-rho.vercel.app/",
      github: "https://github.com/KingToochi/wdd130.git",
    },
    {
      title: "Documentation Website",
      description:
        "Technical documentation site with search, sidebar navigation, code examples, and version management.",
      tech: ["Next.js", "MDX", "TailwindCSS", "Algolia Search"],
      live: "/projects/documentation-website",
      github: "#"
    },

    // Marketing Projects
    {
      title: "Product Marketing Campaign",
      description:
        "Integrated marketing campaign with landing page, email sequences, and social media assets for product launch.",
      tech: ["React", "TailwindCSS", "Mailchimp", "Analytics"],
      live: "/projects/product-marketing",
      github: "#"
    },
    {
      title: "Email Marketing Templates",
      description:
        "Responsive email marketing template collection optimized for all clients with drag-and-drop editor.",
      tech: ["HTML", "CSS", "Mjml", "Email Design"],
      live: "/projects/email-marketing",
      github: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* Header */}
      <header className="w-full py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Amanisky NexTech</h1>
        <p className="text-gray-600 text-lg">Crafting Digital Peace of Mind</p>
      </header>

      {/* About Section */}
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Amanisky NexTech, we believe that technology should be stress-free and serene. 
          "Amani" means peace, and that's exactly what we bring to your digital journey. 
          We're your full-service tech partner — from pixels to code, we handle it all with a calm, 
          clear approach. Whether you need a high-converting website, a brand identity that pops, 
          or custom digital solutions, we handle the heavy lifting so you can enjoy the view from the top.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full"
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-5 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button asChild variant="outline" className="flex-1 text-sm">
                      {project.live.startsWith("http") ? (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <Globe className="w-4 h-4" /> Live
                        </a>
                      ) : (
                        <Link to={project.live}>
                          <Globe className="w-4 h-4" /> Live
                        </Link>
                      )}
                    </Button>
                    <Button asChild variant="outline" className="flex-1 text-sm">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-gray-200 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Whether you need a brand new website, a logo refresh, or just some tech advice — 
            we are here to help. Let's work together to bring your vision to life.
          </p>
          <div className="space-y-2 text-gray-700">
            <p className="text-lg">contact@amanisky.tech</p>
          </div>
        </div>
        <footer className="border-t border-gray-200 py-8 text-center text-gray-600">
          <p>&copy; 2025 Amanisky NexTech. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
}
