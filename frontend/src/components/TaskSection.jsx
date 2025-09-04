import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import TaskCard from "./TaskCard";

export default function TaskSection({
  title,
  tasks,
  currentIndex,
  setIndex,
  visibleCards,
}) {
  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, tasks.length - visibleCards));
  };

  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`bg-white shadow-md rounded-full p-2 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= tasks.length - visibleCards}
            className={`bg-white shadow-md rounded-full p-2 ${
              currentIndex >= tasks.length - visibleCards
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
      <div className="flex gap-4 w-full">
        {tasks
          .slice(currentIndex, currentIndex + visibleCards)
          .map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
      </div>
    </section>
  );
}
