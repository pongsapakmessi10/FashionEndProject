import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['th', 'en'];
const defaultLocale = 'th';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ยกเว้นไฟล์ระบบ ภาพ และ API ไม่ต้องเติมภาษา
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') // เช่น .ico, .svg, .png
  ) {
    return;
  }

  // เช็คว่าใน URL มีภาษาหรือยัง (เช่น /th/login หรือ /en/login)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // ถ้าไม่มี ให้ไปดูใน Cookie ว่าเคยเลือกภาษาอะไรไว้ไหม ถ้าไม่มีให้ใช้ 'th'
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const locale = cookieLocale && locales.includes(cookieLocale) ? cookieLocale : defaultLocale;

  // Redirect ไปที่ URL ที่มีภาษา
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}