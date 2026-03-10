"use client";

import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";

interface DestinationCardProps {
    image: string;
    location: string;
    country?: string;
    days: number;
    title: string;
    price: string;
    rating: number;
    reviews?: number;
    featured?: boolean;
}

export function DestinationCard({
    image,
    location,
    country,
    days,
    title,
    price,
    rating,
    reviews,
    featured = false,
}: DestinationCardProps) {
    return (
        <div className={`group relative overflow-hidden rounded-2xl ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
            {/* Card Container */}
            <div className="relative h-full min-h-[240px] overflow-hidden bg-[var(--color-tripvana-091733)]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-tripvana-091733)] via-[var(--color-tripvana-091733)]/20 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-tripvana-091733)]/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Featured Badge */}
                {featured && (
                    <div className="absolute top-3 left-3 z-20">
                        <div className="flex items-center gap-1.5 rounded-full bg-[var(--color-tripvana-a0f751)] px-2.5 py-1 text-xs font-bold text-[var(--color-tripvana-091733)]">
                            <Star className="h-3 w-3 fill-current" />
                            Featured
                        </div>
                    </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 z-20">
                    <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-0.5 backdrop-blur-md border border-white/20">
                        <Star className="h-3 w-3 fill-[var(--color-tripvana-a0f751)] text-[var(--color-tripvana-a0f751)]" />
                        <span className="text-xs font-semibold text-white">{rating}</span>
                        {reviews && (
                            <span className="text-xs text-white/60">({reviews})</span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                    {/* Location */}
                    <div className="mb-1.5 flex items-center gap-1.5 text-white/70">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs font-medium" style={{ fontFamily: 'Aspekta, sans-serif' }}>
                            {location}{country && `, ${country}`}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-base md:text-lg font-bold text-white leading-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                        {title}
                    </h3>

                    {/* Details Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5 text-white/70">
                                <Calendar className="h-3 w-3" />
                                <span className="text-xs">{days} days</span>
                            </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-center gap-2">
                            <div className="text-right">
                                <div className="text-xs text-white/50">from</div>
                                <div className="text-base font-bold text-[var(--color-tripvana-a0f751)]" style={{ fontFamily: 'Unbounded, sans-serif' }}>
                                    {price}
                                </div>
                            </div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--color-tripvana-091733)] transition-all duration-300 group-hover:bg-[var(--color-tripvana-a0f751)] group-hover:scale-110">
                                <ArrowRight className="h-3.5 w-3.5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </div>
        </div>
    );
}
