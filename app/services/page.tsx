
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Services() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const mainServices = [
    {
      icon: 'ri-tools-line',
      title: 'Oil Change Service',
      description: 'Complete oil change with premium synthetic or conventional oil, filter replacement, fluid level checks, and basic vehicle inspection.',
      features: ['Premium Oil Options', 'Filter Replacement', 'Fluid Level Check', '12-Point Inspection'],
      image: 'https://readdy.ai/api/search-image?query=professional%20mechanic%20changing%20car%20engine%20oil%20in%20modern%20automotive%20garage%2C%20fresh%20motor%20oil%20being%20poured%2C%20clean%20service%20bay%20with%20yellow%20accent%20lighting%2C%20detailed%20oil%20change%20process&width=400&height=300&seq=service-oil&orientation=landscape'
    },
    {
      icon: 'ri-car-line',
      title: 'Brake System Service',
      description: 'Comprehensive brake inspection, pad and rotor replacement, brake fluid service, and complete system diagnostics for optimal safety.',
      features: ['Brake Pad Replacement', 'Rotor Resurfacing', 'Fluid Service', 'Safety Inspection'],
      image: 'https://readdy.ai/api/search-image?query=car%20brake%20system%20service%20showing%20brake%20disc%20and%20caliper%20repair%2C%20professional%20mechanic%20hands%20working%20with%20brake%20components%2C%20modern%20automotive%20workshop%20with%20professional%20tools&width=400&height=300&seq=service-brake&orientation=landscape'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Engine Diagnostics',
      description: 'Advanced computer diagnostics using state-of-the-art equipment to identify and resolve engine performance issues and error codes.',
      features: ['Computer Diagnostics', 'Error Code Reading', 'Performance Testing', 'System Analysis'],
      image: 'https://readdy.ai/api/search-image?query=automotive%20diagnostic%20computer%20equipment%20connected%20to%20car%20engine%2C%20professional%20technician%20analyzing%20diagnostic%20data%20on%20screen%2C%20modern%20garage%20with%20advanced%20diagnostic%20tools&width=400&height=300&seq=service-diagnostic&orientation=landscape'
    },
    {
      icon: 'ri-battery-charge-line',
      title: 'Battery & Electrical',
      description: 'Battery testing, replacement, charging system diagnostics, alternator service, and complete electrical system maintenance.',
      features: ['Battery Testing', 'Replacement Service', 'Charging System', 'Electrical Diagnostics'],
      image: 'https://readdy.ai/api/search-image?query=car%20battery%20replacement%20service%20in%20professional%20garage%2C%20mechanic%20installing%20new%20automotive%20battery%2C%20electrical%20system%20testing%20equipment%2C%20clean%20modern%20service%20environment&width=400&height=300&seq=service-battery&orientation=landscape'
    },
    {
      icon: 'ri-speed-line',
      title: 'Transmission Service',
      description: 'Transmission fluid service, filter replacement, system diagnostics, and maintenance for both automatic and manual transmissions.',
      features: ['Fluid Replacement', 'Filter Service', 'System Diagnostics', 'Performance Check'],
      image: 'https://readdy.ai/api/search-image?query=car%20transmission%20service%20in%20automotive%20garage%2C%20transmission%20fluid%20being%20changed%2C%20professional%20mechanic%20working%20on%20vehicle%20drivetrain%2C%20modern%20service%20bay%20with%20hydraulic%20lift&width=400&height=300&seq=service-transmission&orientation=landscape'
    },
    {
      icon: 'ri-road-map-line',
      title: 'Tire & Alignment',
      description: 'Tire installation, wheel balancing, alignment service, tire rotation, and comprehensive tire inspection for optimal performance.',
      features: ['Tire Installation', 'Wheel Alignment', 'Balancing Service', 'Rotation & Inspection'],
      image: 'https://readdy.ai/api/search-image?query=tire%20installation%20and%20wheel%20alignment%20service%20in%20professional%20garage%2C%20mechanic%20mounting%20tire%20on%20wheel%2C%20alignment%20equipment%20in%20modern%20automotive%20service%20center&width=400&height=300&seq=service-tire&orientation=landscape'
    }
  ];

  useEffect(() => {
    setHeroVisible(true);
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
          setDetailsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-car-line text-yellow-400 text-2xl"></i>
            </div>
            <span className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>AutoCare</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-400 transition-colors cursor-pointer">Home</Link>
            <Link href="/services" className="text-yellow-400 cursor-pointer">Services</Link>
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
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://public.readdy.ai/ai/video_res/91119163-2eb5-4f5f-93a2-d841f795bf6f.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="text-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                OUR <span className="text-yellow-400">PROFESSIONAL</span><br />
                AUTOMOTIVE <span className="text-yellow-400">SERVICES</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive automotive maintenance and repair solutions delivered by certified technicians using state-of-the-art equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              COMPLETE <span className="text-yellow-400">AUTOMOTIVE</span> CARE
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we provide comprehensive solutions for all your vehicle needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-400/20 transition-all duration-500 transform hover:-translate-y-2 ${servicesVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${index * 100}` : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center">
                    <i className={`${service.icon} text-xl`}></i>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-checkbox-circle-line text-yellow-400 text-sm"></i>
                        </div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section ref={detailsRef} className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${detailsVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-4xl font-bold">
                Why Choose <span className="text-yellow-400">AutoCare</span><br />
                for Your <span className="text-yellow-400">Vehicle Service</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over two decades of experience in automotive service, we combine traditional craftsmanship 
                with modern technology to deliver exceptional results every time.
              </p>

              <div className="space-y-4">
                {[ 
                  { icon: 'ri-award-line', text: 'ASE Certified Master Technicians' },
                  { icon: 'ri-shield-check-line', text: 'Comprehensive Warranty Coverage' },
                  { icon: 'ri-time-line', text: 'Same-Day Service Available' },
                  { icon: 'ri-tools-line', text: 'Latest Diagnostic Equipment' },
                  { icon: 'ri-customer-service-line', text: '24/7 Emergency Support' },
                  { icon: 'ri-money-dollar-circle-line', text: 'Transparent Pricing Policy' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-yellow-400/10 rounded-full flex items-center justify-center">
                      <i className={`${item.icon} text-yellow-400 text-lg`}></i>
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 ${detailsVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20automotive%20technician%20using%20advanced%20diagnostic%20computer%20equipment%20in%20modern%20garage%2C%20detailed%20car%20service%20process%2C%20clean%20workshop%20environment%20with%20yellow%20accent%20lighting%20and%20professional%20tools&width=600&height=500&seq=services-detail&orientation=landscape"
                alt="Professional Service"
                className="w-full h-auto object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg">
                20+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${featuresVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              SERVICE <span className="text-yellow-400">EXCELLENCE</span> STANDARDS
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every service meets our rigorous quality standards and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              {
                icon: 'ri-time-line',
                number: '2-4',
                unit: 'Hours',
                title: 'Average Service Time',
                description: 'Quick turnaround without compromising quality'
              },
              {
                icon: 'ri-shield-check-line',
                number: '12',
                unit: 'Months',
                title: 'Service Warranty',
                description: 'Comprehensive coverage on all repairs'
              },
              {
                icon: 'ri-user-line',
                number: '25+',
                unit: 'Techs',
                title: 'Certified Technicians',
                description: 'Experienced professionals you can trust'
              },
              {
                icon: 'ri-star-line',
                number: '4.9',
                unit: 'Rating',
                title: 'Customer Satisfaction',
                description: 'Consistently high customer ratings'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center bg-gray-900 p-6 rounded-xl transform transition-all duration-700 delay-${index * 100} ${featuresVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-yellow-400 text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  {feature.number}
                  <span className="text-lg text-gray-400 ml-1">{feature.unit}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            READY TO <span className="text-yellow-400">SCHEDULE</span><br />
            YOUR <span className="text-yellow-400">SERVICE</span>?
          </h2>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the AutoCare difference. Book your appointment today and let our certified technicians take care of your vehicle with the expertise it deserves.
          </p>

          <div className="flex justify-center">
            <Link href="/contact" className="bg-yellow-400 text-gray-900 px-8 py-4 font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">
              BOOK APPOINTMENT
            </Link>
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
