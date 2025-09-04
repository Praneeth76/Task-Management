import { useEffect, useState } from "react";
import { fetchTasks } from "../utils/api";
import TaskSection from "../components/TaskSection";

export default function Dashboard() {
  const [tasks, setTasks] = useState({ timeLimit: [], newTask: [] });
  const [timeIndex, setTimeIndex] = useState(0);
  const [newIndex, setNewIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetchTasks().then(setTasks);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = isMobile ? 1 : 3;

  return (
    <div className="px-6 flex-1 overflow-y-auto">
      <TaskSection
        title="Time Limit"
        tasks={tasks.timeLimit}
        currentIndex={timeIndex}
        setIndex={setTimeIndex}
        visibleCards={visibleCards}
      />

      <TaskSection
        title="New Task"
        tasks={tasks.newTask}
        currentIndex={newIndex}
        setIndex={setNewIndex}
        visibleCards={visibleCards}
      />
    </div>
  );
}
