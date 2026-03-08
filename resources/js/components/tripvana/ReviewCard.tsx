import React from 'react';

interface ReviewCardProps {
    text: string;
    authorImage: string;
    authorName: string;
    authorRole: string;
}

export function ReviewCard({ text, authorImage, authorName, authorRole }: ReviewCardProps) {
    return (
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 md:p-10 shadow-lg">
            {/* Stars */}
            <div className="flex gap-1 text-[var(--color-tripvana-a0f751)]">
                {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                ))}
            </div>
            
            <p className="flex-1 text-lg font-medium leading-relaxed text-[var(--color-tripvana-091733)]">
                "{text}"
            </p>
            
            <div className="flex items-center gap-4 mt-4">
                <img 
                    src={authorImage} 
                    alt={authorName} 
                    className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-bold text-[var(--color-tripvana-091733)]">{authorName}</h4>
                    <p className="text-sm text-[var(--color-tripvana-656e7f)]">{authorRole}</p>
                </div>
            </div>
        </div>
    );
}
