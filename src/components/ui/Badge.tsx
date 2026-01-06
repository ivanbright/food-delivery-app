import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'orange' | 'green' | 'gray';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'orange',
    className = ''
}) => {
    const variants = {
        orange: 'bg-orange-100 text-primary',
        green: 'bg-green-100 text-green-700',
        gray: 'bg-gray-100 text-gray-700',
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};
