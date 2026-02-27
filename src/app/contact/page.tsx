'use client';

import dynamic from 'next/dynamic';
import { personal } from '@/data/personal';
import LazyMetallicPaint from '@/components/LazyMetallicPaint';

const ScrollStack = dynamic(
  () => import('@/components/reactbits/ScrollStack/ScrollStack'),
  { ssr: false }
);

const ScrollStackItem = dynamic(
  () => import('@/components/reactbits/ScrollStack/ScrollStack').then(mod => ({ default: mod.ScrollStackItem })),
  { ssr: false }
);

const BlurText = dynamic(
  () => import('@/components/reactbits/BlurText/BlurText'),
  { ssr: false }
);

const DecryptedText = dynamic(
  () => import('@/components/reactbits/DecryptedText/DecryptedText'),
  { ssr: false }
);

const CARD_BASE = '!bg-card-bg !border !border-card-border flex items-center';

const platforms = [
  {
    key: 'email',
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    external: false,
    iconSrc: '/icons/email.svg',
    lightColor: '#EA4335',
    darkColor: '#1a0505',
    tintColor: '#FBBC05',
  },
  {
    key: 'phone',
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone}`,
    external: false,
    iconSrc: '/icons/phone.svg',
    lightColor: '#25D366',
    darkColor: '#0a1a0e',
    tintColor: '#128C7E',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: 'Phu Duong',
    href: personal.linkedin,
    external: true,
    iconSrc: '/icons/linkedin.svg',
    lightColor: '#0A66C2',
    darkColor: '#051a33',
    tintColor: '#0077B5',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    value: '@phudg999',
    href: personal.instagram,
    external: true,
    iconSrc: '/icons/instagram.svg',
    lightColor: '#E1306C',
    darkColor: '#1a0a15',
    tintColor: '#F58529',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    value: 'Phu Duong',
    href: personal.facebook,
    external: true,
    iconSrc: '/icons/facebook.svg',
    lightColor: '#1877F2',
    darkColor: '#050f1f',
    tintColor: '#4599FF',
  },
];

export default function ContactPage() {
  return (
    <div className="h-screen">
      <ScrollStack
        className="h-full"
        itemDistance={80}
        itemScale={0.04}
        itemStackDistance={25}
        stackPosition="25%"
        blurAmount={2}
      >
        {/* Card 1: Intro */}
        <ScrollStackItem itemClassName="!bg-gradient-to-br !from-[#5227FF] !to-[#71C4FF] flex items-center justify-center">
          <div className="text-center">
            <BlurText
              text="Is this so cool?"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-lg sm:text-2xl md:text-3xl text-white/80 mb-4 sm:mb-6 justify-center"
            />
            <h1 className="text-3xl sm:text-5xl md:text-7xl uppercase text-white drop-shadow-lg font-bold">
              <DecryptedText
                text="Let's Work"
                speed={60}
                maxIterations={15}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                className="text-white"
                encryptedClassName="text-white/40"
              />
              <br />
              <DecryptedText
                text="Together"
                speed={60}
                maxIterations={15}
                sequential={true}
                revealDirection="start"
                animateOn="view"
                className="text-white"
                encryptedClassName="text-white/40"
              />
            </h1>
          </div>
        </ScrollStackItem>

        {/* Platform Cards */}
        {platforms.map(p => {
          if (!p.href) return null;
          return (
            <ScrollStackItem key={p.key} itemClassName={CARD_BASE}>
              <a
                href={p.href}
                {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-4 sm:gap-6 md:gap-8 w-full group min-h-[44px]"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <LazyMetallicPaint
                    imageSrc={p.iconSrc}
                    lightColor={p.lightColor}
                    darkColor={p.darkColor}
                    tintColor={p.tintColor}
                    speed={0.2}
                    scale={2}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted mb-0.5">{p.label}</p>
                  <p className="text-sm sm:text-base md:text-xl font-medium text-foreground group-hover:text-accent transition-colors truncate">
                    {p.value}
                  </p>
                </div>
                <svg className="w-5 h-5 ml-auto text-muted group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </ScrollStackItem>
          );
        })}

        {/* Card: Location & Languages */}
        <ScrollStackItem itemClassName={CARD_BASE}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 w-full">
            {personal.location && (
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <LazyMetallicPaint
                    imageSrc="/icons/location.svg"
                    lightColor="#FF6B6B"
                    darkColor="#1a0a0a"
                    tintColor="#EE5A24"
                    speed={0.2}
                    scale={2}
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted mb-0.5">Location</p>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-foreground">{personal.location}</p>
                </div>
              </div>
            )}
            {personal.languages.length > 0 && (
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
                  <LazyMetallicPaint
                    imageSrc="/icons/languages.svg"
                    lightColor="#A29BFE"
                    darkColor="#0f0a1a"
                    tintColor="#6C5CE7"
                    speed={0.2}
                    scale={2}
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted mb-0.5">Languages</p>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-foreground">{personal.languages.join(' / ')}</p>
                </div>
              </div>
            )}
          </div>
        </ScrollStackItem>

        {/* Card: Back to Home */}
        <ScrollStackItem itemClassName="!bg-gradient-to-br !from-[#7c5cff] !to-[#5227FF] flex items-center justify-center">
          <a href="/" className="flex flex-col items-center gap-3 sm:gap-4 text-white group py-4 px-6 min-h-[44px]">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 group-hover:-translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            <span className="text-xl sm:text-3xl md:text-4xl font-bold uppercase">Back to Home</span>
          </a>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}
