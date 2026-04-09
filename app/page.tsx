import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-[#b8956b]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col">
              <span className="font-serif-display text-2xl font-medium tracking-wide text-[#1a1a1a]">
                Anne Cox
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#b8956b] uppercase">
                Estates & Properties
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-12">
              <a href="#properties" className="text-xs tracking-[0.2em] text-[#1a1a1a]/80 hover:text-[#b8956b] transition-colors duration-300">
                PROPERTIES
              </a>
              <a href="#about" className="text-xs tracking-[0.2em] text-[#1a1a1a]/80 hover:text-[#b8956b] transition-colors duration-300">
                ABOUT
              </a>
              <a href="#services" className="text-xs tracking-[0.2em] text-[#1a1a1a]/80 hover:text-[#b8956b] transition-colors duration-300">
                SERVICES
              </a>
              <a href="#contact" className="text-xs tracking-[0.2em] text-[#1a1a1a]/80 hover:text-[#b8956b] transition-colors duration-300">
                CONTACT
              </a>
            </div>
            <a 
              href="#contact" 
              className="bg-[#1a1a1a] text-white px-8 py-3 text-xs tracking-[0.2em] hover:bg-[#b8956b] transition-colors duration-500"
            >
              INQUIRE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-2xl animate-fade-up">
              <p className="text-[#b8956b] text-xs tracking-[0.4em] mb-6 uppercase">
                Ojai Valley • Montecito • Ventura County
              </p>
              <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-8">
                Exceptional
                <span className="block italic text-[#c4a574]">Living</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
                Curating extraordinary properties for discerning clients. 
                Where architectural beauty meets the serenity of the Ojai Valley.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#properties" 
                  className="inline-flex items-center justify-center bg-[#b8956b] text-white px-10 py-4 text-xs tracking-[0.2em] hover:bg-[#a08055] transition-all duration-500"
                >
                  VIEW PROPERTIES
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-4 text-xs tracking-[0.2em] hover:bg-white hover:text-[#1a1a1a] transition-all duration-500"
                >
                  SCHEDULE A CONSULTATION
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/60 text-[10px] tracking-[0.3em]">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#b8956b] to-transparent" />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-32 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-[#b8956b] text-xs tracking-[0.4em] mb-4 uppercase">Current Listings</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a1a1a] font-light">
              Featured <span className="italic">Properties</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#b8956b] mx-auto mt-8" />
          </div>
          
          {/* Property Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="group cursor-pointer hover-lift">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 bg-[#b8956b] text-white px-4 py-2 text-[10px] tracking-[0.2em]">
                  FEATURED
                </div>
              </div>
              <div className="pt-6">
                <p className="text-[#b8956b] text-[10px] tracking-[0.2em] mb-2 uppercase">Ojai East End</p>
                <h3 className="font-serif-display text-2xl text-[#1a1a1a] mb-3">Mediterranean Estate</h3>
                <p className="text-[#1a1a1a]/60 text-sm mb-4">5 Beds • 4.5 Baths • 4,200 sq ft</p>
                <p className="font-serif-display text-2xl text-[#1a1a1a]">$2,850,000</p>
              </div>
            </div>

            {/* Property 2 */}
            <div className="group cursor-pointer hover-lift">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="pt-6">
                <p className="text-[#b8956b] text-[10px] tracking-[0.2em] mb-2 uppercase">Arbolada</p>
                <h3 className="font-serif-display text-2xl text-[#1a1a1a] mb-3">Modern Farmhouse</h3>
                <p className="text-[#1a1a1a]/60 text-sm mb-4">4 Beds • 3 Baths • 3,100 sq ft</p>
                <p className="font-serif-display text-2xl text-[#1a1a1a]">$1,975,000</p>
              </div>
            </div>

            {/* Property 3 */}
            <div className="group cursor-pointer hover-lift">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white px-4 py-2 text-[10px] tracking-[0.2em]">
                  NEW LISTING
                </div>
              </div>
              <div className="pt-6">
                <p className="text-[#b8956b] text-[10px] tracking-[0.2em] mb-2 uppercase">Meiners Oaks</p>
                <h3 className="font-serif-display text-2xl text-[#1a1a1a] mb-3">Spanish Revival</h3>
                <p className="text-[#1a1a1a]/60 text-sm mb-4">3 Beds • 2 Baths • 2,400 sq ft</p>
                <p className="font-serif-display text-2xl text-[#1a1a1a]">$1,250,000</p>
              </div>
            </div>

            {/* Property 4 */}
            <div className="group cursor-pointer hover-lift">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="pt-6">
                <p className="text-[#b8956b] text-[10px] tracking-[0.2em] mb-2 uppercase">Upper Ojai</p>
                <h3 className="font-serif-display text-2xl text-[#1a1a1a] mb-3">Ranch Estate</h3>
                <p className="text-[#1a1a1a]/60 text-sm mb-4">6 Beds • 5 Baths • 5,800 sq ft • 10 Acres</p>
                <p className="font-serif-display text-2xl text-[#1a1a1a]">$4,500,000</p>
              </div>
            </div>

            {/* Property 5 */}
            <div className="group cursor-pointer hover-lift">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="pt-6">
                <p className="text-[#b8956b] text-[10px] tracking-[0.2em] mb-2 uppercase">Downtown Ojai</p>
                <h3 className="font-serif-display text-2xl text-[#1a1a1a] mb-3">Contemporary Villa</h3>
                <p className="text-[#1a1a1a]/60 text-sm mb-4">4 Beds • 3.5 Baths • 3,400 sq ft</p>
                <p className="font-serif-display text-2xl text-[#1a1a1a]">$2,195,000</p>
              </div>
            </div>

            {/* Property 6 */}
            <div className="group cursor-pointer hover-lift">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="pt-6">
                <p className="text-[#b8956b] text-[10px] tracking-[0.2em] mb-2 uppercase">Ventura Foothills</p>
                <h3 className="font-serif-display text-2xl text-[#1a1a1a] mb-3">Hilltop Retreat</h3>
                <p className="text-[#1a1a1a]/60 text-sm mb-4">3 Beds • 3 Baths • 2,800 sq ft • 3 Acres</p>
                <p className="font-serif-display text-2xl text-[#1a1a1a]">$1,650,000</p>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 text-[#1a1a1a] text-xs tracking-[0.2em] border-b border-[#b8956b] pb-2 hover:text-[#b8956b] transition-colors duration-300"
            >
              VIEW ALL PROPERTIES
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80')`
                  }}
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-[#1a1a1a] text-white p-10 max-w-xs">
                <div className="mb-6">
                  <span className="font-serif-display text-5xl text-[#b8956b]">15+</span>
                  <p className="text-xs tracking-[0.2em] mt-2 text-white/70">YEARS EXPERIENCE</p>
                </div>
                <div className="mb-6">
                  <span className="font-serif-display text-5xl text-[#b8956b]">$100M+</span>
                  <p className="text-xs tracking-[0.2em] mt-2 text-white/70">SALES VOLUME</p>
                </div>
                <div>
                  <span className="font-serif-display text-5xl text-[#b8956b]">200+</span>
                  <p className="text-xs tracking-[0.2em] mt-2 text-white/70">HAPPY CLIENTS</p>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="lg:pl-12">
              <p className="text-[#b8956b] text-xs tracking-[0.4em] mb-4 uppercase">About Anne</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a1a1a] font-light mb-8 leading-tight">
                Your Trusted Advisor in <span className="italic">Luxury Real Estate</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#b8956b] mb-8" />
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-6 text-lg">
                With deep roots in Ventura County and over fifteen years of experience in the luxury 
                real estate market, I have dedicated my career to matching extraordinary people with 
                extraordinary properties.
              </p>
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-6">
                My approach combines intimate local knowledge with a sophisticated understanding of 
                the high-end market. From hidden gems in the Ojai Valley to prestigious estates in 
                Montecito, I provide my clients with exclusive access and strategic guidance.
              </p>
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-10">
                Whether you are seeking a serene retreat, an architectural masterpiece, or a 
                strategic investment, I am committed to delivering a white-glove experience 
                that exceeds expectations.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#b8956b] rounded-full" />
                  <span className="text-sm tracking-wide text-[#1a1a1a]/80">Licensed Realtor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#b8956b] rounded-full" />
                  <span className="text-sm tracking-wide text-[#1a1a1a]/80">Luxury Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#b8956b] rounded-full" />
                  <span className="text-sm tracking-wide text-[#1a1a1a]/80">Certified Negotiation Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-[#b8956b] text-xs tracking-[0.4em] mb-4 uppercase">Services</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a1a1a] font-light">
              How I Can <span className="italic">Help You</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#b8956b] mx-auto mt-8" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#b8956b]/20">
            {[
              {
                title: "Buyer Representation",
                desc: "Strategic guidance through every step of acquiring your ideal property, from off-market opportunities to closing.",
                icon: "01"
              },
              {
                title: "Seller Representation",
                desc: "Comprehensive marketing and negotiation strategies to maximize value and minimize time on market.",
                icon: "02"
              },
              {
                title: "Luxury Properties",
                desc: "Exclusive access to high-end listings and personalized service for discerning clientele.",
                icon: "03"
              },
              {
                title: "Investment Advisory",
                desc: "Data-driven insights and market analysis to build and diversify your real estate portfolio.",
                icon: "04"
              },
              {
                title: "Relocation Services",
                desc: "Seamless transition support for clients moving to or from the Ojai Valley and surrounding areas.",
                icon: "05"
              },
              {
                title: "Property Valuation",
                desc: "Comprehensive market analysis and pricing strategies backed by deep local expertise.",
                icon: "06"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-[#f8f6f3] p-12 group hover:bg-white transition-colors duration-500">
                <span className="text-[#b8956b] font-serif-display text-4xl font-light opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </span>
                <h3 className="font-serif-display text-2xl text-[#1a1a1a] mt-6 mb-4">
                  {service.title}
                </h3>
                <p className="text-[#1a1a1a]/60 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Areas Banner */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#b8956b] text-xs tracking-[0.4em] mb-4 uppercase">Communities</p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-light">
              Areas <span className="italic">We Serve</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ojai", desc: "Valley Paradise" },
              { name: "Montecito", desc: "Coastal Elegance" },
              { name: "Ventura", desc: "California Charm" },
              { name: "Santa Barbara", desc: "American Riviera" }
            ].map((area, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="relative aspect-[3/2] mb-6 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${
                        ['1449824913929-651196d28172', '1506953829374-3a5b1c6b4c9c', '1519331379826-f2d4b5b01f6c', '1534430480870-e6e1a3e6e6f6'][idx]
                      }?w=400&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <h3 className="font-serif-display text-2xl mb-2">{area.name}</h3>
                <p className="text-[#b8956b] text-xs tracking-[0.2em]">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[#b8956b] text-xs tracking-[0.4em] mb-4 uppercase">Testimonials</p>
            <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a1a1a] font-light">
              Client <span className="italic">Experiences</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#b8956b] mx-auto mt-8" />
          </div>
          
          <div className="space-y-20">
            {[
              {
                quote: "Anne's deep knowledge of the Ojai market and her unwavering dedication made finding our dream home an absolute pleasure. She understood exactly what we were looking for and delivered beyond our expectations.",
                name: "Sarah & Michael Thompson",
                role: "Purchased in Ojai East End",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
              },
              {
                quote: "Selling our family estate was an emotional journey, but Anne handled every detail with such grace and professionalism. Her marketing strategy was exceptional, and we achieved a price beyond our hopes.",
                name: "The Harrison Family",
                role: "Sold in Upper Ojai",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              },
              {
                quote: "As an investor, I appreciate Anne's analytical approach and market insights. She has helped me build a diverse portfolio with properties that have consistently outperformed the market.",
                name: "Robert Chen",
                role: "Investment Client",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-8 rounded-full overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${testimonial.image}')` }}
                  />
                </div>
                <blockquote className="font-serif-display text-2xl md:text-3xl text-[#1a1a1a] font-light italic leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-[#1a1a1a] font-medium tracking-wide">{testimonial.name}</p>
                <p className="text-[#b8956b] text-xs tracking-[0.2em] mt-2 uppercase">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <p className="text-[#b8956b] text-xs tracking-[0.4em] mb-4 uppercase">Get In Touch</p>
              <h2 className="font-serif-display text-4xl md:text-5xl text-[#1a1a1a] font-light mb-8 leading-tight">
                Begin Your <span className="italic">Journey</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#b8956b] mb-10" />
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-12 text-lg">
                Whether you are ready to buy, sell, or simply exploring the possibilities, 
                I would be honored to assist you. Let's discuss how we can achieve your real estate goals.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#b8956b]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#b8956b] text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-1 uppercase">Office</p>
                    <p className="text-[#1a1a1a]">301 North Montgomery Street</p>
                    <p className="text-[#1a1a1a]/70">Ojai, CA 93023</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#b8956b]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#b8956b] text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-1 uppercase">Phone</p>
                    <p className="text-[#1a1a1a]">(805) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#b8956b]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#b8956b] text-xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-1 uppercase">Email</p>
                    <p className="text-[#1a1a1a]">anne@annecoxestates.com</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-12">
                <p className="text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-4 uppercase">Follow</p>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="w-12 h-12 border border-[#b8956b]/30 flex items-center justify-center text-[#1a1a1a]/60 hover:bg-[#b8956b] hover:text-white hover:border-[#b8956b] transition-all duration-300"
                    >
                      <span className="text-xs">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-10 lg:p-14">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-3 uppercase">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-3 border-0 border-b border-[#b8956b]/30 focus:border-[#b8956b] focus:outline-none transition-colors bg-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-3 uppercase">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-3 border-0 border-b border-[#b8956b]/30 focus:border-[#b8956b] focus:outline-none transition-colors bg-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-3 uppercase">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-0 py-3 border-0 border-b border-[#b8956b]/30 focus:border-[#b8956b] focus:outline-none transition-colors bg-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-3 uppercase">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-0 py-3 border-0 border-b border-[#b8956b]/30 focus:border-[#b8956b] focus:outline-none transition-colors bg-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-3 uppercase">I am interested in</label>
                  <select className="w-full px-0 py-3 border-0 border-b border-[#b8956b]/30 focus:border-[#b8956b] focus:outline-none transition-colors bg-transparent text-[#1a1a1a]/60">
                    <option value="">Select an option</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#1a1a1a]/50 mb-3 uppercase">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-0 py-3 border-0 border-b border-[#b8956b]/30 focus:border-[#b8956b] focus:outline-none transition-colors bg-transparent resize-none"
                    placeholder="Tell me about your real estate goals..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-white py-5 text-xs tracking-[0.2em] hover:bg-[#b8956b] transition-colors duration-500"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="font-serif-display text-3xl">Anne Cox</span>
                <span className="block text-[10px] tracking-[0.3em] text-[#b8956b] mt-1 uppercase">Estates & Properties</span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md text-sm">
                Providing exceptional real estate services in Ojai Valley, Montecito, 
                and Ventura County. Your trusted partner for luxury properties and 
                investment opportunities.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xs tracking-[0.2em] mb-6 text-[#b8956b] uppercase">Quick Links</h4>
              <ul className="space-y-4">
                {['Properties', 'About', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-xs tracking-[0.2em] mb-6 text-[#b8956b] uppercase">Contact</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li>301 N Montgomery St</li>
                <li>Ojai, CA 93023</li>
                <li>(805) 555-0123</li>
                <li>anne@annecoxestates.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs tracking-wider">
              © 2026 Anne Cox Estates & Properties. All rights reserved.
            </p>
            <p className="text-white/40 text-xs tracking-wider">
              DRE License #01234567
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
