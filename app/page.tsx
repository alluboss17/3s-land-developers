'use client';

import { useState } from 'react';
import HeroSearch from '@/components/Hero';
import Image from 'next/image';
import { Trees, ShieldCheck, Landmark, Award, Maximize, MapPin, MessageCircle, Download, CheckCircle, X } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState('');

  const whatsappUrl = "https://wa.me/8801835105772?text=" + encodeURIComponent("Hello, I am interested in learning more about 3S Land Developers plots.");

  const handlePlotClick = (size: string) => {
    setSelectedPlot(size);
    setIsModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-900 relative">
      
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center border-2 border-white"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center bg-slate-900 text-white min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/images/wide.jpg" 
            alt="3S Land Developers Project Site" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-slate-950 z-0" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-6">
          <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full mb-6 uppercase tracking-widest backdrop-blur-md">
            Over 20 Years of Unblemished Reputation
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
            Trusted Housing & <br className="hidden md:block" />Land Development
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
            Delivering 100% legal, dispute-free residential and commercial land plots across prime locations, including Obokash Lake View Society.
          </p>
          
          <div className="w-full max-w-4xl">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* Luxury Key Metrics / Scale Banner */}
      <section className="w-full bg-slate-950 border-y border-slate-800 py-10 px-6 text-white relative z-20 shadow-2xl">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="border-r border-slate-800/60 last:border-none">
            <div className="text-3xl md:text-5xl font-extrabold text-emerald-400 tracking-tight">20+</div>
            <div className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider mt-2">Years of Excellence</div>
          </div>
          <div className="border-r border-slate-800/60 last:border-none">
            <div className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">100%</div>
            <div className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider mt-2">Legal Dispute Free</div>
          </div>
          <div className="border-r border-slate-800/60 last:border-none">
            <div className="text-3xl md:text-5xl font-extrabold text-emerald-400 tracking-tight">500+</div>
            <div className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider mt-2">Acres Developed</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">1,200+</div>
            <div className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider mt-2">Plots Handed Over</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-6 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-slate-900 tracking-tight">Building Trust for Over 2 Decades</h2>
          <p className="text-lg leading-relaxed mb-6 text-slate-600 font-normal">
            Welcome to 3S Land Developers. We are a progressive, customer-centric organization serving the housing, land development, land filling, land trading, and real estate sectors with an unblemished reputation for over 20 years.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-slate-600 font-normal">
            Every plot across our projects—including our premier <strong>Obokash Lake View Society</strong>—is completely free from legal disputes and encumbrances. Customers are welcome to verify land ownership and deed authenticity at any time.
          </p>
          <p className="text-lg leading-relaxed text-slate-600 font-normal">
            We build planned communities featuring wide roads, 24/7 security, playgrounds, and parks. All construction utilizes BUET-tested materials and is supervised by top structural engineers to guarantee sustainable, earthquake-resistant development.
          </p>
        </div>
      </section>

      {/* Available Plot Sizes */}
      <section id="plots" className="w-full py-24 px-6 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Inventory Overview</span>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Available Land Plot Sizes</h2>
            </div>
            <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm">
              Click any plot size below to request detailed plot maps, pricing matrices, and registration terms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {['3 Katha', '4 Katha', '5 Katha', '10 Katha', '15 Katha', '20 Katha', '30 Katha', '40 Katha', '50 Katha', '70+ Katha'].map((size) => (
              <button 
                key={size} 
                onClick={() => handlePlotClick(size)}
                className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-600 hover:shadow-xl transition-all cursor-pointer group flex flex-col items-center justify-center"
              >
                <span className="font-extrabold text-2xl text-slate-800 group-hover:text-emerald-700 transition-colors">{size}</span>
                <span className="text-xs text-emerald-600 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Request Details →
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12 p-8 bg-emerald-950 text-emerald-100 rounded-2xl text-center shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-1">100% Legal Dispute-Free Guarantee</h3>
              <p className="text-slate-300 text-sm">Every land plot is fully filled, demarcated with wide access roads, and ready for immediate deed registration.</p>
            </div>
            <button 
              onClick={() => handlePlotClick('General Inquiry')}
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors shrink-0 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Planned Community Amenities */}
      <section className="w-full max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-900 tracking-tight">Planned Community Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-10 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <Landmark className="w-12 h-12 text-emerald-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-bold text-lg text-slate-900">Central Mosque & Civic Spaces</h3>
          </div>
          <div className="p-10 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <ShieldCheck className="w-12 h-12 text-emerald-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-bold text-lg text-slate-900">24/7 Security & Wide Roads</h3>
          </div>
          <div className="p-10 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <Trees className="w-12 h-12 text-emerald-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-bold text-lg text-slate-900">Parks & Green Belts</h3>
          </div>
          <div className="p-10 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <Award className="w-12 h-12 text-emerald-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-bold text-lg text-slate-900">BUET-Tested Engineering</h3>
          </div>
        </div>
      </section>

      {/* Active Development Progress with Luxury Badges */}
      <section className="w-full py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs">Live Site Documentation</span>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-1">Active Ground Operations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md group">
              <Image src="/images/board.jpg" alt="Obokash Lake View Project Signboard" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800 text-xs text-white font-medium">
                Obokash Lake View Society Entrance
              </div>
            </div>
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md group">
              <Image src="/images/wide.jpg" alt="Vast Land Development View" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800 text-xs text-white font-medium">
                Demarcated Plot Zones
              </div>
            </div>
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md group">
              <Image src="/images/action.jpg" alt="Heavy Machinery Earthmoving Operations" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800 text-xs text-white font-medium">
                Systematic Land Filling Work
              </div>
            </div>
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-md group">
              <Image src="/images/rod.jpg" alt="Paved Roads and Boundary Infrastructure" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800 text-xs text-white font-medium">
                Internal Road & Boundary Work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-24 px-6 bg-slate-950 text-white text-center flex flex-col items-center relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight relative z-10">Ready to Secure Your Plot?</h2>
        <p className="text-lg text-slate-400 max-w-2xl mb-10 font-light relative z-10">
          Contact our team today to verify deed documentation, schedule a site tour, or request pricing details.
        </p>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-xl transition-all relative z-10"
        >
          Schedule Site Visit
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 px-6 bg-slate-950 text-slate-400 text-center border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="font-extrabold text-2xl text-white mb-3 tracking-widest">3S LAND DEVELOPERS</div>
          <p className="mb-8 max-w-md text-slate-400 text-sm leading-relaxed">
            Premium housing, land filling, trading, and structural development with 20 years of trusted reputation in Bangladesh.
          </p>
          
          <div className="my-4 pt-6 border-t border-slate-900 w-full max-w-xs flex flex-col items-center">
            <span className="text-xs text-slate-500 mb-2 uppercase tracking-widest font-semibold">Digital Partner</span>
            <a 
              href="https://andigitalstudio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors tracking-widest uppercase flex items-center gap-1"
            >
              AN Digital Studio ↗
            </a>
          </div>

          <p className="text-xs text-slate-600 mt-4">© {new Date().getFullYear()} 3S Land Developers. All rights reserved.</p>
        </div>
      </footer>

      {/* Lead Generation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-slate-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Request Plot Portfolio
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Inquiring for: <span className="font-bold text-emerald-700">{selectedPlot || 'General Plot Info'}</span>
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
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  placeholder="e.g. Tanvir Ahmed" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone / WhatsApp Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required 
                  placeholder="+880 17XXXXXXXX" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors mt-4"
              >
                Send Request via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}