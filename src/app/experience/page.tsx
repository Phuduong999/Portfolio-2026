'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Timeline from '@/components/Timeline';
import { experiences } from '@/data/experience';

const CountUp = dynamic(
  () => import('@/components/reactbits/CountUp/CountUp'),
  { ssr: false }
);

const Grainient = dynamic(
  () => import('@/components/reactbits/Grainient/Grainient'),
  { ssr: false }
);

const stats = [
  { label: 'Projects Completed', value: 24, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Happy Clients', value: 12, suffix: '' },
  { label: 'Technologies', value: 15, suffix: '+' },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-24 max-w-5xl mx-auto relative overflow-hidden">
      {/* Grainient Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Grainient
          color1="#B19EEF"
          color2="#5227FF"
          color3="#71C4FF"
          timeSpeed={0.15}
          grainAmount={0.08}
          contrast={1.3}
          saturation={0.8}
          zoom={0.8}
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase mb-4">Experience</h1>
        <p className="text-muted text-base sm:text-lg mb-10 md:mb-16 max-w-xl">
          Where I&apos;ve been and what I&apos;ve done.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card-bg border border-card-border rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2.5}
                  separator=","
                />
                {stat.suffix}
              </div>
              <p className="text-muted text-[11px] sm:text-xs md:text-sm leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        <Timeline items={experiences} />

        {/* Navigate to Contact */}
        <div className="mt-16 md:mt-24 text-center">
          <Link
            href="/contact"
            className="inline-flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors group py-3 px-6 min-h-[44px]"
          >
            <span className="text-sm uppercase tracking-widest">Get In Touch</span>
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
