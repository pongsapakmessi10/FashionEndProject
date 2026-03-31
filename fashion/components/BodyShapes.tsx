import React from 'react';

export default function BodyShapes() {
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
  );
}