import React from 'react';

interface DesignQuoteProps {
    quote: string;
    cite: string;
}

export const DesignQuote: React.FC<DesignQuoteProps> = ({ quote, cite }) => (
    <div className="design-quote">
        <blockquote>{quote}</blockquote>
        <cite>{cite}</cite>
    </div>
);
