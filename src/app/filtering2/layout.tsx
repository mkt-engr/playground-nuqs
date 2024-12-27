import styles from "./layout.module.scss";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.demoWrapper}>{children}</section>;
}
