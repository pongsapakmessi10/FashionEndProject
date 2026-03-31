"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import enDict from "../locales/en.json";
import thDict from "../locales/th.json";

// รับค่า lang มาจากหน้าที่เรียกใช้ Navbar
export default function Navbar({ lang }: { lang: "th" | "en" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // ดึง Path ปัจจุบัน เช่น /th/login
  const router = useRouter();

  // เลือก Dictionary ตามค่า lang จาก URL
  const dict = lang === "th" ? thDict : enDict;

  // ฟังก์ชันสลับภาษา และบันทึกลง Cookie
  const switchLanguage = (newLang: string) => {
    // 1. บันทึกลง Cookie (เก็บไว้ 1 ปี) Middleware จะได้จำได้
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`;

    // 2. เปลี่ยน URL (เช่นจาก /th/login เป็น /en/login)
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath, { scroll: false });
  };

  const LanguageSwitcher = () => {
    const isThai = lang === "th";

    return (
      <div className="relative flex items-center bg-neutral-100 p-1 rounded-full border border-neutral-200/60">
        <div
          className={`absolute top-1 bottom-1 w-[36px] bg-white rounded-full shadow transition-transform duration-300 ease-out ${
            isThai ? "translate-x-0" : "translate-x-[36px]"
          }`}
        />
        <button
          onClick={() => switchLanguage("th")}
          className={`relative z-10 w-[36px] py-1 text-[11px] font-bold tracking-wider rounded-full transition-colors ${
            isThai ? "text-black" : "text-neutral-400 hover:text-neutral-600"
          }`}
        >
          TH
        </button>
        <button
          onClick={() => switchLanguage("en")}
          className={`relative z-10 w-[36px] py-1 text-[11px] font-bold tracking-wider rounded-full transition-colors ${
            !isThai ? "text-black" : "text-neutral-400 hover:text-neutral-600"
          }`}
        >
          EN
        </button>
      </div>
    );
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              href={`/${lang}`}
              className="text-2xl font-bold tracking-tighter"
            >
              FLUKETOTO<span className="text-neutral-400">.SDU</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href={`/${lang}#how-it-works`}
              className="text-sm font-medium hover:text-neutral-500 transition-colors"
            >
              {dict.nav.howItWorks}
            </a>
            <a
              href={`/${lang}#trending`}
              className="text-sm font-medium hover:text-neutral-500 transition-colors"
            >
              {dict.nav.trending}
            </a>

            <a
              href={`/${lang}#shapes`}
              className="text-sm font-medium hover:text-neutral-500 transition-colors"
            >
              {dict.nav.shapes}
            </a>

            <div className="flex items-center gap-5 ml-2">
              <LanguageSwitcher />
              <Link
                href={`/${lang}/login`}
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
              >
                {dict.nav.signIn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
