import React from 'react';

interface HeaderProps {
    activeSection: string;
    onNav: (section: string) => void;
}

const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'resources', label: 'Resources' },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, onNav }) => (
    <header className="header">
        <div className="logo">
            <img src="/evol-logo.svg" alt="EVOL" className="logo-img" />
            <span>Commercial Design</span>
        </div>
        <nav className="nav-pills">
            {navItems.map(item => (
                <button
                    key={item.id}
                    className={`nav-pill${activeSection === item.id ? ' active' : ''}`}
                    onClick={() => onNav(item.id)}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    </header>
);
