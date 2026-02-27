'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';

const Folder = dynamic(
  () => import('@/components/reactbits/Folder/Folder'),
  { ssr: false }
);

const LightPillar = dynamic(
  () => import('@/components/reactbits/LightPillar/LightPillar'),
  { ssr: false }
);

export default function ProjectsPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* LightPillar Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#71C4FF"
          intensity={0.8}
          rotationSpeed={0.2}
          interactive={false}
          pillarWidth={4.0}
          pillarHeight={0.5}
          noiseIntensity={0.4}
          mixBlendMode="screen"
          quality={isMobile ? 'low' : 'medium'}
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase mb-4">Projects</h1>
        <p className="text-muted text-base sm:text-lg mb-10 md:mb-16 max-w-xl">
          Stuff I&apos;ve built &amp; shipped — from eco tech to scientific research.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="cursor-pointer flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl hover:bg-card-bg/50 transition-colors min-h-[44px]"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              <Folder
                color={project.color || '#5227FF'}
                size={1}
              />
              <span className="text-xs sm:text-sm font-medium text-center mt-1 sm:mt-2">
                {project.title}
              </span>
            </div>
          ))}
        </div>

        {/* Navigate to Experience */}
        <div className="mt-16 md:mt-24 text-center">
          <Link
            href="/experience"
            className="inline-flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors group py-3 px-6 min-h-[44px]"
          >
            <span className="text-sm uppercase tracking-widest">View My Experience</span>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
