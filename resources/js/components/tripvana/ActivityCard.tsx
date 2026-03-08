import React from 'react';

interface ActivityCardProps {
    image: string;
    title: string;
}

export function ActivityCard({ image, title }: ActivityCardProps) {
    return (
        <div className="group relative h-[400px] w-full min-w-[280px] overflow-hidden rounded-[2rem] md:h-[500px]">
            <img 
                src={image} 
                alt={title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold leading-tight mb-2">{title}</h3>
                
                <div className="overflow-hidden">
                    <div className="flex items-center gap-2 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 font-medium text-[var(--color-tripvana-a0f751)]">
                        <span>Explore Activities</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
