import React from 'react';
import { Camera, Sparkles, Shirt } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">วิธีใช้งาน</h2>
          <p className="text-neutral-500">3 ขั้นตอนง่ายๆ ในการเปลี่ยนสไตล์การแต่งตัวของคุณ</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              <Camera size={32} className="text-neutral-900" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. อัปโหลดรูปภาพ</h3>
            <p className="text-neutral-600 leading-relaxed">อัปโหลดรูปถ่ายเต็มตัวของคุณอย่างปลอดภัย เราให้ความสำคัญกับความเป็นส่วนตัวของคุณเป็นอันดับแรก</p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-black rounded-2xl shadow-lg shadow-black/20 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              <Sparkles size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. AI วิเคราะห์รูปร่าง</h3>
            <p className="text-neutral-600 leading-relaxed">ระบบ AI อัจฉริยะของเราจะสแกนและระบุรูปร่างเฉพาะของคุณอย่างแม่นยำ</p>
          </div>
          
          {/* Step 3 */}
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
  );
}