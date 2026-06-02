import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function CorporateWebsite() {
  const stats = [
    { label: "Active Customers", value: "50K+" },
    { label: "Products", value: "10K+" },
    { label: "Orders Shipped", value: "250K+" },
    { label: "Customer Satisfaction", value: "98%" }
  ];

  const categories = [
    { name: "Electronics", count: "2,450 products" },
    { name: "Fashion", count: "3,100 products" },
    { name: "Home & Garden", count: "1,800 products" },
    { name: "Sports & Outdoors", count: "1,200 products" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Verified Buyer", text: "Amazing quality and fast shipping! Will definitely order again." },
    { name: "Michael Chen", role: "Verified Buyer", text: "Great customer service. They helped me find exactly what I needed." },
    { name: "Emma Davis", role: "Verified Buyer", text: "Best prices I've found online. Highly recommended!" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 mt-8 ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Button>
        </Link>

        {/* Header/Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg mx-4 mb-12 p-8 md:p-12">
          <h1 className="text-5xl font-bold mb-4">TechHub Store</h1>
          <p className="text-xl text-blue-100 mb-6">Your trusted destination for premium products & exceptional service</p>
          <div className="flex gap-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Shop Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700">
              Learn More
            </Button>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-6 mx-4 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Sections */}
        <div className="mx-4 mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Product Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-500">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg mx-4 mb-12 p-8">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-3">🚚</div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $50. Fast, reliable delivery to your doorstep.</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-3">🛡️</div>
              <h3 className="font-semibold mb-2">Secure Shopping</h3>
              <p className="text-gray-600">SSL encrypted checkout with multiple payment options.</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-3">💬</div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer service team ready to help anytime.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mx-4 mb-12">
          <h2 className="text-3xl font-bold mb-8">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white rounded-lg mx-4 mb-12 p-8">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Responsive e-commerce homepage</li>
                <li>✓ Product category showcase</li>
                <li>✓ Customer testimonials section</li>
                <li>✓ Company statistics dashboard</li>
                <li>✓ Benefits & value proposition</li>
                <li>✓ Call-to-action optimization</li>
                <li>✓ SEO optimized structure</li>
                <li>✓ Mobile-first design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TailwindCSS", "React Router", "Responsive Design", "Modern UI"].map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg mx-4 mb-12 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to See This Live?</h2>
          <p className="text-gray-600 mb-6">This e-commerce corporate website showcases best practices for conversion-focused design and user engagement.</p>
          <div className="flex gap-4 justify-center">
            <Button className="flex-1 max-w-xs">
              <Globe className="w-4 h-4 mr-2" /> View Live Demo
            </Button>
            <Button variant="outline" className="flex-1 max-w-xs">
              <Github className="w-4 h-4 mr-2" /> View Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
