import React from "react";
import styles from "@/styles/Button.module.css";

const BtnPrimary = ({ title }: { title: string }) => {
  return (
    <button className={`${styles.btn} ${styles.btnPrimary}`}>{title}</button>
  );
};

export default BtnPrimary;
