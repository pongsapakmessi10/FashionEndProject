import { Noto_Sans_Thai } from 'next/font/google';
import '../globals.css';
import ScrollToTop from '../../components/ScrollToTop';

const notoSansThai = Noto_Sans_Thai({ 
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-thai',
});

export const metadata = {
  title: 'FLUKETOTO.SDU - ค้นหาสไตล์ที่ใช่ด้วย AI',
  description: 'แพลตฟอร์มวิเคราะห์รูปร่างและแนะนำแฟชั่นด้วย AI',
};

// 1. เติม async และแก้ Type ของ params
export default async function RootLayout({
  children,
  params, 
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  
  // 2. ใช้ await แกะค่า lang
  const { lang } = await params;

  return (
    // นำตัวแปร lang ที่แกะแล้วมาใช้
    <html lang={lang} className={`${notoSansThai.variable}`}>
      <body className="font-sans">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}