import { Noto_Sans_Thai } from 'next/font/google';
import './globals.css';

// โหลดฟอนต์ Noto Sans Thai
const notoSansThai = Noto_Sans_Thai({ 
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-thai',
});

export const metadata = {
  title: 'AURA.AI - ค้นหาสไตล์ที่ใช่ด้วย AI',
  description: 'แพลตฟอร์มวิเคราะห์รูปร่างและแนะนำแฟชั่นด้วย AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${notoSansThai.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}