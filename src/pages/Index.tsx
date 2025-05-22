
import { useState, useEffect } from 'react';
import { ArrowRight, Globe, Dribbble, Linkedin, Mail, ChevronRight } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations on load
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "All Creative Works, Selected projects.",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
      image: "/lovable-uploads/cfba1614-bea1-4e51-a7c1-17f8c422583d.png",
      category: "UI/UX Design"
    },
    {
      title: "BeServer.",
      subtitle: "Branding Product",
      description: "Modern server management platform with sleek interface design.",
      image: "/lovable-uploads/cfba1614-bea1-4e51-a7c1-17f8c422583d.png",
      category: "Product Development"
    },
    {
      title: "Energetic Tumbler.",
      subtitle: "Product Development",
      description: "Innovative tumbler design with energy-efficient features.",
      image: "/lovable-uploads/cfba1614-bea1-4e51-a7c1-17f8c422583d.png",
      category: "Product Development"
    }
  ];

  const services = [
    {
      title: "Product Designer.",
      projects: "124 Projects",
      color: "bg-golden",
      icon: "💡"
    },
    {
      title: "Branding Designer.",
      projects: "37 Projects",
      color: "bg-gray-600",
      icon: "🎨"
    },
    {
      title: "Full Stack Developer.",
      projects: "62 Projects",
      color: "bg-gray-700",
      icon: "💻"
    }
  ];

  const faqs = [
    {
      question: "Let this be a lesson to you.",
      answer: "Comprehensive design and development consultation available."
    },
    {
      question: "How do you use time tracking for projects?",
      answer: "We use advanced time tracking tools to ensure project efficiency."
    },
    {
      question: "Ego and empathy in design",
      answer: "Balancing user needs with creative vision for optimal results."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-golden rounded-lg flex items-center justify-center">
              <span className="text-dark-bg font-bold text-lg">C</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-golden transition-colors duration-300">Services</a>
              <a href="#works" className="text-gray-300 hover:text-golden transition-colors duration-300">Works</a>
              <a href="#blog" className="text-gray-300 hover:text-golden transition-colors duration-300">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Carlos<br />
                <span className="text-gray-400">Mendoza.</span>
              </h1>
              <div className="w-16 h-1 bg-golden mt-4"></div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider">— Introduction</p>
              <h2 className="text-2xl lg:text-3xl font-light">
                Product Designer and<br />
                Developer, based in<br />
                California.
              </h2>
              <p className="text-gray-400 max-w-md">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-golden hover:text-golden-light transition-colors duration-300 group">
                <span>My story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-gray-400 hover:text-golden cursor-pointer transition-colors duration-300" />
                <Dribbble className="w-5 h-5 text-gray-400 hover:text-golden cursor-pointer transition-colors duration-300" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-golden cursor-pointer transition-colors duration-300" />
              </div>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src="/lovable-uploads/cfba1614-bea1-4e51-a7c1-17f8c422583d.png" 
                alt="Carlos Mendoza" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl animate-float"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              />
              <div className="absolute top-4 right-4 bg-dark-card p-4 rounded-lg shadow-lg animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-sm text-gray-400">Portfolio</div>
                <div className="text-white font-semibold">All Creative Works, Selected projects.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">— Contact</p>
                <h3 className="text-3xl lg:text-4xl font-light mb-6">
                  Any Type Of Query<br />
                  & Discussion.
                </h3>
                <p className="text-gray-400 mb-8">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                </p>
                <a href="mailto:hi@carlos.com" className="flex items-center space-x-2 text-golden hover:text-golden-light transition-colors duration-300 group">
                  <span>hi@carlos.com</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-dark-card p-8 rounded-lg">
                <h4 className="text-2xl font-light mb-4">
                  You can't use up creativity,<br />
                  the more you use, more you have<br />
                  in your significant mind.
                </h4>
                <p className="text-gray-400">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                </p>
              </div>

              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-golden">14</div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-golden">187</div>
                  <div className="text-sm text-gray-400">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`${service.color} p-8 rounded-lg group hover:scale-105 transition-all duration-500 cursor-pointer animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-dark-bg mb-2">{service.title}</h4>
                <p className="text-dark-bg/70 text-sm">{service.projects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">— w?</p>
                <h3 className="text-3xl font-light">FAQ here.</h3>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-800 pb-4 group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between">
                      <h5 className="text-white group-hover:text-golden transition-colors duration-300">{faq.question}</h5>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-golden group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-dark-card p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src="/lovable-uploads/cfba1614-bea1-4e51-a7c1-17f8c422583d.png" 
                    alt="Testimonial" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">Jared Warner</div>
                    <div className="text-sm text-gray-400">UI/UX Designer</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Amouaut At vero eos et accusam et iusto odio dignissim qui blandit praesent luptatum zzril delenit au gue duis dolore te feugait nisi no komani kuc kuc hotathe!"
                </p>
              </div>

              <div className="bg-dark-card p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Estimate your project? Let me know here.</h4>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="What's your name?" 
                    className="w-full bg-transparent border-b border-gray-600 pb-2 focus:border-golden outline-none transition-colors duration-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Your fancy email" 
                    className="w-full bg-transparent border-b border-gray-600 pb-2 focus:border-golden outline-none transition-colors duration-300"
                  />
                  <button className="w-full bg-golden text-dark-bg py-3 rounded-lg font-semibold hover:bg-golden-light transition-colors duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-golden rounded-lg flex items-center justify-center">
              <span className="text-dark-bg font-bold text-lg">C</span>
            </div>
            <div className="flex space-x-6">
              <Globe className="w-5 h-5 text-gray-400 hover:text-golden cursor-pointer transition-colors duration-300" />
              <Dribbble className="w-5 h-5 text-gray-400 hover:text-golden cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-golden cursor-pointer transition-colors duration-300" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-golden cursor-pointer transition-colors duration-300" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
