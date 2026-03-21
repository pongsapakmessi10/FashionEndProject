import React from 'react';
import { ArrowRight } from 'lucide-react';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4] bg-neutral-100">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-sm text-neutral-500">ดูคอลเลกชัน</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}