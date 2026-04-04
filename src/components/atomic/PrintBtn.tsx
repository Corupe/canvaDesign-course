import React from 'react';

export const PrintBtn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <button className="print-btn" onClick={() => window.print()}>{children}</button>
);
