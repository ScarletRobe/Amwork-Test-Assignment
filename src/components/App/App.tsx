import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";

import tasksStore from "../../stores/tasksStore";
import { useIntersectionObserver } from "../../hooks";

import Task from "../Task/Task";

import { ReactComponent as AddIcon } from "../../assets/icons/addTask.svg";
import styles from "./App.module.sass";

const App = observer(() => {
  const { todos, getTodos } = tasksStore;
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(intersectionRef, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (!isVisible) return;
    getTodos();
  }, [isVisible, getTodos]);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Today</h1>
        <div className={styles.headerButtons}>
          <div className={`${styles.addTask} ${styles.headerBtn}`}>
            <AddIcon />
          </div>
          <div className={`${styles.typeOfTask} ${styles.headerBtn}`}>
            {todos.length}
          </div>
        </div>
      </header>
      <div className={styles.taskList}>
        {todos.map((todo) => (
          <Task key={todo.id} content={todo} />
        ))}
        <div ref={intersectionRef} style={{ minHeight: "1px" }}></div>
      </div>
    </section>
  );
});

export default App;
