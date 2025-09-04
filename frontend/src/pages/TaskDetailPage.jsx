import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import FileDropzone from "../components/FileDropzone";

async function fetchTaskDetail(id) {
  const res = await fetch(`https://task-management-n71g.onrender.com/api/courses/${id}`);
  if (!res.ok) throw new Error("Failed to fetch task detail");
  return res.json();
}

export default function TaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTaskDetail(id).then(setTask).catch(console.error);
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <img
            src={task.cover_image_url}
            alt={task.title}
            className="w-full rounded-xl object-cover mb-3"
            style={{ minHeight: 220, maxHeight: 320 }}
          />
          <div className="flex justify-between items-center px-4 mb-2 h-8">
            <div className="flex gap-2 items-center">
              <span>2:20/10:00</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">{task.title}</h2>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-gray-500">{task.category.join(" . ")}</div>
          <a href="#" className="text-blue-500 font-medium">
            + Get Mentors
          </a>
        </div>
        <div className="flex items-center gap-6 mb-4 text-gray-700">
          <div>{task.students_involved} Students Involved</div>
          <div>
            {task.duration} Hour{task.duration > 1 ? "s" : ""}
          </div>
        </div>
        <section className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Description</h3>
          <p className="text-gray-700">{task.description}</p>
        </section>
        <section>
          <h3 className="font-semibold text-lg mb-3">Essence of Assessment</h3>
          <ul className="space-y-2">
            {task.essence_of_assessment.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-blue-700">
                <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                  ✔
                </span>
                <span className="text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="w-full lg:w-96 bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-lg mb-4">Assigned Assignments</h3>
        <div className="mb-6">
          <h4 className="font-semibold mb-1">{task.title}</h4>
          <div className="text-gray-500 mb-2">{task.category.join(" . ")}</div>
        </div>
        <h4 className="font-semibold mb-1">Detail Student</h4>
        <div>
          <div className="mb-1">
            Student's name: <span className="font-semibold">Dennis Nzioki</span>
          </div>
          <div className="mb-1">
            Student Class: <span className="font-semibold">MIPA 2</span>
          </div>
          <div className="mb-1">
            Student Number: <span className="font-semibold">10</span>
          </div>
        </div>
        <h4 className="font-semibold mt-4 mb-1">File Task</h4>
        <div className="mb-1 text-gray-500">
          Last Modified <span className="font-semibold">1 July 2022</span>
        </div>
        <FileDropzone
          onFilesSelected={(files) => {
            console.log("Files selected: ", files);
          }}
        />
        <button className="w-full bg-blue-600 text-white rounded py-2 font-semibold text-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
}
