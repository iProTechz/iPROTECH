
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [contactInfoVisible, setContactInfoVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [hoursVisible, setHoursVisible] = useState(false);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContactInfoVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contactInfoRef.current) {
      observer.observe(contactInfoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHoursVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (hoursRef.current) {
      observer.observe(hoursRef.current);
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
            <Link href="/services" className="hover:text-yellow-400 transition-colors cursor-pointer">Services</Link>
            <Link href="/about" className="hover:text-yellow-400 transition-colors cursor-pointer">About</Link>
            <Link href="/contact" className="text-yellow-400 cursor-pointer">Contact</Link>
          </nav>
          <div className="w-6 h-6 flex items-center justify-center md:hidden">
            <i className="ri-menu-line text-xl cursor-pointer"></i>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20automotive%20service%20center%20exterior%20with%20professional%20signage%2C%20clean%20building%20facade%20with%20yellow%20branding%20elements%2C%20customer%20parking%20area%2C%20welcoming%20entrance%20with%20large%20windows%2C%20professional%20business%20atmosphere&width=1920&height=1080&seq=contact-hero&orientation=landscape')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="flex items-center justify-center text-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                GET IN <span className="text-yellow-400">TOUCH</span><br />
                WITH OUR <span className="text-yellow-400">TEAM</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ready to schedule your service or have questions about your vehicle? 
                Our expert team is here to help you with all your automotive needs.
              </p>
              <div className="flex justify-center items-center space-x-8 pt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-400/10 rounded-full">
                    <i className="ri-phone-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Call Us</div>
                    <div className="text-xl font-semibold">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-yellow-400/10 rounded-full">
                    <i className="ri-mail-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-xl font-semibold">info@autocare.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={contactInfoRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${contactInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-yellow-400">CONTACT</span> INFORMATION
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Multiple ways to reach us for all your automotive service needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-map-pin-line',
                title: 'Visit Our Shop',
                info: '123 Main Street',
                detail: 'Your City, ST 12345',
                description: 'Stop by our modern facility'
              },
              {
                icon: 'ri-phone-line',
                title: 'Call Us Now',
                info: '(555) 123-4567',
                detail: 'Emergency: (555) 987-6543',
                description: 'Speak directly with our team'
              },
              {
                icon: 'ri-mail-line',
                title: 'Email Support',
                info: 'info@autocare.com',
                detail: 'service@autocare.com',
                description: 'Get detailed information'
              },
              {
                icon: 'ri-time-line',
                title: 'Business Hours',
                info: 'Mon-Fri: 8AM-6PM',
                detail: 'Sat: 8AM-4PM, Sun: Closed',
                description: 'Emergency service available'
              }
            ].map((contact, index) => (
              <div 
                key={index}
                className={`bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 ${contactInfoVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${index * 150}` : 'translate-y-20 opacity-0 scale-75'}`}
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-yellow-400/10 rounded-full">
                  <i className={`${contact.icon} text-yellow-400 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{contact.title}</h3>
                <div className="text-center">
                  <div className="text-lg font-medium text-yellow-400 mb-1">{contact.info}</div>
                  <div className="text-gray-300 mb-3">{contact.detail}</div>
                  <div className="text-sm text-gray-400">{contact.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section ref={mapRef} className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${mapVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-4xl font-bold">
                FIND OUR <span className="text-yellow-400">LOCATION</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Conveniently located in the heart of the city with easy access and 
                ample parking space for all vehicle types.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-map-pin-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-gray-300">123 Main Street, Your City, ST 12345</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-car-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Parking</div>
                    <div className="text-gray-300">Free customer parking available</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-road-map-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Directions</div>
                    <div className="text-gray-300">Near downtown area, easy highway access</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-300 ${mapVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBCNDIuNzEyOCIgTiA3NEIwMC4zNTQwIiBX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                ></iframe>
              </div>
              
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-map-pin-fill text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours & Emergency */}
      <section ref={hoursRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative transform transition-all duration-1000 ${hoursVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20automotive%20service%20center%20at%20night%20with%20lights%20on%2C%2024%2F7%20emergency%20service%20signage%2C%20modern%20garage%20building%20illuminated%20with%20yellow%20accent%20lighting%2C%20welcoming%20professional%20atmosphere&width=600&height=500&seq=hours1&orientation=landscape"
                alt="24/7 Service"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold">
                24/7 Emergency
              </div>
            </div>
            
            <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${hoursVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <h2 className="text-4xl font-bold">
                OPERATING <span className="text-yellow-400">HOURS</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                We're here when you need us most. Regular business hours for scheduled 
                services and emergency support available around the clock.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Monday - Friday</span>
                    <span className="text-yellow-400">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="text-sm text-gray-400">Full service available</div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Saturday</span>
                    <span className="text-yellow-400">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="text-sm text-gray-400">Limited services</div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <div className="text-sm text-gray-400">Emergency only</div>
                </div>
                
                <div className="bg-yellow-400/10 border border-yellow-400/20 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-alarm-warning-line text-yellow-400 text-xl"></i>
                    </div>
                    <span className="font-semibold text-yellow-400">Emergency Service</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    24/7 emergency roadside assistance and towing available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              MULTIPLE WAYS TO <span className="text-yellow-400">CONNECT</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the most convenient way to reach out to us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-yellow-400/10 rounded-full">
                <i className="ri-phone-line text-yellow-400 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-6">
                Speak directly with our service advisors for immediate assistance
              </p>
              <div className="space-y-2">
                <div className="text-yellow-400 font-semibold">(555) 123-4567</div>
                <div className="text-sm text-gray-400">Mon-Fri: 8AM-6PM</div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-yellow-400/10 rounded-full">
                <i className="ri-mail-line text-yellow-400 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Contact</h3>
              <p className="text-gray-300 mb-6">
                Send us detailed information about your vehicle needs
              </p>
              <div className="space-y-2">
                <div className="text-yellow-400 font-semibold">info@autocare.com</div>
                <div className="text-sm text-gray-400">24-48 hour response</div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-yellow-400/10 rounded-full">
                <i className="ri-map-pin-line text-yellow-400 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Visit Our Shop</h3>
              <p className="text-gray-300 mb-6">
                Come see our facility and meet our professional team
              </p>
              <div className="space-y-2">
                <div className="text-yellow-400 font-semibold">123 Main Street</div>
                <div className="text-sm text-gray-400">Your City, ST 12345</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
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
