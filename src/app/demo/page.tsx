import styles from "./page.module.scss";
import { Count } from "../_components/Count";
import { NameInput } from "../_components/NameInput";

const Demo = () => {
  return (
    <div className={styles.demoWrapper}>
      <NameInput />
      <Count />
    </div>
  );
};

export default Demo;
