import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full p-6 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0 z-40 shadow-sm">
      <Link href="/" className="font-bold text-xl tracking-tighter text-emerald-900">
        3S LAND DEVELOPERS
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/projects" className="text-sm font-medium text-slate-700 hover:text-emerald-800 transition-colors">
          Projects
        </Link>
        <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-emerald-800 transition-colors">
          About
        </Link>
        <Link href="/contact" className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-md transition-colors">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}