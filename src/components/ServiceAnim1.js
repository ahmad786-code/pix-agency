import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import './animservice1.css';

function ServiceAnim1() {
   

    useEffect(() => {
        

        playAnimation();
    }, []);  

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
            delay: anime.stagger(50, { from: 'center' })
          });
      
          // Correct animation for .text2 from below the initial visible area
          tl.add({
            targets: '.text2',
            bottom: ['100%', '20%'], // Starting from below the visible area to 20%
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 4500
          }, '-=1000');
      
          // Letter animation for .effect2
          const textWrapper = document.querySelector('.effect2');
          if (textWrapper) {
            textWrapper.innerHTML = textWrapper.textContent.replace(/([^.\s]|\w)/g, "<span class='letter'>$&</span>");
      
            anime.timeline()
              .add({
                targets: '.effect2 .letter',
                scale: [5, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 1350,
                  delay: (el, i) => 30 * i
              }, 1500);
          }
    };

     

    return (
        <div className="container2">
            <h1 className="text-[#e35270] mb-16 text-6xl text2">01</h1>
            <h1 className="text-[#e35270] my-4 text-3xl text-center effect2">Top-tier management agency elevating digital content creators</h1>

            <section className='anim'>
        {Array.from({ length: 10 }, (_, i) => <div className="item" key={i}></div>)}
      </section>
        </div>
    );
}

export default ServiceAnim1;
 