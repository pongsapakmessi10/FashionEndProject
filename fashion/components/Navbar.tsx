'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter">FLUKETOTO<span className="text-neutral-400">.SDU</span></span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#how-it-works" className="text-sm font-medium hover:text-neutral-500 transition-colors">วิธีใช้งาน</a>
            <a href="#trending" className="text-sm font-medium hover:text-neutral-500 transition-colors">สไตล์ยอดฮิต</a>
            <a href="#shapes" className="text-sm font-medium hover:text-neutral-500 transition-colors">รูปร่างทั้ง 5</a>
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all">
              เข้าสู่ระบบ
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <a href="#how-it-works" className="block px-3 py-2 text-base font-medium">วิธีใช้งาน</a>
          <a href="#trending" className="block px-3 py-2 text-base font-medium">สไตล์ยอดฮิต</a>
          <a href="#shapes" className="block px-3 py-2 text-base font-medium">รูปร่างทั้ง 5</a>
        </div>
      )}
    </nav>
  );
}