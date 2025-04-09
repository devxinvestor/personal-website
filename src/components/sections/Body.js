import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../styles/Body.css';
import ParticlesComponent from '../scripts/Particles';
import typeSentence, { waitForMs } from '../scripts/TypeSentence';
import deleteSentence from '../scripts/DeleteSentence';
import { scrollToSection } from '../scripts/Scroll';

function Body() {
  const [sentence, setSentence] = useState('');

  useEffect(() => {
    const sentences = [
      "HELLO! WELCOME TO MY WEBSITE",
      "MY NAME IS DEVIN MOHR",
      "I AM A JUNIOR AT THE UNIVERSITY OF FLORIDA",
      "I AM PURSUING A B.S. IN COMPUTER SCIENCE AND AN M.S. IN FINANCE"
    ];

    const runAnimation = async () => {
      for (const sentence of sentences) {
        await typeSentence(sentence, setSentence);
        await waitForMs(2000); // Wait for 2 seconds before deleting
        await deleteSentence(sentence, setSentence);
      }
      runAnimation(); // Call runAnimation again to loop
    };

    runAnimation();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id='home-section'>
      <div className='body-container'>
        <ParticlesComponent id="tsparticles" />
        <div className="typing-container">
          <span id="sentence" className="sentence">
            <h1>
              {sentence}
            </h1>
          </span>
        </div>
        <div className='body-btns'>
          <button
            className='btn btn--outline btn--large'
            onClick={() => {
              scrollToSection('about-section');
            }}
          >
            ABOUT ME
          </button>
          <button
            className='btn btn--primary btn--large'
            onClick={() => {
              scrollToSection('projects-section');
            }}
          >
            PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;