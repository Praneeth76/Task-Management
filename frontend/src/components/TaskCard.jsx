import { Link } from "react-router-dom";

export default function TaskCard({ task }) {
  const formatDuration = (duration) => {
    if (duration <= 180)
      return `${duration / 60} Hour${duration === 60 ? "" : "s"}`;
    return `${Math.ceil(duration / 1440)} Days Left`;
  };

  const members =
    task.participants?.map((p) => {
      const names = p.name.split(" ");
      const img = p.avatar_url;
      if (img) return <img src={img} alt={p.name} className="w-8 h-8 rounded-full border-2 border-white object-cover" />;
      return names.length > 1 ? names[0][0] + names[1][0] : p.name[0];
    }) || [];

  return (
    <Link to={`/tasks/${task._id}`}>
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 w-80 flex-shrink-0 cursor-pointer">
        {task.cover_image_url && (
          <img
            src={task.cover_image_url}
            alt={task.title}
            className="w-full h-32 object-cover rounded-xl mb-4"
          />
        )}
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <p className="text-gray-500 text-sm">{task.category.join(", ")}</p>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-700">{task.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${task.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600 font-medium">
            {formatDuration(task.duration)}
          </p>
          <div className="flex -space-x-2">
            {members.map((m, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-xs font-bold"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
