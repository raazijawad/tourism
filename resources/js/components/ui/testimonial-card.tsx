"use client";

import { Star } from "lucide-react";

interface TestimonialCardProps {
    text: string;
    authorImage: string;
    authorName: string;
    authorRole: string;
    rating?: number;
    featured?: boolean;
}

export function TestimonialCard({
    text,
    authorImage,
    authorName,
    authorRole,
    rating = 5,
    featured = false,
}: TestimonialCardProps) {
    return (
        <div className={`group relative ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
            <div className="relative h-full overflow-hidden bg-[var(--color-tripvana-091733)] p-6 transition-all duration-500 hover:transform hover:-translate-y-1">
                {/* Accent Border */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-[var(--color-tripvana-a0f751)] transition-all duration-500 group-hover:w-full" />
                
                {/* Large Decorative Quote */}
                <div className="absolute -top-4 -right-2 text-[120px] font-bold text-white/5 leading-none select-none" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                    "
                </div>

                {/* Rating Diamonds */}
                <div className="flex gap-1.5 mb-4">
                    {[...Array(rating)].map((_, i) => (
                        <div
                            key={i}
                            className="h-2.5 w-2.5 bg-[var(--color-tripvana-a0f751)] rotate-45"
                        />
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="relative text-base text-white leading-relaxed mb-6" style={{ fontFamily: 'Aspekta, sans-serif' }}>
                    {text}
                </p>

                {/* Divider Line */}
                <div className="w-12 h-px bg-[var(--color-tripvana-a0f751)]/30 mb-4" />

                {/* Author Info */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-[var(--color-tripvana-a0f751)]/20" />
                        <img
                            src={authorImage}
                            alt={authorName}
                            className="relative h-12 w-12 grayscale object-cover"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-white text-sm tracking-wide" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                            {authorName}
                        </div>
                        <div className="text-xs text-white/40 tracking-wider uppercase" style={{ fontFamily: 'Aspekta, sans-serif' }}>
                            {authorRole}
                        </div>
                    </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[var(--color-tripvana-a0f751)]/20" />
            </div>
        </div>
    );
}
