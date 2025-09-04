import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MentorContainer from "./MentorContainer";

export default function MentorSection({
  title,
  mentors,
  visibleCardsDesktop = 3,
  visibleCardsMobile = 1,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth < 768 ? visibleCardsMobile : visibleCardsDesktop
  );

  useEffect(() => {
    function handleResize() {
      setVisibleCards(
        window.innerWidth < 768 ? visibleCardsMobile : visibleCardsDesktop
      );
      setCurrentIndex(0); 
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleCardsDesktop, visibleCardsMobile]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, mentors.length - visibleCards)
    );
  };

  return (
    <section>
      <div className="flex justify-between items-center px-4">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`bg-white shadow-md rounded-full p-2 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            aria-label="Previous"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= mentors.length - visibleCards}
            className={`bg-white shadow-md rounded-full p-2 ${
              currentIndex >= mentors.length - visibleCards
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            aria-label="Next"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto p-4">
        {mentors.slice(currentIndex, currentIndex + visibleCards).map((m) => (
          <MentorContainer key={m._id} mentor={m} />
        ))}
      </div>
    </section>
  );
}
