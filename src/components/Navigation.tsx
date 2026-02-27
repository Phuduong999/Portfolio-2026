'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { personal } from '@/data/personal';

const BubbleMenu = dynamic(() => import('@/components/reactbits/BubbleMenu/BubbleMenu'), { ssr: false });
const StaggeredMenu = dynamic(() => import('@/components/reactbits/StaggeredMenu/StaggeredMenu').then(mod => ({ default: mod.StaggeredMenu })), { ssr: false });
const MetallicPaint = dynamic(() => import('@/components/reactbits/MetallicPaint/MetallicPaint'), { ssr: false });

const navItems = [
  { label: 'home', href: '/', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#5227FF', textColor: '#fff' } },
  { label: 'projects', href: '/projects', ariaLabel: 'Projects', rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#fff' } },
  { label: 'experience', href: '/experience', ariaLabel: 'Experience', rotation: -5, hoverStyles: { bgColor: '#f59e0b', textColor: '#fff' } },
  { label: 'contact', href: '/contact', ariaLabel: 'Contact', rotation: 8, hoverStyles: { bgColor: '#ef4444', textColor: '#fff' } },
];

const staggeredItems = [
  { label: 'Home', link: '/' },
  { label: 'Projects', link: '/projects' },
  { label: 'Experience', link: '/experience' },
  { label: 'Contact', link: '/contact' },
];

const socialItems = [
  ...(personal.github ? [{ label: 'GitHub', link: personal.github }] : []),
  ...(personal.linkedin ? [{ label: 'LinkedIn', link: personal.linkedin }] : []),
  ...(personal.email ? [{ label: 'Email', link: `mailto:${personal.email}` }] : []),
];

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <StaggeredMenu
        items={staggeredItems}
        socialItems={socialItems}
        position="right"
        colors={isDark ? ['#9b80ff', '#7c5cff'] : ['#B19EEF', '#5227FF']}
        accentColor={isDark ? '#7c5cff' : '#5227FF'}
        isFixed={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        logoUrl="/logo-pd.svg"
        onMenuClose={() => {}}
      />
    );
  }

  return (
    <BubbleMenu
      items={navItems}
      logoHref="/"
      logo={
        <div style={{ width: 40, height: 40, borderRadius: 8, overflow: 'hidden' }}>
          <MetallicPaint
            imageSrc="/logo-pd.svg"
            lightColor={isDark ? '#b19eef' : '#5227FF'}
            darkColor={isDark ? '#1a1a1a' : '#000000'}
            tintColor="#7c5cff"
            speed={0.2}
            scale={3}
          />
        </div>
      }
      menuBg="var(--nav-bg)"
      menuContentColor="var(--nav-text)"
      useFixedPosition={true}
    />
  );
}
