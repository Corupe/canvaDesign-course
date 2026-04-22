import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from 'framer-motion';
import type { CourseDay } from '../../types/presentation';

// Cinematic Variants
const slideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren' as const,
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' as const }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 }
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

type Props = {
  courseData: CourseDay;
  onExit?: () => void;
};

// Markdown component wrapper to avoid strict <p> nesting rules 
const Mkdwn = ({ children, isInline = true }: { children: string, isInline?: boolean }) => {
  return (
    <ReactMarkdown
      components={isInline ? { p: React.Fragment } : undefined}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
};

export const CinematicSlider = ({ courseData, onExit }: Props) => {
  const slides = courseData.slides;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // In RTL, ArrowLeft physically feels like "forward/next" for layout, depending on user system. 
      // But standard is Right/Down -> Next
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === ' ') {
        nextAction();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        prevAction();
      } else if (e.key === 'Escape' && onExit) {
        onExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, slides.length]);

  const nextAction = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevAction = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!slides || slides.length === 0) {
    return <div className="loading-state">لا يوجد محتوى للعرض...</div>;
  }

  const currentSlide = slides[currentIndex];
  const progressPercent = ((currentIndex + 1) / slides.length) * 100;
  const hasImages = currentSlide.images && currentSlide.images.length > 0;

  return (
    <div className="presentation-fullscreen cinematic-mode">
      {onExit && (
        <button className="exit-btn" onClick={onExit}>
          × خروج
        </button>
      )}

      {/* Cinematic Micro Progress Bar */}
      <div className="cinematic-progress-bar-container">
        <div className="cinematic-progress-bar" style={{ width: progressPercent + '%' }} />
      </div>

      <div className="slideshow-header-cinematic">
        <div className="slideshow-meta-cinematic">
          {courseData.title} &nbsp;&mdash;&nbsp; {currentIndex + 1} / {slides.length}
        </div>
      </div>

      <div className="slide-content-area-cinematic " style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(3rem, 6vw, 6rem)' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            className={'cinematic-slide-inner ' + (hasImages ? 'has-image' : '')}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={
              hasImages
                ? {
                  display: 'grid',
                  gridTemplateColumns: 'minmax(300px, 40%) 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                  height: '100%'
                }
                : { height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }
            }
          >
            {/* LEFT COLUMN: IMAGES */}
            {hasImages && (
              <div
                className="slide-image-column"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '1.5rem',
                  maxHeight: '100%',
                }}
              >
                {currentSlide.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    variants={itemVariants}
                    alt="مرافق للعرض"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 'calc(' + (100 / currentSlide.images.length) + '% - 1rem)',
                      objectFit: 'contain',
                      borderRadius: '16px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                      background: 'rgba(255,255,255,0.02)'
                    }}
                  />
                ))}
              </div>
            )}

            {/* RIGHT COLUMN: TEXT (or full width if no images) */}
            <div
              className="slide-text-column"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                justifyContent: 'center',
                maxHeight: '100%'
              }}
            >
              {currentSlide.sections.map((section, sIdx) => (
                <div key={sIdx} className="slide-section" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {section.elements.map((element, eIdx) => {
                    if (element.type === 'h1') return <motion.h1 key={eIdx} variants={itemVariants}><Mkdwn>{(element as any).text}</Mkdwn></motion.h1>;
                    if (element.type === 'h2') return <motion.h2 key={eIdx} variants={itemVariants}><Mkdwn>{(element as any).text}</Mkdwn></motion.h2>;
                    if (element.type === 'h3') return <motion.h3 key={eIdx} variants={itemVariants}><Mkdwn>{(element as any).text}</Mkdwn></motion.h3>;
                    if (element.type === 'blockquote') return <motion.blockquote key={eIdx} variants={itemVariants}><Mkdwn>{(element as any).text}</Mkdwn></motion.blockquote>;

                    if (element.type === 'ul') return (
                      <motion.ul key={eIdx} variants={listVariants}>
                        {(element as any).items.map((item: string, i: number) => (
                          <motion.li key={i} variants={itemVariants}><Mkdwn>{item}</Mkdwn></motion.li>
                        ))}
                      </motion.ul>
                    );

                    if (element.type === 'ol') return (
                      <motion.ol key={eIdx} variants={listVariants}>
                        {(element as any).items.map((item: string, i: number) => (
                          <motion.li key={i} variants={itemVariants}><Mkdwn>{item}</Mkdwn></motion.li>
                        ))}
                      </motion.ol>
                    );

                    if (element.type === 'table') return (
                      <motion.div key={eIdx} variants={itemVariants} style={{ width: '100%', overflowX: 'auto' }}>
                        <Mkdwn isInline={false}>{(element as any).text}</Mkdwn>
                      </motion.div>
                    );

                    // default to p
                    if ((element as any).text === '---') return <motion.hr key={eIdx} variants={itemVariants} />;

                    return <motion.p key={eIdx} variants={itemVariants}><Mkdwn>{(element as any).text}</Mkdwn></motion.p>;
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Embedded Controls */}
      <div className="slideshow-controls-floating">
        <button
          className="btn-arrow"
          onClick={nextAction}
          disabled={currentIndex === slides.length - 1}
        >
          ❯
        </button>
        <button
          className="btn-arrow"
          onClick={prevAction}
          disabled={currentIndex === 0}
        >
          ❮
        </button>
      </div>
    </div>
  );
};
