import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const horizontalScrollRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {

      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollWidth = document.documentElement.scrollWidth;
      const viewportWidth = window.innerWidth;


      if (
        (event.deltaY > 0 && scrollLeft === 0) ||
        (scrollLeft > 0 && scrollLeft + viewportWidth < scrollWidth) ||
        (event.deltaY < 0 && scrollLeft + viewportWidth >= scrollWidth)
      ) {

        event.preventDefault();
        window.scrollBy({
          left: event.deltaY < 0 ? -75 : 75,
        });
      }

      else if (event.deltaY !== 0) {
        event.preventDefault();
        window.scrollBy({
          top: event.deltaY < 0 ? -30 : 30,
        });
      }
    };

    const horizontalScrollElement = horizontalScrollRef.current;
    if (horizontalScrollElement) {
      horizontalScrollElement.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [horizontalScrollRef]);

  return (
    <div className='App'>
      <section className='section' id='section1'>
        Sección 1
      </section>
      <div className='horizontal-scroll-container' ref={horizontalScrollRef}>
        <section className='section' id='section2'>
          Sección 2
        </section>
        <section className='section-horizontal' id='section3'>
          Sección 3
        </section>
      </div>
      <section className='section' id='section4'>
        Sección 4
      </section>
      <section className='section' id='section5'>
        Sección 5
      </section>
    </div>
  );
}

export default App;
