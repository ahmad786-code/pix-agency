


import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import './animservice2.css'

function ServiceAnim2() {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const animElement = document.querySelector('.container3');
      // Check if the element is visible and if the animation hasn't been played
      if (animElement && scrollPosition > animElement.offsetTop && !animationPlayed) {
        playAnimation();
        setAnimationPlayed(true);  // Set this to true to prevent reanimation
      }
    };

    // Register the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationPlayed]);  // Add animationPlayed as a dependency to re-bind only if needed

  const playAnimation = () => {
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 850
    });

    tl.add({
      targets: 'section .item',
      height: '100%',
      backgroundColor: '#F6A9BD',
      // delay: anime.stagger(100)
    });

    tl.add({
      targets: 'section .item',
      // delay: anime.stagger(70),
      height: '97%',
      backgroundColor: '#F4E0E1'
    });

    tl.add({
      targets: 'section .item',
      backgroundColor: '#FFFFFF',
      // delay: anime.stagger(50, { from: 'center' })
    });

    // Correct animation for .text2 from below the initial visible area
    tl.add({
      targets: '.text3',
      bottom: ['100%', '20%'], // Starting from below the visible area to 20%
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 4500
    }, '-=1000');

    // Letter animation for .effect2
    const textWrapper = document.querySelector('.effect3');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/([^.\s]|\w)/g, "<span class='letter'>$&</span>");

      anime.timeline()
        .add({
          targets: '.effect3 .letter',
          scale: [5, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 1350,
            delay: (el, i) => 70 * i
        }, 1500);
    }
  };



  return (
    <div className="container3">


      <h1 className="text-[#e35270]  mb-16 text-6xl text3">02</h1>
      <h1 className="text-[#e35270] my-4 text-3xl text-center effect3">Top-tier management agency elevating digital content creators</h1>




      <section className='anim'>
        {Array.from({ length: 10 }, (_, i) => <div className="item" key={i}></div>)}
      </section>
    </div>
  );
}

export default ServiceAnim2;

