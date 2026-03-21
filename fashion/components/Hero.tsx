'use client';

import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroRef.current.style.setProperty('--mouse-x', `${x}px`);
    heroRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden group"
    >
      {/* ========================================
        ✨ เอฟเฟกต์แสง Gradient ตามเมาส์ (ปรับให้ชัดและมีมิติขึ้น)
        ========================================
      */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
        style={{
          // ใช้สีม่วง (Purple) ไล่ไปฟ้า (Blue) เพิ่ม Opacity ให้ชัดเจนขึ้น
          background: `
            radial-gradient(
              350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(168, 85, 247, 0.25), 
              rgba(59, 130, 246, 0.1) 30%, 
              transparent 60%
            )
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="tracking-[0.2em] text-sm font-semibold text-neutral-500 mb-6">
          สไตลิสต์แฟชั่นส่วนตัวด้วย AI
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          ค้นหาสไตล์ที่ใช่ <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500">
            สำหรับคุณ
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed">
          เพียงอัปโหลดรูปภาพ ให้ AI ของเราช่วยวิเคราะห์รูปร่างของคุณ และรับคำแนะนำแฟชั่นที่ออกแบบมาเพื่อเสริมความมั่นใจให้คุณโดยเฉพาะ
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="group/btn flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/20">
            ลองใช้ AI วิเคราะห์รูปร่าง
            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <button className="text-black bg-neutral-100 px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-200 transition-all">
            ดูแคตตาล็อก
          </button>
        </div>
      </div>
      
      {/* ฉากหลังตกแต่ง - ผมปรับความเข้มลงนิดหน่อยเพื่อไม่ให้แย่งซีนแสงเมาส์ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-100 rounded-full blur-[100px] -z-10 opacity-40"></div>
    </section>
  );
}