import React, { useState, useEffect, useRef } from 'react';

function Nav({ categories }) {
  const tabs = categories.map(category => {
    return(
      <CategoryTab categoryName={category.categoryName} /> // add key
    );
  });

  // const [ xPosition, setXPosition] = useState(0);

  const slider = useRef(null);
  // useEffect(() => {
  //   const rect = slider.current.getBoundingClientRect();
  //   console.log('span', rect.left);
  //   setXPosition(rect.left);
  // })

  const animationHandler = (event) => {
    if(event.target.className !== 'nav-link') return;
    const tabRect = event.target.getBoundingClientRect();
    const nextPosition = tabRect.left;
    slider.current.style.left = nextPosition + 'px';
    console.log(slider.current.style);
  };

  return (
    <nav onClick={animationHandler}>
      <ul className="nav-links">{tabs}</ul>
      <span className="nav-slider" ref={slider}></span>
    </nav>
  );
}

function CategoryTab ({ categoryName }){
  const url = `/${categoryName}`;
  const isActive = (categoryName === 'Dev') ? true : false;
  return (
    <li className={isActive ? 'nav-link active' : 'nav-link'}>{categoryName}</li>
  );
}

export default Nav;
