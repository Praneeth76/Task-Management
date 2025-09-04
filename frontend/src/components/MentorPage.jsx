import { useState, useEffect } from "react";
import { fetchMentors } from "../utils/api";
import MentorContainer from "./MentorContainer";

export default function MentorsPage() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchMentors()
      .then(setMentors)
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Mentors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor) => (
          <MentorContainer key={mentor._id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}
