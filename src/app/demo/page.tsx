import styles from "./page.module.scss";
import { Count } from "../components/Count";
import { NameInput } from "../components/NameInput";

const Demo = () => {
  return (
    <div className={styles.demoWrapper}>
      <NameInput />
      <Count />
    </div>
  );
};

export default Demo;
