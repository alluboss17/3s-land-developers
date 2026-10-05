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

      {/* Navigation */}
      <nav className="w-full p-6 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0 z-40 shadow-sm">
        <div className="font-bold text-xl tracking-tighter text-emerald-900">3S LAND DEVELOPERS</div>
        <a 
          href="#contact" 
          className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-md transition-colors"
        >
          Contact Us
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/images/wide.jpg" 
            alt="3S Land Developers Project Site" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full mb-6 uppercase tracking-wider backdrop-blur-sm">
            Over 20 Years of Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-sm">
            Trusted Housing & Land Development
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
            Delivering 100% legal, dispute-free residential and commercial land plots across prime project locations, including Obokash Lake View Society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#plots" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg transition-all">
              Explore Plot Sizes
            </a>
            <a href="#about" className="px-8 py-4 border border-slate-600 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold rounded-lg transition-all backdrop-blur-sm">
              Learn About 3S
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 px-6 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-emerald-900">Building Trust for Over 2 Decades</h2>
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
      <section id="plots" className="w-full py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-emerald-900">Available Land Plot Sizes</h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            We offer a wide range of plot options tailored for middle-class to affluent buyers across our project locations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {['3 Katha', '4 Katha', '5 Katha', '10 Katha', '15 Katha', '20 Katha', '30 Katha', '40 Katha', '50 Katha', '70+ Katha'].map((size) => (
              <div key={size} className="p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:border-emerald-500 transition-colors">
                <span className="font-bold text-xl text-slate-800">{size}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-emerald-900 font-medium">
            * In addition to land plots, 3S Land Developers constructs and hands over custom multi-story residential apartments and commercial buildings within agreed timeframes.
          </div>
        </div>
      </section>

      {/* Project Amenities Grid */}
      <section className="w-full max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Planned Community Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center text-center">
            <Landmark className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-slate-900">Central Mosque & Civic Spaces</h3>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center text-center">
            <ShieldCheck className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-slate-900">24/7 Security & Wide Roads</h3>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center text-center">
            <Trees className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-slate-900">Parks & Playgrounds</h3>
          </div>
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center text-center">
            <Award className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-slate-900">BUET-Tested Materials</h3>
          </div>
        </div>
      </section>

      {/* Active Development Media Grid */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-emerald-900">Active Site Progress</h2>
          <p className="text-center text-slate-600 mb-10">Real-time land filling, infrastructure, and development work across our projects.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <Image src="/images/board.jpg" alt="Obokash Lake View Project Signboard" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <Image src="/images/wide.jpg" alt="Vast Land Development View" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <Image src="/images/action.jpg" alt="Heavy Machinery Earthmoving Operations" fill className="object-cover" />
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
              <Image src="/images/road.jpg" alt="Paved Roads and Boundary Infrastructure" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plots Grid */}
      <section className="w-full py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Featured Available Plots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col p-6 justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-slate-900">Block A - Prime Plot</h3>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Available</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-600">
                    <Maximize className="w-5 h-5 mr-3 text-emerald-600" />
                    <span>5 Katha</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                    <span>Obokash Lake View Society</span>
                  </div>
                </div>
              </div>
              <a href="#contact" className="w-full py-3 border border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-colors text-center block">
                Inquire Price
              </a>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col p-6 justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-slate-900">Block B - Commercial Plot</h3>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Available</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-600">
                    <Maximize className="w-5 h-5 mr-3 text-emerald-600" />
                    <span>10 Katha</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                    <span>Main Avenue Frontage</span>
                  </div>
                </div>
              </div>
              <a href="#contact" className="w-full py-3 border border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-colors text-center block">
                Inquire Price
              </a>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col p-6 justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-slate-900">Block C - Large Residential</h3>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Limited</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-600">
                    <Maximize className="w-5 h-5 mr-3 text-emerald-600" />
                    <span>20+ Katha</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                    <span>Lakefront Zone</span>
                  </div>
                </div>
              </div>
              <a href="#contact" className="w-full py-3 border border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-colors text-center block">
                Inquire Price
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-emerald-900">Project Location</h2>
          <p className="text-center text-slate-600 mb-8 max-w-xl mx-auto">
            Situated at Atibazar, Keraniganj Model Town, Dhaka. Conveniently connected to major highways.
          </p>
          <div className="w-full h-96 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              title="3S Land Developers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14611.834190897595!2d90.3235!3d23.7122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ef6b4d320d%3A0xa1d556a3e5c9b7e1!2sAtibazar%2C%20Keraniganj!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="w-full py-20 px-6 bg-emerald-800 text-white text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Plot?</h2>
        <p className="text-lg text-emerald-100 max-w-2xl mb-8">
          Contact our team today to verify deed documentation, schedule a site visit, or request pricing details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="tel:+8801835105772" 
            className="px-8 py-4 bg-white text-emerald-800 font-bold rounded-lg shadow-sm hover:bg-slate-100 transition-colors text-center"
          >
            Call Us Now
          </a>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-emerald-900 transition-colors text-center"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="font-bold text-2xl text-white mb-2 tracking-tighter">3S LAND DEVELOPERS</div>
          <p className="mb-6 max-w-md text-slate-400 text-sm">
            Quality housing, land filling, trading, and structural development with 20 years of trusted reputation.
          </p>
          
          <div className="my-4 pt-4 border-t border-slate-800 w-full max-w-xs flex flex-col items-center">
            <span className="text-xs text-slate-500 mb-1">Designed & Built by</span>
            <a 
              href="https://andigitalstudio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors tracking-wide uppercase flex items-center gap-1"
            >
              AN Digital Studio ↗
            </a>
          </div>

          <p className="text-xs text-slate-600 mt-2">© {new Date().getFullYear()} 3S Land Developers. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}