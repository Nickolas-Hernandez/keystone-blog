import React, { useState, useEffect, useRef } from 'react';

function Nav({ categories }) {
  const [ activeTab, setActiveTab] = useState('Dev');
  const [ sliderPosition, setSliderPosition] = useState(null);

  const tabs = categories.map(category => {
    return(
      <CategoryTab categoryName={category.categoryName} activeTab={activeTab}/> // add key
    );
  });


  const slider = useRef(null);

  useEffect(() => {
    const position = slider.current.getBoundingClientRect();
    slider.current.style.left = position.left + 'px';
    console.log('left', position.left);
  });

  const animationHandler = (event) => {
    if(event.target.className !== 'nav-link') return;
    setActiveTab(event.target.textContent);
    const tabRect = event.target.getBoundingClientRect();
    const offset = tabRect.width / 4;
    const nextPosition = event.target.textContent === 'Dev' ? tabRect.left : tabRect.left + offset;
    slider.current.style.left = nextPosition + 'px';
  };


  return (
    <nav onClick={animationHandler}>
      <ul className="nav-links">{tabs}</ul>
      <span className="nav-slider" ref={slider}></span>
    </nav>
  );
}

function CategoryTab ({ categoryName, activeTab }){
  const isActive = (categoryName === activeTab) ? true : false;
  return (
    <li className={isActive ? 'nav-link active' : 'nav-link'}>{categoryName}</li>
  );
}

export default Nav;
