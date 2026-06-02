import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function TechMarketplace() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Button>
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4">Tech Products Marketplace</h1>
          <p className="text-gray-600 text-lg mb-8">Multi-vendor tech marketplace with advanced search, product comparisons, and customer review systems.</p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-vendor support</li>
                  <li>• Advanced search & filters</li>
                  <li>• Product comparison tools</li>
                  <li>• Review & rating system</li>
                  <li>• Vendor dashboard</li>
                  <li>• Real-time inventory</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Express", "MongoDB", "TailwindCSS"].map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Showcase</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-slate-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Tech Marketplace Preview</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1">
              <Globe className="w-4 h-4 mr-2" /> View Live
            </Button>
            <Button variant="outline" className="flex-1">
              <Github className="w-4 h-4 mr-2" /> View Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
