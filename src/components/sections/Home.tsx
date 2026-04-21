type HomeProps = {
  onStart: () => void;
};

export const Home = ({ onStart }: HomeProps) => {
  return (
    <div className="container hero-section">
      <h1 className="mega-title">
        التصميم هو
        <br />
        <span style={{ color: 'var(--accent)' }}>تواصل بصري.</span>
      </h1>
      <p className="mega-subtitle">
        دورة مكثفة من 4 أيام. انتقل من تصميم الهاوي إلى عقلية المحترف. تعلم القواعد الذهبية، الألوان، التسلسل البصري، والتطبيق العملي.
      </p>
      <div>
        <button className="btn-primary" onClick={onStart}>
          ابدأ اليوم الأول الآن
        </button>
      </div>
    </div>
  );
};
