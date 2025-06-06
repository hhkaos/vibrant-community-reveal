
import { useEffect, useRef } from 'react';
import { ArrowRight, Users, Code, MapPin, Github, Youtube, Linkedin, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          setActiveSection(entry.target.id || 'home');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const initiatives = [
    {
      title: "Open Source Projects",
      description: "Contributing to and maintaining various open source projects that benefit the entire tech community.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "Tech Workshops",
      description: "Regular hands-on workshops covering the latest technologies and best practices in software development.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Mentorship Program",
      description: "Connecting experienced developers with newcomers to foster growth and knowledge sharing.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      title: "Innovation Lab",
      description: "Experimental space for testing new technologies and building proof-of-concept applications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  const teamMembers = [
    { name: "Sarah Chen", role: "Community Lead", avatar: "SC" },
    { name: "Marcus Rodriguez", role: "Tech Coordinator", avatar: "MR" },
    { name: "Aisha Patel", role: "Workshop Organizer", avatar: "AP" },
    { name: "David Kim", role: "Mentorship Director", avatar: "DK" }
  ];

  const navigationItems = [
    { name: 'Home', id: 'home' },
    { name: 'Initiatives', id: 'initiatives' },
    { name: 'People', id: 'people' },
    { name: 'Communities', id: 'communities' },
    { name: 'Newsletters', id: 'newsletters' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">TechCommunity</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Building the Future
                <span className="text-primary block">Together</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join our vibrant tech community where developers, designers, and innovators collaborate 
                to create amazing projects, share knowledge, and grow together. We believe in the power 
                of open source and collective learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('initiatives')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Explore Initiatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                  Request to Join
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                alt="Tech community collaboration"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-muted/30 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Initiatives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the various projects and programs that drive our community forward
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People Section */}
      <section id="people" className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our People</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the amazing individuals who make our community thrive
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                  <div className="absolute inset-0 rounded-full bg-primary/20 group-hover:animate-pulse"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section id="communities" className="py-20 bg-muted/30 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Global Communities
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our community spans across the globe, connecting developers and tech enthusiasts 
                from different countries and cultures. Join local chapters, participate in 
                regional events, and collaborate on international projects.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <span>50+ Cities</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  <span>10,000+ Members</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop"
                alt="Global tech communities map"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our community
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How can I join the community?",
                answer: "Simply click the 'Request to Join' button and fill out our application form. We welcome developers of all skill levels!"
              },
              {
                question: "Are there any membership fees?",
                answer: "No, our community is completely free to join. We believe in open and accessible technology education."
              },
              {
                question: "What programming languages do you focus on?",
                answer: "We're language-agnostic! Our community covers everything from web technologies to mobile development, AI, and more."
              },
              {
                question: "Can I contribute to your open source projects?",
                answer: "Absolutely! We encourage all members to contribute to our projects, regardless of their experience level."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletters Section */}
      <section id="newsletters" className="py-20 bg-muted/30 animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest updates on events, projects, and community news
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">TechCommunity</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Building the future of technology together through collaboration, learning, and innovation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                Licensed under MIT License
              </p>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 TechCommunity. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
