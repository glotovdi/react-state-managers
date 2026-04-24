import { Route, Routes } from "react-router-dom";
import { AccordionPage } from "../../pages/AccordionPage";
import { FetchPage } from "../../pages/FetchPage";
import { TimerPage } from "../../pages/TimerPage";
import { TodoListPage } from "../../pages/TodoListPage";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoListPage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/fetch" element={<FetchPage />} />
      <Route path="/accordion" element={<AccordionPage />} />
    </Routes>
  );
};
