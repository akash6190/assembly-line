import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  moveToNextStage,
  moveToPrevStage,
  selectTasksByStage,
} from "./assemblySlice";

import styles from './Stage.module.css';

interface StageProps {
  name: string;
  index: number;
  totalCount: number;
}
export const Stage: React.FC<StageProps> = ({ name, index, totalCount }) => {
  const dispatch = useAppDispatch();
  console.log(index);
  const taskSelector = useCallback(selectTasksByStage(index), [index]);
  const tasks = useAppSelector(taskSelector);
  const rightClick = (taskId: string) => {
    dispatch(moveToNextStage(taskId, totalCount));
  };

  const leftClick = (taskId: string) => {
    dispatch(moveToPrevStage(taskId));
  };

  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <ul>
        {tasks.map((task) => (
          <li
            onContextMenu={() => rightClick(task.id)}
            onClick={() => leftClick(task.id)}
            key={task.id}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
