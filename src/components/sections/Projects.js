import React from 'react';
import '../styles/Projects.css';
import ProjectItem from '../scripts/ProjectItem';
import ParticlesComponent from '../scripts/Particles';

function Projects() {
  return (
    <div id='projects-section'>
      <div className='projects'>
        <ParticlesComponent id="whiteparticles" />
        <div className='projects-title-section'>
          <h1>Coding Portfolio</h1>
        </div>
        <div className='projects__container'>
          <div className='projects__wrapper'>
            <ul className='projects__items'>
              <ProjectItem
                src='images/Alzheimer_Detection.jpeg'
                text='Altheimzer Disease Detection using CNN'
                label='Python'
                url='https://github.com/devxinvestor/Alzheimer-Detection'
              />
              <ProjectItem
                src='images/bw_algo.jpg'
                text='Algorithmic Trading Stock Screener'
                label='Python'
                url='https://github.com/devxinvestor/Algorithmic-Trading'
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
