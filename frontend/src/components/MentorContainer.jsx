import { Star } from "lucide-react";

export default function MentorContainer({ mentor }) {
  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 w-80 flex-shrink-0 cursor-pointer"
      title={mentor.name}
    >
      <div className="flex items-center gap-3 mb-2">
        <img
          src={mentor.avatar_url}
          alt={mentor.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{mentor.name}</div>
          <div className="text-xs text-gray-500">{mentor.role}</div>
        </div>
        <div className="flex-1"></div>
        <button className="text-blue-600 text-xs font-semibold">
          {mentor.followed ? "Followed" : "+ Follow"}
        </button>
      </div>

      {mentor.bio && (
        <div className="text-sm text-gray-500 mb-3 truncate" title={mentor.bio}>
          {mentor.bio.length > 90 ? mentor.bio.slice(0, 90) + " . . ." : mentor.bio}
        </div>
      )}

      <div className="flex gap-4 text-sm">
        <span>
          <span className="font-semibold">{mentor.task_count}</span> Task
        </span>
        <span className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
          <span className="font-semibold">{mentor.rating}</span>
          <span className="text-gray-400">({mentor.review_count} Reviews)</span>
        </span>
      </div>
    </div>
  );
}
