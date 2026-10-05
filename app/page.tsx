import HeroSearch from '@/components/Hero';
import Image from 'next/image';
import { Trees, ShieldCheck, Landmark, Award, Maximize, MapPin, MessageCircle } from 'lucide-react';

export default function Home() {
  const whatsappUrl = "https://wa.me/8801835105772?text=" + encodeURIComponent("Hello, I am interested in learning more about 3S Land Developers plots.");

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

      {/* Hero Section (Fixed: Search bar now floats over the image) */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center bg-slate-900 text-white min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image 
            src="/images/wide.jpg" 
            alt="3S Land Developers Project Site" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90 z-0" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-10">
          <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full mb-6 uppercase tracking-widest backdrop-blur-md">
            Over 20 Years of Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
            Trusted Housing & <br className="hidden md:block" />Land Development
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed font-light">
            Delivering 100% legal, dispute-free residential and commercial land plots across prime project locations, including Obokash Lake View Society.
          </p>
          
          {/* SEARCH COMPONENT FLOATING OVER HERO */}
          <div className="w-full">
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* The rest of your sections continue below... */}
      {/* About Section */}
      <section id="about" className="w-full py-24 px-6 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-emerald-950 tracking-tight">Building Trust for Over 2 Decades</h2>
          <p className="text-lg leading-relaxed mb-6 text-slate-600">
            Welcome to 3S Land Developers. We are a progressive, customer-centric organization serving the housing, land development, land filling, land trading, and real estate sectors with an unblemished reputation for over 20 years.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-slate-600">
            Every plot across our projects—including our premier <strong>Obokash Lake View Society</strong>—is completely free from legal disputes and encumbrances. Customers are welcome to verify land ownership and deed authenticity at any time. We guarantee on-time project handovers backed by strict compensation rules, though no such instance has ever occurred in our 20-year history.
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            We don't merely construct buildings; we build planned communities featuring wide roads, 24/7 security, playgrounds, and parks. All construction utilizes BUET-tested materials and is supervised by top structural engineers to guarantee sustainable, earthquake-resistant development.
          </p>
        </div>
      </section>

      {/* Available Plot Sizes */}
      <section id="plots" className="w-full py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-emerald-950 tracking-tight">Available Land Plot Sizes</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            We offer a wide range of plot options tailored for middle-class to affluent buyers across our project locations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {['3 Katha', '4 Katha', '5 Katha', '10 Katha', '15 Katha', '20 Katha', '30 Katha', '40 Katha', '50 Katha', '70+ Katha'].map((size) => (
              <div key={size} className="p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer">
                <span className="font-bold text-xl text-slate-800">{size}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-emerald-900 font-medium text-lg max-w-4xl mx-auto">
            * Every land project by 3S Land Developers is fully filled, demarcated with wide access roads, and backed by 100% legal dispute-free deed documentation ready for immediate registration and handover.
          </div>
        </div>
      </section>

      {/* Project Amenities Grid */}
      <section className="w-full max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 tracking-tight">Planned Community Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <Landmark className="w-14 h-14 text-emerald-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-semibold text-xl text-slate-900">Central Mosque & Civic Spaces</h3>
          </div>
          <div className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <ShieldCheck className="w-14 h-14 text-emerald-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-semibold text-xl text-slate-900">24/7 Security & Wide Roads</h3>
          </div>
          <div className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <Trees className="w-14 h-14 text-emerald-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-semibold text-xl text-slate-900">Parks & Playgrounds</h3>
          </div>
          <div className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center">
            <Award className="w-14 h-14 text-emerald-600 mb-6" strokeWidth={1.5} />
            <h3 className="font-semibold text-xl text-slate-900">BUET-Tested Materials</h3>
          </div>
        </div>
      </section>

      {/* Active Development Media Grid */}
      <section className="w-full py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-emerald-950 tracking-tight">Active Site Progress</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Real-time land filling, infrastructure, and development work across our projects.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 group">
              <Image src="/images/board.jpg" alt="Obokash Lake View Project Signboard" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 group">
              <Image src="/images/wide.jpg" alt="Vast Land Development View" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 group">
              <Image src="/images/action.jpg" alt="Heavy Machinery Earthmoving Operations" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 group">
              <Image src="/images/rod.jpg" alt="Paved Roads and Boundary Infrastructure" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-24 px-6 bg-emerald-900 text-white text-center flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Secure Your Plot?</h2>
        <p className="text-xl text-emerald-100 max-w-2xl mb-10 font-light">
          Contact our team today to verify deed documentation, schedule a site visit, or request pricing details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/contact" className="px-10 py-4 bg-white text-emerald-900 font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-colors text-center">
            Inquire Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 px-6 bg-slate-950 text-slate-400 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="font-bold text-2xl text-white mb-4 tracking-widest">3S LAND DEVELOPERS</div>
          <p className="mb-8 max-w-md text-slate-400 text-sm leading-relaxed">
            Premium housing, land filling, trading, and structural development with 20 years of trusted reputation in Bangladesh.
          </p>
          
          <div className="my-6 pt-6 border-t border-slate-800 w-full max-w-xs flex flex-col items-center">
            <span className="text-xs text-slate-500 mb-2 uppercase tracking-widest">Digital Partner</span>
            <a 
              href="https://andigitalstudio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors tracking-widest uppercase flex items-center gap-1"
            >
              AN Digital Studio ↗
            </a>
          </div>

          <p className="text-xs text-slate-600 mt-4">© {new Date().getFullYear()} 3S Land Developers. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}