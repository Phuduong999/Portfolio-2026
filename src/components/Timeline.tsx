'use client';

import { Experience } from '@/types';

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
}

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-timeline-line md:-translate-x-px" />

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        const dateRange = item.endDate
          ? `${formatDate(item.startDate)} — ${formatDate(item.endDate)}`
          : `${formatDate(item.startDate)} — Present`;

        return (
          <div
            key={index}
            className={`relative flex items-start mb-12 md:mb-16 ${
              isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-timeline-dot -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

            {/* Content card */}
            <div
              className={`ml-10 sm:ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}
            >
              <div className="bg-card-bg border border-card-border rounded-xl sm:rounded-2xl p-4 sm:p-6">
                {/* Company logo or placeholder */}
                <div className="flex items-center gap-3 mb-3">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.company || 'Company'}
                      className="w-10 h-10 rounded-lg object-contain bg-white p-1"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                  )}
                  <div className={isLeft ? 'md:text-right flex-1' : 'flex-1'}>
                    <h3 className="text-lg font-semibold">
                      {item.company || 'Company Name'}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {item.role || 'Role'}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted mb-3 flex items-center gap-1">
                  {!item.endDate && (
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1" />
                  )}
                  {dateRange}
                </p>

                {item.highlights.filter(h => h).length > 0 && (
                  <ul className={`text-sm text-muted space-y-1 ${isLeft ? 'md:text-right' : ''}`}>
                    {item.highlights.filter(h => h).map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
