"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Mail, Lock } from "lucide-react";

// นำเข้า Dictionary
import enDict from "../../../locales/en.json";
import thDict from "../../../locales/th.json";

export default function LoginPage() {
  const params = useParams();
  const lang = params.lang as string;
  const dict = lang === "th" ? thDict : enDict;

  return (
    // เพิ่ม style เพื่อดึง variable font มาใช้งานทั่วทั้งหน้า
    <div 
      className="min-h-screen flex bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white"
      style={{ fontFamily: 'var(--font-noto-sans-thai), sans-serif' }}
    >
      {/* ฝั่งซ้าย: รูปภาพแบนเนอร์แฟชั่น */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-neutral-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80"
          alt="Fashion Editorial"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-end p-16 w-full h-full text-white">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-neutral-300 mb-4">
            FLUKETOTO.SDU
          </p>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            {dict.login.heroTitle1} <br /> {dict.login.heroTitle2}
          </h2>
          <p className="text-neutral-300 max-w-md">{dict.login.heroSubtitle}</p>
        </div>
      </div>

      {/* ฝั่งขวา: ฟอร์ม Login */}
      <div className="w-full lg:w-1/2 flex flex-col p-6 sm:p-12 md:p-16 lg:p-20">
        <div className="mb-auto">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            {dict.login.backHome}
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          <div className="mb-10 text-center sm:text-left">
            <h1 className="text-3xl font-bold mb-3">
              {dict.login.welcomeTitle}
            </h1>
            <p className="text-neutral-500">{dict.login.welcomeSubtitle}</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-700" htmlFor="email">
                {dict.login.emailLabel}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-neutral-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-neutral-700" htmlFor="password">
                  {dict.login.passwordLabel}
                </label>
                <a href="#" className="text-xs font-semibold text-neutral-500 hover:text-black transition-colors">
                  {dict.login.forgotPassword}
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-neutral-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-neutral-300 text-black focus:ring-black cursor-pointer"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-neutral-600 cursor-pointer">
                {dict.login.rememberMe}
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/20 mt-4"
            >
              {dict.login.signInBtn}
            </button>
          </form>

          <div className="mt-8 mb-8 flex items-center justify-center">
            <div className="w-full border-t border-neutral-200"></div>
            <span className="px-4 text-xs text-neutral-400 bg-white whitespace-nowrap">
              {dict.login.orSignInWith}
            </span>
            <div className="w-full border-t border-neutral-200"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-neutral-200 py-3.5 rounded-full text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-all">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                </g>
              </svg>
              {dict.login.googleSignIn}
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-neutral-500">
            {dict.login.noAccount}{" "}
            <a href="#" className="font-semibold text-black hover:underline">
              {dict.login.signUp}
            </a>
          </p>
        </div>

        <div className="mt-auto text-center sm:text-left text-xs text-neutral-400">
          <p>© 2026 FLUKETOTO.SDU Project.</p>
        </div>
      </div>
    </div>
  );
}