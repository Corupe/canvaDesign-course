import React from 'react';

export const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="tag">{children}</span>
);
