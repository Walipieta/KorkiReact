import React from "react";
import styles from "@/styles/Button.module.css";

const BtnSecondary = ({ title }: { title: string }) => {
  return <div className={`${styles.btn} ${styles.btnSecondary}`}>{title}</div>;
};

export default BtnSecondary;
