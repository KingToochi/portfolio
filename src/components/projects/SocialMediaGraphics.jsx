import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function SocialMediaGraphics() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Button>
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4">Social Media Graphics</h1>
          <p className="text-gray-600 text-lg mb-8">Cohesive social media content package with Instagram posts, stories, banners, and promotional graphics.</p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Content Includes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Instagram posts (1080x1080)</li>
                  <li>• Instagram stories (1080x1920)</li>
                  <li>• Facebook banners (1200x628)</li>
                  <li>• Twitter/X headers (1500x500)</li>
                  <li>• LinkedIn graphics (1200x627)</li>
                  <li>• Promotional materials</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Canva Pro", "Adobe Photoshop"].map((tech, i) => (
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
            <div className="bg-gradient-to-br from-rose-50 to-slate-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Social Media Graphics Showcase</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1">
              <Globe className="w-4 h-4 mr-2" /> View Portfolio
            </Button>
            <Button variant="outline" className="flex-1">
              <Github className="w-4 h-4 mr-2" /> Files
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
