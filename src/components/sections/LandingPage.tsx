import { motion } from 'framer-motion';

type Props = {
  onStart: (day: number) => void;
};

const levels = [
  { id: 1, title: 'التصميم الجرافيكي', subtitle: 'مدخل إلى عالم البصر' },
  { id: 2, title: 'نظرية اللون والصورة', subtitle: 'كيف نرى ونشعر' },
  { id: 3, title: 'بناء الهوية البصرية', subtitle: 'من الفكرة للتنفيذ' },
  { id: 4, title: 'الاحتراف والعمل الحر', subtitle: 'سوق العمل والنقد' },
];

export const LandingPage = ({ onStart }: Props) => {
  return (
    <div className="landing-container">
      <motion.div 
        className="landing-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img 
          src="/EVOL logo.svg" 
          alt="EVOL Logo" 
          className="evol-logo-hero"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, type: "spring" }}
        />
        
        <motion.h1 
          className="landing-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Evol Startup
        </motion.h1>
        
        <motion.p 
          className="landing-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          اكتشف أسرار التواصل البصري في رحلة تعليمية مكثفة
        </motion.p>
      </motion.div>

      <div className="landing-grid">
        {levels.map((level, idx) => (
          <motion.div 
            key={level.id}
            className="landing-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + idx * 0.15, duration: 0.6 }}
            onClick={() => onStart(level.id)}
          >
            <div className="card-number">0{level.id}</div>
            <h3 className="card-title">{level.title}</h3>
            <p className="card-subtitle">{level.subtitle}</p>
            <div className="card-hover-line" />
          </motion.div>
        ))}
      </div>

      <motion.footer 
        className="landing-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>&copy; 2026 EVOL Academy</span>
        <div className="accent-dot" />
        <span>جميع الحقوق محفوظة</span>
      </motion.footer>
    </div>
  );
};
