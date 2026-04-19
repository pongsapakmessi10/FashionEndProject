'use client';

import React, { useRef, useState, use } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowRight, Camera, Sparkles, Shirt } from 'lucide-react';

// TiltCardWrapper จำเป็นต้องแยกเป็น Component เพื่อให้แต่ละ Card มี State แยกจากกัน 
// (ใน React ไม่สามารถประกาศ Hook อย่าง useState ไว้ข้างใน loop หรือ .map() ได้ครับ)
function TiltCardWrapper({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const MAX_TILT_ANGLE = 10; 

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const mouseXFromCenter = (e.clientX - centerX) / (width / 2);
    const mouseYFromCenter = (e.clientY - centerY) / (height / 2);

    const tiltY = mouseXFromCenter * MAX_TILT_ANGLE;
    const tiltX = mouseYFromCenter * -MAX_TILT_ANGLE;

    setRotation({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: '1000px' }}> 
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-100 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d', 
        }}
      >
        <div style={{ transformStyle: 'preserve-3d' }}>
           {children}
        </div>
      </div>
    </div>
  );
}

export default function HomePage({ params }: { params: Promise<{ lang: 'th' | 'en' }> }) {
  const { lang } = use(params);

  // ==========================================
  // HERO LOGIC
  // ==========================================
  const heroRef = useRef<HTMLElement>(null);
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty('--mouse-x', `${x}px`);
    heroRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // ==========================================
  // TRENDING DATA
  // ==========================================
  const trendingItems = [
    { id: 1, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80", title: "มินิมอลชิค (Minimalist Chic)" },
    { id: 2, img: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/1/21/4683ebefff2343a2a620c293c299ccd4", title: "สตรีทแวร์ (Urban Streetwear)" },
    { id: 3, img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80", title: "สมาร์ทแคชชวล (Smart Casual)" },
    { id: 4, img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80", title: "ซัมเมอร์ลุค (Summer Breeze)" }
  ];

  // ==========================================
  // BODY SHAPES DATA
  // ==========================================
  const bodyShapesData = [
    {
      id: 1,
      name: 'ทรงนาฬิกาทราย',
      img: 'https://amara-clinic.com/wp-content/uploads/2022/03/%E0%B8%AB%E0%B8%B8%E0%B9%88%E0%B8%991-1024x1024.webp',
      description: 'เอวคอดชัดเจน สะโพกและหน้าอกสมดุลกัน',
    },
    {
      id: 2,
      name: 'ทรงลูกแพร์',
      img: 'https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60efde82ce0dc256c05142f2_Pear%20Body%20Shape%20Title%20Image.webp',
      description: 'สะโพกผาย ช่วงบนเล็กกว่าช่วงล่าง',
    },
    {
      id: 3,
      name: 'ทรงกระบอก',
      img: 'https://cdn.shopifycdn.net/s/files/1/0263/1427/6912/files/Rectangle_Body_Shape_Ultimate_Guides_to_2023_Summer_Bridesmaid_Dresses_480x480.png?v=1687138900',
      description: 'สัดส่วนตรง เอว หน้าอก และสะโพกใกล้เคียงกัน',
    },
    {
      id: 4,
      name: 'ทรงสามเหลี่ยมคว่ำ',
      img: 'https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60efe4a9ce19af708fe6e3dc_Inverted%20Triangle%20Body%20Shape%20Title%20Image.png',
      description: 'ช่วงบนกว้างกว่าช่วงล่าง ไหล่กว้าง สะโพกแคบ',
    },
    {
      id: 5,
      name: 'ทรงแอปเปิ้ล',
      img: 'https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60f12ec55285e1aca7b6a437_Apple%20Body%20Shape%20Title%20Image.png',
      description: 'ช่วงกลางลำตัวเด่น เอวใหญ่กว่าสะโพกและหน้าอก',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white" style={{ fontFamily: 'var(--font-noto-sans-thai), sans-serif' }}>
      <Navbar lang={lang} />

      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden group"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100"
          style={{
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
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-100 rounded-full blur-[100px] -z-10 opacity-40"></div>
      </section>

      {/* ========================================
          HOW IT WORKS SECTION
          ======================================== */}
      <section id="how-it-works" className="py-24 bg-neutral-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">วิธีใช้งาน</h2>
            <p className="text-neutral-500">3 ขั้นตอนง่ายๆ ในการเปลี่ยนสไตล์การแต่งตัวของคุณ</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <Camera size={32} className="text-neutral-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. อัปโหลดรูปภาพ</h3>
              <p className="text-neutral-600 leading-relaxed">อัปโหลดรูปถ่ายเต็มตัวของคุณอย่างปลอดภัย เราให้ความสำคัญกับความเป็นส่วนตัวของคุณเป็นอันดับแรก</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-black rounded-2xl shadow-lg shadow-black/20 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. AI วิเคราะห์รูปร่าง</h3>
              <p className="text-neutral-600 leading-relaxed">ระบบ AI อัจฉริยะของเราจะสแกนและระบุรูปร่างเฉพาะของคุณอย่างแม่นยำ</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <Shirt size={32} className="text-neutral-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. รับคำแนะนำ</h3>
              <p className="text-neutral-600 leading-relaxed">รับไอเดียการจับคู่เสื้อผ้าที่เสริมจุดเด่นและพรางจุดด้อยให้เหมาะกับสรีระของคุณ</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          TRENDING SECTION
          ======================================== */}
      <section id="trending" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">สไตล์แฟชั่นมาแรง</h2>
              <p className="text-neutral-500">คัดสรรลุคสุดปังจากคำแนะนำยอดฮิตของ AI</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-neutral-500 transition-colors">
              ดูทั้งหมด <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '2000px' }}>
            {trendingItems.map((item) => (
              <TiltCardWrapper key={item.id}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4] bg-neutral-100 shadow-xl shadow-neutral-900/5 group-hover:shadow-neutral-900/10 transition-shadow duration-300">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                      style={{ transform: 'translateZ(10px)' }}
                    />
                  </div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-neutral-500">ดูคอลเลกชัน</p>
                </div>
              </TiltCardWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          BODY SHAPES SECTION
          ======================================== */}
      <section id="shapes" className="py-24 bg-neutral-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">5 รูปร่างพื้นฐาน</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              การเข้าใจรูปร่างของตัวเองคือกุญแจสำคัญในการแต่งตัวให้ดูดี โมเดล AI ของเราถูกฝึกฝนมาเพื่อจดจำสรีระพื้นฐานเหล่านี้ได้อย่างแม่นยำ ผ่านภาพประกอบเทคนิคลายเส้นแฟชั่นที่ดูหรูหรา
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {bodyShapesData.map((item) => (
              <div key={item.id} className="group cursor-pointer overflow-hidden rounded-2xl bg-neutral-800 shadow-xl shadow-neutral-950/20">
                <div className="relative aspect-[3/4] p-4 bg-neutral-800">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out group-hover:filter group-hover:brightness-110"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-lg font-bold text-white">{item.id}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-lg md:text-xl text-white mb-2 leading-tight">{item.name}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FOOTER SECTION
          ======================================== */}
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
    </div>
  );
}
