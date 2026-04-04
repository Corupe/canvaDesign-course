import React from 'react';

interface TimelineItem {
    time: string;
    children: React.ReactNode;
}

export const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
    <ul className="timeline">
        {items.map((item, i) => (
            <li key={i}>
                <span className="tl-time">{item.time}</span>
                {item.children}
            </li>
        ))}
    </ul>
);
