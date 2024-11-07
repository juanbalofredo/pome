import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registramos el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.panel');

    // Primer sección: desplazamiento vertical hacia abajo
    gsap.to(sections[1], {
      yPercent: -100, 
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-1',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      }
    });

    // Sección 2: desplazamiento horizontal a la derecha
    gsap.to(sections[2], {
      xPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-2',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        snap: 1 / 2, // Solo una sección hacia la derecha
      },
    });

    // Sección 3: el scroll vuelve a ser vertical
    gsap.to(sections[3], {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.section-3',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: false,
      }
    });
  }, []);

  return (
    <div>
      <div className="section-1 panel">
        <h1>Sección 1: Scroll hacia abajo</h1>
      </div>

      <div className="container">
        <div className="panel section-2">
          <h1>Sección 2: Movimiento Horizontal</h1>
        </div>

        <div className="panel section-3">
          <h1>Sección 3: Más contenido</h1>
        </div>

        <div className="panel section-4">
          <h1>Sección 4: Continúa verticalmente</h1>
        </div>

        <div className="panel section-5">
          <h1>Sección 5: Fin</h1>
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;
