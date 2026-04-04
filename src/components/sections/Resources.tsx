import React from 'react';
import { SectionLabel } from '../atomic/SectionLabel';
import { SectionTitle } from '../atomic/SectionTitle';
import { DesignQuote } from '../atomic/DesignQuote';

export const Resources: React.FC = () => (
    <section id="resources">
        <SectionLabel>YOUR DESIGN TOOLKIT</SectionLabel>
        <SectionTitle>Resources, Tools &amp; Where to Go Next</SectionTitle>

        <DesignQuote
            quote="Design is the silent ambassador of your brand."
            cite="— Paul Rand, designer (IBM logo, ABC logo, UPS logo, Yale Press), one of the most influential graphic designers of the 20th century"
        />

        <div className="resource-grid" style={{marginTop: '24px'}}>
            <div className="resource-card">
              <div className="r-icon">🎨</div>
              <h4>Color Tools</h4>
              <p><strong>Coolors.co</strong> — Generate, explore, and lock beautiful palettes. <strong>Adobe Color</strong> — Extract colors from any image; create harmonies from the color wheel. <strong>WebAIM Contrast Checker</strong> — Verify text is accessible. <strong>Paletton.com</strong> — Advanced color relationship visualization.</p>
            </div>
            <div className="resource-card">
              <div className="r-icon">✍️</div>
              <h4>Typography Resources</h4>
              <p><strong>Google Fonts</strong> — 1,400+ free web-safe fonts with pairing suggestions. <strong>FontPair.co</strong> — Curated Google Font pairings. <strong>Typewolf.com</strong> — Daily type inspiration, font identification. <strong>Font Squirrel</strong> — Free fonts for commercial use. <strong>WhatTheFont</strong> — Identify fonts from images.</p>
            </div>
            <div className="resource-card">
              <div className="r-icon">🔍</div>
              <h4>Design Inspiration</h4>
              <p><strong>Behance.net/infographics</strong> — Search "infographic" to find professional examples by category. <strong>Information is Beautiful</strong> (informationisbeautiful.net) — The gold standard in data visualization design. <strong>Dribbble</strong> — UI, branding, and visual design trends. <strong>Awwwards</strong> — Best in interactive design.</p>
            </div>
            <div className="resource-card">
              <div className="r-icon">📚</div>
              <h4>Books Worth Buying</h4>
              <p><strong>"The Non-Designer's Design Book"</strong> by Robin Williams — The definitive CRAP principles guide. <strong>"Thinking with Type"</strong> by Ellen Lupton — Essential typography reference. <strong>"The Visual Display of Quantitative Information"</strong> by Edward Tufte — The data visualization bible. <strong>"Don't Make Me Think"</strong> by Steve Krug.</p>
            </div>
            <div className="resource-card">
              <div className="r-icon">🛠️</div>
              <h4>Free Tools to Bookmark</h4>
              <p><strong>Datawrapper.de</strong> — Beautiful interactive charts, free tier. <strong>Flourish.studio</strong> — Data viz and infographic templates, very powerful free tier. <strong>Canva.com</strong> — Your starting point. <strong>Remove.bg</strong> — AI background removal in one click (faster than Photoshop for simple subjects). <strong>Bezier.method.ac</strong> — Pen tool practice game.</p>
            </div>
            <div className="resource-card">
              <div className="r-icon">🏆</div>
              <h4>Build Your Portfolio</h4>
              <p><strong>Behance.net</strong> — The professional standard for design portfolios. Adobe's platform, widely browsed by art directors. <strong>Adobe Portfolio</strong> — Free with any Creative Cloud plan. <strong>Readymag.com</strong> — Beautiful portfolio websites, free tier. <strong>Notion</strong> — Many designers use it as a simple, clean portfolio base.</p>
            </div>
        </div>

        <div style={{marginTop: '40px'}}>
            <SectionLabel>CONTINUING YOUR JOURNEY</SectionLabel>
            <div style={{fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: '1.6rem', letterSpacing: '-.5px', marginBottom: '20px'}}>
                After This Course — Where to Go Next
            </div>
            <div className="content-grid">
              <div className="card">
                <h3>📈 Deepen Your Data Visualization</h3>
                <ul className="tip-list">
                  <li><strong>Study Edward Tufte:</strong> His book "The Visual Display of Quantitative Information" is the foundational text of the field. Even just reading it once will permanently change how you think about presenting data.</li>
                  <li><strong>Learn Datawrapper or Flourish:</strong> These tools are built specifically for data visualization journalists. They export clean, interactive charts you can embed in websites. The free tier is genuinely powerful.</li>
                  <li><strong>Follow the data viz community:</strong> @albertocairo, @visualisingdata (Andy Kirk), @NadiehBremer on social media. These practitioners share their work, process, and critiques publicly. Learn from watching their thinking.</li>
                </ul>
              </div>
              <div className="card">
                <h3>🚀 Expand Your Adobe Skills</h3>
                <ul className="tip-list">
                  <li><strong>Adobe After Effects:</strong> Animate your Illustrator infographics. Motion design is the fastest-growing segment of visual communication — an animated infographic is exponentially more engaging than a static one.</li>
                  <li><strong>Adobe InDesign:</strong> For multi-page infographic reports, annual reports, and editorial layouts. The publishing tool that completes the Adobe triumvirate alongside Photoshop and Illustrator.</li>
                  <li><strong>Adobe Dimension / Firefly:</strong> 3D and AI-generated imagery to supplement your infographic visuals. The tools are evolving rapidly — staying current is part of the job.</li>
                </ul>
              </div>
            </div>
        </div>
    </section>
);
