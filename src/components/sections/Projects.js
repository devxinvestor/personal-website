import React from 'react';
import '../styles/Projects.css';
import ProjectItem from '../scripts/ProjectItem';

function Projects() {
  return (
    <div id='projects-section'>
      <div className='projects'>
        <div className='projects-title-section'>
          <h1>Coding Portfolio</h1>
        </div>
        <div className='projects__container'>
          <div className='projects__wrapper'>
            <ul className='projects__items'>
              <ProjectItem
                src='images/Alzheimer_Detection.jpeg'
                text="Alzheimer's Disease Detection using CNN"
                label='Python'
                url='https://github.com/devxinvestor/Alzheimer-Detection'
              />
              <ProjectItem
                src='images/TradEx.png'
                text='TradEx – Community Trading App'
                label='Svelte, Go, SQLite'
                url='https://github.com/goldenbergdaniel/SWE-Final-Project'
              />
            </ul>
            <ul className='projects__items'>
              <ProjectItem
                src='images/Options_Pic.png'
                text="ML Options Pricing Model Using XGBoost & GARCH"
                label='Python'
                url='https://github.com/devxinvestor/Options'
              />
              <ProjectItem
                src='images/bw_algo.jpg'
                text='Algorithmic Trading Stock Screener'
                label='Python'
                url='https://github.com/devxinvestor/Algorithmic-Trading'
              />
              <ProjectItem
                src='images/Minesweeper.png'
                text='Minesweeper'
                label='C++'
                url='https://github.com/devxinvestor/Minesweeper'
              />
            </ul>
            <ul className='projects__items'>
              <ProjectItem
                src='images/bw_mathml.jpg'
                text='Math for Machine Learning'
                label='Julia'
                url='https://github.com/devxinvestor/Math-for-Machine-Learning'
              />
              <ProjectItem
                src='images/bw_tictactoe.png'
                text='AI Tic Tac Toe'
                label='Python'
                url='https://github.com/devxinvestor/Tic-Tac-Toe'
              />
              <ProjectItem
                src='images/bw_avltree.png'
                text='AVL Tree'
                label='C++'
                url='https://github.com/devxinvestor/AVL-Tree'
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
