
import { useState, useEffect } from 'react';
import { ArrowRight, Globe, Dribbble, Linkedin, Mail, ChevronRight, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations on load
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Travel Luxury",
      description: "A luxury travel site designed for client Muhammad Aziz with a chatbot to collect information and orders.",
      image: "/lovable-uploads/cfba1614-bea1-4e51-a7c1-17f8c422583d.png",
      category: "Website/Chatbot Development",
      year: "2025",
      link: 'https://travelluxury.co.za/'
    },
    {
      title: "Tech Haven",
      description: "Innovative tech eccomerce site with a fully customisable admin dashboard.",
      image: "/TechProof.png",
      category: "Website Development",
      year: "2024",
      link: 'https://techproof.co.za'
    },
    // {
    //   title: "Creative Portfolio",
    //   description: "Minimalistic portfolio design for creative professionals.",
    //   image: "/lovable-uploads/cfba1614-bea1-4e51-a7c1-17f8c422583d.png",
    //   category: "Branding",
    //   year: "2023"
    // }
  ];

  const services = [
    {
      title: "Website Development",
      description: "Creating intuitive and visually appealing websites that drive engagement and conversion.",
      projects: "5 Projects",
      icon: "🕸️"
    },
    {
      title: "Chatbot Creation",
      description: "Developing unique branded chatbots that engage with target audiences like a human sales agent.",
      projects: "2 Projects",
      icon: "💬"
    },
    {
      title: "Custom AI Intergration",
      description: "Building robust, scalable automations with modern technologies across multiple apps to save time and resources.",
      projects: "3 Projects",
      icon: "🤖"
    }
  ];

  const faqs = [
    {
      question: "Is all your websites fully customisable.",
      answer: "Every website we have created has fully customisable products, heros (top part of the web page), and every other section. Just know every piece of text on your website. That is my guarantee."
    },
    {
      question: "How do I create custom AI Integrations?",
      answer: "We use advanced tracking tools to track inefficiencies in your workflows and systems. We intergrate AI with all types of apps, crms and websites to help your systems become more efficient and free up more of your time with a simple click."
    },
    {
      question: "What if I want to add a new page or a new product?",
      answer: "We have an admin dashboard that allows you to create new pages and intergrate custom created blocks with ease."
    },
    {
      question: "Is it all custom coded?",
      answer: "Yes all components are custom coded and we also have an admin dashboard that allows you to create new pages, intergrate custom created blocks and add products with ease."
    },
    {
      question: "Do you do Wordpress or Shopify?",
      answer: "Yes under specific request, although I prefer custom coded as it is more customisable and the admin dashboard is easier and simpler with more features.",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-golden rounded-lg flex items-center justify-center">
              <span className="text-dark-bg font-bold text-lg">YA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-golden transition-colors duration-300">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-golden transition-colors duration-300">Projects</a>
              <a href="#faq" className="text-gray-300 hover:text-golden transition-colors duration-300">FAQ</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-[90px]">
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Yaseen<br />
                <span className="text-gray-400">Aboobaker.</span>
              </h1>
              <div className="w-16 h-1 bg-golden mt-4"></div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider">— Introduction</p>
              <h2 className="text-2xl lg:text-3xl font-light">
                Web Developer and<br />
                Ai Automation<br />
                Expert.
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#222222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">— What I do</p>
            <h2 className="text-4xl lg:text-5xl font-light mb-8">My Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative bg-dark-bg p-8 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(245,166,35,0.15)] group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="flex flex-col space-y-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-golden to-golden-light rounded-xl text-4xl shadow-lg">
                    {service.icon}
                  </div>
                  
                  <div>
                    <h4 className={`text-2xl font-semibold mb-3 ${activeService === index ? 'text-golden' : 'text-white'} transition-colors duration-300`}>
                      {service.title}
                    </h4>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                    <span className="text-sm text-gray-400">{service.projects}</span>
                    <button className="flex items-center space-x-1 text-sm font-medium text-white group-hover:text-golden transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">— My Work</p>
            <h2 className="text-4xl lg:text-5xl font-light mb-8">Featured Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-golden text-sm">{project.category}</span>
                      <span className="text-gray-400 text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                    <a href={project.link} className="inline-flex items-center text-golden hover:text-golden-light transition-colors duration-300" target="_blank">
                      <span className="mr-2">View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="text-center mt-16">
            <a href="#" className="inline-flex items-center px-8 py-3 bg-golden text-dark-bg rounded-lg hover:bg-golden-light transition-colors duration-300 group">
              <span className="mr-2 font-medium">View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative bg-dark-card">
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
                <a href="mailto:yaseenaboobaker1@gmail.com" className="flex items-center space-x-2 text-golden hover:text-golden-light transition-colors duration-300 group">
                  <span>hi@yaseenaboobaker.com</span>
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

              <div className="flex space-x-8 p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-golden">4</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-golden">All</div>
                  <div className="text-sm text-gray-400">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">— FAQ</p>
                <h3 className="text-3xl font-light">Frequently asked questions.</h3>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 py-2">
                    <AccordionTrigger className="hover:text-golden transition-colors duration-300 text-lg font-normal">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                    <div className="font-semibold">Muhammad Aziz</div>
                    <div className="text-sm text-gray-400">Client Web/Chatbot Development</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Amouaut At vero eos et accusam et iusto odio dignissim qui blandit praesent luptatum zzril delenit au gue duis dolore te feugait nisi no komani kuc kuc hotathe!"
                </p>
              </div>

              <div className="bg-dark-card p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Want an estimate? Let me know.</h4>
                <div className="space-y-4">
                  <button className="w-full bg-golden text-dark-bg py-3 rounded-lg font-semibold hover:bg-golden-light transition-colors duration-300">
                    Send An Email
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
              <span className="text-dark-bg font-bold text-lg">YA</span>
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
