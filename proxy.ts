import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // These pages/routes should remain accessible without authentication
  if (
    pathname === "/login" ||
    pathname === "/api/login" ||
    pathname === "/images/lockscreen-desktop.png" ||
    pathname === "/images/lockscreen-mobile.png"
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("szzn-auth")?.value;

  if (token !== process.env.AUTH_TOKEN) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Protect everything except Next.js internal files.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};