import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function BrandIdentity() {
    const colorPalette = [
        { name: "Primary", hex: "#2563EB", desc: "Deep Blue" },
        { name: "Secondary", hex: "#10B981", desc: "Emerald Green" },
        { name: "Accent", hex: "#F59E0B", desc: "Amber Gold" },
        { name: "Neutral Light", hex: "#F3F4F6", desc: "Gray Light" },
        { name: "Neutral Dark", hex: "#1F2937", desc: "Gray Dark" },
        { name: "Success", hex: "#22C55E", desc: "Lime Green" }
    ];

    const fonts = [
        { name: "Heading", font: "Inter Bold", size: "32-48px" },
        { name: "Body", font: "Inter Regular", size: "16px" },
        { name: "Caption", font: "Inter Medium", size: "12-14px" }
    ];

    const logoVariations = [
        { name: "Primary Logo", desc: "Full color on white background" },
        { name: "Logo Mark", desc: "Icon-only version for small applications" },
        { name: "Logo Horizontal", desc: "Landscape orientation for headers" },
        { name: "Monochrome", desc: "Black & white version for print" }
    ];

    const guidelines = [
        "Clear space rules & minimum size requirements",
        "Color usage guidelines & accessibility compliance",
        "Typography hierarchy & font pairings",
        "Photography & imagery style guide",
        "Icon set with 50+ consistent icons",
        "UI component library & design tokens"
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8 mt-8 ml-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 text-white rounded-lg mx-4 mb-12 p-8 md:p-12">
                    <h1 className="text-5xl font-bold mb-4">TechFlow Brand Identity</h1>
                    <p className="text-xl text-blue-100 mb-6">Complete brand system design with cohesive visual language, guidelines, and application examples</p>
                    <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center text-2xl font-bold text-blue-600">TF</div>
                </div>

                {/* Color Palette */}
                <div className="bg-white rounded-lg mx-4 mb-12 p-8">
                    <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {colorPalette.map((color, i) => (
                            <div key={i} className="text-center">
                                <div 
                                    className="w-full h-32 rounded-lg mb-4 shadow-md border border-gray-200" 
                                    style={{ backgroundColor: color.hex }}
                                />
                                <p className="font-semibold text-gray-900 text-sm">{color.name}</p>
                                <p className="text-gray-500 text-xs">{color.desc}</p>
                                <p className="text-gray-700 font-mono text-xs mt-1">{color.hex}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Typography */}
                <div className="bg-white rounded-lg mx-4 mb-12 p-8">
                    <h2 className="text-3xl font-bold mb-8">Typography</h2>
                    <div className="space-y-8">
                        {fonts.map((font, i) => (
                            <div key={i} className="border-b pb-6 last:border-b-0">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{font.name}</h3>
                                        <p className="text-sm text-gray-500">{font.font} • {font.size}</p>
                                    </div>
                                </div>
                                {i === 0 && <p style={{ fontWeight: 'bold', fontSize: '32px' }} className="text-gray-900">The quick brown fox jumps over the lazy dog</p>}
                                {i === 1 && <p style={{ fontWeight: '400', fontSize: '16px' }} className="text-gray-900">The quick brown fox jumps over the lazy dog. 0123456789</p>}
                                {i === 2 && <p style={{ fontWeight: '500', fontSize: '14px' }} className="text-gray-900">The quick brown fox jumps over the lazy dog</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logo Variations */}
                <div className="bg-white rounded-lg mx-4 mb-12 p-8">
                    <h2 className="text-3xl font-bold mb-8">Logo Variations</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {logoVariations.map((logo, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-6 text-center">
                                <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center mb-4 font-bold text-xl text-gray-400">
                                    Logo
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{logo.name}</h3>
                                <p className="text-sm text-gray-500">{logo.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Brand Applications */}
                <div className="bg-white rounded-lg mx-4 mb-12 p-8">
                    <h2 className="text-3xl font-bold mb-8">Brand Applications</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-blue-50 h-32 flex items-center justify-center text-gray-400">Business Cards</div>
                            <div className="p-4">
                                <p className="font-semibold text-gray-900 mb-2">Business Cards</p>
                                <p className="text-sm text-gray-600">Professional layout with company details and brand colors</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-emerald-50 h-32 flex items-center justify-center text-gray-400">Letterhead</div>
                            <div className="p-4">
                                <p className="font-semibold text-gray-900 mb-2">Letterhead Design</p>
                                <p className="text-sm text-gray-600">Official stationery with logo placement guidelines</p>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-amber-50 h-32 flex items-center justify-center text-gray-400">Website</div>
                            <div className="p-4">
                                <p className="font-semibold text-gray-900 mb-2">Web Guidelines</p>
                                <p className="text-sm text-gray-600">Digital brand standards and responsive design specs</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Guidelines Overview */}
                <div className="bg-white rounded-lg mx-4 mb-12 p-8">
                    <h2 className="text-3xl font-bold mb-8">Brand Guidelines Included</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <ul className="space-y-3">
                                {guidelines.map((guideline, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-600 font-bold mt-1">✓</span>
                                        <span className="text-gray-700">{guideline}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg p-6 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
                                <p className="text-gray-600">Design Assets & Components</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Details */}
                <div className="bg-white rounded-lg mx-4 mb-12 p-8">
                    <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Deliverables</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li>✓ Complete brand guidelines document (PDF)</li>
                                <li>✓ Logo files in multiple formats (AI, SVG, PNG)</li>
                                <li>✓ Color swatches & specifications</li>
                                <li>✓ Typography guidelines & font files</li>
                                <li>✓ Icon set (50+ icons in multiple sizes)</li>
                                <li>✓ Application mockups & templates</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Softwares Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Figma", "Adobe Illustrator", "Adobe Photoshop", "Branding", "Design System"].map((tool, i) => (
                                    <span key={i} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-blue-50 rounded-lg mx-4 mb-12 p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">View Brand Identity Package</h2>
                    <p className="text-gray-600 mb-6">Complete branding system with comprehensive guidelines, logo variations, and design assets ready for implementation.</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button className="flex-1 max-w-xs">
                            <Globe className="w-4 h-4 mr-2" /> View Brand Book
                        </Button>
                        <Button variant="outline" className="flex-1 max-w-xs">
                            <Github className="w-4 h-4 mr-2" /> Download Assets
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

