import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  moveToNextStage,
  moveToPrevStage,
  selectTasksByStage,
} from "./assemblySlice";
import styles from "./Stage.module.css";

interface StageProps {
  name: string;
  index: number;
  totalCount: number;
}
export const Stage: React.FC<StageProps> = ({ name, index, totalCount }) => {
  const dispatch = useAppDispatch();
  const taskSelector = useMemo(() => selectTasksByStage(index), [index]);
  const tasks = useAppSelector(taskSelector);
  const rightClick = (e: React.MouseEvent, taskId: string) => {
    e.preventDefault();
    dispatch(moveToNextStage(taskId, totalCount));
  };

  const leftClick = (e: React.MouseEvent, taskId: string) => {
    e.preventDefault();
    dispatch(moveToPrevStage(taskId));
  };

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <ul>
        {tasks.map((task) => (
          <li
            onContextMenu={(e) => rightClick(e, task.id)}
            onClick={(e) => leftClick(e, task.id)}
            key={task.id}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
