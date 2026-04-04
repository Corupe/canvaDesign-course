import React from 'react';

// const HomeworkCheck = () => {
//     const [done, setDone] = React.useState(false);
//     return <div className={`hw-check ${done ? 'done' : ''}`} onClick={() => setDone(!done)}></div>;
// };

export const Lesson4: React.FC = () => (
  <>
    <div className="lesson-panel" id="panel-3">
      <div className="lesson-header l4-hd" data-emoji="✏️">
        <div className="tag">ILLUSTRATOR</div> <div className="tag">VECTOR MASTERY</div>
        <h2>Lesson 4 — Vector Infographics with Adobe Illustrator</h2>
        <p>Reach the pinnacle of infographic design. Illustrator creates scalable, mathematically perfect graphics that look stunning at any size — from a mobile screen to a printed billboard. This is the tool professional infographic designers rely on for their most important work.</p>
        <div className="lesson-meta">
          <div className="meta-chip">⏱ 2.5–3 hrs</div>
          <div className="meta-chip">🛠 Adobe Illustrator CC</div>
          <div className="meta-chip">🔢 Custom Charts + Icons</div>
          <div className="meta-chip">🖨️ 2 printables</div>
        </div>
      </div>

      <div className="fun-fact">
        <div className="ff-icon">⚡</div>
        <div><strong>Raster vs. Vector — The fundamental difference:</strong> Photoshop works with pixels — tiny colored squares. Zoom in far enough and any image breaks into blocky squares. Illustrator works with vectors — mathematical paths defined by anchor points and curves. Zoom in infinitely — a perfect, crisp edge at every scale. For infographics that might appear at wildly different sizes (Instagram post AND trade show banner AND website hero), vector is the professional standard.</div>
      </div>

      <div className="design-quote">
        <blockquote>Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the products are not burdened with non-essentials.</blockquote>
        <cite>— Dieter Rams, industrial designer (Braun, Vitsœ 606 shelf system), whose principles directly inspired Apple's design philosophy</cite>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>🎯 What You'll Learn</h3>
          <ul className="obj-list">
            <li><div className="obj-dot">✓</div>Vector vs. raster: when to use each and why it matters</li>
            <li><div className="obj-dot">✓</div>The Illustrator workspace: artboards, panels, the essential tools</li>
            <li><div className="obj-dot">✓</div>The Pen Tool (P): mastering Bézier curves — the core skill of vector design</li>
            <li><div className="obj-dot">✓</div>Shape Builder Tool: combining and subtracting shapes to create custom icons</li>
            <li><div className="obj-dot">✓</div>Pathfinder operations: Unite, Minus Front, Intersect, Exclude</li>
            <li><div className="obj-dot">✓</div>Creating custom charts from scratch: pie, bar, and pictograph infographics</li>
            <li><div className="obj-dot">✓</div>Working with Artboards for multi-format infographic projects</li>
            <li><div className="obj-dot">✓</div>Global colors and Swatches: update one color, change the whole design</li>
            <li><div className="obj-dot">✓</div>Exporting SVG for web and PDF for print — the definitive workflow</li>
          </ul>
        </div>
        <div className="card">
          <h3>⏱ Lesson 4 Timeline</h3>
          <ul className="timeline">
            <li><span className="tl-time">0–20 min</span> Photoshop work share — the most improved designer gets the golden pencil award 🏆</li>
            <li><span className="tl-time">20–40 min</span> Theory: Raster vs vector explained with live examples; Illustrator workspace orientation</li>
            <li><span className="tl-time">40–75 min</span> Pen Tool mastery workshop: instructor traces a provided line-art illustration step by step, students follow along in real time</li>
            <li><span className="tl-time">75–100 min</span> Shape Builder + Pathfinder: create 3 custom infographic icons together in 25 minutes</li>
            <li><span className="tl-time">100–135 min</span> Full build: assemble a complete vector infographic from scratch using your Lesson 2 Planning Worksheet as a blueprint</li>
            <li><span className="tl-time">135–155 min</span> Final critique + certificates 🎓 + course wrap-up + next steps presentation</li>
            <li><span className="tl-time">155–165 min</span> Final project briefing + Q&A open floor</li>
          </ul>
        </div>
      </div>

      <div className="card card-wide" style={{ marginBottom: '22px' }}>
        <h3>🔧 Illustrator Concepts — From Beginner to Confident</h3>

        <div className="design-quote" style={{ marginBottom: '16px' }}>
          <blockquote>Don't mistake legibility for communication.</blockquote>
          <cite>— David Carson, graphic designer and art director, pioneer of deconstructionist graphic design (Ray Gun magazine)</cite>
        </div>

        <div className="accordion">
          <div className="acc-header" >🖊️ The Pen Tool — The Heart of Vector Design <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>Why it seems hard:</strong> The Pen tool doesn't behave like a real pen — it places anchor points, and the line between them is controlled by "handles" that extend from each anchor. When you click-and-drag while placing an anchor, you control the curve of the line that follows. This takes 30–60 minutes of deliberate practice to internalize. Every professional designer went through this confusion. Push through it.</p>
            <p><strong>The four operations:</strong></p>
            <p><strong>Click</strong> — creates a corner anchor point. The path will have a sharp corner here.<br />
              <strong>Click + Drag</strong> — creates a smooth anchor with handles. The path curves through this point. The direction you drag determines the direction of the curve.<br />
              <strong>Alt+Click</strong> on an existing smooth anchor — breaks one handle free, allowing a smooth-to-sharp corner (used at the peak of a curve that must then go in a different direction — like a heart or a leaf).<br />
              <strong>Ctrl+Click</strong> while the Pen tool is active — temporarily switches to the Direct Selection tool (A), letting you move anchor points without switching tools.</p>
            <div className="example-box">
              <div className="ex-label">🎮 PRACTICE RESOURCE — PLAY A GAME</div>
              Go to <strong>bezier.method.ac</strong> — a free browser game that teaches the Pen tool through increasingly complex challenges. Complete the first 10 challenges and your Pen tool anxiety will be largely gone. This is how design students at major universities are taught the Pen tool. Budget 45 minutes and you'll see dramatic improvement.
            </div>
            <div className="example-box">
              <div className="ex-label">🛠 PRACTICAL STARTER METHOD</div>
              Begin by tracing — not creating from scratch. Place a logo, icon, or simple photograph on a locked layer. Create a new layer above it. Use the Pen tool to trace the outlines. This isolates the Pen tool mechanics from the creative challenge, letting you focus on the tool itself. Trace 3 shapes before your next class.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🔷 Shape Builder + Pathfinder — Icon Creation System <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>Shape Builder Tool (Shift+M):</strong> The fastest way to create custom icons. Draw overlapping basic shapes (circles, rectangles, polygons), select them all, activate Shape Builder. Now drag across areas to merge them, or Alt+drag across areas to subtract them. It's intuitive, immediate, and visual — ideal for creating icon sets without needing the Pen tool.</p>
            <p><strong>Pathfinder Panel:</strong> Window → Pathfinder. The 4 operations you'll use constantly:</p>
            <p><strong>Unite</strong> — merges all selected shapes into one combined shape (like Shape Builder drag).<br />
              <strong>Minus Front</strong> — subtracts the top shape from the bottom shape. Punch a hole in a rectangle using a circle. Create a donut chart ring. Cut a notch in an arrow.<br />
              <strong>Intersect</strong> — keeps only the overlapping area. Two overlapping circles → keeps the lens-shaped overlap only.<br />
              <strong>Exclude</strong> — keeps everything except the overlap. Two overlapping circles → keeps the two non-overlapping crescents.</p>
            <div className="example-box">
              <div className="ex-label">📌 BUILD A CUSTOM ICON: STEP BY STEP</div>
              Let's create a map pin icon: 1. Draw a circle (L key). 2. Draw a triangle below it pointing down, overlapping the circle's lower edge. 3. Select both. 4. Shape Builder: drag across both to merge. You have a drop/pin shape. 5. Now draw a smaller circle inside, centered on the pin head. 6. Pathfinder → Minus Front. You now have a map pin with a circular window. 7. Color and scale. You just built a professional icon from scratch.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >📊 Creating Custom Charts in Illustrator <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>Method 1 — Graph Tool (J):</strong> Illustrator has a built-in graph generator. Select the Graph Tool (J), drag a rectangle to define the chart area, enter your data in the spreadsheet that appears. Illustrator generates a basic chart. Then: Object → Graph → Data to re-edit data, or Object → Ungroup (twice) to break the chart into editable vector shapes you can redesign completely.</p>
            <p><strong>Method 2 — Manual Vector Charts (more control):</strong> For precise, designed charts, build them manually from vector shapes. A bar chart is just a series of rectangles with carefully calculated heights. Use Illustrator's Transform panel to set exact dimensions: a bar representing 75% of maximum = 75% of your chosen max height. This method is slower but gives you complete control over every visual element.</p>
            <p><strong>Method 3 — Pictograph Charts:</strong> Replace bars or segments with repeated icons. Object → Graph → Design (import an icon) → Object → Graph → Column (assign the icon to replace bars). The icon repeats or scales to represent the data value. This produces "people per 100" or "cars per city" style charts that feel human and memorable.</p>
            <div className="example-box">
              <div className="ex-label">📌 DATA VIZ PRINCIPLE — EDWARD TUFTE'S "DATA-INK RATIO"</div>
              Data visualization pioneer Edward Tufte introduced the concept of <strong>data-ink ratio</strong>: the proportion of ink (or pixels) in a chart that actually represents data, versus decorative or non-essential ink. The goal is a high data-ink ratio — maximize data, minimize decoration. Eliminate: 3D effects on flat data, grid lines that don't add meaning, unnecessary color gradients, drop shadows on chart elements, decorative backgrounds behind charts. Every element that doesn't communicate data is visual noise.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🎨 Global Colors + Swatches — The Professional's Efficiency Tool <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>The problem they solve:</strong> You design a 12-section infographic. You use your brand blue (#1a56db) 47 times across all elements. Your client asks to change the blue to a warmer tone. Without global colors, you'd manually recolor 47 elements. With global colors: change the swatch once, every element using that swatch updates instantly.</p>
            <p><strong>How to create global colors:</strong> Open the Swatches panel (Window → Swatches). Double-click an existing swatch or create new. In the Swatch Options dialog, check "Global." The swatch now has a small triangle in its corner. Apply it to elements. When you need to change: double-click the swatch → adjust the color → all elements update live.</p>
            <p><strong>Building a project color system:</strong> Create named global swatches for your entire infographic palette. Suggested names: "Primary-Accent," "Primary-Dark," "Primary-Light," "Neutral-BG," "Text-Main," "Text-Light," "Alert-Red," "Positive-Green." A named, global swatch system means you can redesign the entire color scheme in under 2 minutes — a skill that becomes invaluable when clients request revisions.</p>
            <div className="example-box">
              <div className="ex-label">🛠 SWATCH GROUPS — ORGANIZATION SYSTEM</div>
              In the Swatches panel, create Swatch Groups (the folder icon at the bottom) to organize your colors. One group for your Brand Colors. One group for Chart Colors (a harmonious sequential palette for your data series). One group for Neutral/UI colors. This mirrors the organization system used by professional design agencies and makes handoff to clients or collaborators seamless.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🖼️ Artboards — Designing for Multiple Formats at Once <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>What artboards are:</strong> Artboards in Illustrator are like multiple pages in a single file. Each artboard can be a different size. This is perfect for infographic design because the same content often needs to exist in multiple formats: a tall vertical infographic for web, a square crop for Instagram, a horizontal adaptation for presentations.</p>
            <p><strong>Workflow:</strong> Design your primary infographic on Artboard 1. Duplicate it to Artboard 2, then resize the artboard and reflow content for a different format. On Artboard 3, create the simplified "hero stat" square version for social media.</p>
            <p><strong>Exporting all artboards at once:</strong> File → Export → Export for Screens. In this dialog, you can select which artboards to export, choose multiple formats (SVG, PNG, PDF) simultaneously, and set scale multipliers (1x, 2x for retina screens). This saves hours compared to exporting each format individually.</p>
            <div className="example-box">
              <div className="ex-label">📌 THE MULTI-ARTBOARD PROFESSIONAL WORKFLOW</div>
              Artboard 1: Master infographic (800×2000px, full detail) · Artboard 2: Instagram post crop (1080×1080px, simplified to 3 key stats) · Artboard 3: Story/Reel format (1080×1920px, vertically adapted) · Artboard 4: Presentation slide (1920×1080px, horizontally adapted) · Artboard 5: Print version (A4 at 300 DPI, adjusted for CMYK). One file, five deliverables. This is how professional infographic designers deliver to clients.
            </div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>⌨️ Illustrator Essential Shortcuts</h3>
          <ul className="tip-list">
            <li><strong>Selection: V</strong>=Select object · <strong>A</strong>=Direct Select (nodes/anchors) · <strong>Q</strong>=Lasso select nodes</li>
            <li><strong>Drawing: P</strong>=Pen · <strong>B</strong>=Brush · <strong>\</strong>=Line · <strong>M</strong>=Rectangle · <strong>L</strong>=Ellipse · <strong>Y</strong>=Magic Wand</li>
            <li><strong>Editing: Ctrl+G</strong>=Group · <strong>Ctrl+Shift+G</strong>=Ungroup · <strong>Ctrl+[/]</strong>=Send backward/forward</li>
            <li><strong>Type: T</strong>=Type tool · <strong>Ctrl+Shift+O</strong>=Outline text (ALWAYS do this before sharing files)</li>
            <li><strong>Align: Shift+F7</strong>=Align panel · <strong>F9</strong>=Pathfinder panel · <strong>Ctrl+F8</strong>=Transform panel</li>
          </ul>
        </div>
        <div className="card">
          <h3>🌟 Advanced Pro Moves</h3>
          <ul className="tip-list">
            <li><strong>Consistent stroke weight:</strong> Choose ONE stroke weight for all icon outlines (1.5pt or 2pt). Consistency throughout an icon set makes it feel professionally designed rather than assembled from different sources.</li>
            <li><strong>Align to Artboard:</strong> In the Align panel, change "Align to Selection" → "Align to Artboard" for perfect centering relative to the artboard, not just to other objects.</li>
            <li><strong>Area Type on a shape:</strong> Draw any shape. Select the Type Tool. Click the shape's edge (not inside it). Text will flow along the path. Click inside the shape to create text that fills the shape boundary. Used for shaped text blocks in editorial infographics.</li>
            <li><strong>Recolor Artwork:</strong> Select your entire design → Edit → Recolor Artwork. An interactive color wheel appears — change your entire infographic's color scheme in seconds while maintaining all tonal relationships. Priceless for trying multiple color options quickly.</li>
          </ul>
        </div>
      </div>

      <div className="printable-card">
        <div className="print-badge">🖨️ PRINTABLE — WORKSPACE MAP</div>
        <h3>🗺️ Illustrator Workspace + Complete Shortcut Reference</h3>
        <div className="cheat-grid">
          <div className="cheat-item"><div className="cheat-key">SELECTION TOOLS</div>V=Selection (whole object) · A=Direct Selection (individual anchors/paths) · Q=Lasso Select · Tab=Cycle objects · Alt+click=Select beneath</div>
          <div className="cheat-item"><div className="cheat-key">DRAWING TOOLS</div>P=Pen · Shift+P=Add/Remove anchor · \=Line Segment · M=Rectangle · L=Ellipse · Shift+M=Shape Builder · /=Knife tool</div>
          <div className="cheat-item"><div className="cheat-key">TEXT TOOLS</div>T=Area Type · Shift+T=Type on Path · Ctrl+Shift+O=Outline Text · Alt+click=Flow text between frames · Ctrl+T=Character panel</div>
          <div className="cheat-item"><div className="cheat-key">VIEW CONTROLS</div>Ctrl+0=Fit artboard · Ctrl+1=Actual size · Ctrl+R=Show/hide rulers · Ctrl+';'=Guides · Ctrl+Shift+'=Smart guides toggle</div>
          <div className="cheat-item"><div className="cheat-key">ESSENTIAL PANELS</div>F7=Layers · Shift+F7=Align · F9=Pathfinder · Shift+F9=Transparency · Ctrl+F8=Transform · F5=Swatches · F6=Color</div>
          <div className="cheat-item"><div className="cheat-key">EXPORTING SVG</div>File → Export → Export As → SVG. Check "Responsive" for web. "CSS Properties: Style Attributes." Decimal: 2. Always outline fonts before SVG export.</div>
          <div className="cheat-item"><div className="cheat-key">VECTOR vs RASTER</div>Vector: math, infinite scale, smaller file, perfect for logos/icons/charts. Raster: pixels, fixed resolution, better for photos and textures. Illustrator=vector. Photoshop=raster. Know when to use each.</div>
          <div className="cheat-item"><div className="cheat-key">PATHFINDER — MUST KNOW</div>Unite=Merge all shapes · Minus Front=Subtract top from bottom · Intersect=Keep only overlap · Exclude=Keep non-overlap. Apply: Object → Expand to finalize.</div>
        </div>
        <button className="print-btn" >🖨️ Print workspace map</button>
      </div>

      <div className="printable-card">
        <div className="print-badge">🖨️ FINAL PROJECT BRIEF</div>
        <h3>🏆 Final Course Portfolio Project — Your Masterpiece</h3>
        <p style={{ fontSize: '.82rem', color: '#555', marginBottom: '14px' }}>This is your chance to create something real, polished, and portfolio-ready. Apply everything from all 4 lessons. This piece should represent your best current work.</p>
        <div className="cheat-grid">
          <div className="cheat-item"><div className="cheat-key">THE CREATIVE BRIEF</div>Design a complete, polished infographic on any topic that genuinely interests you. It should be something you'd proudly post online or show an employer.</div>
          <div className="cheat-item"><div className="cheat-key">TECHNICAL REQUIREMENTS</div>· Minimum 5 distinct data points · Custom color palette (not default) · Clear typographic hierarchy (3 levels) · Minimum 4 visual elements (icons, charts, or illustrations)</div>
          <div className="cheat-item"><div className="cheat-key">PROCESS REQUIREMENTS</div>· Complete the Planning Worksheet before designing · Sketch on paper first · Build in your strongest tool (Canva, PS, or AI) · Save all working files</div>
          <div className="cheat-item"><div className="cheat-key">DELIVERABLES</div>1. PNG export (web-ready, 800px wide, 150–300 DPI) · 2. PDF export (print-ready) · 3. Working source file (Canva link, PSD, or AI) · 4. Written 100-word design rationale</div>
          <div className="cheat-item"><div className="cheat-key">EVALUATION CRITERIA</div>✓ Message clarity (can I understand your point in 10 sec?) · ✓ Visual hierarchy · ✓ Color harmony · ✓ Typography quality · ✓ Data accuracy · ✓ Overall polish + finish</div>
          <div className="cheat-item"><div className="cheat-key">TOPIC IDEAS</div>Your city's hidden stats · A social issue you care about · Your industry's evolution · A personal passion (sport, music, food) · Climate data · A tutorial "how-to" · A comparison of things you love</div>
        </div>
        <button className="print-btn" >🖨️ Print project brief</button>
      </div>

      <div className="case-study">
        <div className="cs-label">📚 CASE STUDY — ICON DESIGN SYSTEM THINKING</div>
        <h4>How Google's Material Design changed how we think about icon systems</h4>
        <p>When Google developed Material Design in 2014, one of its core contributions was the concept of the icon system — not individual icons, but a comprehensive, cohesive set of icons built on shared principles: consistent 2dp stroke width, consistent corner radius, consistent optical sizing on a 24×24px grid, consistent visual weight.</p>
        <p>The insight: an icon set's power comes from what the icons have in common, not what makes each one unique. When every icon in your infographic follows the same weight, style, and scale rules, the viewer's eye perceives the entire set as a single visual language rather than a collection of found objects. The icons stop being decorations and start being communication.</p>
        <div className="cs-takeaway"><strong>Apply this principle:</strong> Before adding icons to any infographic, decide on your icon style (outline only? filled? duotone?), your stroke weight (1.5pt? 2pt?), and your maximum icon size. Write these down as your project's icon rules. Then stick to them for every single icon in the design. Consistency at this level is what separates student work from professional work.</div>
      </div>

      <div className="design-quote">
        <blockquote>Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.</blockquote>
        <cite>— Charles Eames, designer and architect (Eames Lounge Chair, Case Study Houses, IBM exhibitions)</cite>
      </div>

      <div className="homework">
        <h3>🏠 Final At-Home Tasks — Your Portfolio Awaits</h3>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 1 — Final Project (90–120 min):</strong> Complete your Final Portfolio Infographic (see brief above). This is the piece you'll show the world. Apply principles from all 4 lessons. Aim for the "WOW" response Milton Glaser described — something that makes someone stop scrolling. Due: 7 days from today.</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 2 — Custom Icon Set (45 min):</strong> In Illustrator, create an icon set of 6–8 thematically related icons using only the Pen tool, basic shapes, and the Pathfinder/Shape Builder. Set rules for yourself before starting: stroke weight, corner radius, size. Apply them consistently. Export as SVG. This is a genuine portfolio asset.</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 3 — Design Reflection (30 min):</strong> Write a 1-page reflection: What was your single biggest breakthrough in this course? Which tool do you prefer working in and why? What kind of design work do you want to do next? What would you tell yourself on Day 1 if you could go back? Keep this — it's the baseline you'll compare against in 6 months.</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Bonus 🌟 — The Triple Build:</strong> Create the same infographic in all 3 tools (Canva, Photoshop, Illustrator). Same data, same color palette, different tools. Present them side by side. Analyze: what does each tool do best? What are the limitations of each? This exercise, done seriously, builds a level of toolchain fluency that takes most designers years to develop naturally.</div></div>
      </div>
    </div>
  </>
);
