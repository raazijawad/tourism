import React from 'react';

interface SectionHeadingProps {
    subtitle: string;
    title: React.ReactNode;
    className?: string;
    center?: boolean;
    subtitleColor?: string;
    titleColor?: string;
    titleFont?: string;
}

export function SectionHeading({
    subtitle,
    title,
    className = '',
    center = false,
    subtitleColor = 'text-[var(--color-tripvana-091733)]',
    titleColor = 'text-[var(--color-tripvana-091733)]',
    titleFont,
}: SectionHeadingProps) {
    return (
        <div className={`flex flex-col gap-4 ${center ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
            <div className={`inline-flex items-center gap-2 rounded-full border border-[var(--color-tripvana-091733)]/10 px-4 py-1.5 text-sm font-medium ${subtitleColor}`}>
                <span className="text-[var(--color-tripvana-a0f751)]">+</span> {subtitle}
            </div>
            <h2 className={`font-bold leading-tight ${titleColor} text-[var(--color-tripvana-091733)] text-3xl md:text-5xl lg:text-6xl capitalize`} style={titleFont ? { fontFamily: titleFont } : {}}>
                {title}
            </h2>
        </div>
    );
}
