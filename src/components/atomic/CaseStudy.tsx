import React from 'react';

interface CaseStudyProps {
    label: string;
    title: string;
    children: React.ReactNode;
    takeaway?: React.ReactNode;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ label, title, children, takeaway }) => (
    <div className="case-study">
        <div className="cs-label">{label}</div>
        <h4>{title}</h4>
        {children}
        {takeaway && <div className="cs-takeaway">{takeaway}</div>}
    </div>
);
