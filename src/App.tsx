import { useState } from 'react';
import './App.css';
import { LandingPage } from './components/sections/LandingPage';
import { Day1 } from './components/sections/Day1';
import { Day2 } from './components/sections/Day2';
import { Day3 } from './components/sections/Day3';
import { Day4 } from './components/sections/Day4';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const onExit = () => setCurrentPage('home');

  const handleStart = (dayNumber: number) => {
    setCurrentPage(`day${dayNumber}`);
  };

  return (
    <div className="presentation-app">
      <main>
        {currentPage === 'home' && <LandingPage onStart={handleStart} />}
        {currentPage === 'day1' && <Day1 onExit={onExit} />}
        {currentPage === 'day2' && <Day2 onExit={onExit} />}
        {currentPage === 'day3' && <Day3 onExit={onExit} />}
        {currentPage === 'day4' && <Day4 onExit={onExit} />}
      </main>
    </div>
  );
}

export default App;
