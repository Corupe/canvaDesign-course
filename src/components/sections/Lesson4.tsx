import React from 'react';

export const Lesson4: React.FC = () => (
    <>
        <div id="panel-3">
            <div className="lesson-header l4-hd" data-emoji="✏️">
                <div className="tag">ILLUSTRATOR</div> <div className="tag">VECTOR DESIGN</div>
                <h2>Lesson 4 — Vector Commercial Design with Adobe Illustrator</h2>
                <p>Master vector graphics for professional commercial design. Illustrator creates logos, icons, patterns, and scalable graphics that maintain crisp quality at any size — from a business card (3.5" × 2") to a billboard (48" × 14"). This lesson teaches you to design brand identity systems that work across all commercial touchpoints.</p>
                <div className="lesson-meta">
                    <div className="meta-chip">⏱ 2.5–3 hrs</div>
                    <div className="meta-chip">🛠 Adobe Illustrator CC</div>
                    <div className="meta-chip">🖊️ Logos + Icons + Brand Systems</div>
                    <div className="meta-chip">🖨️ 2 printables</div>
                </div>
            </div>

            <div className="fun-fact">
                <div className="ff-icon">⚡</div>
                <div><strong>Vector is permanence:</strong> A raster image (Photoshop) is a grid of pixels that degrades when enlarged. A vector image (Illustrator) is mathematical paths that stay perfectly crisp at any size. All professional logos, icons, and typography systems are vector. This lesson teaches you to think like a brand designer: creating assets that work everywhere, forever.</div>
            </div>

            <div className="design-quote">
                <blockquote>Logo design is strategy solidified into simplicity.</blockquote>
                <cite>— Marty Neumeier</cite>
            </div>

            <div className="content-grid">
                <div className="card">
                    <h3>🎯 What You'll Learn</h3>
                    <ul className="obj-list">
                        <li><div className="obj-dot">✓</div>Vector vs. raster: when to use each and why it matters for commercial use</li>
                        <li><div className="obj-dot">✓</div>The Illustrator workspace: artboards, panels, the essential tools</li>
                        <li><div className="obj-dot">✓</div>The Pen Tool (P): mastering Bézier curves — the core skill of vector design</li>
                        <li><div className="obj-dot">✓</div>Shape Builder Tool: combining and subtracting shapes to create custom icons</li>
                        <li><div className="obj-dot">✓</div>Logo design principles and mark creation techniques</li>
                        <li><div className="obj-dot">✓</div>Creating custom icons: consistent stroke weight, sizing rules, icon systems</li>
                        <li><div className="obj-dot">✓</div>Building custom charts: bar, pie, and pictograph formats</li>
                        <li><div className="obj-dot">✓</div>Working with Artboards for multi-format projects (web, print, social)</li>
                        <li><div className="obj-dot">✓</div>Global colors and Swatches: update one color, change entire designs instantly</li>
                    </ul>
                </div>
            </div>

            <div className="card card-wide" style={{ marginBottom: '22px' }}>
                <h3>🔧 The Pen Tool & Vector Fundamentals</h3>

                <div className="accordion">
                    <div className="acc-header" >🖊️ The Pen Tool — The Heart of Vector Design <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Why it seems hard:</strong> The Pen tool doesn't behave like a real pen — it places anchor points, and the line between them is controlled by "handles" that extend from each anchor. When you click-and-drag while placing an anchor, you control the curve of the line that follows. This takes 30–60 minutes of practice to internalize.</p>
                        <p><strong>The four operations:</strong> Click = corner anchor (sharp). Click + Drag = smooth anchor with curves. Alt+Click on smooth anchor = break handle free (smooth-to-sharp corner). Ctrl+Click = temporarily switch to Direct Selection tool.</p>
                        <div className="example-box">
                            <div className="ex-label">🎮 PRACTICE RESOURCE</div>
                            Go to bezier.method.ac — free browser game teaching Pen tool through interactive challenges. Complete first 10 challenges. Budget 45 minutes and you'll see dramatic improvement. This is how design students at major universities learn the Pen tool.
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="acc-header" >🔷 Shape Builder & Pathfinder — Icon Systems <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Shape Builder Tool (Shift+M):</strong> Fastest way to create custom icons. Draw overlapping basic shapes, select all, activate Shape Builder. Drag across areas to merge, or Alt+drag to subtract. Builds icon sets without Pen tool complexity.</p>
                        <p><strong>Pathfinder Operations:</strong> Unite (merge shapes into one) · Minus Front (subtract top from bottom — punch holes, cut notches) · Intersect (keep only overlap) · Exclude (keep non-overlap).</p>
                        <div className="example-box">
                            <div className="ex-label">💡 CONSISTENT ICON SYSTEM</div>
                            Choose ONE stroke weight for all icon outlines (1.5pt or 2pt). Consistency throughout an icon set makes it feel professionally designed rather than assembled from different sources. Group similar icons on separate artboards to create a complete, scalable icon library.
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="acc-header" >🎨 Logo Design & Brand Mark Creation <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Logo fundamentals:</strong> A professional logo must work: at large scale (billboard), at tiny scale (favicon), in color and black-and-white, in all media (print, web, digital, embroidery, signage).</p>
                        <p><strong>Three logo types:</strong> Mark-only logos (just symbol, no text) · Wordmark logos (text-only, custom typography) · Combination logos (mark + wordmark together but separate).</p>
                        <div className="example-box">
                            <div className="ex-label">✅ EFFECTIVE LOGO DESIGN</div>
                            Apple's logo: universally recognized, works at any scale, simple geometric construction (circle, leaf), communicates "technology + natural, innovation + simplicity" through pure form. No text needed. The mark alone is enough.
                        </div>
                        <div className="example-box">
                            <div className="ex-label">❌ INEFFECTIVE LOGO DESIGN</div>
                            Logo with thin gradients and drop shadows, complex photorealistic illustration, relies on specific font styling, 50+ colors. At 1" wide on a business card, it's muddy. On screen at 32px, indecipherable. On a t-shirt embroidery, impossible to stitch.
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="acc-header" >📊 Creating Custom Charts in Illustrator <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Method 1 — Graph Tool (J):</strong> Illustrator has built-in graph generator. Select Graph Tool, drag rectangle, enter data in spreadsheet. Illustrator generates chart. Then: Object → Ungroup (twice) to convert to editable vector shapes you can redesign completely.</p>
                        <p><strong>Method 2 — Manual Vector Charts:</strong> For precise control, build manually from vector shapes. Bar chart = series of rectangles with calculated heights. Use Transform panel to set exact dimensions: 75% bar = 75% of max height. Slower but gives complete visual control.</p>
                        <p><strong>Method 3 — Pictograph Charts:</strong> Replace bars with repeated icons. Icon repeats or scales to represent data. Produces memorable "people per 100" style charts that feel human, not mechanical.</p>
                    </div>
                </div>

            </div>

            <div className="card card-wide" style={{ marginBottom: '22px' }}>
                <h3>🖼️ Artboards & Multi-Format Design</h3>
                <p style={{ marginBottom: '12px', fontSize: '.95rem' }}><strong>What artboards are:</strong> Multiple pages in a single file. Each can be different size. Perfect for when the same branding needs multiple formats: tall vertical for web, square for social, horizontal for presentations, print-ready versions.</p>

                <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #e0e0e0' }}>
                    <strong style={{ display: 'block', marginBottom: '10px' }}>Professional Multi-Artboard Workflow:</strong>
                    <ul style={{ paddingLeft: '20px', fontSize: '.9rem', lineHeight: '1.6' }}>
                        <li>Artboard 1: Master design (primary format, full detail)</li>
                        <li>Artboard 2: Social media crop (simplified, key elements highlighted)</li>
                        <li>Artboard 3: Alternative format (vertical/horizontal adaptation as needed)</li>
                        <li>Artboard 4: Web version (RGB color, 72 DPI, web-optimized)</li>
                        <li>Artboard 5: Print version (CMYK color, 300 DPI, includes bleeds)</li>
                    </ul>
                </div>

                <strong style={{ display: 'block', marginBottom: '10px' }}>Exporting all at once:</strong>
                <p style={{ fontSize: '.9rem', marginBottom: '12px' }}>File → Export → Export for Screens. Select which artboards, choose formats (SVG, PNG, PDF) simultaneously, set scale multipliers (1x, 2x for retina). One file, multiple deliverables. This saves hours versus exporting each individually.</p>

                <div style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '.9rem' }}>
                    <strong>Pro Move:</strong> In Swatches panel, create Global Colors for the entire project. When client asks to change brand color, update the swatch once — every artboard updates instantly. Redesign entire color scheme in under 2 minutes.
                </div>
            </div>

            <div className="card card-wide" style={{ marginBottom: '22px' }}>
                <h3>🎨 Global Colors & Professional Swatch Systems</h3>
                <p style={{ marginBottom: '12px' }}><strong>The problem they solve:</strong> You create a 12-element design using brand blue 47 times. Client asks to change blue. Without global colors: manually recolor 47 elements. With global colors: change swatch once, every element updates live.</p>

                <strong style={{ display: 'block', marginBottom: '10px' }}>Building a project color system:</strong>
                <ul style={{ paddingLeft: '20px', marginBottom: '16px', fontSize: '.9rem', lineHeight: '1.7' }}>
                    <li><strong>Primary Group:</strong> "Primary-Accent", "Primary-Dark", "Primary-Light"</li>
                    <li><strong>Neutral Group:</strong> "Neutral-BG", "Text-Main", "Text-Light"</li>
                    <li><strong>Status Group:</strong> "Alert-Red", "Positive-Green", "Warning-Yellow"</li>
                </ul>

                <p><strong>Swatch Groups — Organization:</strong> Create folders to organize colors. One group for Brand Colors, one for Chart Colors (sequential palette for data), one for UI/Neutral colors. Mirrors professional design agency organization.</p>

                <div style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', fontSize: '.9rem', marginTop: '12px' }}>
                    <strong>Efficiency Tip:</strong> Save your color system as a Swatch Library (Swatches panel → Save Swatch Library as AI Library). Reuse across every project. Create organizational templates that speed up every new design.
                </div>
            </div>

            <div className="card card-wide" style={{ marginBottom: '22px' }}>
                <h3>📋 Illustrator Essentials Reference</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', fontSize: '.85rem' }}>
                    <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
                        <strong style={{ display: 'block', marginBottom: '6px', color: '#05193e' }}>Selection Tools</strong>
                        V=Selection (whole object) · A=Direct Select (individual anchors) · Q=Lasso
                    </div>
                    <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
                        <strong style={{ display: 'block', marginBottom: '6px', color: '#05193e' }}>Drawing Tools</strong>
                        P=Pen · M=Rectangle · L=Ellipse · Shift+M=Shape Builder
                    </div>
                    <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
                        <strong style={{ display: 'block', marginBottom: '6px', color: '#05193e' }}>Essential Panels</strong>
                        F7=Layers · Shift+F7=Align · F9=Pathfinder · F5=Swatches
                    </div>
                    <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '4px' }}>
                        <strong style={{ display: 'block', marginBottom: '6px', color: '#05193e' }}>File Operations</strong>
                        Ctrl+G=Group · Ctrl+Shift+G=Ungroup · Ctrl+Shift+O=Outline Text (always before sharing)
                    </div>
                </div>
            </div>

            <div className="case-study">
                <div className="cs-label">📚 CASE STUDY — VECTOR BRANDING SYSTEM</div>
                <h4>How a global brand maintains consistency across 47 countries</h4>
                <p>A consumer brand operates in 47 countries with different regulatory requirements, language contexts, and cultural sensitivities. Yet their brand identity — logo, colors, typography, icon system — remains instantly recognizable everywhere. How?</p>
                <p>Their secret: Professional vector-based brand guidelines created in Illustrator. Every asset is vector (infinitely scalable without quality loss). Every color is specified as CMYK + Pantone + RGB values. The logo works at 10mm on a package and 10 meters on a billboard. Icon system has 340+ consistent icons. Typography system includes complete specifications for every language character set.</p>
                <div className="cs-takeaway"><strong>The lesson:</strong> Invest in professional, vector-based brand systems early. They're the foundation of multi-market branding. When executed correctly, your brand works globally without compromising integrity.</div>
            </div>

            <div className="homework">
                <h3>🏠 Final Course Project — Your Professional Marketing System</h3>
                <p style={{ fontSize: '.9rem', marginBottom: '16px', color: '#666' }}>Apply everything from all 4 lessons to create a complete, portfolio-ready professional design project. This demonstrates mastery of commercial design across all media.</p>

                <div className="hw-task"><div className="hw-check" ></div><div><strong>Deliverable 1 — Brand Guidelines Document (1-2 pages):</strong> Logo & brand system, color palette (CMYK & RGB values), typography system (headline + body fonts), usage rules & clear space specifications.</div></div>

                <div className="hw-task"><div className="hw-check" ></div><div><strong>Deliverable 2 — Physical Marketing Kit (choose 3 of 5):</strong> Brochure (tri-fold or bi-fold, print-ready PDF), Business card set (front & back, print-ready), Promotional flyer or postcard (print-ready), Product packaging label (with 0.25" bleed), Direct mail piece (envelope + letter + insert).</div></div>

                <div className="hw-task"><div className="hw-check" ></div><div><strong>Deliverable 3 — Digital Exports:</strong> All files in CMYK 300 DPI (print-ready), PDF exports for each piece, PNG versions for digital web presentation.</div></div>

                <div className="hw-task"><div className="hw-check" ></div><div><strong>Deliverable 4 — Technical Specifications Document:</strong> File setup details (dimensions, DPI, bleed, color mode), print production notes for vendor, specifications for each format.</div></div>

                <div className="hw-task"><div className="hw-check" ></div><div><strong>Deliverable 5 — Design Rationale (250-word write-up):</strong> What is the business/product? Who is the target audience? What feeling does the design evoke? How does the design system support brand recognition across all touchpoints?</div></div>
            </div>
        </div>
    </>
);
