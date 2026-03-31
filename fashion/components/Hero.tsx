'use client';

import React, { useRef, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
// 🌟 นำเข้า Library สำหรับ 3D
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Model } from './model/Model'; // ระบุ path ให้ตรงกับโฟลเดอร์ของคุณนะครับ

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
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden group flex items-center"
    >
      {/* เอฟเฟกต์แสง Gradient ตามเมาส์ */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(
              400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(168, 85, 247, 0.15), 
              rgba(59, 130, 246, 0.05) 40%, 
              transparent 60%
            )
          `
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* 🌟 เปลี่ยนเป็น Grid แบ่งซ้ายขวา */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ========================================
              ฝั่งซ้าย: เนื้อหา (Text Content)
              ======================================== */}
          <div className="text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 mb-6">
              <p className="tracking-widest text-xs font-bold text-neutral-500 uppercase">
                สไตลิสต์แฟชั่นส่วนตัวด้วย AI
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              ค้นหาสไตล์ที่ใช่ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400">
                สำหรับคุณ
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 mb-10 leading-relaxed max-w-lg">
              เพียงอัปโหลดรูปภาพ ให้ AI ของเราช่วยวิเคราะห์รูปร่างของคุณ และรับคำแนะนำแฟชั่นที่ออกแบบมาเพื่อเสริมความมั่นใจให้คุณโดยเฉพาะ
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="group/btn flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/20 active:scale-95">
                ลองใช้ AI วิเคราะห์รูปร่าง
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ========================================
              ฝั่งขวา: 3D Model Canvas
              ======================================== */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] w-full flex justify-center items-center">
            {/* วงกลมฉากหลังตกแต่งโมเดลให้ดูเด่นขึ้น */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-gradient-to-tr from-neutral-200 to-neutral-50 rounded-full blur-3xl -z-10 opacity-70"></div>
            
            <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 40 }}>
              <Suspense fallback={null}>
                {/* จัดแสงให้โมเดลดูแพง */}
                <Environment preset="city" />
                <ambientLight intensity={0.6} />
                <directionalLight position={[2, 5, 2]} intensity={1.5} castShadow />

                <group position={[0, -0.8, 0]}>
                  {/* เรียกใช้โมเดลของคุณ */}
                  <Model />
                  
                  {/* สร้างเงาตกกระทบที่พื้น (ดูสมจริงมาก) */}
                  <ContactShadows 
                    position={[0, 0, 0]} 
                    opacity={0.4} 
                    scale={5} 
                    blur={2} 
                    far={1.5} 
                  />
                </group>

                {/* ตัวควบคุมเมาส์ */}
                <OrbitControls 
                  enableZoom={false} // ปิดซูม เพื่อไม่ให้ User เลื่อนลูกกลิ้งแล้วไปซูมโมเดลแทนการเลื่อนเว็บ
                  enablePan={false}
                  minPolarAngle={Math.PI / 2} // ล็อกมุมก้มเงย ให้อยู่ระดับสายตา
                  maxPolarAngle={Math.PI / 2}
                  enableDamping={true}
                  dampingFactor={0.05}
                  minDistance={3}
                  maxDistance={3}
                />
              </Suspense>
            </Canvas>

            {/* ป้าย UI เล็กๆ เพื่อบอกว่ามันเล่นได้ */}
            <div className="absolute bottom-4 right-4 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40 shadow-sm pointer-events-none">
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}