import React, { useState, useEffect } from 'react';
import { SectionLabel } from '../atomic/SectionLabel';
import { SectionTitle } from '../atomic/SectionTitle';
import { Lesson1 } from './Lesson1';
import { Lesson2 } from './Lesson2';
import { Lesson3 } from './Lesson3';
import { Lesson4 } from './Lesson4';

export const Lessons: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const header = target.closest('.acc-header');
      if (header) {
        const isOpen = header.classList.contains('open');
        document.querySelectorAll('.acc-header').forEach(h => {
          h.classList.remove('open');
          if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
        });
        if (!isOpen) {
          header.classList.add('open');
          if (header.nextElementSibling) header.nextElementSibling.classList.add('open');
        }
      }

      const swatch = target.closest('.swatch') as HTMLElement;
      if (swatch) {
        const hex = swatch.textContent;
        if (hex) {
          navigator.clipboard.writeText(hex).catch(() => {});
          const msg = document.getElementById('copy-msg');
          if (msg) {
            msg.textContent = '✓ Copied ' + hex;
            msg.style.opacity = '1';
            setTimeout(() => { msg.style.opacity = '0'; }, 2000);
          }
        }
      }
      
      const printBtn = target.closest('.print-btn');
      if (printBtn) {
          window.print();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <section id="lessons">
      <SectionLabel>COURSE CONTENT</SectionLabel>
      <SectionTitle>Lessons</SectionTitle>

      <div className="lesson-tabs">
        <button className={`lesson-tab ${activeLesson === 0 ? 'active' : ''}`} onClick={() => setActiveLesson(0)}>📐 Lesson 1 — Foundations</button>
        <button className={`lesson-tab ${activeLesson === 1 ? 'active' : ''}`} onClick={() => setActiveLesson(1)}>📊 Lesson 2 — Storytelling</button>
        <button className={`lesson-tab ${activeLesson === 2 ? 'active' : ''}`} onClick={() => setActiveLesson(2)}>🖼️ Lesson 3 — Photoshop</button>
        <button className={`lesson-tab ${activeLesson === 3 ? 'active' : ''}`} onClick={() => setActiveLesson(3)}>✏️ Lesson 4 — Illustrator</button>
      </div>

      <div className={`lesson-panel ${activeLesson === 0 ? 'active' : ''}`}>
        {activeLesson === 0 && <Lesson1 />}
      </div>
      <div className={`lesson-panel ${activeLesson === 1 ? 'active' : ''}`}>
        {activeLesson === 1 && <Lesson2 />}
      </div>
      <div className={`lesson-panel ${activeLesson === 2 ? 'active' : ''}`}>
        {activeLesson === 2 && <Lesson3 />}
      </div>
      <div className={`lesson-panel ${activeLesson === 3 ? 'active' : ''}`}>
        {activeLesson === 3 && <Lesson4 />}
      </div>
    </section>
  );
};
