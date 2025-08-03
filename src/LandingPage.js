import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Mail, Linkedin, Twitter, ChevronRight, Star, Menu, X, ArrowUp } from 'lucide-react';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll for show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // IIM BG Events Data
  const events = [
    {
      id: 1,
      title: "Annual Leadership Conclave 2025",
      date: "2025-09-15",
      time: "09:00 AM",
      location: "IIM Bodh Gaya Main Auditorium",
      description: "Join renowned industry leaders and CEOs for insightful discussions on strategic leadership, innovation, and business transformation in the digital age.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      attendees: 500,
      featured: true,
      category: "Leadership"
    },
    {
      id: 2,
      title: "Entrepreneurship Workshop Series",
      date: "2025-08-20",
      time: "02:00 PM",
      location: "IIM BG Innovation Lab",
      description: "Hands-on workshop for aspiring entrepreneurs covering business model canvas, funding strategies, and startup ecosystem in India.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
      attendees: 80,
      featured: false,
      category: "Entrepreneurship"
    },
    {
      id: 3,
      title: "Business Case Competition - Samriddhi 2025",
      date: "2025-10-03",
      time: "06:00 PM",
      location: "IIM Bodh Gaya Campus",
      description: "Premier inter-collegiate business case competition where top B-school teams compete to solve real-world corporate challenges.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      attendees: 300,
      featured: true,
      category: "Competition"
    },
    {
      id: 4,
      title: "Industry Connect Series - Finance Sector",
      date: "2025-08-28",
      time: "10:00 AM",
      location: "Virtual & IIM BG Campus",
      description: "Interactive session with finance industry experts covering investment banking, private equity, and emerging fintech trends in India.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      attendees: 200,
      featured: false,
      category: "Finance"
    }
  ];

  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation and strategic business development.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b6a40f01?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sarah@company.com",
      skills: ["Leadership", "Strategy", "Innovation"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      bio: "Full-stack architect passionate about scalable solutions and emerging technologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "marcus@company.com",
      skills: ["React", "Node.js", "AWS"]
    },
    {
      id: 3,
      name: "Emily Thompson",
      role: "Creative Director",
      bio: "Award-winning designer with expertise in brand identity and user experience design.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "emily@company.com",
      skills: ["UI/UX", "Branding", "Figma"]
    },
    {
      id: 4,
      name: "David Park",
      role: "Marketing Lead",
      bio: "Data-driven marketer specializing in growth strategies and digital transformation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "david@company.com",
      skills: ["SEO", "Analytics", "Growth"]
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager",
      bio: "Strategic product leader focused on user-centered design and market innovation.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "lisa@company.com",
      skills: ["Product Strategy", "Agile", "User Research"]
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "Data Scientist",
      bio: "Machine learning expert transforming complex data into actionable business insights.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "alex@company.com",
      skills: ["Python", "Machine Learning", "Data Viz"]
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600">
                InnovateCorp
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['home', 'events', 'team'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'events', 'team'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg text-base font-medium capitalize w-full text-left transition-all duration-200 ${
                  activeSection === section
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section className="relative pt-16 pb-20 bg-blue-50 min-h-screen flex items-center overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 text-blue-600 leading-tight">
            Innovation Starts Here
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into reality through cutting-edge technology, creative design, and strategic innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setActiveSection('events')}
              className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-w-fit"
            >
              Explore Events 
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => setActiveSection('team')}
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-w-fit"
            >
              Meet Our Team 
              <Users className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const Events = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-600">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for exciting events that push the boundaries of innovation and creativity.
          </p>
        </div>

        {/* Featured Events */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {events.filter(event => event.featured).map((event) => (
            <div key={event.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
              <div className="relative overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                  <Star className="w-4 h-4 mr-1" /> Featured
                </div>
                <div className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{event.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <div className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{event.attendees}+ attendees</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Events */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.filter(event => !event.featured).map((event) => (
            <div key={event.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200">
              <div className="flex">
                <div className="relative w-32 h-32 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {event.category}
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{event.title}</h3>
                  <div className="text-sm text-gray-600 mb-3 space-y-1">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2 text-blue-600" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2 text-blue-600" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{event.description.substring(0, 80)}...</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center group">
                    Learn More 
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Team = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-600">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate innovators dedicated to transforming the future through technology and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="bg-white text-blue-600 px-2 py-1 rounded text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex space-x-3">
                  <a 
                    href={member.linkedin} 
                    className="group w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a 
                    href={member.twitter} 
                    className="group w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="group w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4 text-blue-400">
            InnovateCorp
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming the future through innovation, creativity, and cutting-edge technology.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="group text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="#" className="group text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="#" className="group text-gray-400 hover:text-gray-300 transition-colors duration-300">
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 InnovateCorp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {activeSection === 'home' && <Hero />}
      {activeSection === 'events' && (
        <div className="pt-16">
          <Events />
        </div>
      )}
      {activeSection === 'team' && (
        <div className="pt-16">
          <Team />
        </div>
      )}
      
      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;