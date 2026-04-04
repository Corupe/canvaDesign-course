

import { useState } from 'react';
import './App.css';
import { Header } from './components/atomic/Header';
import { Hero } from './components/atomic/Hero';
import { Footer } from './components/atomic/Footer';

import { Overview } from './components/sections/Overview';
import { Lessons } from './components/sections/Lessons';
import { Resources } from './components/sections/Resources';

function App() {
  const [section, setSection] = useState('overview');

  return (
    <>
      <Header activeSection={section} onNav={setSection} />
      <main>
        <Hero />
        {section === 'overview' && <Overview />}
        {section === 'lessons' && <Lessons />}
        {section === 'resources' && <Resources />}
      </main>
      <Footer />
    </>
  );
}

export default App;
