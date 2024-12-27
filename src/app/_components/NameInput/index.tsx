"use client";

import styles from "./index.module.scss";
import { useQueryState } from "nuqs";

export const NameInput = () => {
  const [name, setName] = useQueryState("name");

  return (
    <div className={styles.demoWrapper}>
      <input value={name || ""} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || "anonymous visitor"}!</p>
    </div>
  );
};
