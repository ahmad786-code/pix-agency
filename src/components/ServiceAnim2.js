  

import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import './animservice2.css';

function ServiceAnim2() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    playAnimation();
  }, []);

  const playAnimation = () => {
    setIsAnimating(true);

    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 425, // Halved the duration
      complete: () => {
        setIsAnimating(false);
        const letters = document.querySelectorAll('.effect3 .letter');
        letters.forEach(letter => letter.classList.remove('letter'));
      },
    });

    tl.add({
      targets: 'section .item',
      height: '100%',
      backgroundColor: '#F6A9BD',
      // delay: anime.stagger(50) // Adjust delay if necessary
    });

    tl.add({
      targets: 'section .item',
      // delay: anime.stagger(35),
      height: '97%',
      backgroundColor: '#F4E0E1',
    });

    tl.add({
      targets: 'section .item',
      backgroundColor: '#FFFFFF',
      delay: anime.stagger(25, { from: 'center' }), // Adjusted stagger delay
    });

    // Correct animation for .text2 from below the initial visible area
    tl.add({
      targets: '.text3',
      bottom: ['100%', '20%'], // Starting from below the visible area to 20%
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2250, // Halved the duration
    }, '-=500'); // Adjust overlap timing if necessary

    // Letter animation for .effect2
    const textWrapper = document.querySelector('.effect3');
    if (textWrapper) {
      const content = textWrapper.textContent;
      textWrapper.innerHTML = '';

      content.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = char;
        textWrapper.appendChild(span);
      });

      anime.timeline()
        .add({
          targets: '.effect3 .letter',
          scale: [5, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 675, // Halved the duration
          delay: (el, i) => 15 * i, // Adjusted delay
          complete: () => {
            const letters = document.querySelectorAll('.effect3 .letter');
            letters.forEach(letter => letter.classList.remove('letter'));
          }
        }, 750); // Adjusted start delay
    }
  };

  return (
    <div className="container3">
      <h1 className="text-[#e35270] mb-16 text-6xl text3">02</h1>
      <h1 className={`text-[#e35270] my-4 text-3xl text-center effect3 px-4 ${isAnimating ? 'animating' : ''}`}>
      Tailored strategies and expert support to enhance visibility, engagement, and earnings
      </h1>
      <section className='anim'>
        {Array.from({ length: 10 }, (_, i) => <div className="item" key={i}></div>)}
      </section>
    </div>
  );
}

export default ServiceAnim2;
