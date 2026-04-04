import React from 'react';

interface Swatch {
    color: string;
}

export const PaletteRow: React.FC<{ swatches: Swatch[]; onCopy?: (color: string) => void }> = ({ swatches, onCopy }) => (
    <div className="palette-row">
        {swatches.map((swatch, i) => (
            <div
                key={swatch.color}
                className="swatch"
                style={{ background: swatch.color }}
                onClick={() => onCopy && onCopy(swatch.color)}
            >
                <span>{swatch.color}</span>
            </div>
        ))}
    </div>
);
