import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold tracking-tighter">FLUKETOTO<span className="text-neutral-400">.SDU</span></div>
        <p className="text-sm text-neutral-500">© 2026 โปรเจกต์จบระดับปริญญาตรี (University Final Year Project) สงวนลิขสิทธิ์</p>
        <div className="flex space-x-6">
          <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">Twitter</a>
          <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}