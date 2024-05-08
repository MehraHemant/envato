import { NextResponse } from "next/server";
import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode("secret");

export async function middleware(req) {
  const cookieVar = req.cookies.getAll();
  let token = "";
  if (cookieVar.length) {
    for (let key of cookieVar) {
      if (key.name == "token") {
        token = key.value;
      }
    }
  }
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  try {
     await jwtVerify(token, secretKey, { algorithms: ['HS256'] });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/rollup"],
};
