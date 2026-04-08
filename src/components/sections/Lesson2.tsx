import React from 'react';

export const Lesson2: React.FC = () => (
    <>
        <div className="" id="panel-1">
            <div className="lesson-header l2-hd" data-emoji="📧">
                <div className="tag">CANVA</div> <div className="tag">COMMERCIAL DESIGN</div>
                <h2>Lesson 2 — Commercial & Print Design with Canva</h2>
                <p>Move from design principles to professional print design projects. Learn how to design branded marketing collateral that actually sells: packaging labels, direct mail, flyers, brochures, and promotional materials. By the end of this lesson, you'll create a complete branded marketing kit suitable for a real business.</p>
                <div className="lesson-meta">
                    <div className="meta-chip">⏱ 2.5–3 hrs</div>
                    <div className="meta-chip">🛠 Canva (free + premium)</div>
                    <div className="meta-chip">📦 8 Essential Formats</div>
                    <div className="meta-chip">🖨️ 2 printables</div>
                </div>
            </div>

            <div className="fun-fact">
                <div className="ff-icon">🧠</div>
                <div><strong>The psychology of commercial design:</strong> A buyer has <strong>3-5 seconds</strong> to notice your product on a shelf or your flyer in a mailbox. Your design must communicate your entire brand value in that window. Studies show that <strong>95% of purchasing decisions are subconscious</strong> — driven by color, typography, and spatial arrangement rather than rational analysis. A great commercial design makes your audience <em>feel</em> that your product/service is valuable, trustworthy, and worth buying.</div>
            </div>

            <div className="design-quote">
                <blockquote>Design is the silent ambassador of your brand.</blockquote>
                <cite>— Paul Rand</cite>
            </div>

            <div className="content-grid">
                <div className="card">
                    <h3>🎯 What You'll Learn</h3>
                    <ul className="obj-list">
                        <li><div className="obj-dot">✓</div>The 8 essential commercial/print design formats — packaging, direct mail, flyers, brochures, and more</li>
                        <li><div className="obj-dot">✓</div>Brand system design: creating cohesive visual identity across multiple pieces</li>
                        <li><div className="obj-dot">✓</div>Persuasion design principles specific to commercial contexts</li>
                        <li><div className="obj-dot">✓</div>Creating print-ready files: bleeds, margins, color modes, font embedding</li>
                        <li><div className="obj-dot">✓</div>Layout strategies for different fold types (tri-fold, bi-fold, accordion)</li>
                        <li><div className="obj-dot">✓</div>Direct mail psychology: what makes people open, read, and respond</li>
                        <li><div className="obj-dot">✓</div>Professional export settings for commercial printers</li>
                    </ul>
                </div>

            </div>

            <div className="card card-wide" style={{ marginBottom: '22px' }}>
                <h3>📦 The 8 Essential Commercial/Print Formats</h3>

                <div className="design-quote" style={{ marginBottom: '16px' }}>
                    <blockquote>Everything you need to know about your brand should be contained in your collateral.</blockquote>
                    <cite>— Michael Bierut</cite>
                </div>

                <div className="accordion">
                    <div className="acc-header" >📦 Packaging & Labels — When first impression must convert <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Purpose:</strong> Your packaging is a silent salesman at the retail shelf. Before any copy is read, the visual system must communicate: premium or value? Trustworthy or trendy? Your design determines shelf-stop in 2-3 seconds.</p>
                        <p><strong>Design Priorities:</strong> (1) Shelf impact — Color, contrast, distinctive shape (2) Brand clarity — Logo, brand name immediately recognizable (3) Key information hierarchy — Hero benefit first (4) Emotional resonance — Does this make the target customer feel like it's for them?</p>
                        <div className="example-box">
                            <div className="ex-label">✅ EFFECTIVE DESIGN</div>
                            Premium coffee package: minimalist matte black box, single color brand name in elegant serif (36pt), single line describing origin in clean sans-serif (14pt). White space dominates. The design screams "I'm expensive and worth it" before you even read the copy.
                        </div>
                        <div className="example-box">
                            <div className="ex-label">❌ INEFFECTIVE DESIGN</div>
                            Generic coffee package: color photo of beans covering 80% of space, cluttered text in 3 different fonts everywhere, "PREMIUM QUALITY" and "ORGANIC" competing for space. Visual chaos undermines any legitimate quality claims.
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="acc-header" >📧 Direct Mail — When breaking through inbox clutter <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Purpose:</strong> A direct mail piece arrives in a physical mailbox when digital defenses are down. You have maybe 5 seconds before recipient decides to trash it or open it. Design must immediately communicate: this is relevant to me, this offers value, this requires my response.</p>
                        <p><strong>Direct Mail Psychology:</strong> The envelope is everything — if it doesn't stop the recipient, the content inside is never read. Personalization like "Dear [Name]" increases response by 40%+. A clear call-to-action drives response.</p>
                        <div className="example-box">
                            <div className="ex-label">✅ EFFECTIVE DESIGN</div>
                            Real estate mailer with eye-catching golden-yellow envelope, teaser "We Sold Your Neighbor's House For $500K More" (creates curiosity), interior letter with agent's personal photo and story, pre-addressed response card. Recipient must open to learn more.
                        </div>
                        <div className="example-box">
                            <div className="ex-label">❌ INEFFECTIVE DESIGN</div>
                            Generic real estate postcard with small property photo, dense text in tiny font, hard-to-read CTA at bottom, no personalization, generic design identical to 20 other mailers hitting the same mailbox.
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="acc-header" >📄 Flyers & Posters — When bold visual communication is required <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Purpose:</strong> Flyers and posters must communicate instantly and memorably. Duration of attention: 3-10 seconds maximum. Your message must be understood in that window or the design failed.</p>
                        <p><strong>The Hierarchy:</strong> (1) Hero Visual (60% of attention) — Photo or compelling graphic (2) Main Headline (25%) — Event name or primary message (3) Key Details (10%) — Date, time, location (4) Call-to-Action (5%) — Website, phone, or QR code.</p>
                        <div className="example-box">
                            <div className="ex-label">✅ EFFECTIVE DESIGN</div>
                            Concert poster: large performer photo (40% of space), bold event name in 80pt font overlaid with subtle transparent background for legibility, date/time/venue in organized block at bottom, ticket URL as clear CTA. Takes 4 seconds to understand completely.
                        </div>
                        <div className="example-box">
                            <div className="ex-label">❌ INEFFECTIVE DESIGN</div>
                            Concert poster: tiny performer photo in corner, event name in 14pt font drowned in text, dates in multiple locations, no clear CTA, design looks assembled rather than designed.
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="acc-header" >📋 Brochures — When storytelling requires multiple pages <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Purpose:</strong> Brochures provide room for a complete narrative: company story, product features, testimonials, CTA. Unlike a flyer, brochures are folds that guide the reader through a journey.</p>
                        <p><strong>Fold Types:</strong> Tri-fold (most common — each panel is 3.67" wide). Bi-fold (panels are 5.5" wide). Accordion fold (all panels visible when fully opened). Each requires different design strategy for reading flow.</p>
                        <div className="example-box">
                            <div className="ex-label">✅ EFFECTIVE DESIGN</div>
                            Premium real estate tri-fold: front features stunning property photography (full-bleed), elegant company name. Inside panels organized on 3-column grid: agent bio with headshot (left), property details in organized list (center), luxury imagery (right). Everything aligns to grid.
                        </div>
                        <div className="example-box">
                            <div className="ex-label">❌ INEFFECTIVE DESIGN</div>
                            Generic real estate tri-fold: front has small image in corner with dense text everywhere, no grid organization, contact info scattered in multiple locations, no clear hierarchy.
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="acc-header" >💼 Business Collateral — The identity system <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Purpose:</strong> Business cards, letterhead, envelopes, and labels work together to create cohesive brand identity. Each touchpoint reinforces the brand message and builds recognition.</p>
                        <p><strong>The Collateral Set:</strong> Business cards (3.5" × 2"), Letterhead (8.5" × 11"), Envelopes (#10 standard), Promotional labels for shipping/products. All pieces should align to the same grid system and use consistent Brand Kit.</p>
                        <div className="example-box">
                            <div className="ex-label">✅ EFFECTIVE DESIGN</div>
                            Law firm collateral: minimalist design with deep navy primary color, elegant serif font for name, clean sans-serif for supporting info. Business card, letterhead, and envelope all use same color palette, font hierarchy, and logo placement. Receiving a letter immediately communicates "professional and established."
                        </div>
                        <div className="example-box">
                            <div className="ex-label">❌ INEFFECTIVE DESIGN</div>
                            Same firm's collateral: business card uses large colorful logo and playful font, letterhead uses corporate serif and different color, envelope in yet another color scheme. Each piece feels disconnected.
                        </div>
                    </div>
                </div>

                <div className="accordion">
                    <div className="acc-header" >🎯 Sales Materials & Promotional Items <span className="acc-arrow">▾</span></div>
                    <div className="acc-body">
                        <p><strong>Purpose:</strong> Promotional items (branded t-shirts, mugs, stickers, notebooks) extend brand presence into daily life. They're walking advertisements when customers carry, display, or wear them.</p>
                        <p><strong>Key Design Considerations:</strong> Fabric as canvas — light garment allows full color, dark garment requires white/light designs. Size constraints — embroidered logos on caps must be 2-3 inches maximum. Durability — dark-background print items require special printing.</p>
                        <div className="example-box">
                            <div className="ex-label">📌 COMMERCIAL USE CASES</div>
                            Branded apparel for employees, die-cut vinyl stickers for laptops/water bottles, print-on-demand items (mugs, hoodies, notebooks), event giveaways (pens, notepads, keychains), direct mail premiums to increase response rate.
                        </div>
                    </div>
                </div>

            </div>

            <div className="card card-wide" style={{ marginBottom: '22px' }}>
                <h3>🛠️ The Commercial Design Workflow — 6 Steps to Professional Results</h3>
                <ul className="step-list">
                    <li><strong>Discovery & Briefing:</strong> What is the message? Who is the target audience? What feeling should the design evoke? What action do you want them to take? What's the budget and timeline?</li>
                    <li><strong>Research & Reference:</strong> Look at 10-15 examples of similar designs. Identify common patterns and what makes top examples memorable. Note color palettes, typography, hierarchy approaches.</li>
                    <li><strong>Sketch & Wireframe:</strong> Rough pencil sketches of layout ideas. Wireframe showing text placement, image placement, visual flow. Don't elaborate — rough is fine.</li>
                    <li><strong>Digital Execution:</strong> Build in Canva (for simple designs), Photoshop (photo-heavy), or Illustrator (vector-based). Apply all design principles: contrast, hierarchy, alignment, proximity, color harmony.</li>
                    <li><strong>Review & Refinement:</strong> Does it communicate the message clearly? Will it stand out among competitors? Does it reflect the brand properly? Does it drive the intended action?</li>
                    <li><strong>Export & Production:</strong> Export at correct settings for production method. Review print proof before full run. Have a backup plan if first run has issues.</li>
                </ul>
            </div>

            <div className="printable-card">
                <div className="print-badge">🖨️ PRINTABLE — COMMERCIAL DESIGN CHECKLIST</div>
                <h3>📝 Before You Design — Discovery Questions</h3>
                <p style={{ fontSize: '.82rem', color: '#666', marginBottom: '14px' }}>Complete these before opening Canva. Clear briefs produce better designs faster.</p>
                <div className="cheat-grid">
                    <div className="cheat-item"><div className="cheat-key">1. THE MESSAGE</div>Complete this sentence: "After seeing this design, my customer will understand that ___________________."</div>
                    <div className="cheat-item"><div className="cheat-key">2. TARGET AUDIENCE</div>Age / expertise level / what they already know / what concerns them: ___________________</div>
                    <div className="cheat-item"><div className="cheat-key">3. DESIRED FEELING</div>☐ Premium/Luxury  ☐ Trustworthy/Professional  ☐ Fun/Playful  ☐ Bold/Energetic  ☐ Calm/Minimal</div>
                    <div className="cheat-item"><div className="cheat-key">4. PRIMARY ACTION</div>What do you want them to do? Buy? Call? Visit? Remember? ___________________</div>
                    <div className="cheat-item"><div className="cheat-key">5. PRODUCTION METHOD</div>☐ Digital Print  ☐ Commercial Offset  ☐ Print-on-Demand  ☐ Web-Only  ☐ Combination</div>
                    <div className="cheat-item"><div className="cheat-key">6. COLOR MOOD</div>☐ Bold/Energetic  ☐ Calm/Trust  ☐ Playful/Fun  ☐ Professional/Corporate  ☐ Dark/Premium</div>
                    <div className="cheat-item"><div className="cheat-key">7. FORMAT & DIMENSIONS</div>What format? (Business card 3.5"×2", Flyer 8.5"×11", Brochure tri-fold, etc.) What's the viewing distance?</div>
                    <div className="cheat-item"><div className="cheat-key">8. BUDGET & TIMELINE</div>Budget per piece printed: $___ · Timeline to first proof: ___ · Full run quantity: ___</div>
                </div>
                <button className="print-btn" >🖨️ Print discovery checklist</button>
            </div>

            <div className="printable-card">
                <div className="print-badge">🖨️ PRINTABLE — PRINT SPECIFICATIONS GUIDE</div>
                <h3>📤 File Setup for Professional Printing</h3>
                <div className="cheat-grid">
                    <div className="cheat-item"><div className="cheat-key">RESOLUTION (DPI)</div>Web/Digital: 72–96 DPI · Small Print (postcard): 150 DPI · Standard Print (A4, poster): 300 DPI · Large Format (banner): 150 DPI at viewing distance</div>
                    <div className="cheat-item"><div className="cheat-key">COLOR MODE</div>Always use CMYK for print (never RGB). RGB displays brighter than CMYK prints will produce. Specify Pantone colors for brand consistency in commercial printing.</div>
                    <div className="cheat-item"><div className="cheat-key">BLEED & MARGINS</div>Bleed: 0.25" beyond cut line (for full-bleed designs). Safety margin: 0.5" inside edge (text won't get cut). Fold allowances: 1/8" for scoring areas.</div>
                    <div className="cheat-item"><div className="cheat-key">STANDARD SIZES</div>Business card: 3.5" × 2" · Flyer: 8.5" × 11" · Postcard: 6" × 9" · Tri-fold brochure: 8.5" × 11" folded · Half-fold: 5.5" × 8.5"</div>
                    <div className="cheat-item"><div className="cheat-key">FILES & FONTS</div>Embed all fonts or convert to outlines. Save as PDF Print (not PDF Standard). Include all linked images and color profiles. Include specs sheet with file explaining dimensions, bleeds, and color mode.</div>
                    <div className="cheat-item"><div className="cheat-key">PROOFING</div>Always request a printed proof before full run. Color blindness in design can look good on screen but fail in print. Test at intended viewing distance.</div>
                </div>
                <button className="print-btn" >🖨️ Print specifications guide</button>
            </div>

            <div className="case-study">
                <div className="cs-label">📚 CASE STUDY — COMMERCIAL DESIGN DONE RIGHT</div>
                <h4>How a small coffee roaster built brand through collateral design</h4>
                <p>A local coffee roaster competed against national chains with bigger marketing budgets. Their advantage: deliberate, consistent brand system designed across all customer touchpoints.</p>
                <p>They invested in custom packaging label design (professional designer, not DIY). That label appeared on bags sold at farmers markets. Those same design elements appeared on their business cards, stickers on cups, and direct mail to local businesses. Every piece reinforced the same color palette (navy + gold), typography (elegant serif), and mission statement.</p>
                <div className="cs-takeaway"><strong>The takeaway for your work:</strong> Consistency builds brand recognition faster than novelty. Pick your design direction early, apply it rigorously across every piece, and customers will recognize you instantly. This brand identity is worth more than any individual ad campaign.</div>
            </div>

            <div className="homework">
                <h3>🏠 At-Home Tasks — Due Before Lesson 3</h3>
                <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 1 — Commercial Kit Build (90 min):</strong> Choose a real or fictional local business. Design a complete branded marketing kit in Canva including: (1) tri-fold brochure (front, inside, back), (2) promotional flyer or postcard, (3) business card (front and back), (4) shipping label or product label. All pieces must use the same Brand Kit and coordinate visually. Export at correct dimensions for each format.</div></div>
                <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 2 — Print Production Study (30 min):</strong> Select one of your 3 pieces from Task 1. Research and document: Correct file setup (dimensions, DPI, bleed, color mode), local printing vendors and their price quotes for this specific item, what could go wrong in production and how to prevent it. Write a 1-page "Print Production Brief" explaining your file to a printer.</div></div>
                <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 3 — Direct Mail Analysis (45 min):</strong> Bring in 3 pieces of direct mail you actually received. For each, analyze: What stopped you from throwing it away? What visual hierarchy guided your eye? What was the CTA? Did it work? What would you change about the design?</div></div>
                <div className="hw-task"><div className="hw-check" ></div><div><strong>Bonus 🌟 — Regional Rebrand:</strong> Find a local business with mediocre marketing materials. Redesign ONE of their pieces (menu, flyer, signage, business card, etc.). Present it to them. See if they'd use it. Real feedback from real stakeholders is invaluable.</div></div>
            </div>
        </div>
    </>
);
