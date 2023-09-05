import { ChangeEvent, FC } from "react";
import styles from "./checkbox.module.sass";

interface CheckboxTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  checkboxHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxTypes> = ({
  className,
  checkboxHandler,
  checked,
  ...rest
}) => {
  return (
    <label className={`${styles.checkbox} ${className ? className : ""}`}>
      <input
        className={styles.checkboxInput}
        type="checkbox"
        checked={checked}
        onChange={(evt) => checkboxHandler(evt)}
        {...rest}
      />
      <span className={styles.checkboxMark}></span>
    </label>
  );
};

export default Checkbox;
