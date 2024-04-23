import React from "react";
import BtnPrimary from "@/components/BtnPrimary";
import BtnSecondary from "@/components/BtnSecondary";
import Paragraph from "@/components/Paragraph";
import Price from "@/components/Price";
import Heading from "@/components/Heading";
import styles from "@/styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={`container ${styles.HeroSection}`}>
      <div className="col-6">
        <img src="/mobile.png" style={{ width: "100%" }} />
      </div>
      <div
        className="col-6"
        style={{
          display: "flex",
          gap: "30px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Heading text="Make Easier Your Crypto Transactions"></Heading>
        <Paragraph text="Our cryptocurrency offers a fast, secure, and affordable alternative for all of your financial needs. Join the cryptocurrency revolution today and take control of your financial future. Sign up now to start using our platform for yourself."></Paragraph>
        <br />
        <BtnPrimary title="Try for free"></BtnPrimary>
      </div>
    </section>
  );
};

export default HeroSection;
