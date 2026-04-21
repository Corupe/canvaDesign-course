type HeaderProps = {
  activePage: string;
  onNav: (page: string) => void;
};

export const Header = ({ activePage, onNav }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo" onClick={() => onNav('home')}>
          دورة التصميم <span>المكثفة</span>
        </div>
        <nav className="nav-links">
          <button 
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => onNav('home')}
          >
            الرئيسية
          </button>
          <button 
            className={`nav-link ${activePage === 'day1' ? 'active' : ''}`}
            onClick={() => onNav('day1')}
          >
            اليوم الأول
          </button>
          <button 
            className={`nav-link ${activePage === 'day2' ? 'active' : ''}`}
            onClick={() => onNav('day2')}
          >
            اليوم الثاني
          </button>
          <button 
            className={`nav-link ${activePage === 'day3' ? 'active' : ''}`}
            onClick={() => onNav('day3')}
          >
            اليوم الثالث
          </button>
          <button 
            className={`nav-link ${activePage === 'day4' ? 'active' : ''}`}
            onClick={() => onNav('day4')}
          >
            اليوم الرابع
          </button>
        </nav>
      </div>
    </header>
  );
};
