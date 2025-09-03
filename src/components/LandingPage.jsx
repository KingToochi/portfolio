import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { Link } from "react-router-dom"; // Correct package

export default function Portfolio() {
  const projects = [
    {
      title: "Modern Login Page",
      description:
        "A responsive login page built with React and Tailwind. Includes form validation and google authetification.",
      tech: ["React", "TailwindCSS", "FontAwesomeIcon", "react-hook-form", "Firebase", "Google authetification"],
      live: "https://amanidesign.vercel.app/",
      github: "https://github.com/KingToochi/Amani-design.git"
    },
    {
      title: "Full-stack Hospital website",
      description:
        "This a hospital website, that collects data from patients, doctors and nurses. It enables easy record keeping like, appointment and previous diagnosis",
      tech: ["React", "TailwindCSS", "Context API", "Rest API", "material ui", "FontAwesomeIcon", "react-hook-form",],
      live: "https://hospital-c4wu.vercel.app/",
      github: "https://github.com/KingToochi/Hospital.git",
    },
    {
      title: "Dashboard UI",
      description:
        "An interactive dashboard with data tables. Built with react and Tailwind.",
      tech: ["React", "TailwindCSS", "lucide-react"],
      live: "/dashboard", // internal route
      github: "https://github.com/KingToochi/portfolio.git",
    },
    {
      title: "Blog Page",
      description:
        "A responsive website built with React and styled using Tailwind CSS. The project showcases clean UI components, semantic content structuring, and reusable design patterns.",
      tech: ["HTML", "CSS"],
      live: "/blog", // internal route
      github: "https://github.com/KingToochi/wdd130.git",
    },
    {
      title: "E-commerce Landing Page",
      description:
        "An interactive landing page with products displayed. Built with react and Tailwind.",
      tech: ["React", "TailwindCSS"],
      live: "/Landingpage", // internal route
      github: "https://github.com/KingToochi/portfolio.git",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full py-8 text-center bg-white shadow-md">
        <h1 className="text-3xl font-bold">Toochukwu Kingsley Umoke</h1>
        <p className="text-gray-600">Frontend Developer | React & TailwindCSS</p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600">
          I am a passionate frontend developer with experience in building
          responsive, user-friendly web applications. I enjoy creating modern
          UIs and bringing designs to life.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="h-full rounded-2xl shadow-md">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <Button asChild variant="outline" className="flex-1">
                      {project.live.startsWith("http") ? (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <Globe className="w-4 h-4 mr-2" /> Live
                        </a>
                      ) : (
                        <Link to={project.live}>
                          <Globe className="w-4 h-4 mr-2" /> Live
                        </Link>
                      )}
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" /> Code
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
      <section className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">
          Feel free to reach out for collaborations or job opportunities.
        </p>
        <div className="space-y-2">
          <p>umoketoochukwu@gmail.com</p>
          <p>+2349031183272</p>
        </div>
        <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 AmaniSky. All rights reserved.</p>
      </footer>
      </section>
    </div>
  );
}
