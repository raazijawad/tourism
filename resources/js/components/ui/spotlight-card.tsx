import React, { useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  customSize?: boolean;
}

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={`
        relative
        rounded-2xl
        border
        border-white/20
        backdrop-blur-md
        bg-white/10
        shadow-lg
        overflow-hidden
        ${customSize ? '' : 'aspect-[3/4]'}
        ${className}
      `}
      onMouseMove={(e) => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          cardRef.current.style.setProperty('--x', `${x}px`);
          cardRef.current.style.setProperty('--y', `${y}px`);
        }
      }}
    >
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(255,255,255,0.1), transparent 40%)`
        }}
      />
      {children}
    </div>
  );
};

export { GlowCard };
