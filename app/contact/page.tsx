import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const whatsappUrl = "https://wa.me/8801835105772?text=" + encodeURIComponent("Hello, I am interested in learning more about 3S Land Developers plots.");

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">Verify deeds, schedule a site tour, or speak with our sales executives.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Direct Line & WhatsApp</p>
                  <a href="tel:+8801835105772" className="text-xl font-medium text-slate-900 hover:text-emerald-600">+880 1835-105772</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mr-6 shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Project Location</p>
                  <p className="text-lg font-medium text-slate-900">Atibazar, Keraniganj Model Town<br/>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column - Map Embed */}
          <div className="w-full h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
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
      </div>
    </main>
  );
}