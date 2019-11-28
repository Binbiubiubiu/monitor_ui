import React, { FC } from "react";
import "./style.scss";

export interface TitleBannerProps {
  [props: string]: any;
}

const TitleBanner: FC<TitleBannerProps> = props => {
  return (
    <section className="title-banner__wrapper" {...props}>
      <h1 className="title-banner__text">
        {process.env.REACT_APP_WEBSITE_NAME}
      </h1>
    </section>
  );
};

export default TitleBanner;
