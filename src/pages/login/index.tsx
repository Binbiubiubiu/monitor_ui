import React, { Component } from "react";
import styles from "./style.module.scss";

export default class Login extends Component {
  render() {
    return (
      <div className={styles.login__bg}>
        <section className={styles.login__form_wrapper}>
          <h1 className={styles.websiteTitle}>
            {process.env.REACT_APP_WEBSITE_NAME}
          </h1>
          <form className={styles.login__form} onSubmit={undefined}>
            <div className={styles.input_wrapper}>
              <label>
                <img
                  src={require("./img/Q002.png")}
                  alt="帐号"
                  className={styles.input_icon}
                />
              </label>
              <input
                type="text"
                min="4"
                max="30"
                autoComplete="off"
                placeholder="输入帐号"
              />
            </div>
            <div className={styles.input_wrapper}>
              <label>
                <img
                  src={require("./img/Q003.png")}
                  alt="密码"
                  className={styles.input_icon}
                />
              </label>
              <input
                type="password"
                min="6"
                max="30"
                autoComplete="off"
                placeholder="输入密码"
              />
            </div>
            <button type="submit" className={styles.login__btn}>
              登录
            </button>
          </form>
        </section>
      </div>
    );
  }
}
