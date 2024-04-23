import React from "react";
import styles from "@/styles/Paragraph.module.css";
const Paragraph = ({ text }: { text: string }) => {
  return <p className={styles.paragraph}>{text}</p>;
};

export default Paragraph;
