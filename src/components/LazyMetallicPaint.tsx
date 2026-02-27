'use client';

import { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const MetallicPaint = dynamic(
  () => import('@/components/reactbits/MetallicPaint/MetallicPaint'),
  { ssr: false }
);

interface LazyMetallicPaintProps {
  imageSrc: string;
  lightColor: string;
  darkColor: string;
  tintColor: string;
  speed?: number;
  scale?: number;
}

export default function LazyMetallicPaint(props: LazyMetallicPaintProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible && <MetallicPaint {...props} />}
    </div>
  );
}
