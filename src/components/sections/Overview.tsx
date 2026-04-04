import React from 'react';
import { SectionLabel } from '../atomic/SectionLabel';
import { SectionTitle } from '../atomic/SectionTitle';
import { DesignQuote } from '../atomic/DesignQuote';

export const Overview: React.FC = () => (
    <section id="overview">
        <SectionLabel>LEARNING JOURNEY</SectionLabel>
        <SectionTitle>Your 4-Step Progression</SectionTitle>

        <DesignQuote
            quote="Design is thinking made visual."
            cite="— Saul Bass, legendary graphic designer (Hitchcock movie posters, AT&T logo, United Airlines)"
        />

        <div className="course-path" style={{marginTop: '40px'}}>
            <div className="path-step">
                <div className="path-num">1</div>
                <div className="path-tool">CANVA</div>
                <div className="path-name">Design Foundations</div>
                <div className="path-time">2–2.5 hrs</div>
            </div>
            <div className="path-step">
                <div className="path-num">2</div>
                <div className="path-tool">CANVA</div>
                <div className="path-name">Infographic Storytelling</div>
                <div className="path-time">2.5–3 hrs</div>
            </div>
            <div className="path-step">
                <div className="path-num">3</div>
                <div className="path-tool">PHOTOSHOP</div>
                <div className="path-name">Photo-Rich Infographics</div>
                <div className="path-time">2.5–3 hrs</div>
            </div>
            <div className="path-step">
                <div className="path-num">4</div>
                <div className="path-tool">ILLUSTRATOR</div>
                <div className="path-name">Vector Mastery</div>
                <div className="path-time">2.5–3 hrs</div>
            </div>
        </div>
    </section>
);
