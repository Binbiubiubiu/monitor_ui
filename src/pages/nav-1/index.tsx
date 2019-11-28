import React, { Fragment } from "react";
import VideoMonitor from "@/dialogs/video-monitor";
import Card from "@/packages/card";
import Icon from "@/packages/icon";

// import styles from "./style.module.scss";

const Nav1 = () => {
  return (
    <Fragment>
      <Card.Group>
        <Card
          icon={
            <Icon
              path="assets/number-bar-icons/11.png"
              width="40"
              height="46"
            />
          }
          title="12"
          number="12"
        ></Card>
      </Card.Group>
      <VideoMonitor />
    </Fragment>
  );
};

export default Nav1;
