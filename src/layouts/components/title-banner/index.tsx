import React from "react";
import "./style.scss";

const TitleBanner = () => {
  return (
    <section className="title-banner__wrapper">
      <h1 className="title-banner__text">
        {process.env.REACT_APP_WEBSITE_NAME}
      </h1>
    </section>
  );
};

export default TitleBanner;
