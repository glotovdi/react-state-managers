import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "JavaScript",
    description: "Master the fundamentals of JavaScript",
    color: "#f7df1e",
  },
  {
    id: 2,
    title: "React",
    description: "Build modern user interfaces",
    color: "#61dafb",
  },
  {
    id: 3,
    title: "TypeScript",
    description: "Add type safety to your code",
    color: "#3178c6",
  },
  {
    id: 4,
    title: "CSS",
    description: "Style beautiful web applications",
    color: "#264de4",
  },
  {
    id: 5,
    title: "HTML",
    description: "Structure your web content",
    color: "#e34c26",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndexList = slides.length - 1;
  const goToPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(4);
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    // Your code here
    // Go to next slide, loop to first if at last
    if (lastIndexList === currentIndex) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="app">
      <h1>Carousel Component</h1>

      <div className="carousel">
        <button className="carousel-button prev" onClick={goToPrevious}>
          ←
        </button>

        <div className="carousel-content">
          <div
            className="slide"
            style={{ backgroundColor: slides[currentIndex].color }}
          >
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
          </div>
        </div>

        <button className="carousel-button next" onClick={goToNext}>
          →
        </button>
      </div>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="carousel-info">
        Slide {currentIndex + 1} of {slides.length}
      </div>
    </div>
  );
}
