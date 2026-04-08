import React from 'react';

export const Lesson3: React.FC = () => (
  <>
    <div id="panel-2">
      <div className="lesson-header l3-hd" data-emoji="📸">
        <div className="tag">PHOTOSHOP</div> <div className="tag">COMMERCIAL PHOTOGRAPHY</div>
        <h2>Lesson 3 — Photo-Based Commercial Design with Photoshop</h2>
        <p>Enter professional photo editing and commercial layout design. Photoshop unlocks design possibilities that templates can't touch: sophisticated product photography, photo compositing, textured backgrounds, transparent elements, and pixel-perfect typography over imagery. This is where commercial design becomes premium.</p>
        <div className="lesson-meta">
          <div className="meta-chip">⏱ 2.5–3 hrs</div>
          <div className="meta-chip">🛠 Adobe Photoshop CC</div>
          <div className="meta-chip">📸 Product Photography + Compositing</div>
          <div className="meta-chip">🖨️ 2 printables</div>
        </div>
      </div>

      <div className="fun-fact">
        <div className="ff-icon">🚀</div>
        <div><strong>Photography is the foundation of commercial credibility:</strong> Products photograph beautifully, people connect emotionally, environments tell stories. Canva offers stock photos, but they're generic and shared across thousands of businesses. Professional commercial design differentiates through: custom photography, strategic photo selection, clever compositing, and sophisticated text-over-image typography. Photoshop is how you execute that vision.</div>
      </div>

      <div className="design-quote">
        <blockquote>Design is the solution to how problem can be solved by day.</blockquote>
        <cite>— Lella Vignelli</cite>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>🎯 What You'll Learn</h3>
          <ul className="obj-list">
            <li><div className="obj-dot">✓</div>Setting up Photoshop for commercial print projects (CMYK, 300 DPI, proper templates)</li>
            <li><div className="obj-dot">✓</div>The layer system: organizing photos, text, and design elements non-destructively</li>
            <li><div className="obj-dot">✓</div>Product photography composition: angle, lighting, background focus</li>
            <li><div className="obj-dot">✓</div>Selection tools: cutting out products, people, and complex elements cleanly</li>
            <li><div className="obj-dot">✓</div>Layer masks: the professional non-destructive technique for photo editing</li>
            <li><div className="obj-dot">✓</div>Adjustment layers: color-correcting photos to match brand palette</li>
            <li><div className="obj-dot">✓</div>Blending modes: creating mood and visual sophistication through layering</li>
            <li><div className="obj-dot">✓</div>Text over photos: ensuring typography is readable with contrast techniques</li>
            <li><div className="obj-dot">✓</div>Packaging mockups: placing your design on actual 3D box/bottle mockups</li>
          </ul>
        </div>
      </div>

      <div className="card card-wide" style={{ marginBottom: '22px' }}>
        <h3>🔧 Photoshop for Commercial Design — Professional Techniques</h3>

        <div className="accordion">
          <div className="acc-header" >🗂️ Layers — Organizing Commercial Designs Professionally <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>The layer structure for commercial design:</strong> A professional commercial design file is organized hierarchically. Instead of randomly stacking layers, group them logically into folders.</p>
            <p><strong>Commercial Design Layer Organization:</strong> Folder 1: Background (base color, texture, subtle patterns) · Folder 2: Product/Hero Image (main product photo, cut cleanly with mask) · Folder 3: Supporting Imagery (secondary photos, lifestyle shots) · Folder 4: Design Elements (colored rectangles, shapes, icons) · Folder 5: Typography (all text layers) · Folder 6: Adjustments (adjustment layers for color consistency)</p>
            <div className="example-box">
              <div className="ex-label">💡 PROFESSIONAL TIP</div>
              Use descriptive layer names. Not "Layer 1" or "Copy" — use "Product Photo - Main," "Hero Headline - 48pt," "Brand Color Overlay," "Price Callout." When you return in three months, you'll navigate instantly. Lock layers you've finished editing to prevent accidental modifications.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🎭 Product Photography & Masking for Commercial Use <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>The golden principle:</strong> Never permanently erase pixels. Always use layer masks. When your client says "actually, can we show more of the background?" you'll be grateful you saved the original photo.</p>
            <p><strong>Product Masking Workflow:</strong> (1) Import photo as Smart Object (File → Place Embedded). (2) Use Quick Selection (W) to select the product. (3) Go to Select → Select & Mask. (4) Enable Smart Radius (20-40px) for clean edges. (5) Set Output to "Layer Mask." Your product is cleanly cut out, pixels preserved.</p>
            <div className="example-box">
              <div className="ex-label">✅ EFFECTIVE DESIGN</div>
              Luxury watch: photographed against clean white, precisely masked with feathered edges (10-20px = professional finish), placed on slightly transparent texture. The watch floats, commanding attention.
            </div>
            <div className="example-box">
              <div className="ex-label">❌ INEFFECTIVE DESIGN</div>
              Same watch with rough selection edge (no feathering), placed against distracting photo background. The harsh line is visible. Background competes with product. Overall looks amateur and cheap.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🎨 Color Correction for Brand Consistency <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>The problem:</strong> You've photographed products under different lighting. One photo warm golden, another cool blue, another neutral. In a brochure, these inconsistencies undermine credibility. Solution: Use adjustment layers to match all photos to your brand color temperature.</p>
            <p><strong>The 6 Essential Adjustments:</strong> Levels (brightness/contrast), Curves (most powerful), Hue/Saturation (shift color), Color Balance (warm or cool feel), Vibrance (boost vibrancy), Photo Filter (preset lens filters).</p>
            <div className="example-box">
              <div className="ex-label">🎯 COLOR MATCHING TIP</div>
              Set your primary brand color as a reference. Add solid color layer in that color at 10% opacity below the photo. Does the photo feel cohesive? If not, adjust using adjustment layers. When photo and brand color "go together," you've achieved tonal consistency.
            </div>
          </div>
        </div>

        <div className="accordion">
          <div className="acc-header" >🌀 Blending Modes for Visual Sophistication <span className="acc-arrow">▾</span></div>
          <div className="acc-body">
            <p><strong>The 5 Commercial Blending Modes:</strong></p>
            <p><strong>Multiply (Darkens)</strong> — The workhorse. Place solid color at 30-60% opacity to add color without destroying detail. Apply brand color to make photos feel branded. Apply dark overlays to make white text readable on top.</p>
            <p><strong>Screen (Brightens)</strong> — Opposite of Multiply. Lighten dark photos. Place patterns in Screen mode to add subtle visual interest without overwhelming.</p>
            <p><strong>Overlay (Increases Contrast)</strong> — Combines Multiply and Screen. Creates punch. Use sparingly (20-40%) for sophistication.</p>
            <p><strong>Color (Tints)</strong> — Apply one layer's color to another's luminosity. Use to shift photo temperature or create cohesive tone.</p>
            <p><strong>Luminosity (Adds Detail)</strong> — Apply only brightness. Use for sharpening or texture without color effects.</p>
            <div className="example-box">
              <div className="ex-label">📌 TEXT-OVER-PHOTO TECHNIQUE</div>
              To make text readable over photo: Place solid color rectangle (brand color at 40-60% opacity) in Multiply mode over photo zone where text appears. White text now reads crystal-clear against darkened background. Professional magazines use this constantly.
            </div>
          </div>
        </div>

      </div>

      <div className="card card-wide" style={{ marginBottom: '22px' }}>
        <h3>📸 Photo Resources & Professional Setup for Commercial Design</h3>
        <div style={{ paddingTop: '12px' }}>
          <strong style={{ display: 'block', marginBottom: '10px' }}>Free Stock Photography (Limited Commercial Use):</strong>
          <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
            <li>Unsplash.com — 3M+ commercial-licensed photos</li>
            <li>Pexels.com — Strong diversity, great for backgrounds</li>
            <li>Pixabay.com — Broader mix of photos, illustrations, vectors</li>
          </ul>

          <strong style={{ display: 'block', marginBottom: '10px' }}>Professional Document Setup:</strong>
          <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
            <li><strong>Print Collateral:</strong> 8.5" × 11", 300 DPI, CMYK color, 0.25" bleed</li>
            <li><strong>E-Commerce:</strong> 800×1200px minimum, 72 DPI, RGB color, PNG or JPEG</li>
            <li><strong>Packaging Labels:</strong> Custom dimensions (consult printer), 300 DPI, CMYK, 0.25" bleed, registration marks</li>
          </ul>

          <strong style={{ display: 'block', marginBottom: '10px' }}>Pro Tip on Investment:</strong>
          <p style={{ marginLeft: '0' }}>Hire a professional photographer for your hero product photo ($200-500 for product shoot). Everything else can use stock photos. Your hero product photo is what differentiates commodity from premium branding. Generic stock photos make your brand look generic.</p>
        </div>
      </div>

      <div className="case-study">
        <div className="cs-label">📚 CASE STUDY — HOW PREMIUM BRANDS USE PHOTOGRAPHY</div>
        <h4>Apple's Photography Philosophy</h4>
        <p>Apple's commercial design relies almost entirely on photography. Their packaging, marketing materials, website, retail displays — all photography-driven.</p>
        <p><strong>Their approach:</strong> Minimal photography (one clean subject per frame), extreme color consistency (every photo same temperature), perfect lighting (no harsh shadows), generous white space (subject occupies 30-50% of frame).</p>
        <div className="cs-takeaway"><strong>The lesson:</strong> One great product photo beats 100 generic stock photos. Invest in photography. Make it the hero of your design, not the supporting actor.</div>
      </div>

      <div className="homework">
        <h3>🏠 At-Home Tasks — Due Before Lesson 4</h3>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 1 — Commercial Photo Compositing (90 min):</strong> Create a promotional flyer or package label in Photoshop using: (1) at least one custom product photo (yours or from free stock), (2) product cutout using masking technique (clean, professional edges), (3) color correction and brand-color overlay, (4) typography over photo with readable contrast, (5) professional export (PSD master + PDF for print).</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 2 — Photo Color Matching (30 min):</strong> Find 3 product photos from the same brand (e.g., three Nike shoe photos). Analyze: Are they color-consistent? Create a document showing: original photo + color-corrected version + before/after side-by-side comparison. Document how you adjusted them in Photoshop.</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Task 3 — Blending Mode Exploration (45 min):</strong> Take one product photograph. Create versions showing each of the 5 essential blending modes applied (Multiply, Screen, Overlay, Color, Luminosity) at 30%, 60%, and 100% opacity. Document which looks most professional for your product and why. Create a sample board showing all permutations.</div></div>
        <div className="hw-task"><div className="hw-check" ></div><div><strong>Bonus 🌟 — Professional Mockup:</strong> Find a real commercial template (product box, business card, label template) online. Download the PSD. Place your Photoshop design into the mockup. Export as photorealistic image. This shows clients what the final product looks like.</div></div>
      </div>
    </div>
  </>
);
