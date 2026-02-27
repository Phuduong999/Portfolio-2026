'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { personal } from '@/data/personal';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

const ProfileCard = dynamic(
  () => import('@/components/reactbits/ProfileCard/ProfileCard'),
  { ssr: false }
);

const DecryptedText = dynamic(
  () => import('@/components/reactbits/DecryptedText/DecryptedText'),
  { ssr: false }
);

const FloatingLines = dynamic(
  () => import('@/components/reactbits/FloatingLines/FloatingLines'),
  { ssr: false }
);

interface ChatMsg {
  text?: string;
  jsx?: React.ReactNode;
}

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const chatMessages: ChatMsg[] = [
    { text: 'Hey there 👋' },
    { text: "I'm Phu Duong" },
    { text: 'I design & code things on the web' },
    { text: 'Currently open for freelance projects 🚀' },
    {
      jsx: (
        <>
          Find me on{' '}
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover underline transition-colors">LinkedIn</a>,{' '}
          <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover underline transition-colors">Instagram</a>{' '}and{' '}
          <a href={personal.facebook} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover underline transition-colors">Facebook</a>
        </>
      )
    },
    {
      jsx: (
        <>
          Or contact me at{' '}
          <a href={`mailto:${personal.email}`} className="text-accent hover:text-accent-hover underline transition-colors">{personal.email}</a>
        </>
      )
    },
    { text: 'Have a nice day ✌️' },
    { text: '~ Phu.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[100svh] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-16 sm:pt-20 md:pt-24 pb-24 relative overflow-hidden">
        {/* FloatingLines Background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <FloatingLines
            linesGradient={['#5227FF', '#71C4FF', '#B19EEF', '#7c5cff']}
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[3, 4, 3]}
            lineDistance={[6, 6, 6]}
            animationSpeed={0.7}
            interactive={!isMobile}
            parallax={!isMobile}
            parallaxStrength={0.15}
            bendRadius={5.0}
            bendStrength={-0.5}
            mouseDamping={0.05}
            mixBlendMode="screen"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 max-w-6xl w-full relative z-10">
          {/* Left: Chat Messages */}
          <div className="flex-[1.2] flex flex-col gap-2 sm:gap-3 order-2 md:order-1">
            {chatMessages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.6 + i * 0.35,
                  duration: 0.45,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="bg-card-bg/80 backdrop-blur-sm border border-card-border rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 w-fit max-w-[95%] sm:max-w-[90%] text-[13px] sm:text-base"
              >
                {msg.text ? (
                  <DecryptedText
                    text={msg.text}
                    speed={50}
                    maxIterations={12}
                    sequential={true}
                    revealDirection="start"
                    animateOn="view"
                    className="text-foreground"
                    encryptedClassName="text-muted"
                  />
                ) : (
                  <span className="text-foreground">{msg.jsx}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: ProfileCard */}
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <ProfileCard
              name={personal.name}
              title={personal.title}
              handle={personal.handle}
              status={personal.status}
              avatarUrl={personal.avatarUrl}
              miniAvatarUrl={personal.avatarUrl}
              iconUrl="/card-pattern.svg"
              grainUrl="/card-grain.webp"
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              behindGlowEnabled={true}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              behindGlowSize="50%"
              enableTilt={true}
              enableMobileTilt={true}
              mobileTiltSensitivity={5}
              contactText="Contact"
              onContactClick={() => router.push('/contact')}
              showUserInfo={true}
            />
          </div>
        </div>

        {/* Animated Arrow → Projects */}
        <Link
          href="/projects"
          className="absolute bottom-[calc(2rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors py-2 px-4 min-h-[44px]"
        >
          <span className="text-xs uppercase tracking-widest">View My Work</span>
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </motion.svg>
        </Link>
      </section>
    </div>
  );
}
