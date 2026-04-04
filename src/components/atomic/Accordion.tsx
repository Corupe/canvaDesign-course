import React, { useState } from 'react';

interface AccordionProps {
    title: React.ReactNode;
    children: React.ReactNode;
    warning?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="accordion">
            <div className={`acc-header${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
                {title} <span className="acc-arrow">▾</span>
            </div>
            <div className={`acc-body${open ? ' open' : ''}`}>{children}</div>
        </div>
    );
};
