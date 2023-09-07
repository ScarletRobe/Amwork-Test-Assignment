import { FC } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import tasksStore from "../../stores/tasksStore";
import { ITask } from "../../types";

import Checkbox from "../checkbox/Checkbox";

import imgUrl from "../../assets/images/avatar.png";
import styles from "./Task.module.sass";

interface TaskProps {
  content: ITask;
}

const Task: FC<TaskProps> = observer(({ content }) => {
  const { changeIsCompleted } = tasksStore;

  return (
    <div className={styles.wrapper}>
      <article className={styles.innerWrapper}>
        <div className={styles.taskHeader}>
          <Checkbox
            checked={content.completed}
            checkboxHandler={() => {
              changeIsCompleted(content.id);
            }}
          />
          <h2
            className={classNames(styles.title, {
              [styles.completed]: content.completed,
            })}
          >
            {content.title}
          </h2>
        </div>
        <div className={styles.date}>
          <p>{content.startDate}</p>
          <p>{content.endDate}</p>
        </div>
        <p className={styles.description}>{content.description}</p>
        <div className={styles.additionalInfo}>
          <div className={styles.entities}>
            <div className={styles.entity}>{content.enitity}</div>
            <div className={styles.tags}>
              <div className={`${styles.entity} ${styles.tag}`}>
                {content.tag}
              </div>
            </div>
          </div>
          <img className={styles.authorAvatar} alt="Автор" src={imgUrl}></img>
        </div>
      </article>
    </div>
  );
});

export default Task;
