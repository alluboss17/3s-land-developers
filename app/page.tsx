import { Trees, HeartPulse, BookOpen, Landmark, MapPin, Maximize } from 'lucide-react';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      
      {/* Navigation */}
      <nav className="w-full p-6 border-b border-slate-200 flex justify-between items-center bg-white">
        <div className="font-bold text-xl tracking-tighter">3S Land Developers</div>
        <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-md">Contact Us</button>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-24 px-6 flex flex-col items-center justify-center text-center bg-slate-100">
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mb-6">
          Premium Land Plots in Keraniganj
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-8">
          Secure your future with 100% legal, hassle-free land. Backed by 20 years of trusted reputation in premium plot development.
        </p>
        <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-colors">
          Explore Available Plots
        </button>
      </section>

      {/* Amenities Grid */}
      <section className="w-full max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Project Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
            <Landmark className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-slate-900">Central Mosque</h3>
          </div>
          
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
            <HeartPulse className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-slate-900">Hospital Access</h3>
          </div>
          
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
            <Trees className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-slate-900">Green Parks</h3>
          </div>
          
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md">
            <BookOpen className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-lg text-slate-900">Nearby Schools</h3>
          </div>

        </div>
      </section>

      {/* Featured Plots Grid */}
      <section className="w-full py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Featured Available Plots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Plot Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col">
              <div className="h-48 bg-slate-200 w-full flex items-center justify-center text-slate-500 text-sm font-medium">
                [Plot Image Placeholder]
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-xl text-slate-900">Block A - Plot 12</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Available</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-600">
                      <Maximize className="w-5 h-5 mr-3 text-emerald-600" />
                      <span>5 Katha</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                      <span>Prime Residential Zone</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 border border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                  Inquire Price
                </button>
              </div>
            </div>

            {/* Plot Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col">
              <div className="h-48 bg-slate-200 w-full flex items-center justify-center text-slate-500 text-sm font-medium">
                [Plot Image Placeholder]
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-xl text-slate-900">Block B - Plot 04</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">Available</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-600">
                      <Maximize className="w-5 h-5 mr-3 text-emerald-600" />
                      <span>3 Katha</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                      <span>Commercial Frontage</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 border border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                  Inquire Price
                </button>
              </div>
            </div>

            {/* Plot Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col">
              <div className="h-48 bg-slate-200 w-full flex items-center justify-center text-slate-500 text-sm font-medium">
                [Plot Image Placeholder]
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-xl text-slate-900">Block C - Plot 88</h3>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">Sold Out</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-600">
                      <Maximize className="w-5 h-5 mr-3 text-slate-400" />
                      <span className="text-slate-500">10 Katha</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-5 h-5 mr-3 text-slate-400" />
                      <span className="text-slate-500">Corner Plot</span>
                    </div>
                  </div>
                </div>
                <button disabled className="w-full py-3 bg-slate-100 text-slate-400 font-semibold rounded-lg cursor-not-allowed">
                  Unavailable
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

     {/* Call to Action / Contact */}
      <section id="contact" className="w-full py-20 px-6 bg-emerald-700 text-white text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Plot?</h2>
        <p className="text-lg text-emerald-100 max-w-2xl mb-8">
          Contact our sales team today to schedule a site visit or request the latest pricing details for Keraniganj.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="tel:+8801835105772" 
            className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg shadow-sm hover:bg-slate-100 transition-colors text-center"
          >
            Call Us Now
          </a>
          <a 
            href="https://wa.me/8801234567890?text=Hello,%20I%20am%20interested%20in%20the%20premium%20land%20plots%20in%20Keraniganj." 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors text-center"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-slate-900 text-slate-400 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="font-bold text-2xl text-white mb-4 tracking-tighter">3S Land Developers</div>
          <p className="mb-6 max-w-md">100% legal, hassle-free premium land plots backed by 20 years of trusted reputation.</p>
          <p className="text-sm">© {new Date().getFullYear()} 3S Land Developers. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}