import React from 'react';
import Header from './components/Header';
import CareerObjective from './components/CareerObjective';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Disclaimer from './components/Disclaimer';

function App() {
  return (
    <div className="container p-4  md:m-20 ">
     <div className='bg-white'> 
      <Header />
      <CareerObjective />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Disclaimer />
      </div>
    </div>
  );
}

export default App;
