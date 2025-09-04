import { useEffect, useState } from "react";
import { fetchMentors } from "../utils/api";
import MentorSection from "../components/MentorSection";
import MentorPage from "../components/MentorPage"

export default function MentorsPage() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchMentors()
      .then(setMentors)
      .catch(console.error);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <MentorSection title="Recent Mentors" mentors={mentors} />
      <MentorPage />
    </div>
  );
}
