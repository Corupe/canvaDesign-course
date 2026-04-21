import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from 'framer-motion';

// Cinematic Varients
const slideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Controls the orchestration of child elements
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

// Map Markdown elements to Motion elements to achieve the consecutive step-by-step
const CinematicComponents: any = {
  h1: ({node, ...props}: any) => <motion.h1 variants={itemVariants} {...props} />,
  h2: ({node, ...props}: any) => <motion.h2 variants={itemVariants} {...props} />,
  h3: ({node, ...props}: any) => <motion.h3 variants={itemVariants} {...props} />,
  p: ({node, ...props}: any) => <motion.p variants={itemVariants} {...props} />,
  blockquote: ({node, ...props}: any) => <motion.blockquote variants={itemVariants} {...props} />,
  ul: ({node, ...props}: any) => <motion.ul variants={listVariants} {...props} />,
  ol: ({node, ...props}: any) => <motion.ol variants={listVariants} {...props} />,
  li: ({node, ...props}: any) => <motion.li variants={itemVariants} {...props} />,
  table: ({node, ...props}: any) => (
    <motion.div variants={itemVariants} style={{ width: '100%', overflowX: 'auto' }}>
      <table {...props} />
    </motion.div>
  ),
  img: ({node, ...props}: any) => <motion.img variants={itemVariants} {...props} />,
};

type Props = {
  markdownUrl: string;
  title: string;
  onExit?: () => void;
};

export const CinematicSlider = ({ markdownUrl, title, onExit }: Props) => {
  const [slides, setSlides] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(markdownUrl)
      .then((res) => res.text())
      .then((text) => {
        // Strip emojis to comply with "remove emojis"
        const noEmojis = text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, '');
        
        // Split precisely via Horizontal rule
        const validSlides = noEmojis
          .split(/\n\s*---\s*\n/)
          .map((p) => p.trim())
          .filter((p) => p.length > 0 && p !== '---');

        setSlides(validSlides);
        setCurrentIndex(0);
      })
      .catch(console.error);
  }, [markdownUrl]);

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

  if (slides.length === 0) {
    return <div className="loading-state">جاري تجهيز العرض السينمائي...</div>;
  }

  const progressPercent = ((currentIndex + 1) / slides.length) * 100;

  return (
    <div className="presentation-fullscreen cinematic-mode">
      {onExit && (
        <button className="exit-btn" onClick={onExit}>
          × خروج
        </button>
      )}

      {/* Cinematic Micro Progress Bar */}
      <div className="cinematic-progress-bar-container">
        <div className="cinematic-progress-bar" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="slideshow-header-cinematic">
        <div className="slideshow-meta-cinematic">
          {title} &nbsp;&mdash;&nbsp; {currentIndex + 1} / {slides.length}
        </div>
      </div>
      
      <div className="slide-content-area-cinematic">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={`cinematic-slide-inner ${slides[currentIndex].includes('![') ? 'has-image' : ''}`}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ReactMarkdown
              components={CinematicComponents}
              remarkPlugins={[remarkGfm]}
            >
              {slides[currentIndex]}
            </ReactMarkdown>
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
