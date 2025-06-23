import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Database, 
  Droplet, 
  Server, 
  Palette, 
  Wrench,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Rocket,
  CheckCircle,
  UserCheck,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-healthcare-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">HealthTech Portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-600 hover:text-healthcare-blue-600 transition-colors duration-200"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('technologies')}
                className="text-gray-600 hover:text-healthcare-blue-600 transition-colors duration-200"
              >
                Technologies
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-healthcare-blue-600 transition-colors duration-200"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-left py-2 text-gray-600 hover:text-healthcare-blue-600 transition-colors duration-200"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('technologies')}
                  className="text-left py-2 text-gray-600 hover:text-healthcare-blue-600 transition-colors duration-200"
                >
                  Technologies
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 text-gray-600 hover:text-healthcare-blue-600 transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-healthcare-blue-50 via-white to-medical-green-50 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforming Healthcare with{" "}
                <span className="text-healthcare-blue-600">Smart SaaS</span>{" "}
                <span className="text-medical-green-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore powerful cloud-based platforms that enhance patient care, data management, and blood donation systems through innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('products')}
                  className="btn-healthcare-primary px-8 py-4 text-lg"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Explore Products
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="btn-healthcare-outline px-8 py-4 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-64 bg-gradient-to-br from-healthcare-blue-100 to-medical-green-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Database className="h-16 w-16 text-healthcare-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Healthcare Technology</h3>
                    <p className="text-gray-600 mt-2">Modern Dashboard Interface</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-medical-green-500 text-white p-3 rounded-full shadow-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-healthcare-blue-500 text-white p-4 rounded-xl shadow-lg">
                <UserCheck className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of healthcare management systems designed to streamline operations and improve patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* HDIMS Product Card */}
            <Card className="group bg-gradient-to-br from-gray-50 to-healthcare-blue-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="bg-healthcare-blue-600/10 p-3 rounded-lg mr-4">
                    <Database className="h-8 w-8 text-healthcare-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">HDIMS</h3>
                </div>
                
                <Badge variant="secondary" className="mb-4 bg-healthcare-blue-100 text-healthcare-blue-700">
                  Health Data Information Management System
                </Badge>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A smart hospital-grade system for managing patient data, doctor workflows, and analytics using advanced data structures. Streamlines healthcare operations with comprehensive data management capabilities.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Flask</Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">PostgreSQL</Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Bootstrap 5</Badge>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">SQLAlchemy</Badge>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild
                    className="btn-healthcare-primary flex-1"
                  >
                    <a href="https://hdims-production.up.railway.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit App
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild
                    className="btn-healthcare-outline flex-1"
                  >
                    <a href="https://github.com/Naman-Kumar-06/HDIMS" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* DonorLink Product Card */}
            <Card className="group bg-gradient-to-br from-gray-50 to-medical-green-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="bg-medical-green-600/10 p-3 rounded-lg mr-4">
                    <Droplet className="h-8 w-8 text-medical-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">DonorLink</h3>
                </div>
                
                <Badge variant="secondary" className="mb-4 bg-medical-green-100 text-medical-green-700">
                  Cloud-Based Blood Management System
                </Badge>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A comprehensive platform to manage donors, requests, inventory, and notifications in real-time for hospitals and blood banks. Features smart matching algorithms and emergency broadcasting capabilities.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Flask</Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Bootstrap 5</Badge>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Chart.js</Badge>
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">SMTP</Badge>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild
                    className="btn-healthcare-secondary flex-1"
                  >
                    <a href="https://donorlink-hwvv.onrender.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit App
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild
                    className="btn-healthcare-outline flex-1 border-medical-green-600 text-medical-green-600 hover:bg-medical-green-600"
                  >
                    <a href="https://github.com/Naman-Kumar-06/DonorLink" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies Used</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare solutions are built with modern, reliable technologies ensuring scalability, security, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Backend Technologies */}
            <Card className="bg-white p-6 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Server className="text-healthcare-blue-600 mr-2 h-5 w-5" />
                  Backend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-800">Flask</span>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">Python 3.11</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-800">PostgreSQL</span>
                    <Badge variant="outline" className="text-green-600 border-green-200">Database</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-gray-800">SQLAlchemy</span>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-200">ORM</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-800">Gunicorn</span>
                    <Badge variant="outline" className="text-purple-600 border-purple-200">WSGI Server</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frontend Technologies */}
            <Card className="bg-white p-6 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Palette className="text-medical-green-600 mr-2 h-5 w-5" />
                  Frontend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-800">Bootstrap 5</span>
                    <Badge variant="outline" className="text-purple-600 border-purple-200">CSS Framework</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-800">Font Awesome</span>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">Icons</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium text-gray-800">Chart.js</span>
                    <Badge variant="outline" className="text-orange-600 border-orange-200">Analytics</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">JavaScript</span>
                    <Badge variant="outline" className="text-gray-600 border-gray-200">ES6+</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Services */}
            <Card className="bg-white p-6 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Wrench className="text-gray-600 mr-2 h-5 w-5" />
                  Tools & Services
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-800">Railway</span>
                    <Badge variant="outline" className="text-green-600 border-green-200">Deployment</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-800">Render</span>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">Hosting</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium text-gray-800">SMTP</span>
                    <Badge variant="outline" className="text-red-600 border-red-200">Email Service</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-gray-800">Flask-Login</span>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-200">Authentication</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interested in collaborating or learning more about these healthcare solutions? Get in touch!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <Card className="group bg-gradient-to-br from-red-50 to-red-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-0">
                <a href="mailto:kumarnaman9617@gmail.com" className="block">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
                    <Mail className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 group-hover:text-red-600 transition-colors duration-200">kumarnaman9617@gmail.com</p>
                </a>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-0">
                <a href="https://github.com/Naman-Kumar-06" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-200">
                    <Github className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-200">@Naman-Kumar-06</p>
                </a>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-0">
                <a href="https://www.linkedin.com/in/naman-kumar-42a998328/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                    <Linkedin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">Connect with me</p>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-healthcare-blue-600 to-medical-green-600 p-8 text-white">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Healthcare?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how these solutions can be adapted for your healthcare organization's needs.
              </p>
              <Button 
                asChild
                variant="secondary" 
                className="bg-white text-healthcare-blue-600 hover:bg-gray-100 shadow-lg"
              >
                <a href="mailto:kumarnaman9617@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-8 w-8 text-healthcare-blue-400 mr-2" />
              <span className="text-xl font-bold">HealthTech Portfolio</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 Naman Kumar. Transforming healthcare through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
