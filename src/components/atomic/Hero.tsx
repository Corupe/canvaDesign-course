import React from 'react';

export const Hero: React.FC = () => (
    <section className="hero">
        <div className="hero-badge">🎓 BEGINNER COURSE · 4 LESSONS · 10–14 HOURS TOTAL</div>
        <h1>Master<em>Commercial Design.</em></h1>
        <p className="hero-desc">Learn professional commercial &amp; print design from scratch. Create branded marketing kits, packaging, direct mail, and print collateral using Canva, Photoshop, and Illustrator.</p>
        <div className="hero-stats">
            <div className="stat"><span className="stat-num">4</span><span className="stat-lbl">Lessons</span></div>
            <div className="stat"><span className="stat-num">3</span><span className="stat-lbl">Pro Tools</span></div>
            <div className="stat"><span className="stat-num">20+</span><span className="stat-lbl">Exercises</span></div>
            <div className="stat"><span className="stat-num">8</span><span className="stat-lbl">Deliverables</span></div>
        </div>
        <aside className="hero-side">
            <div className="tool-card"><span className="tool-em">🎨</span> Canva — Lessons 1 &amp; 2</div>
            <div className="tool-card"><span className="tool-em">🖼️</span> Photoshop — Lesson 3</div>
            <div className="tool-card"><span className="tool-em">✏️</span> Illustrator — Lesson 4</div>
            <div className="tool-card"><span className="tool-em">🏆</span> Portfolio Project — Final</div>
        </aside>
    </section>
);
