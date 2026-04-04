import React from 'react';

interface FunFactProps {
    icon: React.ReactNode;
    children: React.ReactNode;
}

export const FunFact: React.FC<FunFactProps> = ({ icon, children }) => (
    <div className="fun-fact">
        <div className="ff-icon">{icon}</div>
        <div>{children}</div>
    </div>
);
