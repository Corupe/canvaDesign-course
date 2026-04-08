import React from 'react';
import { SectionLabel } from '../atomic/SectionLabel';
import { SectionTitle } from '../atomic/SectionTitle';
import { DesignQuote } from '../atomic/DesignQuote';

export const Resources: React.FC = () => (
  <section id="resources">
    <SectionLabel>YOUR DESIGN TOOLKIT</SectionLabel>
    <SectionTitle>Resources, Tools & Where to Go Next</SectionTitle>

    <DesignQuote
      quote="Design is the silent ambassador of your brand."
      cite="— Paul Rand"
    />

    <div className="resource-grid" style={{ marginTop: '24px' }}>
      <div className="resource-card">
        <div className="r-icon">🎨</div>
        <h4>Color Tools & CMYK Resources</h4>
        <p><strong>Coolors.co</strong> — Generate palettes with CMYK export. <strong>Adobe Color</strong> — Extract colors from images. <strong>Pantone.com</strong> — Professional Pantone color matching (print standard). <strong>Color.adobe.com</strong> — Generate harmonies with PMS matching.</p>
      </div>
      <div className="resource-card">
        <div className="r-icon">✍️</div>
        <h4>Typography for Print</h4>
        <p><strong>Google Fonts</strong> — 1,400+ free web-safe fonts. <strong>Adobe Fonts</strong> — Included with Creative Cloud. <strong>FontPair.co</strong> — Curated font pairings. <strong>Typewolf.com</strong> — Type inspiration and font pairing examples.</p>
      </div>
      <div className="resource-card">
        <div className="r-icon">📸</div>
        <h4>Stock Photography (Commercial License)</h4>
        <p><strong>Unsplash.com</strong> — Free, commercial-licensed. <strong>Pexels.com</strong> — Strong diversity in lifestyle/product contexts. <strong>Adobe Stock</strong> — Professional quality ($9.99/month). <strong>Shutterstock</strong> — Industry standard ($99-250/month).</p>
      </div>
      <div className="resource-card">
        <div className="r-icon">📦</div>
        <h4>Packaging & Print Templates</h4>
        <p><strong>MockupGenerator.com</strong> — Free 3D mockups for packaging. <strong>Zazzle Design Files</strong> — Print-ready templates. Local print vendors often provide free templates for their standard formats.</p>
      </div>
      <div className="resource-card">
        <div className="r-icon">🛠️</div>
        <h4>Professional Print Tools</h4>
        <p><strong>Bezier.method.ac</strong> — Master the Pen tool through gameplay. <strong>Remove.bg</strong> — AI background removal (faster than Photoshop for simple products). <strong>Blender.org</strong> — Free 3D for mockups and product visualization.</p>
      </div>
      <div className="resource-card">
        <div className="r-icon">🏆</div>
        <h4>Portfolio & Professional Presence</h4>
        <p><strong>Behance.net</strong> — Industry standard design portfolio. <strong>Adobe Portfolio</strong> — Free with Creative Cloud. <strong>Readymag.com</strong> — Beautiful portfolio websites. <strong>Instagram/LinkedIn</strong> — Share your commercial design work.</p>
      </div>
    </div>

    <div style={{ marginTop: '40px' }}>
      <SectionLabel>CONTINUING YOUR JOURNEY</SectionLabel>
      <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: '1.6rem', letterSpacing: '-.5px', marginBottom: '20px' }}>
        After This Course — Where to Go Next
      </div>
      <div className="content-grid">
        <div className="card">
          <h3>🎯 Deepen Your Commercial Design</h3>
          <ul className="tip-list">
            <li><strong>Build real projects:</strong> Design actual marketing materials for real businesses (even as pro-bono for portfolio building). Real clients provide feedback that no course can replicate.</li>
            <li><strong>Master print production:</strong> Call local print vendors, ask about their file requirements, learn about paper stocks, finishes (matte, gloss, spot varnish). Understanding production constraints improves your design decisions.</li>
            <li><strong>Study successful brands:</strong> Analyze packaging for premium vs value brands. Visit retail environments. Notice what stops your eye. Study the differences between generic and premium branding. This is research that informs everything you design.</li>
          </ul>
        </div>
        <div className="card">
          <h3>🚀 Expand Your Professional Toolkit</h3>
          <ul className="tip-list">
            <li><strong>Adobe InDesign:</strong> Essential for multi-page brochures, catalogs, and professional publication layouts. Completes the Adobe triumvirate.</li>
            <li><strong>Adobe After Effects:</strong> Animate your commercial designs. Motion graphics for video advertising, social content, and presentations.</li>
            <li><strong>3D Product Visualization (Blender/Dimension):</strong> Create photorealistic mockups of packaging, products, and environments. Increasingly expected in commercial design proposals.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
