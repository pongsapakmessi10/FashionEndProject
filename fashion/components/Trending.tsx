'use client'; // ต้องเติม 'use client' เพราะเรามีการดักจับ Mouse Event และใช้ useState

import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';


interface TiltCardWrapperProps {
  children: React.ReactNode;
}

function TiltCardWrapper({ children }: TiltCardWrapperProps) {
  // สร้าง Ref เพื่ออ้างอิงถึง Card แต่ละตัว
  const cardRef = useRef<HTMLDivElement>(null);
  
  // State สำหรับเก็บค่าองศาการหมุน และสถานะกำลังขยับเมาส์
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // กำหนดองศาการเอียงสูงสุด (ปรับค่านี้ได้ครับ)
  const MAX_TILT_ANGLE = 10; 

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // 1. คำนวณหาตำแหน่งของเมาส์เทียบกับศูนย์กลางของ Card
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // หาตำแหน่งศูนย์กลาง Card
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    // หาตำแหน่งเมาส์ เทียบกับศูนย์กลาง Card (ค่าที่ได้จะอยู่ระหว่าง -1 ถึง 1)
    const mouseXFromCenter = (e.clientX - centerX) / (width / 2);
    const mouseYFromCenter = (e.clientY - centerY) / (height / 2);

    // 2. คำนวณองศาในการเอียง (rotateX รอบแกน X, rotateY รอบแกน Y)
    // - เลื่อนเมาส์ไปซ้าย/ขวา -> หมุนรอบแกน Y (rotateY)
    // - เลื่อนเมาส์ไปบน/ล่าง -> หมุนรอบแกน X (rotateX)
    // (หมายเหตุ: สำหรับ rotateX ต้องกลับค่าลบ/บวก เพื่อให้เอียงตามทิศทางเมาส์)
    const tiltY = mouseXFromCenter * MAX_TILT_ANGLE;
    const tiltX = mouseYFromCenter * -MAX_TILT_ANGLE;

    // อัปเดต State องศาการหมุน
    setRotation({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // เมื่อเมาส์ออก ให้ Card เด้งกลับมาตรงเหมือนเดิม
    setRotation({ x: 0, y: 0 });
  };

  return (
    // 1. Perspective Container: จำเป็นมากสำหรับการแสดงผล 3D
    <div style={{ perspective: '1000px' }}> 
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-100 ease-out" // เพิ่ม Smooth ตอนขยับ และ Smooth ตอนเมาส์ออก
        style={{
          // Apply 3D Rotation ผ่าน inline style เพราะเป็นค่าที่เปลี่ยนตลอดเวลา
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          // สำคัญ: ทำให้ content ด้านใน (รูปภาพ, ข้อความ) มีมิติ 3D ไปพร้อมกับ Card
          transformStyle: 'preserve-3d', 
        }}
      >
        {/* ส่ง content จริงๆ (Child) เข้ามาด้านใน */}
        <div style={{ transformStyle: 'preserve-3d' }}>
           {children}
        </div>
      </div>
    </div>
  );
}


export default function Trending() {
  const trendingItems = [
    { id: 1, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80", title: "มินิมอลชิค (Minimalist Chic)" },
    { id: 2, img: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/1/21/4683ebefff2343a2a620c293c299ccd4", title: "สตรีทแวร์ (Urban Streetwear)" },
    { id: 3, img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80", title: "สมาร์ทแคชชวล (Smart Casual)" },
    { id: 4, img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80", title: "ซัมเมอร์ลุค (Summer Breeze)" }
  ];

  return (
    <section id="trending" className="py-24">
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

        {/* 1.Perspective Container ระดับ Grid: ช่วยให้เวลา Card แต่ละตัวเอียง มันดูสมจริงขึ้นเมื่อมองโดยรวม */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '2000px' }}>
          {trendingItems.map((item) => (
            
            // 2. ✨ นำ TiltCardWrapper มาหุ้มรอบ Item แต่ละตัว
            <TiltCardWrapper key={item.id}>
              <div className="group cursor-pointer">
                {/* 3. รูปภาพด้านใน: ยังคงเก็บเอฟเฟกต์ zoom เมื่อ hover ไว้เพื่อความมีมิติ */}
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4] bg-neutral-100 shadow-xl shadow-neutral-900/5 group-hover:shadow-neutral-900/10 transition-shadow duration-300">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    // สำคัญ: ใส่ translate-z เพื่อยกรูปขึ้นมาจากแผ่น Card นิดหน่อยเวลาเอียง
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
  );
}