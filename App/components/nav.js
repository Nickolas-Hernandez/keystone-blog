import React, { useState, useEffect, useRef } from 'react';

function Nav({ categories }) {
  const [ activeTab, setActiveTab] = useState('Dev');
  const slider = useRef(null);

  const tabs = categories.map(category => {
    return(
      <CategoryTab categoryName={category.categoryName} activeTab={activeTab}/> // add key
    );
  });

  const animationHandler = (event) => {
    if(!event.target.classList.contains('nav-link')) return;
    setActiveTab(event.target.textContent);
    const tabRect = event.target.getBoundingClientRect();
    const offset = tabRect.width / 4;
    const nextPosition = event.target.textContent === 'Dev' ? tabRect.left : tabRect.left + offset;
    slider.current.style.left = nextPosition + 'px';
    slider.current.style.width = tabRect.width / 2 + 'px';
  };

  return (
    <nav onClick={animationHandler}>
      <ul className="nav-links">{tabs}</ul>
      <span className="nav-slider" ref={slider}></span>
    </nav>
  );
}

function CategoryTab ({ categoryName, activeTab }){
  const isActive = (categoryName === activeTab) ? 'active' : '';
  const isHidden = (categoryName === 'Latest' || categoryName === 'Featured') ? 'hideDesktop' : '';
  return (
    <li className={"nav-link " + isActive + ' ' + isHidden}>{categoryName}</li>
  );
}

export default Nav;
