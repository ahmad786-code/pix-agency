 

import React, { useEffect } from 'react';
import anime from 'animejs';
import './anim.css'

function AnimatedComponent() {
  useEffect(() => {
    // Initialize the Anime.js animations
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 850
    });

    tl.add({
      targets: 'section .item',
      height: '100%',
      backgroundColor: '#F6A9BD',
      delay: anime.stagger(100)
    });

    tl.add({
      targets: 'section .item',
      delay: anime.stagger(70),
      height: '97%',
      backgroundColor: '#F4E0E1'
    });

    tl.add({
      targets: 'section .item',
      backgroundColor: '#FFFFFF',
      delay: anime.stagger(50, { from: 'center' })
    });

    tl.add({
      targets: '.text',
      top: '25%',
      duration: 4500,
      opacity: 1
    }, '-=1000');

    // Wrapping each letter in a span for animation
    const textWrapper = document.querySelector('.effect1');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/([^.\s]|\w)/g, "<span class='letter'>$&</span>");
      
      anime.timeline()
        .add({
          targets: '.effect1 .letter',
          scale: [5,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 1350,
          delay: (el, i) => 70 * i
        }, 1500);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="effect1">PIXI</h1>
      <h1 className="text">MGT</h1>
      

      <section className='anim'>
        {Array.from({ length: 10 }, (_, i) => <div className="item" key={i}></div>)}
      </section>

      {/* Assuming there's a footer that would be included here */}
    </div>
  );
}

export default AnimatedComponent;

 
