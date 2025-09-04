export async function fetchTasks() {
  const res = await fetch("https://task-management-n71g.onrender.com/api/courses");
  if (!res.ok) throw new Error("Could not fetch tasks");
  const data = await res.json();
  return {
    timeLimit: data.filter(task => task.duration <= 120),
    newTask: data.filter(task => task.duration > 120),
  };
}

export async function fetchMentors() {
  const res = await fetch("https://task-management-n71g.onrender.com/api/mentors");
  if (!res.ok) {
    throw new Error("Failed to fetch mentors");
  }
  return res.json();
}
