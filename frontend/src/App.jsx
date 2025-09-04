import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout"
import MentorsPage from "./pages/MentorsPage";
import TaskPage from "./pages/Dashboard";
import TaskDetailPage from "./pages/TaskDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="tasks" replace />} />
          <Route path="tasks" element={<TaskPage />} />
           <Route path="tasks/:id" element={<TaskDetailPage />} />
          <Route path="mentors" element={<MentorsPage />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
