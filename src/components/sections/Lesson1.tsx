import React from 'react';

// const HomeworkCheck = () => {
//     const [done, setDone] = React.useState(false);
//     return <div className={`hw-check ${done ? 'done' : ''}`} onClick={() => setDone(!done)}></div>;
// };

export const Lesson1: React.FC = () => (
  <>
    <div className="lesson-panel active" id="panel-0">
      <div className="lesson-header l1-hd" data-emoji="📐">
        <div className="tag">CANVA</div> <div className="tag">FOUNDATIONS</div>
        <h2>Lesson 1 — Design Foundations for Commercial/Print</h2>
        <p>Master the universal principles of design that professionals use for packaging, direct mail, brochures, and marketing collateral. Understand how great commercial design drives buyer decisions, then apply it immediately in Canva.</p>
        <div className="lesson-meta">
          <div className="meta-chip">⏱ 2–2.5 hrs</div>
          <div className="meta-chip">🛠 Canva (free account)</div>
          <div className="meta-chip">🎯 No prior experience needed</div>
          <div className="meta-chip">🖨️ Design Audit included</div>
        </div>
      </div>

      <div className="fun-fact">
        <div className="ff-icon">💡</div>
        <div><strong>The 3-5 Second Rule:</strong> In retail or mailbox environments, you have 3-5 seconds to capture attention. Your design must communicate brand value instantly through visual hierarchy, color, and typography — before conscious thought kicks in. This lesson teaches you to design for conversion.</div>
      </div>

      <div className="design-quote">
        <blockquote>Design is the silent ambassador of your brand.</blockquote>
        <cite>— Paul Rand, legendary brand identity designer</cite>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>🎯 What You'll Learn</h3>
          <ul className="obj-list">
            <li><div className="obj-dot">✓</div>The 5 core design principles adapted for commercial print design</li>
            <li><div className="obj-dot">✓</div>Typography for print: font pairing, hierarchy, CMYK vs. RGB</li>
            <li><div className="obj-dot">✓</div>Color theory for retail: psychological impact and brand positioning</li>
            <li><div className="obj-dot">✓</div>Grid systems for packaging, brochures, and print collateral</li>
            <li><div className="obj-dot">✓</div>Canva orientation and Brand Kit setup for professional work</li>
            <li><div className="obj-dot">✓</div>Design principles in real commercial context (comparison cases)</li>
            <li><div className="obj-dot">✓</div>Build your first branded design piece using all 5 principles</li>
          </ul>
        </div>

      </div>

      <div className="card card-wide" style={{ marginBottom: '22px' }}>
        <h3>📖 The 5 Design Principles for Commercial Design</h3>

        <div className="accordion">
          <div className="acc-header" >⚡ Contrast — The principle that creates life <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>What it is:</strong> Contrast means deliberately placing opposite visual elements next to each other — dark against light, large against small, bold against thin, warm color against cool color. Without contrast, everything competes for attention equally, and the eye doesn't know where to go. With contrast, you guide the viewer's gaze precisely.</p>
            <p><strong>Why it matters:</strong> Contrast is the engine of visual hierarchy. Your most important message should have the highest contrast on the entire page. If everything is bold, nothing is bold — you've just created uniform noise.</p>
            <div className="example-box">
              <div className="ex-label">📌 REAL-WORLD EXAMPLE</div>
              <strong>The New York Times infographic team</strong> consistently uses this principle: white or near-white text on deep navy or black backgrounds for key statistics. The contrast is dramatic — the number pops off the page before you've consciously decided to look at it. Compare this to light gray text on white — technically readable, but forgettable.
            </div>
            <div className="example-box">
              <div className="ex-label">🛠 IN CANVA</div>
              Use a dark rectangle (Navy #1a1a2e or charcoal #2d2d2d) as a "spotlight" background behind your hero statistic. Place your number in white or bright yellow on top. Then make surrounding text much smaller and lighter. Three lines of code, three lines of design thinking — the eye will land on the number first every time.
            </div>
            <div className="warning-box">
              <div className="w-label">⚠️ COMMON BEGINNER MISTAKE</div>
              Using every element at the same size and weight. If your title, subtitle, body text, and caption are all in the same 14pt regular weight, there's zero contrast hierarchy. Viewers don't know what to read first — so they often don't read anything.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🔁 Repetition — The principle that creates trust <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>What it is:</strong> Repetition means consistently repeating visual elements throughout a design — the same typeface for all headings, the same bullet style, the same accent color for every call-to-action, the same icon set. Repetition creates the feeling of an intentional, cohesive system rather than random choices thrown together.</p>
            <p><strong>Why it matters:</strong> Consistent repetition is what separates "designed" work from "made in a hurry." When a viewer sees the same orange hexagon icon style repeated 8 times across an infographic, their brain starts to understand the grammar of the piece. Each new section feels familiar and trustworthy, so the reader focuses on the content rather than trying to decode the design.</p>
            <div className="example-box">
              <div className="ex-label">📌 REAL-WORLD EXAMPLE</div>
              <strong>National Geographic</strong> infographics are a masterclass in repetition. Their signature yellow is used consistently as an accent — in borders, highlights, and callout boxes — across every piece. Their data labels always appear in the same position relative to their chart bars. Their section dividers are always the same weight and style. You could remove the logo and still know it's NatGeo.
            </div>
            <div className="example-box">
              <div className="ex-label">🛠 IN CANVA</div>
              Use Canva's <strong>Brand Kit</strong> feature (available even in free tier). Lock in 3 colors, 2 fonts, and a logo. Every time you start a new design, your brand palette is one click away. Better yet: save a "master template" with your repeating elements already placed — header style, footer style, section dividers — and duplicate it for each new design.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >📐 Alignment — The principle that creates order <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>What it is:</strong> Every element on the page should have a visual connection to something else — an invisible line that runs through multiple elements creating order and structure. Alignment is not just "make it center." It's about understanding which alignment type (left, center, right, justified) serves your content, and applying it consistently.</p>
            <p><strong>The invisible grid:</strong> Professional designers think in grids — invisible vertical and horizontal guidelines that everything "snaps to." You don't need to show the grid in the final design. But designing on a grid means every element has a logical, proportional relationship to every other element. The result feels organized and intentional, even if the viewer can't articulate why.</p>
            <div className="example-box">
              <div className="ex-label">📌 REAL-WORLD EXAMPLE</div>
              <strong>Swiss design (International Typographic Style)</strong> — think Helvetica, Josef Müller-Brockmann — pioneered the grid system in the 1950s. Look at any Swiss poster: columns of text align to a mathematical grid, photos bleed at exact grid intersections, headlines start at the same baseline. It looks effortless because the structure is so rigorous. This same discipline applies to infographics.
            </div>
            <div className="example-box">
              <div className="ex-label">🛠 IN CANVA</div>
              Turn on Canva's rulers (View → Show Rulers). Drag guides from the rulers to create a consistent left margin, right margin, and column structure. Then use "Position" panel (lock icon) to type exact X/Y coordinates for precise placement. The "Tidy Up" button automatically spaces selected elements at equal intervals — it's alignment magic in one click.
            </div>
            <div className="warning-box">
              <div className="w-label">⚠️ THE WORST ALIGNMENT MISTAKE</div>
              Randomly centering some elements and left-aligning others with no logical reason. Choose one primary alignment per infographic section and stick to it. Centering works for titles and standalone callouts. Left-aligning works for body text and multi-line content. Don't mix without intentional purpose.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >📦 Proximity — The principle that creates meaning <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>What it is:</strong> Items that are related should be physically close together. Items that are unrelated should be separated by space. Our brains automatically group things that are near each other and assume they share a relationship. This is gestalt psychology — designers leverage it constantly.</p>
            <p><strong>White space is not wasted space:</strong> This is one of the most counterintuitive lessons for beginners. The temptation is to fill every inch of space — it feels like you're getting more "value." But generous white space between distinct sections signals a clear separation of ideas, gives the eye a place to rest, and makes the overall design feel premium. Luxury brands pay designers a lot of money to leave space empty.</p>
            <div className="example-box">
              <div className="ex-label">📌 REAL-WORLD EXAMPLE</div>
              Compare an Apple product page to a busy electronics retailer flyer. Apple leaves massive white space around its product. The phone seems important, isolated, special. The retailer crams 40 products per page — everything feels cheap and forgettable. Same product, completely different perception — created entirely by proximity and space decisions.
            </div>
            <div className="example-box">
              <div className="ex-label">🛠 PRACTICAL RULE</div>
              A title and its subtitle should have roughly 8–12px between them. The gap between a subtitle and its body text: 16–20px. The gap between one complete section and the next section: 40–60px. These ratios communicate "this belongs together" vs "this is something new." When in doubt, add more space than you think you need — you can always reduce it later.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >👑 Visual Hierarchy — The principle that creates understanding <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>What it is:</strong> Visual hierarchy is the order in which the human eye perceives what it sees. By controlling size, weight, color, position, and spacing, you tell the viewer: "read this first, then this, then this." A well-designed infographic has a clear hierarchy that guides the viewer through your intended narrative — they absorb your message in the order you designed it.</p>
            <p><strong>The 3-level system:</strong> Most infographics operate on three levels. <strong>Level 1</strong> — the hero element: your most important stat, your main headline, your dramatic visual. It's the biggest, boldest, most contrasted element. <strong>Level 2</strong> — supporting elements: section titles, data labels, key callouts. Visually lighter than Level 1 but still prominent. <strong>Level 3</strong> — context text: body copy, source citations, footnotes. Small, light, supporting role.</p>
            <div className="example-box">
              <div className="ex-label">📌 THE F-PATTERN AND Z-PATTERN</div>
              Eye-tracking research shows that readers scan pages in predictable patterns. For text-heavy content: the <strong>F-pattern</strong> (read the top, then scan down the left side). For visual content: the <strong>Z-pattern</strong> (top-left → top-right → diagonal → bottom-right). Design your most important elements along these natural scan paths. Your hero number goes top-left or top-center. Your call-to-action goes bottom-right.
            </div>
            <div className="example-box">
              <div className="ex-label">🛠 SIZE SCALE TO START WITH</div>
              Hero Stat / Main Number: 64–96pt bold · Main Headline: 36–48pt bold · Section Titles: 22–28pt semi-bold · Supporting Text: 14–16pt regular · Captions / Sources: 10–12pt light. Always maintain at least a 2:1 size ratio between hierarchy levels for clear distinction.
            </div>
          </div>
        </div>
      </div>

      <div className="card card-wide" style={{ marginBottom: '22px' }}>
        <h3>🔤 Typography — Your Most Powerful Design Tool</h3>

        <div className="design-quote" style={{ margin: '0 0 16px' }}>
          <blockquote>Typography is what language looks like.</blockquote>
          <cite>— Ellen Lupton, design curator, author of "Thinking with Type"</cite>
        </div>

        <div className="accordion">
          <div className="acc-header" >📚 Type Anatomy — Know Your Terms <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>Serif fonts</strong> have small decorative strokes (serifs) at the ends of letterforms. Think: Times New Roman, Georgia, Playfair Display. They feel traditional, authoritative, trustworthy. Great for headlines in editorial or academic infographics.</p>
            <p><strong>Sans-serif fonts</strong> have no decorative strokes — clean, minimal ends. Think: Helvetica, Montserrat, Open Sans. They feel modern, clean, accessible. Excellent for body text in digital infographics because they read well on screens.</p>
            <p><strong>Display/decorative fonts</strong> are expressive, personality-driven typefaces. Use sparingly — only for major headlines, never for body copy. One display font per project maximum.</p>
            <div className="example-box">
              <div className="ex-label">📌 THE GOLDEN RULE OF TYPE PAIRING</div>
              Use <strong>contrast through similarity</strong>: pair a serif headline font with a sans-serif body font from the same historical period. Playfair Display (transitional serif) + Source Sans Pro (humanist sans) share proportional DNA — they "feel" related while providing visual contrast. Avoid pairing two decorative fonts — they'll fight each other.
            </div>
            <div className="example-box">
              <div className="ex-label">🎯 5 PROVEN FONT PAIRS FOR INFOGRAPHICS</div>
              1. <strong>Oswald + Lato</strong> — Punchy, high-energy, great for statistics<br />
              2. <strong>Playfair Display + Source Sans Pro</strong> — Editorial, trustworthy, magazine-feel<br />
              3. <strong>Raleway + Open Sans</strong> — Elegant, versatile, universally readable<br />
              4. <strong>Montserrat + Merriweather</strong> — Modern headline, warm body text<br />
              5. <strong>Bebas Neue + Roboto</strong> — Bold, urban, high-impact data visualization
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >📏 Spacing — Leading, Tracking, Kerning <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>Line height (leading)</strong> is the vertical space between lines of text. For body copy in infographics: 1.5–1.7× your font size. For headlines: 1.0–1.2× (tighter, more impact). Too tight and lines collide — too loose and the paragraph falls apart.</p>
            <p><strong>Letter spacing (tracking)</strong> is the uniform space between all letters in a word. Increase tracking on ALL-CAPS labels and short headlines — it improves readability and feels intentional. Reduce tracking on large display text for a more modern, editorial feel.</p>
            <p><strong>Kerning</strong> is adjusting space between specific letter pairs (like "AV" or "To") that optically appear uneven. Canva handles basic kerning automatically for web fonts, but for large display type you may need to nudge individual letters manually.</p>
            <div className="example-box">
              <div className="ex-label">🛠 QUICK RULE</div>
              Label text in ALL CAPS? Add +100 to +150 letter spacing (tracking). It transforms cramped capitals into clean, professional labels. This one trick alone will make your category labels and section titles look significantly more professional.
            </div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>🌈 Color Theory Essentials</h3>
          <p style={{ fontSize: '.84rem', color: '#555', lineHeight: '1.7', marginBottom: '14px' }}><strong>The Color Wheel</strong> — colors opposite each other are <em>complementary</em> (maximum contrast: blue/orange, red/green). Colors next to each other are <em>analogous</em> (harmonious, calm). Three evenly spaced colors form a <em>triad</em> (vibrant, balanced).</p>
          <p style={{ fontSize: '.84rem', color: '#555', lineHeight: '1.7', marginBottom: '14px' }}><strong>The 60-30-10 Rule:</strong> 60% dominant color (background/main), 30% secondary (sections/cards), 10% accent (buttons, highlights, key numbers). This proportion creates balance without being boring.</p>
          <strong style={{ fontSize: '0.78rem' }}>Palette 1 — Trust &amp; Authority (finance, health)</strong>
          <div className="palette-row">
            <div className="swatch" style={{ background: '#1d3557' }}><span>#1d3557</span></div>
            <div className="swatch" style={{ background: '#457b9d' }}><span>#457b9d</span></div>
            <div className="swatch" style={{ background: '#a8dadc' }}><span>#a8dadc</span></div>
            <div className="swatch" style={{ background: '#f1faee' }}><span>#f1faee</span></div>
            <div className="swatch" style={{ background: '#e63946' }}><span>#e63946</span></div>
          </div>
          <strong style={{ fontSize: '0.78rem' }}>Palette 2 — Energy &amp; Growth (sustainability, tech)</strong>
          <div className="palette-row">
            <div className="swatch" style={{ background: '#1b4332' }}><span>#1b4332</span></div>
            <div className="swatch" style={{ background: '#2d6a4f' }}><span>#2d6a4f</span></div>
            <div className="swatch" style={{ background: '#52b788' }}><span>#52b788</span></div>
            <div className="swatch" style={{ background: '#d8f3dc' }}><span>#d8f3dc</span></div>
            <div className="swatch" style={{ background: '#ffd166' }}><span>#ffd166</span></div>
          </div>
          <strong style={{ fontSize: '0.78rem' }}>Palette 3 — Bold &amp; Modern (social, marketing)</strong>
          <div className="palette-row">
            <div className="swatch" style={{ background: '#0d0d0d' }}><span>#0d0d0d</span></div>
            <div className="swatch" style={{ background: '#e63946' }}><span>#e63946</span></div>
            <div className="swatch" style={{ background: '#f4d35e' }}><span>#f4d35e</span></div>
            <div className="swatch" style={{ background: '#f5f5f5' }}><span>#f5f5f5</span></div>
            <div className="swatch" style={{ background: '#3a86ff' }}><span>#3a86ff</span></div>
          </div>
          <div id="copy-msg"></div>
        </div>

        <div className="card">
          <h3>💡 Color Psychology in Infographics</h3>
          <ul className="tip-list">
            <li><strong>Blue:</strong> Trust, calm, authority. Used by finance, healthcare, tech. Best for: data-heavy infographics where credibility matters. Think: LinkedIn, IBM, medical charts.</li>
            <li><strong>Green:</strong> Growth, health, nature, money. Best for: environmental topics, wellness, financial growth, positive statistics.</li>
            <li><strong>Red/Orange:</strong> Urgency, energy, action, passion. Best for: statistics that demand attention, warnings, high-energy topics. Use sparingly — it's a visual shout.</li>
            <li><strong>Yellow:</strong> Optimism, creativity, warmth. Best for: highlighting key numbers, education, food, innovation. Hard to read as a text color — use as a background accent instead.</li>
            <li><strong>Dark/Neutral BG:</strong> Premium, sophisticated, high-contrast. Place light charts on dark backgrounds for a "dashboard" feel. Popular in tech and financial presentations.</li>
          </ul>
        </div>
      </div>

      <div className="printable-card">
        <div className="print-badge">🖨️ PRINTABLE — POST AT YOUR DESK</div>
        <h3>🗂️ The Complete Designer's Reference Card — Lesson 1</h3>
        <div className="cheat-grid">
          <div className="cheat-item"><div className="cheat-key">CRAP PRINCIPLES</div><strong>C</strong>ontrast · <strong>R</strong>epetition · <strong>A</strong>lignment · <strong>P</strong>roximity + Hierarchy = The 5 laws of visual communication</div>
          <div className="cheat-item"><div className="cheat-key">FONT PAIRING RULE</div>Serif headline + Sans-serif body. Never use more than 3 font styles in one design. Display fonts for titles only.</div>
          <div className="cheat-item"><div className="cheat-key">THE 60-30-10 COLOR RULE</div>60% dominant (BG), 30% secondary (sections), 10% accent (highlights, CTAs). Maintain this ratio for instant harmony.</div>
          <div className="cheat-item"><div className="cheat-key">HIERARCHY SIZE SCALE</div>Hero: 64–96pt · H1: 36–48pt · H2: 22–28pt · H3: 18–20pt · Body: 14–16pt · Caption: 10–12pt</div>
          <div className="cheat-item"><div className="cheat-key">WHITE SPACE LAW</div>Between related items: 8–16px. Between sections: 40–60px. Generous space = premium feel. Cramped space = cheap feel.</div>
          <div className="cheat-item"><div className="cheat-key">CANVA SHORTCUTS</div>T=Text · R=Rect · C=Circle · L=Line · Ctrl+G=Group · Ctrl+D=Duplicate · Ctrl+Z=Undo · Delete=Remove</div>
          <div className="cheat-item"><div className="cheat-key">CONTRAST CHECK</div>Body text on light BG: min 4.5:1 contrast ratio. Large text: min 3:1. Use WebAIM Contrast Checker to verify accessibility.</div>
          <div className="cheat-item"><div className="cheat-key">THE GOLDEN RULE</div>"If in doubt, take it out." Less is almost always more. Remove one element and see if the design improves. It usually does.</div>
        </div>
        <button className="print-btn" >🖨️ Print this reference card</button>
      </div>

      <div className="printable-card">
        <div className="print-badge">🖨️ PRINTABLE — FONT GUIDE</div>
        <h3>🔤 Font Pairing Cheat Sheet for Infographic Design</h3>
        <div className="cheat-grid">
          <div className="cheat-item"><div className="cheat-key">PAIR 1 — HIGH ENERGY</div><strong>Oswald Bold</strong> (headlines) + <strong>Lato Regular</strong> (body). Punchy, modern. Great for sports, statistics, tech topics.</div>
          <div className="cheat-item"><div className="cheat-key">PAIR 2 — EDITORIAL</div><strong>Playfair Display</strong> (headlines) + <strong>Source Sans Pro</strong> (body). Sophisticated, trustworthy. Great for health, finance, research.</div>
          <div className="cheat-item"><div className="cheat-key">PAIR 3 — CLEAN & SAFE</div><strong>Montserrat SemiBold</strong> (headlines) + <strong>Open Sans</strong> (body). Versatile, universally readable. Works for everything.</div>
          <div className="cheat-item"><div className="cheat-key">PAIR 4 — BOLD IMPACT</div><strong>Bebas Neue</strong> (headlines) + <strong>Roboto Light</strong> (body). Maximum contrast, urban feel. Social media, events, announcements.</div>
          <div className="cheat-item"><div className="cheat-key">PAIR 5 — WARM & HUMAN</div><strong>Raleway SemiBold</strong> (headlines) + <strong>Merriweather</strong> (body). Elegant yet approachable. Education, wellness, lifestyle.</div>
          <div className="cheat-item"><div className="cheat-key">AVOID THESE TRAPS</div>× Mixing 2 serifs · × Using Comic Sans or Papyrus · × Using decorative font for body text · × All caps body text · × Justified text in narrow columns</div>
        </div>
        <button className="print-btn" >🖨️ Print font guide</button>
      </div>

      <div className="homework">
        <h3>🏠 At-Home Tasks — Due Before Lesson 2</h3>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 1 — Design Audit (30 min):</strong> Find 3 infographics from different industries (try Pinterest or Behance). For each one, write which CRAP principle is its greatest strength and which is its biggest weakness. Be specific — not "the alignment is bad" but "the section titles and body text are too close together, violating proximity."</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 2 — Canva Rebuild (45 min):</strong> In Canva, reconstruct the layout of ONE of your 3 found infographics using only placeholder text, shapes, and your own color palette. The goal is not to copy it — it's to understand how the grid and layout decisions were made. Notice what's harder than it looks.</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 3 — Brand Kit Creation (20 min):</strong> In Canva Settings, set up your personal Brand Kit: 3 colors (dominant, secondary, accent) from one of the palettes above or your own, 2 fonts (a headline font + a body font). Name each color and font choice. You'll use this in every future project — it's your design identity.</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Bonus 🌟 — Typography Practice:</strong> Open Google Fonts and find 3 font pairing combinations you haven't seen before. Screenshot them and bring to class. Extra points if you can name what "feeling" each pair communicates and why.</div></div>
      </div>
    </div>
  </>
);
