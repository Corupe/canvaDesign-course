import React from 'react';

interface CardProps {
    wide?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ wide, children, style }) => (
    <div className={`card${wide ? ' card-wide' : ''}`} style={style}>
        {children}
    </div>
);
