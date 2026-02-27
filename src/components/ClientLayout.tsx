'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ThemeProvider from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SplashCursor = dynamic(
  () => import('@/components/reactbits/SplashCursor/SplashCursor'),
  { ssr: false }
);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <ThemeProvider>
      {isDesktop && <SplashCursor />}
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
