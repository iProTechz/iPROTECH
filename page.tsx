
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);

  const services = [
    { 
      icon: 'ri-tools-line', 
      title: 'Oil Change', 
      description: 'Professional oil change service with premium lubricants' 
    },
    { 
      icon: 'ri-car-line', 
      title: 'Brake Service', 
      description: 'Complete brake inspection and repair services' 
    },
    { 
      icon: 'ri-settings-3-line', 
      title: 'Engine Diagnostics', 
      description: 'Advanced computer diagnostics for all vehicle systems' 
    },
    { 
      icon: 'ri-battery-charge-line', 
      title: 'Battery Service', 
      description: 'Battery testing, replacement, and charging services' 
    },
  ];

  const galleryImages = [
    'https://readdy.ai/api/search-image?query=car%20brake%20disc%20and%20caliper%20service%20in%20professional%20automotive%20workshop%2C%20mechanic%20hands%20with%20tools%2C%20detailed%20brake%20system%20maintenance%2C%20clean%20modern%20garage%20setting&width=400&height=300&seq=gallery2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=engine%20oil%20change%20service%20in%20automotive%20garage%2C%20mechanic%20pouring%20fresh%20motor%20oil%2C%20professional%20maintenance%20equipment%2C%20clean%20workshop%20environment%20with%20modern%20tools&width=400&height=300&seq=gallery3&orientation=landscape',
    'https://readdy.ai/api/search-image?query=car%20diagnostic%20equipment%20connected%20to%20vehicle%20computer%20system%2C%20professional%20automotive%20technician%20using%20advanced%20diagnostic%20tools%2C%20modern%20car%20service%20center%20interior&width=400&height=300&seq=gallery4&orientation=landscape',
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-car-line text-yellow-400 text-2xl"></i>
            </div>
            <span className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>AutoCare</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-yellow-400 cursor-pointer">Home</Link>
            <Link href="/services" className="hover:text-yellow-400 transition-colors cursor-pointer">Services</Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors cursor-pointer">About</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors cursor-pointer">Contact</Link>
          </nav>
          <div className="w-6 h-6 flex items-center justify-center md:hidden">
            <i className="ri-menu-line text-xl cursor-pointer"></i>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://public.readdy.ai/ai/video_res/fe98c605-2ca1-44c8-92d8-af31996aef3f.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="flex items-center justify-center">
            <div className={`space-y-6 transform transition-all duration-1000 text-center ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                WELCOME TO<br />
                OUR <span className="text-yellow-400">PROFESSIONAL</span><br />
                <span className="text-yellow-400">GARAGE</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-md mx-auto">
                Expert automotive maintenance and repair services with over 20 years of experience. Your car deserves the best care.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/contact">
                  <button className="bg-yellow-400 text-gray-900 px-8 py-3 font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">
                    BOOK SERVICE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[ 
              { number: '500+', label: 'Cars Serviced', icon: 'ri-car-line' },
              { number: '20+', label: 'Years Experience', icon: 'ri-time-line' },
              { number: '50+', label: 'Expert Mechanics', icon: 'ri-user-line' },
              { number: '$$$+$', label: 'Customer Savings', icon: 'ri-money-dollar-circle-line' },
            ].map((stat, index) => (
              <div key={index} className={`transform transition-all duration-700 delay-${index * 200} ${statsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'}`}>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-yellow-400 text-3xl`}></i>
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                AutoCare is the <span className="text-yellow-400">leader</span> in the<br />
                <span className="text-yellow-400">automotive industry</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over two decades of experience, we've built our reputation on quality service, 
                honest pricing, and customer satisfaction. Our certified technicians use the latest 
                diagnostic equipment to keep your vehicle running at its best.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">Professional</div>
                  <div className="text-gray-300">Certified mechanics with extensive training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-2">Reliable</div>
                  <div className="text-gray-300">Quality parts and guaranteed workmanship</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20automotive%20service%20center%20interior%20with%20multiple%20car%20lifts%2C%20professional%20mechanics%20working%2C%20clean%20organized%20workshop%20with%20yellow%20safety%20markings%2C%20industrial%20garage%20setting&width=600&height=500&seq=about1&orientation=landscape"
                alt="Our Garage"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold">
                20+ Years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-yellow-400">SERVICE</span><br />
              DETAILS
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive automotive maintenance and repair services to keep your vehicle 
              running smoothly and safely on the road.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 ${servicesVisible ? `translate-x-0 opacity-100 scale-100 transition-all duration-700 delay-${index * 150}` : 'translate-x-20 opacity-0 scale-75'}`}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-yellow-400 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                We are here for <span className="text-yellow-400">Keeping</span><br />
                <span className="text-yellow-400">Your Car Safe</span>
              </h2>
              
              <div className="space-y-6">
                {[ 
                  'Complete brake system inspection and repair',
                  'Engine diagnostics using advanced computer systems',
                  'Oil change service with premium lubricants',
                  'Battery testing and replacement services',
                  'Tire mounting and wheel alignment'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=car%20mechanic%20using%20diagnostic%20computer%20equipment%20on%20modern%20vehicle%2C%20professional%20automotive%20technician%20with%20advanced%20diagnostic%20tools%2C%20clean%20garage%20workshop%20with%20yellow%20accent%20lighting&width=600&height=500&seq=features1&orientation=landscape"
                alt="Car Diagnostics"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=luxury%20car%20engine%20bay%20being%20serviced%20by%20professional%20mechanic%2C%20detailed%20engine%20maintenance%20work%2C%20clean%20modern%20automotive%20garage%2C%20high-quality%20service%20environment%20with%20proper%20lighting&width=600&height=500&seq=quality1&orientation=landscape"
                alt="Engine Service"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-4 rounded-lg font-bold text-xl">
                Built To Perfection
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Built To <span className="text-yellow-400">Precision</span>,<br />
                <span className="text-yellow-400">Run with</span> Excellence
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Every service we perform meets the highest industry standards. We use only 
                genuine parts and follow manufacturer specifications to ensure your vehicle 
                performs at its peak.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-award-line text-yellow-400 text-xl"></i>
                  </div>
                  <span className="text-gray-300">ASE Certified Technicians</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-shield-check-line text-yellow-400 text-xl"></i>
                  </div>
                  <span className="text-gray-300">Warranty on All Services</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-time-line text-yellow-400 text-xl"></i>
                  </div>
                  <span className="text-gray-300">Fast Turnaround Times</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            The Most <span className="text-yellow-400">Advanced</span> Car<br />
            <span className="text-yellow-400">Service Process</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            Our streamlined service process ensures efficiency and quality in every step
          </p>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[ 
                { 
                  step: '01', 
                  title: 'Digital Inspection', 
                  description: 'Complete diagnostic scan using latest computer technology', 
                  icon: 'ri-search-line',
                  image: 'https://readdy.ai/api/search-image?query=modern%20car%20diagnostic%20computer%20screen%20showing%20engine%20data%20analysis%2C%20professional%20automotive%20diagnostic%20equipment%20in%20clean%20garage%2C%20high-tech%20digital%20interface%20with%20yellow%20accent%20colors&width=300&height=200&seq=process1&orientation=landscape'
                },
                { 
                  step: '02', 
                  title: 'Quality Service', 
                  description: 'Professional maintenance using genuine parts and tools', 
                  icon: 'ri-tools-line',
                  image: 'https://readdy.ai/api/search-image?query=mechanic%20hands%20working%20with%20professional%20automotive%20tools%20on%20car%20engine%2C%20quality%20service%20in%20modern%20garage%20workshop%2C%20detailed%20maintenance%20work%20with%20precision%20tools&width=300&height=200&seq=process2&orientation=landscape'
                },
                { 
                  step: '03', 
                  title: 'Final Check', 
                  description: 'Thorough testing and quality assurance before delivery', 
                  icon: 'ri-checkbox-circle-line',
                  image: 'https://readdy.ai/api/search-image?query=car%20being%20tested%20after%20service%20completion%2C%20final%20quality%20check%20inspection%20in%20professional%20automotive%20garage%2C%20vehicle%20ready%20for%20delivery%20with%20satisfied%20customer&width=300&height=200&seq=process3&orientation=landscape'
                },
              ].map((process, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-yellow-400/20">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        {process.step}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-yellow-400/10 rounded-full">
                        <i className={`${process.icon} text-yellow-400 text-2xl`}></i>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{process.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                    </div>
                    
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-400">Start</span>
              </div>
              <div className="w-16 h-0.5 bg-yellow-400/50"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-400">Process</span>
              </div>
              <div className="w-16 h-0.5 bg-yellow-400/50"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-400">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={galleryRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              Our Professional Car <span className="text-yellow-400">Service Gallery</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Take a look at our state-of-the-art facility and professional automotive services
            </p>
          </div>
          
          <div className={`mb-8 transform transition-all duration-1000 delay-300 ${galleryVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20automotive%20service%20center%20panoramic%20view%20with%20multiple%20car%20lifts%2C%20professional%20mechanics%20working%2C%20clean%20organized%20workshop%20with%20yellow%20branding%20elements%2C%20industrial%20garage%20interior%20with%20excellent%20lighting&width=1200&height=500&seq=gallery-hero&orientation=landscape"
                alt="Our Professional Service Center"
                className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Professional Service Center</h3>
                <p className="text-gray-200">State-of-the-art facility with modern equipment</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => {
              const titles = [
                'Brake System Service',
                'Engine Oil Change',
                'Diagnostic Services'
              ];
              
              return (
                <div 
                  key={index} 
                  className={`relative overflow-hidden rounded-xl group cursor-pointer bg-gray-900 shadow-lg hover:shadow-yellow-400/20 transition-all duration-500 transform ${galleryVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${(index + 1) * 200}` : 'translate-y-20 opacity-0 scale-95'}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={image}
                      alt={titles[index]}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Service {index + 1}
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h4 className="text-white font-semibold mb-2">{titles[index]}</h4>
                      <p className="text-gray-200 text-sm">Professional automotive maintenance</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-white font-semibold mb-1">{titles[index]}</h4>
                    <p className="text-gray-400 text-sm">Expert service with quality guarantee</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-700 ${galleryVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="text-center bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-yellow-400/10 rounded-full">
                <i className="ri-image-line text-yellow-400 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Service Photos</div>
            </div>
            
            <div className="text-center bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-yellow-400/10 rounded-full">
                <i className="ri-star-line text-yellow-400 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">5.0</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            
            <div className="text-center bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-yellow-400/10 rounded-full">
                <i className="ri-award-line text-yellow-400 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">15+</div>
              <div className="text-gray-400 text-sm">Awards Won</div>
            </div>
            
            <div className="text-center bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-yellow-400/10 rounded-full">
                <i className="ri-customer-service-line text-yellow-400 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            LET'S TALK FOR <span className="text-yellow-400">YOUR</span><br />
            <span className="text-yellow-400">CAR SERVICE</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience the difference of professional automotive care
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">
              SCHEDULE SERVICE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-car-line text-yellow-400 text-2xl"></i>
                </div>
                <span className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>AutoCare</span>
              </div>
              <p className="text-gray-400">
                Your trusted local automotive service center with over 20 years of experience.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Oil Change</li>
                <li>Brake Service</li>
                <li>Engine Diagnostics</li>
                <li>Battery Service</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Main Street</li>
                <li>Your City, ST 12345</li>
                <li>(555) 123-4567</li>
                <li>info@autocare.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mon-Fri: 8AM-6PM</li>
                <li>Saturday: 8AM-4PM</li>
                <li>Sunday: Closed</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
