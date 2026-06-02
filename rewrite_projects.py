from pathlib import Path
files = {
    "src/components/projects/BrandIdentity.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const brandAssets = [
    "Primary logo system",
    "Color palette + gradients",
    "Typography & icon set",
    "Brand guidelines PDF",
    "Business card mockups",
];

export default function BrandIdentity() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Brand Identity Package</h1>
                    <p className="mt-4 text-gray-600 text-lg">A unified brand identity system for a modern tech business, including logo, palette, typography, and application examples.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">What’s included</h2>
                            <ul className="space-y-3 text-gray-700">
                                {brandAssets.map((asset) => (
                                    <li key={asset} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {asset}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-8">
                            <div className="space-y-6">
                                <div className="h-20 rounded-3xl bg-white shadow-sm" />
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-24 rounded-3xl bg-slate-100" />
                                    <div className="h-24 rounded-3xl bg-slate-100" />
                                    <div className="h-24 rounded-3xl bg-slate-100" />
                                </div>
                                <div className="grid gap-3">
                                    <div className="h-16 rounded-3xl bg-white p-4 shadow-sm">
                                        <div className="h-3 w-24 rounded-full bg-slate-200" />
                                    </div>
                                    <div className="h-16 rounded-3xl bg-white p-4 shadow-sm">
                                        <div className="h-3 w-28 rounded-full bg-slate-200" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                        <Button className="flex-1">View brand book</Button>
                        <Button variant="outline" className="flex-1">Download assets</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/CorporateWebsite.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
    "Homepage with a strong value proposition",
    "Service sections with cards",
    "Team bios and testimonials",
    "Contact form with email integration",
    "SEO-friendly content sections",
];

export default function CorporateWebsite() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                        <div>
                            <h1 className="text-4xl font-bold">Corporate Website</h1>
                            <p className="mt-4 text-gray-600 text-lg">A polished corporate website built to communicate services clearly, share company values, and convert visitors into qualified leads.</p>
                        </div>
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Core outcome</p>
                            <p className="mt-4 text-2xl font-semibold text-slate-900">Higher brand trust & better lead capture</p>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Website Highlights</h2>
                            <ul className="space-y-3 text-gray-700">
                                {features.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-stone-50 to-slate-100 p-6">
                            <div className="h-80 rounded-3xl bg-white shadow-sm" />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">View website demo</Button>
                        <Button variant="outline" className="w-full">Request proposal</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/CRMSystem.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const crmFeatures = [
    "Contact and lead management",
    "Deal pipeline tracking",
    "Email automation workflows",
    "Sales activity logging",
    "Custom reporting dashboards",
];

export default function CRMSystem() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">CRM System</h1>
                    <p className="mt-4 text-gray-600 text-lg">A CRM platform designed for small to midsize e-commerce teams to manage leads, close deals, and automate follow-up.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">What’s included</h2>
                            <ul className="space-y-3 text-gray-700">
                                {crmFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="mb-4 rounded-3xl bg-white p-6 shadow-sm">
                                <p className="text-sm font-medium text-slate-500">Pipeline health</p>
                                <p className="mt-3 text-3xl font-semibold text-slate-900">$142.7K</p>
                            </div>
                            <div className="rounded-3xl bg-white p-6 shadow-sm">
                                <p className="text-sm font-medium text-slate-500">Open deals</p>
                                <p className="mt-3 text-3xl font-semibold text-slate-900">46</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                        <Button className="flex-1">Explore CRM</Button>
                        <Button variant="outline" className="flex-1">View platform</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/DocumentationWebsite.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const pages = [
    "Developer guides",
    "API reference",
    "Getting started tutorials",
    "Searchable knowledge base",
    "Versioned release notes",
];

export default function DocumentationWebsite() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Documentation Website</h1>
                    <p className="mt-4 text-gray-600 text-lg">A scalable documentation portal built for product teams, with search, versioning, and developer-friendly code snippets.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Key sections</h2>
                            <ul className="space-y-3 text-gray-700">
                                {pages.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="space-y-4">
                                <div className="h-16 rounded-3xl bg-white p-4 shadow-sm" />
                                <div className="h-32 rounded-3xl bg-white p-4 shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Preview docs</Button>
                        <Button variant="outline" className="w-full">View search</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/EmailMarketing.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const templates = [
    "Launch announcement",
    "Monthly newsletter",
    "Cart recovery",
    "Product showcase",
    "Welcome funnel",
];

export default function EmailMarketing() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Email Marketing Templates</h1>
                    <p className="mt-4 text-gray-600 text-lg">A responsive email template suite for product launches, promotions, and customer nurturing across every inbox.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Template types</h2>
                            <ul className="space-y-3 text-gray-700">
                                {templates.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="grid gap-4">
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Preview templates</Button>
                        <Button variant="outline" className="w-full">Request custom design</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/FashionStore.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const storeFeatures = [
    "Smart product filtering",
    "Wishlist & favorites",
    "Secure checkout flow",
    "Customer reviews",
    "Responsive product grid",
];

export default function FashionStore() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Fashion Store</h1>
                    <p className="mt-4 text-gray-600 text-lg">A premium fashion storefront built for browsing trends, selecting variants, and checking out effortlessly across devices.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Shop features</h2>
                            <ul className="space-y-3 text-gray-700">
                                {storeFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="h-80 rounded-3xl bg-white shadow-sm" />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">View storefront</Button>
                        <Button variant="outline" className="w-full">Demo checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/InventoryManagement.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const inventoryPoints = [
    "Stock threshold alerts",
    "Reorder automation",
    "Multi-location tracking",
    "Barcode scanning workflow",
    "Inventory health dashboard",
];

export default function InventoryManagement() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Inventory Management System</h1>
                    <p className="mt-4 text-gray-600 text-lg">A smart stock management application for retailers and warehouses that keeps inventory balanced and reorder-ready.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">System capabilities</h2>
                            <ul className="space-y-3 text-gray-700">
                                {inventoryPoints.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="grid gap-4">
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">View inventory demo</Button>
                        <Button variant="outline" className="w-full">Download overview</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/LogoDesigns.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const logoStyles = [
    "Minimal tech marks",
    "Wordmarks & logotypes",
    "Color & monochrome versions",
    "Brand application previews",
    "Flexible icon systems",
];

export default function LogoDesigns() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Logo Design Collection</h1>
                    <p className="mt-4 text-gray-600 text-lg">A curated collection of modern logo designs created for startups, agencies, and product brands across the tech and lifestyle sectors.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Design overview</h2>
                            <ul className="space-y-3 text-gray-700">
                                {logoStyles.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="grid gap-4">
                                <div className="h-28 rounded-3xl bg-white shadow-sm" />
                                <div className="h-28 rounded-3xl bg-white shadow-sm" />
                                <div className="h-28 rounded-3xl bg-white shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Browse logos</Button>
                        <Button variant="outline" className="w-full">Ask for custom mark</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/MobileAppDashboard.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const mobileFeatures = [
    "User metrics overview",
    "Performance monitoring",
    "Notifications control",
    "Feedback funnel",
    "Mobile-first UI panels",
];

export default function MobileAppDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Mobile App Dashboard</h1>
                    <p className="mt-4 text-gray-600 text-lg">A mobile-first operations dashboard for tracking app metrics, push notifications, and user engagement in one place.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Dashboard features</h2>
                            <ul className="space-y-3 text-gray-700">
                                {mobileFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="grid gap-4">
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Preview mobile UI</Button>
                        <Button variant="outline" className="w-full">View analytics</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/NetflixClone.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const streamingFeatures = [
    "Personalized watchlists",
    "Video browsing experience",
    "User profile support",
    "Playback controls",
    "Watch history tracking",
];

export default function NetflixClone() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Netflix Clone</h1>
                    <p className="mt-4 text-gray-600 text-lg">A streaming experience inspired by popular OTT platforms, complete with content browsing, profiles, and watchlists.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Platform highlights</h2>
                            <ul className="space-y-3 text-gray-700">
                                {streamingFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="h-80 rounded-3xl bg-white shadow-sm" />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Explore streaming UI</Button>
                        <Button variant="outline" className="w-full">View watchlist</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/ProductMarketing.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const campaignSteps = [
    "Launch landing page",
    "Design email sequence",
    "Build social creatives",
    "Track campaign analytics",
    "Optimize conversions",
];

export default function ProductMarketing() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Product Marketing Campaign</h1>
                    <p className="mt-4 text-gray-600 text-lg">A launch campaign designed to generate buzz, nurture leads, and convert visitors into customers with strategic messaging.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Campaign flow</h2>
                            <ul className="space-y-3 text-gray-700">
                                {campaignSteps.map((step) => (
                                    <li key={step} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="h-80 rounded-3xl bg-white shadow-sm" />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">View campaign demo</Button>
                        <Button variant="outline" className="w-full">See creative assets</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/RestaurantWebsite.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const menuSections = [
    "Seasonal menu highlights",
    "Reservation booking",
    "Online ordering",
    "Location & hours",
    "Gallery & chef story",
];

export default function RestaurantWebsite() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Restaurant Website</h1>
                    <p className="mt-4 text-gray-600 text-lg">A modern restaurant site with online reservations, menu browsing, and a polished culinary presentation.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Site features</h2>
                            <ul className="space-y-3 text-gray-700">
                                {menuSections.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="h-80 rounded-3xl bg-white shadow-sm" />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Preview restaurant UI</Button>
                        <Button variant="outline" className="w-full">View menu design</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/SaaSLanding.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
    "Clear product value statement",
    "Pricing tiers and feature grid",
    "Social proof section",
    "Email capture CTA",
    "Responsive hero layout",
];

export default function SaaSLanding() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">SaaS Landing Page</h1>
                    <p className="mt-4 text-gray-600 text-lg">A conversion-focused landing page for SaaS products, built to drive trials and clearly explain pricing and features.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Landing highlights</h2>
                            <ul className="space-y-3 text-gray-700">
                                {benefits.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="h-80 rounded-3xl bg-white shadow-sm" />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">View page layout</Button>
                        <Button variant="outline" className="w-full">See pricing section</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/SalesDashboard.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
    { label: "Revenue", value: "$284K" },
    { label: "Open deals", value: "48" },
    { label: "Forecast accuracy", value: "92%" },
];

export default function SalesDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Sales Dashboard</h1>
                    <p className="mt-4 text-gray-600 text-lg">A sales operations dashboard with pipeline health, revenue forecasting, and team performance metrics for growing businesses.</p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {metrics.map((item) => (
                            <div key={item.label} className="rounded-3xl bg-slate-50 p-6 shadow-sm">
                                <p className="text-sm font-medium text-gray-500">{item.label}</p>
                                <p className="mt-4 text-3xl font-semibold text-slate-900">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                        <div className="h-72 rounded-3xl bg-white shadow-sm" />
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">View pipeline</Button>
                        <Button variant="outline" className="w-full">Export forecast</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/SocialMediaGraphics.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const graphicTypes = [
    "Instagram posts",
    "Stories & reels",
    "LinkedIn banners",
    "Facebook cover ads",
    "Event promos",
];

export default function SocialMediaGraphics() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Social Media Graphics</h1>
                    <p className="mt-4 text-gray-600 text-lg">A visually cohesive social media asset suite for campaigns, product launches, and brand awareness across major channels.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Included formats</h2>
                            <ul className="space-y-3 text-gray-700">
                                {graphicTypes.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="grid gap-4">
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Preview assets</Button>
                        <Button variant="outline" className="w-full">Download sample</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/TaskManagement.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const taskFeatures = [
    "Kanban & list views",
    "Team assignments",
    "Progress tracking",
    "Time logs",
    "Priority labels",
];

export default function TaskManagement() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Task Management Software</h1>
                    <p className="mt-4 text-gray-600 text-lg">A collaborative task platform for teams that need visibility, timelines, and accountability across projects.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
                            <ul className="space-y-3 text-gray-700">
                                {taskFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="grid gap-4">
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                                <div className="h-24 rounded-3xl bg-white shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Explore workflow</Button>
                        <Button variant="outline" className="w-full">View demo board</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/TechMarketplace.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const marketplaceFeatures = [
    "Vendor storefronts",
    "Product comparison tools",
    "Advanced search filters",
    "Review & rating system",
    "Seller dashboards",
];

export default function TechMarketplace() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Tech Products Marketplace</h1>
                    <p className="mt-4 text-gray-600 text-lg">An ecommerce marketplace for tech products with vendor management, product comparison, and modern shopping experience.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Marketplace features</h2>
                            <ul className="space-y-3 text-gray-700">
                                {marketplaceFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="h-80 rounded-3xl bg-white shadow-sm" />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Browse vendors</Button>
                        <Button variant="outline" className="w-full">View product flow</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
    "src/components/projects/VideoStreaming.jsx": '''import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const videoFeatures = [
    "HD playback experience",
    "Playlist creation",
    "Monetization options",
    "Social sharing tools",
    "Content discovery UI",
];

export default function VideoStreaming() {
    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <Link to="/">
                    <Button variant="ghost" className="mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h1 className="text-4xl font-bold">Video Streaming Platform</h1>
                    <p className="mt-4 text-gray-600 text-lg">A video streaming experience built to support playlists, HD playback, social sharing, and smooth content discovery.</p>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-3xl bg-slate-50 p-6">
                            <h2 className="text-2xl font-semibold mb-4">Platform features</h2>
                            <ul className="space-y-3 text-gray-700">
                                {videoFeatures.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-6">
                            <div className="h-80 rounded-3xl bg-white shadow-sm" />
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <Button className="w-full">Explore streaming UX</Button>
                        <Button variant="outline" className="w-full">View content feed</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
''',
}

root = Path(".")
for path, content in files.items():
    file_path = root / path
    file_path.write_text(content, encoding="utf-8")
print(f"Updated {len(files)} project files")
