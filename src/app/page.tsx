"use client";

import Tasks from "./components/tasks";
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const { tasks } = useGlobalState();

  return (
    <div className="global-styles">
      <Tasks tasks={tasks} />
    </div>
  );
}
