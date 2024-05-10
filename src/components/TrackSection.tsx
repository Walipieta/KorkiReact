import React from "react";
import BtnPrimary from "@/components/BtnPrimary";
import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";
import styles from "@/styles/TrackSection.module.css";
const TrackSection = () => {
  return (
    <section className={`container ${styles.TrackSection}`}>
      <div className="col-6">
        <img
          src="/img1.png"
          style={{
            width: "100%",
            // width: "802px",
            // height: "532px",
            // flex: "none",
            // order: "0",
            // flexGrow: "0",
          }}
        />
      </div>
      <div
        className="col-6"
        style={{
          display: "flex",
          gap: "50px",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px",
          // width: "628px",
          // height: "431px",
          flex: "none",
          order: 1,
          flexGrow: 0,
        }}
      >
        <Heading text="Track Your Earnings And Cryptocode Made It Easy"></Heading>
        <Paragraph text="Nulla dui ultrices sed nam ligula dignissim tellus. Sem semper lorem facilisis ut amet tincidunt adipiscing maecenas. "></Paragraph>
        <BtnPrimary title="GET STARTED"></BtnPrimary>
      </div>
    </section>
  );
};

export default TrackSection;
