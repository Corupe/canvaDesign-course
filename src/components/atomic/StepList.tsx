import React from 'react';

interface StepListItem {
    children: React.ReactNode;
}

export const StepList: React.FC<{ items: StepListItem[] }> = ({ items }) => (
    <ul className="step-list">
        {items.map((item, i) => (
            <li key={i}>{item.children}</li>
        ))}
    </ul>
);
