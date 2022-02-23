import { useRef } from "react";
import { Stage } from "./Stage";
import { TaskInput } from "./TaskInput";

interface AssemblyLineProps {
  stages: string[];
}
export const AssemblyLine: React.FC<AssemblyLineProps> = ({ stages }) => {
  return (
    <div className="container">
      <TaskInput />
      <div className="pipeline-container">
        {stages.map((p, i) => (
          <Stage totalCount={stages.length} key={`${p}-${i}`} name={p} index={i} />
        ))}
      </div>
    </div>
  );
};
