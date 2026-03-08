import React from 'react';

interface BlogCardProps {
    image: string;
    date: string;
    tag: string;
    title: string;
    excerpt: string;
}

export function BlogCard({ image, date, tag, title, excerpt }: BlogCardProps) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg">
            <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-4 text-sm font-medium">
                    <span className="flex items-center gap-2 text-[var(--color-tripvana-a0f751)]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {date}
                    </span>
                    <span className="text-[var(--color-tripvana-656e7f)]">•</span>
                    <span className="text-[var(--color-tripvana-091733)]">{tag}</span>
                </div>
                
                <h3 className="mb-3 text-2xl font-bold leading-tight text-[var(--color-tripvana-091733)] transition-colors group-hover:text-[var(--color-tripvana-a0f751)] line-clamp-2">
                    <a href="#">{title}</a>
                </h3>
                
                <p className="mb-6 line-clamp-2 flex-1 text-[var(--color-tripvana-656e7f)] leading-relaxed">
                    {excerpt}
                </p>
                
                <div className="mt-auto border-t border-[var(--color-tripvana-091733)]/10 pt-4">
                    <a href="#" className="inline-flex items-center gap-2 font-bold text-[var(--color-tripvana-091733)] transition-colors hover:text-[var(--color-tripvana-a0f751)] uppercase text-sm tracking-wider">
                        Read Story
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
}
