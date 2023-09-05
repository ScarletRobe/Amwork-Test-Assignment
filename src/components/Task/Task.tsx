import { FC } from "react";
import { observer } from "mobx-react-lite";
import classNames from "classnames";

import { TaskInterface } from "../../types";
import tasksStore from "../../stores/tasksStore";

import Checkbox from "../checkbox/Checkbox";

import imgUrl from "../../assets/images/avatar.png";
import styles from "./Task.module.sass";

interface TaskProps {
  content: TaskInterface;
}

const MOCK_TAGS = ["Front-end"];

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
              console.log(1);
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
          <p>Oct 11, 03:00 PM</p>
          <p>Oct 12, 01:00 PM</p>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere
          reiciendis minima, quasi quaerat unde laboriosam eaque saepe
          dignissimos. Odio quidem necessitatibus voluptate rerum qui iure
          consequuntur distinctio consectetur laboriosam?
        </p>
        <div className={styles.additionalInfo}>
          <div className={styles.entities}>
            <div className={styles.entity}>Entity</div>
            <div className={styles.tags}>
              {MOCK_TAGS.map((tag) => (
                <div key={tag} className={`${styles.entity} ${styles.tag}`}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <img className={styles.authorAvatar} alt="Автор" src={imgUrl}></img>
        </div>
      </article>
    </div>
  );
});

export default Task;
