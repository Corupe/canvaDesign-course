import React from 'react';

// const HomeworkCheck = () => {
//     const [done, setDone] = React.useState(false);
//     return <div className={`hw-check ${done ? 'done' : ''}`} onClick={() => setDone(!done)}></div>;
// };

export const Lesson3: React.FC = () => (
  <>
    <div className="lesson-panel" id="panel-2">
      <div className="lesson-header l3-hd" data-emoji="🖼️">
        <div className="tag">PHOTOSHOP</div> <div className="tag">PHOTO-RICH DESIGN</div>
        <h2>Lesson 3 — Photo-Rich Infographics with Photoshop</h2>
        <p>Enter the world's most powerful image editing software. Photoshop opens dimensions of design that no template tool can touch — real photography, compositing, masking, and pixel-level control. This is where design becomes a craft.</p>
        <div className="lesson-meta">
          <div className="meta-chip">⏱ 2.5–3 hrs</div>
          <div className="meta-chip">🛠 Adobe Photoshop CC</div>
          <div className="meta-chip">📸 Photography + Compositing</div>
          <div className="meta-chip">🖨️ 2 printables</div>
        </div>
      </div>

      <div className="fun-fact">
        <div className="ff-icon">🚀</div>
        <div><strong>The upgrade that changes everything:</strong> Canva is an excellent starting tool — but it operates on pre-made elements. Photoshop is a creation tool. In Photoshop, you don't pick from a library — you <em>make</em> the library. Understanding Photoshop is the difference between a designer and a user of design software. This lesson begins that transformation.</div>
      </div>

      <div className="design-quote">
        <blockquote>Design is not just what it looks like and feels like. Design is how it works.</blockquote>
        <cite>— Steve Jobs, co-founder of Apple (on the intersection of design and function)</cite>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>🎯 What You'll Learn</h3>
          <ul className="obj-list">
            <li><div className="obj-dot">✓</div>The Photoshop workspace: panels, toolbars, menus — understanding the layout</li>
            <li><div className="obj-dot">✓</div>The layer system: working non-destructively from day one</li>
            <li><div className="obj-dot">✓</div>Selection tools: Marquee, Quick Selection, Magic Wand, Select Subject (AI)</li>
            <li><div className="obj-dot">✓</div>Layer masks: the most important Photoshop concept — hide, never erase</li>
            <li><div className="obj-dot">✓</div>Adjustment layers: non-destructive color, tone, and mood corrections</li>
            <li><div className="obj-dot">✓</div>Smart Objects: embed and transform without quality loss</li>
            <li><div className="obj-dot">✓</div>Blending modes: multiply, screen, overlay — building mood through layers</li>
            <li><div className="obj-dot">✓</div>Compositing: placing a cut-out subject onto a designed background</li>
            <li><div className="obj-dot">✓</div>Adding typographic elements over photos with proper contrast techniques</li>
          </ul>
        </div>
        <div className="card">
          <h3>⏱ Lesson 3 Timeline</h3>
          <ul className="timeline">
            <li><span className="tl-time">0–20 min</span> Lesson 2 review + infographic showcase — group votes on "most memorable" and "most improved" pieces</li>
            <li><span className="tl-time">20–50 min</span> Photoshop orientation: workspace layout, the layer concept explained with physical analogy (transparent acetate sheets), toolbar tour</li>
            <li><span className="tl-time">50–85 min</span> Core skills live demo: Select Subject → Layer Mask → place on background. Instructor builds a real example start to finish.</li>
            <li><span className="tl-time">85–120 min</span> Workshop Part 1: Students cut out their own provided photo, place it on a designed background using provided color fills and shapes</li>
            <li><span className="tl-time">120–150 min</span> Workshop Part 2: Add infographic data elements (stats, labels, icons) over the photo composition</li>
            <li><span className="tl-time">150–165 min</span> Export demo, homework brief, Q&A, individual check-ins</li>
          </ul>
        </div>
      </div>

      <div className="card card-wide" style={{ marginBottom: '22px' }}>
        <h3>🔧 Photoshop Core Concepts — The Foundation You Need</h3>

        <div className="accordion">
          <div className="acc-header" >🗂️ Layers — The Most Important Concept in Photoshop <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>The physical analogy:</strong> Imagine you're creating a physical collage. You cut photos from magazines, paint backgrounds on separate sheets, write text on transparent film. Then you stack them all on top of each other. Each sheet is a layer. You can rearrange them, hide one without destroying it, adjust the transparency of one without affecting others. That's exactly how Photoshop layers work.</p>
            <p><strong>Types of layers you'll use:</strong></p>
            <p>• <strong>Pixel layers</strong> — contain photographic or painted pixels. Your photos live here. Destructive edits (painting, erasing) permanently change pixels on this layer.<br />
              • <strong>Text layers (T)</strong> — fully editable text, separate from pixels. Always lives on its own layer, always re-editable.<br />
              • <strong>Shape layers</strong> — vector rectangles, circles, custom shapes. Scale without quality loss.<br />
              • <strong>Smart Object layers (box icon)</strong> — a container for another file. Non-destructive transformations, smart filters. The professional's choice for photos.<br />
              • <strong>Adjustment layers (half-circle)</strong> — non-destructively modify every layer below them. Think of them as color glasses you hold in front of everything underneath.</p>
            <div className="example-box">
              <div className="ex-label">🛠 PROFESSIONAL LAYER ORGANIZATION</div>
              For an infographic, organize layers into groups (folders). Group 1: "Background" (background color, texture). Group 2: "Photography" (your cut-out subjects, overlays). Group 3: "Data Elements" (charts, icons, shapes). Group 4: "Typography" (all text layers). Group 5: "Adjustments" (any global color/tone adjustments). Name every layer before moving to the next. Your future self will thank you.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🎭 Layer Masks — The Non-Destructive Superpower <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>The golden rule of Photoshop:</strong> Never erase pixels. Always use a mask. When you use the eraser tool, you delete pixels permanently. If you make a mistake — or change your mind a week later — the data is gone forever. A layer mask hides pixels without deleting them. You can always paint the mask back to white and the hidden pixels reappear perfectly.</p>
            <p><strong>How masks work:</strong> A mask is a grayscale image attached to a layer. Where the mask is <strong>white</strong>, the layer is fully visible. Where the mask is <strong>black</strong>, the layer is completely hidden. Gray areas create partial transparency. You paint on the mask with black (to hide) or white (to reveal) using the Brush tool.</p>
            <div className="example-box">
              <div className="ex-label">📌 PRACTICAL WORKFLOW</div>
              1. Select your subject with Quick Selection Tool (W) · 2. Click "Select & Mask" in options bar · 3. In the workspace, set Output to "Layer Mask" → OK · 4. Your subject is now cut out on a transparent background · 5. Your original pixels are untouched and hideable — the mask is hiding them, not deleting them · 6. To restore any hidden area: set foreground color to white, paint with soft brush on the mask.
            </div>
            <div className="example-box">
              <div className="ex-label">🎯 REFINE EDGE — FOR HAIR AND FUR</div>
              The hardest subjects to cut out are those with fine, wispy edges: hair, fur, feathers, trees against sky. In Select & Mask workspace: check "Smart Radius," increase Radius to 20–40px, then use the "Refine Hair" brush to paint along the problematic edge. Photoshop's AI will analyze and separate fine details from the background. Not perfect, but dramatically better than manual selection.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🎨 Adjustment Layers — Controlling Mood Without Destroying Photos <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>What they are:</strong> Adjustment Layers sit above your photo layers and apply tonal or color changes to everything beneath them — non-destructively. If you apply a Hue/Saturation adjustment directly to a pixel layer, it permanently changes that image. If you use an Adjustment Layer, you can edit or delete the adjustment any time. Always use Adjustment Layers.</p>
            <p><strong>The 6 essential adjustments for infographic design:</strong></p>
            <p><strong>Levels</strong> — Move the black point right to deepen shadows. Move the white point left to brighten highlights. Move the midpoint to control overall brightness. This is your most-used basic adjustment.<br /><br />
              <strong>Curves</strong> — Like Levels but with a curve you can bend at any point. Create an S-curve (darken shadows, brighten highlights) to add punchy contrast to flat photos. The most powerful adjustment once you understand it.<br /><br />
              <strong>Hue/Saturation</strong> — Shift the overall color of an image (Hue), make colors more or less vibrant (Saturation), brighten or darken (Lightness). Used to match the photo's color temperature to your infographic palette.<br /><br />
              <strong>Color Balance</strong> — Add warmth or coolness to shadows, midtones, and highlights independently. Drag toward warm tones (yellow/red) for a golden-hour feel; drag toward cool tones (blue/cyan) for a crisp, technical feel.<br /><br />
              <strong>Vibrance</strong> — Like Saturation but smarter — it boosts colors that are already slightly muted while protecting skin tones from oversaturation. Use Vibrance instead of Saturation for photos with people.<br /><br />
              <strong>Photo Filter</strong> — Apply a color "gel" to the entire image, simulating the look of physical lens filters. "Warming Filter 85" makes everything look golden; "Cooling Filter 80" makes everything look blue and technical.</p>
            <div className="example-box">
              <div className="ex-label">🎨 TONAL MATCHING — THE PROFESSIONAL TRICK</div>
              The most common rookie mistake: placing a photo with a warm orange tint on a cool blue infographic background. They clash. Use Hue/Saturation to desaturate the photo first, then use Color Balance to shift its tones toward your infographic's dominant color. Now the photo and the background "live in the same world."
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🌀 Blending Modes — Where Creative Magic Happens <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>What they are:</strong> Every Photoshop layer has a blending mode — a mathematical formula that determines how that layer's pixels interact with the layers below it. The default is "Normal" (complete opacity). Changing it creates startling visual effects without any additional editing.</p>
            <p><strong>The 5 modes every designer should know:</strong></p>
            <p><strong>Multiply</strong> — Darkens. White becomes invisible, black becomes solid. Place a texture or grunge layer in Multiply mode over a photo and the texture "burns" into the image. Used constantly for adding paper textures, adding depth.<br /><br />
              <strong>Screen</strong> — Brightens. Opposite of Multiply. Black becomes invisible, white becomes solid. Place a lens flare or light streak in Screen mode and the black background disappears, leaving only the light effect.<br /><br />
              <strong>Overlay</strong> — Increases contrast and saturation. Darker areas get darker, lighter areas get lighter. Great for intensifying a photo's existing colors. Place a solid color layer in Overlay mode to tint a photo while preserving its detail.<br /><br />
              <strong>Color</strong> — Applies the hue and saturation of one layer to the luminosity of layers beneath. Used for: colorizing black and white photos, creating cohesive color tones across multiple photos.<br /><br />
              <strong>Luminosity</strong> — Applies only the brightness of the layer. Used for: sharpening layers, applying detail without color shifts.</p>
            <div className="example-box">
              <div className="ex-label">🛠 QUICK INFOGRAPHIC TECHNIQUE</div>
              Place a semi-transparent colored rectangle (your infographic's accent color at 60–80% opacity) in <strong>Multiply</strong> mode over a photo. This creates a tinted overlay that makes the photo feel designed rather than photographed — and allows white text to read clearly on top of it. Used by virtually every major magazine and brand for text-over-image layouts.
            </div>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>📸 Free Photo Resources for Infographics</h3>
          <ul className="tip-list">
            <li><strong>Unsplash.com</strong> — 3M+ professional photos, completely free, no attribution required. Best search tips: add "minimal," "flat lay," "top view" to find infographic-friendly compositions with clean backgrounds.</li>
            <li><strong>Pexels.com</strong> — Equally excellent, strong in diversity of subjects. The video library is also free and useful for animated infographic backgrounds.</li>
            <li><strong>Pixabay.com</strong> — Photos + illustrations + vectors all in one place. More varied quality but great hidden gems, especially for abstract backgrounds.</li>
            <li><strong>StockSnap.io</strong> — Curated collection, consistently high quality. Better for finding the "lifestyle" shots that make statistical infographics feel human and warm.</li>
            <li><strong>Adobe Stock (free tier)</strong> — If you have Creative Cloud, 10 free assets per month. Premium quality, professional licensing.</li>
          </ul>
        </div>
        <div className="card">
          <h3>⌨️ Essential Photoshop Shortcuts</h3>
          <ul className="tip-list">
            <li><strong>V</strong>=Move · <strong>M</strong>=Marquee · <strong>W</strong>=Quick Select · <strong>B</strong>=Brush · <strong>E</strong>=Eraser · <strong>T</strong>=Text · <strong>G</strong>=Gradient</li>
            <li><strong>Ctrl+J</strong>=Duplicate layer (used 100× per session) · <strong>Ctrl+T</strong>=Free Transform · <strong>Ctrl+D</strong>=Deselect</li>
            <li><strong>Alt+click</strong> on layer mask thumbnail=View the mask in isolation (invaluable for debugging mask edges)</li>
            <li><strong>Ctrl+Alt+Z</strong>=Step backward through history · <strong>F7</strong>=Show/hide Layers panel · <strong>Ctrl+0</strong>=Fit image to screen</li>
            <li><strong>[ and ]</strong>=Decrease/increase brush size · <strong>Shift+[ / ]</strong>=Softer/harder brush edge — these two shortcuts eliminate constant trips to the brush panel</li>
          </ul>
        </div>
      </div>

      <div className="printable-card">
        <div className="print-badge">🖨️ PRINTABLE — WORKSPACE MAP</div>
        <h3>🗺️ Photoshop Workspace Cheat Map for Infographic Designers</h3>
        <div className="cheat-grid">
          <div className="cheat-item"><div className="cheat-key">DOCUMENT SETUP — WEB</div>800px wide × 2000px tall · 72 DPI · Color Mode: RGB · Background: White. This is your standard digital infographic canvas.</div>
          <div className="cheat-item"><div className="cheat-key">DOCUMENT SETUP — PRINT</div>A4: 2480×3508px · 300 DPI · Color Mode: CMYK · Background: White. Switch to CMYK: Image → Mode → CMYK.</div>
          <div className="cheat-item"><div className="cheat-key">LEFT TOOLBAR — TOP SECTION</div>V=Move · M=Marquee Select · L=Lasso · W=Quick Select/Magic Wand · C=Crop · I=Eyedropper</div>
          <div className="cheat-item"><div className="cheat-key">LEFT TOOLBAR — PAINT SECTION</div>J=Heal/Clone · B=Brush · E=Eraser · G=Gradient · O=Dodge/Burn · P=Pen · T=Type · S=Stamp</div>
          <div className="cheat-item"><div className="cheat-key">LAYERS PANEL ICONS (bottom)</div>Left→right: Link · FX (effects) · Mask (add mask) · New Adjustment Layer · New Group · New Layer · Delete</div>
          <div className="cheat-item"><div className="cheat-key">ADJUSTMENT LAYER ICONS</div>Brightness/Contrast · Levels · Curves · Exposure · Hue/Sat · Color Balance · Photo Filter · Black & White · Gradient Map</div>
          <div className="cheat-item"><div className="cheat-key">FILE FORMATS TO KNOW</div>PSD=Master editable file (save always) · PNG=Web export, transparency · JPG=Flat web export, smaller file · PDF=Print ready</div>
          <div className="cheat-item"><div className="cheat-key">BLENDING MODE QUICK GUIDE</div>Normal=Default · Multiply=Darkens, hides white · Screen=Brightens, hides black · Overlay=Contrast + saturation boost · Color=Tints only</div>
        </div>
        <button className="print-btn" >🖨️ Print workspace map</button>
      </div>

      <div className="printable-card">
        <div className="print-badge">🖨️ PIN THIS NEXT TO YOUR SCREEN</div>
        <h3>⌨️ Photoshop Power Shortcuts — The 24 You'll Actually Use</h3>
        <div className="cheat-grid">
          <div className="cheat-item"><div className="cheat-key">FILE OPERATIONS</div>Ctrl+N=New · Ctrl+O=Open · Ctrl+S=Save · Ctrl+Shift+S=Save As · Ctrl+Alt+Shift+S=Export for Web (Save for Web legacy)</div>
          <div className="cheat-item"><div className="cheat-key">LAYER OPERATIONS</div>Ctrl+J=Duplicate · Ctrl+G=Group · Ctrl+Shift+G=Ungroup · Ctrl+E=Merge selected · Ctrl+Shift+E=Merge visible</div>
          <div className="cheat-item"><div className="cheat-key">TRANSFORM &amp; MOVE</div>Ctrl+T=Free Transform · Hold Shift while transforming=Constrain proportions · Enter=Confirm transform · Esc=Cancel transform</div>
          <div className="cheat-item"><div className="cheat-key">SELECTION</div>Ctrl+A=Select All · Ctrl+D=Deselect · Ctrl+Shift+I=Invert selection · Alt+click mask=View mask alone</div>
          <div className="cheat-item"><div className="cheat-key">VIEW &amp; NAVIGATION</div>Ctrl++=Zoom in · Ctrl+-=Zoom out · Ctrl+0=Fit to screen · Ctrl+1=Actual pixels · Space+drag=Pan canvas</div>
          <div className="cheat-item"><div className="cheat-key">PAINTING &amp; BRUSH</div>[ / ]=Smaller/larger brush · Shift+[ / ]=Softer/harder · 1–0 keys=Set opacity 10%–100% · X=Swap foreground/background colors</div>
        </div>
        <button className="print-btn" >🖨️ Print shortcut sheet</button>
      </div>

      <div className="case-study">
        <div className="cs-label">📚 CASE STUDY — MASTERS OF PHOTO-INFOGRAPHIC DESIGN</div>
        <h4>National Geographic's visual storytelling approach</h4>
        <p>National Geographic has been combining photography and data visualization since the 1960s. Their method: photography establishes emotional connection and scale; infographic elements communicate specific data that photography alone can't convey. A photo of a coral reef creates empathy — overlaid data about bleaching percentages provides urgency.</p>
        <p>Their designers follow a "separation of duties" principle: photography handles emotion, typography handles fact, illustration handles the abstract. In Photoshop terms: photo layer (emotional anchor), color overlay layer (brand cohesion), text layer (factual content), chart/illustration layer (data visualization). Each does its job without competing.</p>
        <div className="cs-takeaway"><strong>Apply this principle:</strong> When you place text or data over a photo, the photo's job is to provide mood and context — not to compete with the text for attention. Use color overlays, blurring, or darkening to make the photo "step back" and let your data take center stage.</div>
      </div>

      <div className="homework">
        <h3>🏠 At-Home Tasks — Due Before Lesson 4</h3>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 1 — Photo Infographic (75 min):</strong> Choose a topic you care about. Download 2–3 photos from Unsplash. Build a photo-based infographic in Photoshop: cut out at least one subject using masking, place it on a designed background, add statistical data as designed text elements. Export as PNG (web) and PSD (master file — keep layers intact).</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 2 — Masking Practice (30 min):</strong> Find a portrait photo and a complex organic subject (tree, flower, messy hair). Cut out both using Quick Select → Select & Mask. Place each on a solid colored background in your accent color. Screenshot both results side by side. Note what worked and what still needs refinement — bring this to class.</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 3 — Adjustment Layer Exploration (20 min):</strong> Take one photo and apply 6 different Adjustment Layers one at a time (Levels, Curves, Hue/Sat, Color Balance, Vibrance, Photo Filter). Screenshot the result of each and make a simple 6-panel comparison grid. Write one sentence for each: "This adjustment makes photos feel _____."</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Bonus 🌟 — Blending Mode Experiments:</strong> Take a photo and try all 5 essential blending modes (Multiply, Screen, Overlay, Color, Luminosity) on a solid colored layer placed above it. Create a "Blending Mode Sample Board" in Photoshop showing all 5 results with labels. Share in the group chat.</div></div>
      </div>
    </div>
  </>
);
