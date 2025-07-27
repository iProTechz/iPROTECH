
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTeamVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const teamMembers = [
    {
      name: 'Michael Johnson',
      role: 'Master Technician',
      experience: '15 Years',
      image: 'https://readdy.ai/api/search-image?query=professional%20automotive%20mechanic%20portrait%20in%20clean%20garage%20uniform%2C%20experienced%20male%20technician%20with%20confident%20smile%2C%20modern%20auto%20service%20center%20background%20with%20yellow%20accents&width=300&height=400&seq=team1&orientation=portrait'
    },
    {
      name: 'Sarah Williams',
      role: 'Service Manager',
      experience: '12 Years',
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20automotive%20service%20manager%20portrait%20in%20clean%20uniform%2C%20confident%20woman%20in%20modern%20auto%20service%20center%2C%20professional%20garage%20background%20with%20yellow%20branding%20elements&width=300&height=400&seq=team2&orientation=portrait'
    },
    {
      name: 'David Martinez',
      role: 'Diagnostic Specialist',
      experience: '10 Years',
      image: 'https://readdy.ai/api/search-image?query=professional%20automotive%20diagnostic%20technician%20portrait%20with%20computer%20equipment%2C%20skilled%20male%20specialist%20in%20modern%20garage%20uniform%2C%20high-tech%20automotive%20service%20center%20background&width=300&height=400&seq=team3&orientation=portrait'
    },
    {
      name: 'Emily Chen',
      role: 'Customer Relations',
      experience: '8 Years',
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20customer%20service%20representative%20in%20automotive%20service%20center%2C%20friendly%20woman%20in%20clean%20uniform%2C%20modern%20auto%20garage%20reception%20area%20background%20with%20yellow%20accents&width=300&height=400&seq=team4&orientation=portrait'
    }
  ];

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assurance',
      description: 'Every service meets the highest industry standards with comprehensive quality checks.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority with personalized service and transparent communication.'
    },
    {
      icon: 'ri-time-line',
      title: 'Reliability',
      description: 'On-time service delivery and dependable repairs that keep you on the road.'
    },
    {
      icon: 'ri-tools-line',
      title: 'Expert Craftsmanship',
      description: 'Skilled technicians with decades of experience and continuous training.'
    }
  ];

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
            <Link href="/" className="hover:text-yellow-400 transition-colors cursor-pointer">Home</Link>
            <Link href="/services" className="hover:text-yellow-400 transition-colors cursor-pointer">Services</Link>
            <Link href="/about" className="text-yellow-400 cursor-pointer">About</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition-colors cursor-pointer">Contact</Link>
          </nav>
          <div className="w-6 h-6 flex items-center justify-center md:hidden">
            <i className="ri-menu-line text-xl cursor-pointer"></i>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=modern%20automotive%20service%20center%20exterior%20building%20with%20large%20windows%2C%20professional%20auto%20garage%20facility%20with%20yellow%20branding%20elements%2C%20clean%20industrial%20architecture%20with%20cars%20in%20foreground%2C%20welcoming%20entrance%20design&width=1200&height=800&seq=about-hero&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="text-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                ABOUT <span className="text-yellow-400">AUTOCARE</span><br />
                <span className="text-yellow-400">YOUR TRUSTED</span> PARTNER
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                For over two decades, we've been providing exceptional automotive service with a commitment to quality, honesty, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${storyVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-4xl font-bold">
                Our <span className="text-yellow-400">Story</span><br />
                <span className="text-yellow-400">Since 2004</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                AutoCare began as a small family-owned garage with a simple mission: to provide honest, reliable automotive service to our community. What started with just two mechanics and a passion for cars has grown into a full-service automotive center.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we're proud to serve thousands of customers with the same values that founded our company - integrity, quality, and genuine care for every vehicle that enters our shop.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">2004</div>
                  <div className="text-gray-300">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">5000+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className={`relative transform transition-all duration-1000 delay-300 ${storyVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <img 
                src="https://readdy.ai/api/search-image?query=vintage%20automotive%20garage%20transformation%20to%20modern%20service%20center%2C%20before%20and%20after%20comparison%20showing%20evolution%20of%20car%20service%20facility%2C%20professional%20automotive%20workshop%20development%20over%20time&width=600&height=500&seq=story1&orientation=landscape"
                alt="Our Journey"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${teamVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-yellow-400">Expert Team</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our certified technicians bring decades of combined experience and passion for automotive excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 transition-all duration-500 transform hover:-translate-y-2 ${teamVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${index * 150}` : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-yellow-400 mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">Dedicated to excellence in automotive service</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-yellow-400">Core Values</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide every service we provide and every interaction we have
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`bg-gray-900 p-8 rounded-2xl text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 ${valuesVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${index * 150}` : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-yellow-400/10 rounded-full">
                  <i className={`${value.icon} text-yellow-400 text-3xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=experienced%20automotive%20technician%20working%20on%20luxury%20car%20engine%20with%20precision%20tools%2C%20skilled%20mechanic%20in%20modern%20garage%20with%20professional%20equipment%2C%20detailed%20automotive%20service%20work%20environment&width=600&height=500&seq=experience1&orientation=landscape"
                alt="Professional Service"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-4 rounded-lg font-bold text-xl">
                20+ Years Strong
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Experience You Can <span className="text-yellow-400">Trust</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Two decades of serving our community has taught us that every vehicle is unique, and every customer deserves personalized attention. We've handled everything from routine maintenance to complex repairs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">ASE Certified Technicians</h4>
                    <p className="text-gray-300 text-sm">All our mechanics hold current ASE certifications and receive ongoing training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">State-of-the-Art Equipment</h4>
                    <p className="text-gray-300 text-sm">We invest in the latest diagnostic and repair technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Warranty</h4>
                    <p className="text-gray-300 text-sm">All services backed by our industry-leading warranty program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[ 
              { number: '5,000+', label: 'Vehicles Serviced', icon: 'ri-car-line' },
              { number: '20+', label: 'Years in Business', icon: 'ri-time-line' },
              { number: '15+', label: 'Certified Technicians', icon: 'ri-user-star-line' },
              { number: '98%', label: 'Customer Satisfaction', icon: 'ri-heart-line' },
            ].map((stat, index) => (
              <div key={index} className={`transform transition-all duration-700 delay-${index * 200} ${statsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'}`}>
                <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-yellow-400/10 rounded-full">
                    <i className={`${stat.icon} text-yellow-400 text-2xl`}></i>
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            READY TO EXPERIENCE <span className="text-yellow-400">THE</span><br />
            <span className="text-yellow-400">AUTOCARE DIFFERENCE?</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust AutoCare for all their automotive needs. Schedule your appointment today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-400 text-gray-900 px-8 py-4 font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer">
              SCHEDULE SERVICE
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-car-line text-yellow-400 text-2xl"></i>
                </div>
                <span className="text-xl font-bold" style={{fontFamily: 'Pacifico, serif'}}>AutoCare</span>
              </Link>
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
