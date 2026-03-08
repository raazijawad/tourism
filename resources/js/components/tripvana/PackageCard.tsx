import React from 'react';
import { Button } from './Button';

interface PackageCardProps {
    image: string;
    location: string;
    days: number;
    title: string;
    price: string;
    rating: number;
    reviews: number;
}

export function PackageCard({ image, location, days, title, price, rating, reviews }: PackageCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <div className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-tripvana-091733)] backdrop-blur-sm">
                        {location}
                    </div>
                    <div className="rounded-full bg-[var(--color-tripvana-a0f751)] px-3 py-1 text-xs font-bold text-[var(--color-tripvana-091733)]">
                        {days} Days
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-6 border-x border-b border-[var(--color-tripvana-091733)]/5 rounded-b-2xl">
                <div className="mb-2 flex items-center gap-1 text-sm text-[var(--color-tripvana-656e7f)]">
                    <span className="text-[var(--color-tripvana-a0f751)]">★</span>
                    <span className="font-semibold text-[var(--color-tripvana-091733)]">{rating.toFixed(1)}</span>
                    <span>({reviews} Reviews)</span>
                </div>
                
                <h3 className="mb-4 text-xl font-bold leading-tight text-[var(--color-tripvana-091733)] transition-colors group-hover:text-[var(--color-tripvana-a0f751)] line-clamp-2">
                    {title}
                </h3>

                <div className="mt-auto flex items-end justify-between border-t border-[var(--color-tripvana-091733)]/10 pt-4">
                    <div>
                        <span className="block text-xs font-medium text-[var(--color-tripvana-656e7f)] uppercase tracking-wider mb-1">Starting From</span>
                        <span className="text-2xl font-bold text-[var(--color-tripvana-a0f751)]">{price}</span>
                    </div>
                    <Button variant="outline" className="h-10 px-6 rounded-full group-hover:bg-[var(--color-tripvana-091733)] group-hover:text-white">
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
