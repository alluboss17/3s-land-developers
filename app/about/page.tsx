import { Shield, Clock, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-10">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 text-center">
          Two Decades of <span className="text-emerald-700">Trust</span>.
        </h1>
        
        <div className="prose prose-lg text-slate-600 mx-auto mb-16">
          <p className="lead text-xl md:text-2xl text-slate-800 font-medium text-center mb-10">
            3S Land Developers is a premier real estate organization serving the housing, land filling, and structural development sectors with an unblemished 20-year reputation.
          </p>
          <p>
            Unlike typical real estate models, we focus purely on the foundation of property: <strong>the land itself</strong>. We acquire, systematically fill, legally clear, and develop vast tracts of land into master-planned communities. Every single plot we hand over is guaranteed 100% free of legal disputes, ready for immediate deed registration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">20 Years History</h3>
            <p className="text-slate-600 text-sm">A zero-failure track record over two decades of operation.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">100% Legal Guarantee</h3>
            <p className="text-slate-600 text-sm">Completely dispute-free deed documentation on every single plot.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Prime Investment</h3>
            <p className="text-slate-600 text-sm">Strategic locations ensuring massive ROI for our buyers.</p>
          </div>
        </div>
      </div>
    </main>
  );
}