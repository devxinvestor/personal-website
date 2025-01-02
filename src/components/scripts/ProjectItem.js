import React from 'react';

function ProjectItem(props) {
  return (
    <>
      <li className='projects__item'>
        <a className='projects__item__link' href={props.url} target="_blank" rel="noopener noreferrer">
          <figure className='projects__item__pic-wrap' data-category={props.label}>
            <img
            className='projects__item__img'
            alt='Coding Project'
            src={props.src}
          />
          </figure>
          <div className='projects__item__info'>
            <h5 className='projects__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default ProjectItem;
