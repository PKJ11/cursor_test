// src/middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Match all app routes except public/static/api paths
    '/((?!api|_next|.*\\..*|favicon.ico).*)',
  ],
};
