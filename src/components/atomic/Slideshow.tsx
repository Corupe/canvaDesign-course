import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type SlideshowProps = {
  markdownUrl: string;
  title: string;
  onExit?: () => void;
};

export const Slideshow = ({ markdownUrl, title, onExit }: SlideshowProps) => {
  const [slides, setSlides] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Animation states
  const [stepIndex, setStepIndex] = useState(0);
  const [maxSteps, setMaxSteps] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(markdownUrl)
      .then(res => res.text())
      .then(text => {
        // Strip out emojis via regex to meet requirements
        const noEmojis = text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, '');
        const rawParts = noEmojis.split(/\n\s*---\s*\n/);
        const validSlides = rawParts
          .map(p => p.trim())
          .filter(p => p.length > 0 && p !== '---' && p !== '--- \n---');
        setSlides(validSlides);
        setCurrentIndex(0);
        setStepIndex(0);
      })
      .catch(console.error);
  }, [markdownUrl]);

  // Step-by-step logic
  useEffect(() => {
    if (contentRef.current) {
      const items = contentRef.current.querySelectorAll('li');
      items.forEach((item, i) => {
        const el = item as HTMLElement;
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        
        if (i < stepIndex) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        } else {
          el.style.opacity = '0';
          el.style.transform = 'translateY(15px)';
        }
      });
      setMaxSteps(items.length);
    }
  }, [currentIndex, stepIndex, slides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }), [slides.length, currentIndex, stepIndex, maxSteps];

  const nextAction = () => {
    if (stepIndex < maxSteps) {
      setStepIndex(s => s + 1);
    } else if (currentIndex < slides.length - 1) {
      setCurrentIndex(c => c + 1);
      setStepIndex(0);
    }
  };

  const prevAction = () => {
    if (stepIndex > 0) {
      setStepIndex(0); // Optional: reverse step by step is usually tedious in slides, resetting is faster. But let's step back nicely.
      // Actually, standard PowerPoint steps back 1 by 1.
      // But going back an entire slide is often preferred. Let's step back 1.
      setStepIndex(s => s - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex(c => c - 1);
      setStepIndex(0); // We could calculate total list items of previous slide, but it's simpler to show it without steps
    }
  };

  if (slides.length === 0) {
    return <div className="loading-state">جاري تحميل العرض التقديمي...</div>;
  }

  return (
    <div className="presentation-fullscreen">
      {onExit && (
        <button className="exit-btn" onClick={onExit}>
          × خروج
        </button>
      )}

      <div className="slideshow-header-cinematic">
        <div className="slideshow-meta-cinematic">
          {title} &nbsp;—&nbsp; {currentIndex + 1} / {slides.length}
        </div>
      </div>
      
      <div className="slide-content-area" ref={contentRef} key={currentIndex}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {slides[currentIndex]}
        </ReactMarkdown>
      </div>

      <div className="slideshow-controls-floating">
        <button 
          className="btn-arrow" 
          onClick={nextAction} 
          disabled={currentIndex === slides.length - 1 && stepIndex === maxSteps}
        >
          ❯
        </button>
        <button 
          className="btn-arrow" 
          onClick={prevAction} 
          disabled={currentIndex === 0 && stepIndex === 0}
        >
          ❮
        </button>
      </div>
    </div>
  );
};
