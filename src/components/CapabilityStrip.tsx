import React from 'react';

const HIGHLIGHTS = [
  "Sofa Fabric (Chenille, Holland, Mosha)",
  "Tailored Sofa Covers",
  "Bedding Collections",
  "Artisan Cushions",
  "White-Label Manufacturing",
  "Panipat · Established 1995",
];

export default function CapabilityStrip() {
  return (
    <div className="bg-[#141A16] text-[#FBF9F5] border-y border-[#242D26] py-4 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono tracking-wider text-[#D4CDBC]">
        {HIGHLIGHTS.map((item, index) => (
          <React.Fragment key={item}>
            <span className="hover:text-[#C29B38] transition-colors">{item}</span>
            {index < HIGHLIGHTS.length - 1 && (
              <span className="text-[#3B453D] hidden sm:inline">·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
