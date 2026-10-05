import Image from 'next/image';
import { MapPin, Maximize, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    { title: "Obokash Lake View Society", type: "Premium Residential", status: "Selling Fast", image: "/images/wide.jpg" },
    { title: "Main Avenue Commercial", type: "Commercial Zone", status: "Available", image: "/images/board.jpg" },
    { title: "South Block Extension", type: "Mixed Use", status: "Under Development", image: "/images/action.jpg" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Our Portfolio</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Explore our strategically located, 100% dispute-free land developments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold rounded-full">
                  {project.status}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-2xl text-slate-900 mb-2">{project.title}</h3>
                <p className="text-emerald-600 font-medium text-sm mb-6 uppercase tracking-wider">{project.type}</p>
                
                <div className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                  <div className="flex items-center text-slate-600">
                    <Maximize className="w-5 h-5 mr-3 text-slate-400" />
                    <span>Multiple Katha Sizes</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-5 h-5 mr-3 text-slate-400" />
                    <span>Keraniganj, Dhaka</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-500" />
                    <span>Ready for Registration</span>
                  </div>
                </div>
                <a href="/contact" className="block w-full py-3.5 bg-slate-900 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors text-center">
                  Inquire About Plots
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}