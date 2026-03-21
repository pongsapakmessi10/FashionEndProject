import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Trending from '@/components/Trending';
import BodyShapes from '@/components/BodyShapes';
import Footer from '@/components/Footer';

// ไม่จำเป็นต้องใช้ 'use client' ในหน้านี้แล้ว เพราะ state ไปอยู่ใน Navbar แทน
// ทำให้หน้านี้กลายเป็น Server Component ซึ่งดีต่อ SEO และ Performance ครับ

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white" style={{ fontFamily: 'var(--font-noto-sans-thai), sans-serif' }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Trending />
      <BodyShapes />
      <Footer />
    </div>
  );
}