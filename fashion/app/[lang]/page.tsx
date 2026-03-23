import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Trending from '@/components/Trending';
import BodyShapes from '@/components/BodyShapes';
import Footer from '@/components/Footer';

// 1. เติม async ตรงนี้ และกำหนด type ให้ params เป็น Promise
export default async function HomePage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  
  // 2. ใช้ await เพื่อแกะค่า lang ออกมาจากกล่อง Promise
  const { lang } = await params;

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white" style={{ fontFamily: 'var(--font-noto-sans-thai), sans-serif' }}>
      <Navbar lang={lang} />
      <Hero />
      <HowItWorks />
      <Trending />
      <BodyShapes />
      <Footer />
    </div>
  );
}