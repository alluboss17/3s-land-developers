'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trees, ShieldCheck, Landmark, Award, MessageCircle, Download, X, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const whatsappUrl = "https://wa.me/8801835105772?text=" + encodeURIComponent("Hello, I am interested in learning more about 3S Land Developers plots.");

  const handlePlotClick = (size: string) => {
    setSelectedPlot(size);
    setIsModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900 relative selection:bg-emerald-900 selection:text-white">

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-slate-950 hover:bg-emerald-800 text-white p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center border border-white/20"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center bg-slate-950 text-white min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image 
            src="/images/wide.jpg" 
            alt="3S Land Developers Project Site" 
            fill 
            className="object-cover scale-105 transform motion-safe:animate-pulse-slow"
            priority
          />
        </div>
        {/* Refined gradient for deeper luxury contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950 z-0" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-emerald-400 text-[10px] font-semibold uppercase tracking-[0.3em] mb-8"
          >
            Over 20 Years of Unblemished Reputation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 text-white drop-shadow-2xl leading-tight"
          >
            3S LAND  <br className="hidden md:block" />
            <span className="text-slate-300 italic font-light">DEVELOPERS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base md:text-lg text-slate-300 max-w-2xl mb-12 leading-loose font-light"
          >
            A meticulously planned 100-acre community delivering 100% legal, dispute-free premium land plots ready for visionary development.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-md"
          >
            <button 
              onClick={() => handlePlotClick('Abakash Premium')}
              className="px-8 py-4 bg-white text-slate-950 hover:bg-emerald-800 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500"
            >
              Register Interest
            </button>
            <a 
              href="#gallery"
              className="px-8 py-4 bg-transparent border border-slate-500 text-white hover:border-white hover:bg-white/5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center"
            >
              View Site
            </a>
          </motion.div>
        </div>
      </section>

      {/* Luxury Key Metrics */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full bg-slate-950 py-16 px-6 text-white relative z-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-800/50">
          {[
            { value: "20+", label: "Years of Excellence" },
            { value: "100%", label: "Legal & Dispute Free" },
            { value: "99+", label: "Acres Developed" },
            { value: "300+", label: "Premium Plots Sold" }
          ].map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center pl-4 first:pl-0">
              <div className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight">{metric.value}</div>
              <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mt-4">{metric.label}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        id="about" 
        className="w-full py-32 px-6 bg-white text-slate-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Our Heritage</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-10 text-slate-950 tracking-tight leading-tight">Building Trust for <br/>Over Two Decades</h2>
          <div className="space-y-8 text-base md:text-lg leading-relaxed text-slate-500 font-light">
            <p>
              Welcome to 3S Land Developers. We are a progressive, customer-centric organization specializing exclusively in land development, land filling, and plot trading with an unblemished reputation.
            </p>
            <p>
              Every plot across our projects—including our premier <strong>Abakash Lake View Society</strong>—is completely free from legal disputes and encumbrances. Customers are welcome to verify land ownership and deed authenticity at any time.
            </p>
            <p>
              We deliver meticulously demarcated land plots within planned communities featuring wide access roads, 24/7 security, playgrounds, and parks, providing the perfect foundation for your legacy.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Available Plot Sizes */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        id="plots" 
        className="w-full py-32 px-6 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.3em] block mb-4">Inventory Overview</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-950 tracking-tight">Curated Plot Sizes</h2>
            </div>
            <p className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">
              Select a dimension below to request detailed plot maps, pricing matrices, and registration terms from our executive team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
            {['3 Katha', '4 Katha', '5 Katha', '10 Katha', '15 Katha', '20 Katha', '30 Katha', '40 Katha', '50 Katha', '70+ Katha'].map((size) => (
              <button 
                key={size} 
                onClick={() => handlePlotClick(size)}
                className="py-12 px-6 bg-slate-50 hover:bg-white transition-all duration-500 cursor-pointer group flex flex-col items-center justify-center relative overflow-hidden"
              >
                <span className="font-serif text-2xl text-slate-900 group-hover:text-emerald-800 transition-colors z-10">{size}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center gap-1">
                  Inquire <ArrowRight className="w-3 h-3" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />
              </button>
            ))}
          </div>

          {/* Brochure Banner */}
          <div className="mt-20 p-10 bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
            <div className="text-left max-w-2xl">
              <h3 className="text-2xl font-serif mb-3 tracking-tight">100% Legal Dispute-Free Guarantee</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">Every land plot is fully filled, demarcated with wide access roads, and ready for immediate deed registration.</p>
            </div>
            <button 
              onClick={() => handlePlotClick('Brochure Request')}
              className="px-8 py-4 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors shrink-0 flex items-center gap-3 border border-emerald-800"
            >
              <Download className="w-4 h-4" /> Download Brochure
            </button>
          </div>
        </div>
      </motion.section>

      {/* Planned Community Amenities */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4 block">Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-950 tracking-tight">Master-Planned Community</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Landmark, title: "Central Mosque & Civic Spaces" },
              { icon: ShieldCheck, title: "24/7 Security & Wide Roads" },
              { icon: Trees, title: "Parks & Green Belts" },
              { icon: Award, title: "Premium Plot Demarcation" }
            ].map((Feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-emerald-950 group-hover:text-white transition-colors duration-500 text-slate-800">
                  <Feature.icon className="w-8 h-8" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-lg text-slate-900">{Feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive Luxury Gallery Teaser */}
      <section id="gallery" className="w-full py-32 px-6 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-slate-500 text-[10px] font-semibold uppercase tracking-[0.3em] block mb-4">Site Documentation</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">The Vision Taking Shape</h2>
            </div>
            {/* Added Link to the new Gallery Page we will build */}
            <Link 
              href="/gallery" 
              className="group flex items-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-widest hover:text-emerald-400 transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { src: "/images/wide.jpg", title: "Site Overview" },
              { src: "/images/action.jpg", title: "Land Development" },
              { src: "/images/rod.jpg", title: "Infrastructure" },
              { src: "/images/board.jpg", title: "Abakash Entrance" }
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-[400px] w-full cursor-pointer overflow-hidden group bg-slate-900"
                onClick={() => setSelectedImage(img.src)}
              >
                <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-white text-[10px] font-semibold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 block">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[70] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
            <X className="w-8 h-8" strokeWidth={1} />
          </button>
          <div className="relative w-full max-w-7xl h-[85vh]">
            <Image src={selectedImage} alt="Gallery view" fill className="object-contain" />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-slate-50 text-slate-950 text-center flex flex-col items-center"
      >
        <span className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">Next Steps</span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight">Ready to Secure Your Plot?</h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mb-12 font-light leading-relaxed">
          Contact our executive team today to verify deed documentation, schedule a private site tour, or request detailed pricing configurations.
        </p>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 bg-slate-950 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-slate-900/10"
        >
          Schedule Consultation
        </a>
      </motion.section>

      {/* Footer */}
      <footer className="w-full py-20 px-6 bg-slate-950 text-slate-500 text-center border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="font-serif text-3xl text-white mb-6 tracking-tight">3S Land Developers</div>
          <p className="mb-12 max-w-md text-slate-400 text-sm font-light leading-relaxed">
            Premium land filling, trading, and development with a two-decade legacy of absolute trust.
          </p>

          <div className="my-8 pt-8 border-t border-slate-800/50 w-full max-w-xs flex flex-col items-center">
            <span className="text-[9px] text-slate-600 mb-3 uppercase tracking-[0.3em] font-semibold">Digital Partner</span>
            <a 
              href="https://andigitalstudio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-bold text-slate-300 hover:text-white transition-colors tracking-[0.2em] uppercase flex items-center gap-2"
            >
              AN Digital Studio <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <p className="text-xs text-slate-600 mt-4 font-light tracking-wide">© {new Date().getFullYear()} 3S Land Developers. All rights reserved.</p>
        </div>
      </footer>

      {/* Lead Generation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white p-10 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>

            <h3 className="text-3xl font-serif text-slate-950 mb-3 tracking-tight">
              Request Portfolio
            </h3>
            <p className="text-sm text-slate-500 mb-8 font-light">
              Inquiring regarding: <span className="font-semibold text-emerald-800">{selectedPlot || 'General Plot Info'}</span>
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                const message = `Hello 3S Land Developers, my name is ${name} (${phone}). I am interested in details regarding ${selectedPlot || 'land plots'}.`;
                window.open(`https://wa.me/8801835105772?text=${encodeURIComponent(message)}`, '_blank');
                setIsModalOpen(false);
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-3">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  placeholder="e.g. Tanvir Ahmed" 
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 focus:border-emerald-800 outline-none text-slate-900 text-sm transition-colors rounded-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-3">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  placeholder="+880 17XXXXXXXX" 
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 focus:border-emerald-800 outline-none text-slate-900 text-sm transition-colors rounded-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-slate-950 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors mt-6"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}