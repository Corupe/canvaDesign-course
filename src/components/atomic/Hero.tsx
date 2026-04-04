import React from 'react';

export const Hero: React.FC = () => (
    <section className="hero">
        <div className="hero-badge">🎓 BEGINNER COURSE · 4 LESSONS · 8–12 HOURS TOTAL</div>
        <h1>Design Great<em>Infographics.</em></h1>
        <p className="hero-desc">A structured, hands-on beginner course rooted in real design thinking — covering principles, Canva, Photoshop, and Illustrator. Build a portfolio as you learn.</p>
        <div className="hero-stats">
            <div className="stat"><span className="stat-num">4</span><span className="stat-lbl">Lessons</span></div>
            <div className="stat"><span className="stat-num">3</span><span className="stat-lbl">Pro Tools</span></div>
            <div className="stat"><span className="stat-num">16+</span><span className="stat-lbl">Exercises</span></div>
            <div className="stat"><span className="stat-num">8</span><span className="stat-lbl">Printables</span></div>
        </div>
        <aside className="hero-side">
            <div className="tool-card"><span className="tool-em">🎨</span> Canva — Lessons 1 &amp; 2</div>
            <div className="tool-card"><span className="tool-em">🖼️</span> Photoshop — Lesson 3</div>
            <div className="tool-card"><span className="tool-em">✏️</span> Illustrator — Lesson 4</div>
            <div className="tool-card"><span className="tool-em">🏆</span> Portfolio Project — Final</div>
        </aside>
    </section>
);
