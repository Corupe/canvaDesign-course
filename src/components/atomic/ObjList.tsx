import React from 'react';

interface ObjListItem {
    checked?: boolean;
    children: React.ReactNode;
}

export const ObjList: React.FC<{ items: ObjListItem[] }> = ({ items }) => (
    <ul className="obj-list">
        {items.map((item, i) => (
            <li key={i}>
                <div className="obj-dot">✓</div>
                {item.children}
            </li>
        ))}
    </ul>
);
