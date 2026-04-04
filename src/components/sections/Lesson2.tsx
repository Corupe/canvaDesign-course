import React from 'react';

const HomeworkCheck = () => {
    const [done, setDone] = React.useState(false);
    return <div className={`hw-check ${done ? 'done' : ''}`} onClick={() => setDone(!done)}></div>;
};

export const Lesson2: React.FC = () => (
    <>
        <div className="lesson-panel" id="panel-1">
            <div className="lesson-header l2-hd" data-emoji="📊">
              <div className="tag">CANVA</div> <div className="tag">INFOGRAPHIC DESIGN</div>
              <h2>Lesson 2 — Infographic Storytelling with Canva</h2>
              <p>Move from design principles to full infographic creation. Learn how to transform raw data into a compelling visual narrative — with structure, hierarchy, and purpose — and build a complete infographic by the end of this lesson.</p>
              <div className="lesson-meta">
                <div className="meta-chip">⏱ 2.5–3 hrs</div>
                <div className="meta-chip">🛠 Canva (free)</div>
                <div className="meta-chip">📈 Data + Charts + Icons</div>
                <div className="meta-chip">🖨️ 2 printables</div>
              </div>
            </div>

            <div className="fun-fact">
              <div className="ff-icon">🧠</div>
              <div><strong>The neuroscience behind infographics:</strong> The human brain processes visuals <strong>60,000× faster</strong> than text, and <strong>65% of people</strong> are visual learners. But the real power isn't just that images are fast — it's that images trigger emotion, and emotion drives memory. A great infographic doesn't just inform; it makes people <em>feel</em> something about the data. That emotional response is what makes information stick.</div>
            </div>

            <div className="design-quote">
              <blockquote>There are three responses to a piece of design — yes, no, and WOW. Wow is the one to aim for.</blockquote>
              <cite>— Milton Glaser, designer (I ♥ NY logo, Dylan poster, New York Magazine co-founder)</cite>
            </div>

            <div className="content-grid">
              <div className="card">
                <h3>🎯 What You'll Learn</h3>
                <ul className="obj-list">
                  <li><div className="obj-dot">✓</div>The 6 infographic types — how to choose the right format for your data</li>
                  <li><div className="obj-dot">✓</div>Narrative structure: how to build a visual story from hook to insight to action</li>
                  <li><div className="obj-dot">✓</div>The F-pattern and Z-pattern: design for how humans naturally read</li>
                  <li><div className="obj-dot">✓</div>Creating charts natively in Canva — bar, pie, line, area, donut</li>
                  <li><div className="obj-dot">✓</div>Icon strategy: selecting, scaling, and placing icons for maximum clarity</li>
                  <li><div className="obj-dot">✓</div>Grid systems for multi-section infographics</li>
                  <li><div className="obj-dot">✓</div>Exporting at the right resolution for web, print, and social media</li>
                </ul>
              </div>
              <div className="card">
                <h3>⏱ Lesson 2 Timeline</h3>
                <ul className="timeline">
                  <li><span className="tl-time">0–20 min</span> Homework showcase: 3 minutes each — students walk through their Canva rebuild and what they discovered about layouts</li>
                  <li><span className="tl-time">20–50 min</span> Theory: The 6 infographic types, narrative structures, eye movement patterns</li>
                  <li><span className="tl-time">50–80 min</span> Live demo: Build a complete statistical infographic from scratch in real time — students follow along</li>
                  <li><span className="tl-time">80–130 min</span> Workshop: Each student builds their own infographic on an assigned or chosen dataset using their Brand Kit</li>
                  <li><span className="tl-time">130–160 min</span> Gallery walk: all designs displayed, sticky-note critique — one strength, one opportunity per design</li>
                  <li><span className="tl-time">160–175 min</span> Export formats walkthrough, homework brief, wrap-up</li>
                </ul>
              </div>
            </div>

            <div className="card card-wide" style={{marginBottom: '22px'}}>
              <h3>📊 The 6 Infographic Types — Expanded Guide</h3>

              <div className="design-quote" style={{marginBottom: '16px'}}>
                <blockquote>Clutter and confusion are not attributes of information, they are failures of design.</blockquote>
                <cite>— Edward Tufte, pioneer of data visualization ("The Visual Display of Quantitative Information")</cite>
              </div>

              <div className="accordion">
                <div className="acc-header" >📋 Statistical — When numbers are your hero <span className="acc-arrow">▾</span></div>
                <div className="acc-body">
                  <p><strong>Purpose:</strong> Present research findings, survey results, or data collections in a visually digestible form. The design's job is to make numbers feel significant and memorable, not just readable.</p>
                  <p><strong>Structure:</strong> Open with your single most impactful statistic (large, bold, centered — your "hero number"). Follow with 3–5 supporting statistics in a visual grid. Use charts to show relationships or distributions. End with source citations in small type.</p>
                  <div className="example-box">
                    <div className="ex-label">📌 REAL EXAMPLE TO STUDY</div>
                    <strong>Pew Research Center</strong> publishes some of the most respected statistical infographics in journalism. Their signature move: one big percentage in 72pt+ bold at the top, a clean horizontal bar chart below, and minimal supporting text. The restraint makes each number feel trustworthy. Search "Pew Research infographic" for excellent examples.
                  </div>
                  <div className="example-box">
                    <div className="ex-label">🛠 CANVA TEMPLATE APPROACH</div>
                    Start with a 800×2000px canvas. Reserve the top 400px for your hero stat. Use a 2-column grid for the middle section (statistics + icons). Place a full-width chart at 60% height in the lower third. Keep the background white or near-white — let the color live in the data elements only.
                  </div>
                </div>
              </div>

              <div className="accordion">
                <div className="acc-header" >🗺️ Process / Timeline — When sequence tells the story <span className="acc-arrow">▾</span></div>
                <div className="acc-body">
                  <p><strong>Purpose:</strong> Show how something works, evolves, or happens in steps. The viewer's eye should move naturally from step 1 to step N — your layout enforces the sequence.</p>
                  <p><strong>Structure options:</strong> Vertical flow (steps cascade downward — classic for how-to guides). Horizontal timeline (great for historical progressions). Circular flow (works for ongoing cycles like seasons, business cycles, product development sprints). Stepped diagram (staircase visual showing progression or growth).</p>
                  <div className="example-box">
                    <div className="ex-label">📌 DESIGN DECISION</div>
                    Use connecting arrows or dotted lines sparingly — only when the sequence isn't obvious from layout alone. Numbered circles are the clearest way to show sequence. Color progression (lighter to darker, or one hue shifting through tints) reinforces the sense of movement through time.
                  </div>
                  <div className="warning-box">
                    <div className="w-label">⚠️ COMMON MISTAKE</div>
                    Making all steps visually equal when some steps are more important than others. If Step 3 is the critical turning point, make its node larger, bolder, or a different color than the others. Hierarchy within a process diagram is just as important as overall hierarchy.
                  </div>
                </div>
              </div>

              <div className="accordion">
                <div className="acc-header" >⚖️ Comparison — When contrast reveals truth <span className="acc-arrow">▾</span></div>
                <div className="acc-body">
                  <p><strong>Purpose:</strong> Place two or more options side by side so differences and similarities become immediately visible. The design should make the comparison feel effortless — the viewer should understand "A vs B" before they read a single word.</p>
                  <p><strong>Key design rules:</strong> Use a clear vertical divider or enough white space to separate the two sides. Use opposing colors — one warm, one cool, or one dark and one light. Mirror the layout on both sides so the visual structure itself creates the comparison. Tables are a form of comparison infographic — make sure your column headers are bold and clearly labeled.</p>
                  <div className="example-box">
                    <div className="ex-label">📌 EXAMPLE USE CASES</div>
                    Free vs Paid tiers (SaaS companies use these constantly). Before vs After (fitness, renovation, design). Country A vs Country B. Traditional vs Modern methods. Product A vs Product B features. This vs That — any binary choice benefits from a comparison infographic.
                  </div>
                </div>
              </div>

              <div className="accordion">
                <div className="acc-header" >📍 Geographic — When location is the data <span className="acc-arrow">▾</span></div>
                <div className="acc-body">
                  <p><strong>Purpose:</strong> Show how data varies across locations — countries, cities, regions, zip codes. Maps make spatial relationships and regional disparities immediately visible in a way tables never could.</p>
                  <p><strong>Design approaches:</strong> <strong>Choropleth maps</strong> — shade regions in proportion to their data value (darker = higher). <strong>Bubble maps</strong> — overlay circles sized proportionally to the data value on map locations. <strong>Dot density maps</strong> — scatter individual dots to show distribution intensity. In Canva, use free map illustrations and manually apply color fills per region.</p>
                  <div className="example-box">
                    <div className="ex-label">🛠 FREE RESOURCES FOR MAPS</div>
                    Datawrapper.de — free interactive map creator, exportable as image. Flourish.studio — beautiful map templates, free tier. Wikipedia SVG maps — free, editable vector maps for every country and region. Search "svg world map blank" for clean starting points you can customize in Canva or Illustrator.
                  </div>
                </div>
              </div>

              <div className="accordion">
                <div className="acc-header" >🔢 List / Informational — When structure creates clarity <span className="acc-arrow">▾</span></div>
                <div className="acc-body">
                  <p><strong>Purpose:</strong> Present a collection of facts, tips, or items in a scannable visual format. Ideal for "Top 10" content, checklist-style guides, or quick-reference resources. This is the most shareworthy format on social media because it's immediately scannable.</p>
                  <p><strong>Design principle:</strong> Every item needs an icon, number, or visual element — not just text. The icon should relate to the content, not just be decorative. Use a consistent icon style (all line-art or all filled — never mix). Keep each item to one line of headline text if possible, with 2–3 lines of supporting text maximum.</p>
                  <div className="example-box">
                    <div className="ex-label">📌 WHY LISTS WORK ON SOCIAL MEDIA</div>
                    BuzzFeed's entire early model was built on list articles because numbered formats trigger a specific psychological response: the promise of a complete, bounded piece of information. "5 things" feels manageable. "7 tips" feels actionable. Visual list infographics convert this psychology into shareable content — readers save them as references.
                  </div>
                </div>
              </div>

              <div className="accordion">
                <div className="acc-header" >🕸️ Hierarchical — When relationships are the message <span className="acc-arrow">▾</span></div>
                <div className="acc-body">
                  <p><strong>Purpose:</strong> Show parent-child relationships, organizational structures, taxonomies, or decision trees. The visual structure itself communicates the logic — indentation, connections, branching all signal hierarchy.</p>
                  <p><strong>Types:</strong> <strong>Org charts</strong> — top-down authority structures. <strong>Tree diagrams</strong> — branching taxonomies (classification systems, evolutionary trees). <strong>Flowcharts</strong> — decision logic ("if this, then that"). <strong>Mind maps</strong> — radial idea branches from a central concept.</p>
                  <div className="example-box">
                    <div className="ex-label">🛠 DESIGN TIP FOR FLOWCHARTS</div>
                    Use consistent shape conventions: rectangles for process steps, diamonds for decisions (yes/no branches), ovals for start/end points. This is a universal visual language — anyone who has seen a flowchart will immediately understand your structure. Use color to differentiate branches, not just to decorate.
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-wide" style={{marginBottom: '22px'}}>
              <h3>📖 Building a Visual Narrative — The 5-Part Infographic Story</h3>
              <p style={{fontSize: '.87rem', color: '#555', lineHeight: '1.7', marginBottom: '16px'}}>Every great infographic tells a story. Even pure data visualizations have a beginning, middle, and end. Here is the proven narrative framework used by information designers at publications like The Economist, Bloomberg, and The Guardian:</p>
              <ul className="step-list">
                <li><strong>The Hook:</strong> Your title and a single "wow" statistic or visual that answers "why should I care about this?" before they've committed to reading. Make the first 10% of the infographic irresistible.</li>
                <li><strong>The Context:</strong> A brief setup — who, what, when, where. Don't assume background knowledge. Two to three short sentences or a small contextual visual that grounds the reader in the subject.</li>
                <li><strong>The Evidence:</strong> Your main data section. Present your statistics, charts, comparisons, or process steps. This is the longest section — it's where your data lives. Apply hierarchy rigorously: most important data gets most visual weight.</li>
                <li><strong>The Insight:</strong> The "so what?" — a callout box, a bold conclusion sentence, or a highlighted finding that synthesizes all your data into one memorable takeaway. Many infographics skip this and leave the reader to draw their own conclusion. Don't. Tell them what the data means.</li>
                <li><strong>The Source / CTA:</strong> Always credit your data sources in small text at the bottom. It builds credibility. If there's a next action (visit a website, share the infographic, use a product), place a clear but subtle call-to-action here.</li>
              </ul>
            </div>

            <div className="printable-card">
              <div className="print-badge">🖨️ PRINTABLE — FILL BEFORE YOU DESIGN</div>
              <h3>📝 Infographic Pre-Design Planning Worksheet</h3>
              <p style={{fontSize: '.82rem', color: '#666', marginBottom: '14px'}}>Complete this on paper before opening Canva. Designers who plan first produce better work faster. Every field matters.</p>
              <div className="cheat-grid">
                <div className="cheat-item"><div className="cheat-key">1. THE SINGLE MESSAGE</div>Complete this sentence: "After seeing this infographic, my reader will understand that ___________________."</div>
                <div className="cheat-item"><div className="cheat-key">2. WHO IS YOUR AUDIENCE?</div>Age / expertise level / what they already know / what they need to know: ___________________</div>
                <div className="cheat-item"><div className="cheat-key">3. INFOGRAPHIC TYPE</div>☐ Statistical  ☐ Process/Timeline  ☐ Comparison  ☐ Geographic  ☐ List  ☐ Hierarchical. Why this type?:</div>
                <div className="cheat-item"><div className="cheat-key">4. YOUR 3 HERO DATA POINTS</div>The 3 numbers or facts that, if the reader remembers nothing else, the infographic succeeded: ① __ ② __ ③ __</div>
                <div className="cheat-item"><div className="cheat-key">5. NARRATIVE STRUCTURE</div>Hook (your wow stat): __ · Context: __ · Evidence: __ · Insight: __ · Source: __</div>
                <div className="cheat-item"><div className="cheat-key">6. COLOR MOOD</div>☐ Bold/Energetic  ☐ Calm/Trust  ☐ Playful/Fun  ☐ Professional/Corporate  ☐ Dark/Premium</div>
                <div className="cheat-item"><div className="cheat-key">7. PLATFORM OUTPUT</div>☐ Instagram (1:1 or 4:5) · ☐ Web/Blog (long vertical, 800px wide) · ☐ Print A4 · ☐ Presentation slide (16:9)</div>
                <div className="cheat-item"><div className="cheat-key">8. ROUGH SKETCH SPACE</div>Draw your layout in boxes here before touching Canva. Title zone / Chart zone / Data zone / Insight zone / Source.</div>
              </div>
              <button className="print-btn" >🖨️ Print planning worksheet</button>
            </div>

            <div className="printable-card">
              <div className="print-badge">🖨️ PRINTABLE — EXPORT REFERENCE</div>
              <h3>📤 Complete Canva Export Guide — Every Format Explained</h3>
              <div className="cheat-grid">
                <div className="cheat-item"><div className="cheat-key">PNG — BEST FOR DIGITAL</div>Use for: websites, social media, email, presentations. Set quality to "High Quality." Supports transparency. Not ideal for small text — use PDF for print.</div>
                <div className="cheat-item"><div className="cheat-key">PDF PRINT — BEST FOR PRINT</div>Use for: anything that will be physically printed. Vector elements stay crisp at any size. Always export "PDF Print" (not "PDF Standard") for professional printing.</div>
                <div className="cheat-item"><div className="cheat-key">SVG — BEST FOR SCALING</div>Use for: logos, icons, elements you'll import into Illustrator. Infinitely scalable. Note: not all Canva elements export to SVG correctly — test before relying on it.</div>
                <div className="cheat-item"><div className="cheat-key">MP4 — FOR ANIMATION</div>Use for: animated social media content, presentations with motion. Use Canva's animation feature on individual elements before exporting. 1080p resolution for Instagram Reels/Stories.</div>
                <div className="cheat-item"><div className="cheat-key">RESOLUTION GUIDE</div>Web only: 72–96 DPI. Print small (brochure/postcard): 150 DPI. Print standard (A4, poster): 300 DPI. Large format (banner, billboard): 150 DPI is usually sufficient at viewing distance.</div>
                <div className="cheat-item"><div className="cheat-key">SOCIAL MEDIA SIZES</div>Instagram Post: 1080×1080 · Story/Reel: 1080×1920 · LinkedIn: 1200×627 · Twitter/X: 1600×900 · Pinterest: 1000×1500 · Facebook: 1200×630</div>
              </div>
              <button className="print-btn" >🖨️ Print export guide</button>
            </div>

            <div className="case-study">
              <div className="cs-label">📚 CASE STUDY — INFOGRAPHIC DONE RIGHT</div>
              <h4>How Bloomberg redesigned financial data for human beings</h4>
              <p>Bloomberg's data visualization team faced a classic challenge: their readers were educated professionals who understood data, but they were drowning in it. Spreadsheets, tables, and text-heavy reports were being skimmed or ignored entirely.</p>
              <p>Their solution was to build an infographics team that treated every dataset as a story first. Before touching any visualization tool, designers asked: "What is the one thing we want someone to understand in 10 seconds?" That single insight became the visual anchor — a large number, a striking comparison, a dramatic geographic shift — and everything else became supporting context.</p>
              <div className="cs-takeaway"><strong>The takeaway for your work:</strong> Ask the "10-second question" before you design. If someone looked at your finished infographic for 10 seconds and left, what would they remember? Design for that answer first.</div>
            </div>

            <div className="homework">
              <h3>🏠 At-Home Tasks — Due Before Lesson 3</h3>
              <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 1 — The Big Build (60 min):</strong> Create a complete infographic using your Brand Kit from Lesson 1. Topic: "A Week in My Life" — use the statistical format to visualize how you spend your time. Apply the 5-part narrative structure: hook → context → evidence → insight → source. Must include at least one Canva chart and 4+ icons.</div></div>
              <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 2 — Export Experiment (20 min):</strong> Export your infographic in 4 formats: PNG (web quality), PNG (high quality), PDF Print, and MP4 with one animated element. Compare file sizes and visual quality. Which would you use for which context? Write a 5-sentence reflection.</div></div>
              <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 3 — Dream Project Planning (30 min):</strong> Use the Planning Worksheet above to plan your dream infographic — something you'd genuinely want to exist in the world. Sketch the layout on paper. Don't start designing yet — this comes in Lesson 3 and 4. Bring the completed worksheet to class.</div></div>
              <div className="hw-task"><div className="hw-check" ></div><div><strong>Bonus 🌟 — Redesign Challenge:</strong> Find a bad infographic online (search "bad infographic" on Pinterest — there are many). Identify every design principle it violates. Then redesign it in Canva using your Brand Kit. The constraints: same data, better design. This is one of the most powerful exercises in design education.</div></div>
            </div>
          </div>
    </>
);
