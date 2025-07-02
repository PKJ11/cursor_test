import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import "./globals.css";
import { TRPCProvider } from '../components/providers/TRPCProvider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Logicology Learning - Complete Learning Management System",
  description: "A comprehensive LMS platform for students and educators featuring courses, live classes, tests, and collaborative learning tools.",
  keywords: ["LMS", "learning management system", "education", "online courses", "e-learning", "virtual classroom"],
  authors: [{ name: "Logicology Learning" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800`}
        >
          <TRPCProvider>
            {children}
          </TRPCProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
