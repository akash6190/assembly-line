import { useAppDispatch } from "../../app/hooks";
import { addTask } from "./assemblySlice";
import styles from "./TaskInput.module.css";

const generateId = () =>
  `${performance.now()}${Math.random().toString().slice(5)}`.replace(".", "");

export const TaskInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const onEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      const inputEl = event.target as HTMLInputElement;
      dispatch(
        addTask({
          id: generateId(),
          name: inputEl.value,
          stage: 0,
        })
      );
      inputEl.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <label>
        Add an item:
        <input onKeyDown={onEnter} placeholder="Enter a task" />
      </label>
    </div>
  );
};
