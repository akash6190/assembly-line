import { Stage } from "./Stage";
import { TaskInput } from "./TaskInput";
import styles from './AssemblyLine.module.css';

interface AssemblyLineProps {
  stages: string[];
}
export const AssemblyLine: React.FC<AssemblyLineProps> = ({ stages }) => {
  return (
    <div className={styles.container}>
      <TaskInput />
      <div className={styles.stageContainer}>
        {stages.map((p, i) => (
          <Stage totalCount={stages.length} key={`${p}-${i}`} name={p} index={i} />
        ))}
      </div>
    </div>
  );
};
