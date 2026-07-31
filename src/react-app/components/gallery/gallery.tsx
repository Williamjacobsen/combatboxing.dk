import { useState, useEffect, useRef } from "react";
import "./gallery.css";

const pics = [
  { src: "/pics/empty-gym-heavy-bags.png", alt: "Træningslokale med tunge boksebolde" },
  { src: "/pics/heavy-bag-work.png", alt: "Boksetræning på tung boksbold" },
  { src: "/pics/partner-drills.png", alt: "Partnerøvelser" },
  { src: "/pics/group-photo-boxers.jpg", alt: "Holdbillede af boksere" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pics.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % pics.length);
      }, 4000);
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Billeder</h2>
      <div className="slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {pics.map((pic) => (
            <div key={pic.src} className="slide">
              <img src={pic.src} alt={pic.alt} className="slide-img" />
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {pics.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
