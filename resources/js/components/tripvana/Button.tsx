import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'round';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    asChild?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tripvana-a0f751 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap';
        
        const variants = {
            primary: 'bg-[var(--color-tripvana-a0f751)] text-[var(--color-tripvana-091733)] hover:bg-[#8ee142]',
            outline: 'border-2 border-[var(--color-tripvana-091733)] text-[var(--color-tripvana-091733)] hover:bg-[var(--color-tripvana-091733)] hover:text-white',
            ghost: 'text-[var(--color-tripvana-091733)] hover:bg-black/5',
            round: 'rounded-full border border-white text-white hover:bg-white/20',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-12 px-8 text-base rounded-full',
            lg: 'h-14 px-10 text-lg rounded-full',
            icon: 'h-10 w-10 rounded-full',
        };

        const compClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(children, {
                ref,
                className: `${compClass} ${(children.props as any).className || ''}`,
                ...props
            } as any);
        }

        return (
            <button
                className={compClass}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';
