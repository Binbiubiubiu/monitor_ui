import React, { FC, useState } from "react";
import styles from "./style.module.scss";
import { connect } from "react-redux";

const Login: FC<any> = props => {
  const { handleLoginBtnClick } = props;

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  return (
    <div className={styles.login__bg}>
      <section className={styles.login__form_wrapper}>
        <h1 className={styles.websiteTitle}>
          {process.env.REACT_APP_WEBSITE_NAME}
        </h1>
        <form
          className={styles.login__form}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
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
              value={userName}
              onInput={e => setUserName((e.target as any).value)}
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
              value={passWord}
              onInput={e => setPassWord((e.target as any).value)}
            />
          </div>
          <button
            onClick={() => handleLoginBtnClick(userName, passWord)}
            className={styles.login__btn}
            type="submit"
          >
            登录
          </button>
        </form>
      </section>
    </div>
  );
};

export default connect(
  () => {
    return {};
  },
  dispatch => {
    return {
      handleLoginBtnClick: (userName: string, passWord: string) =>
        dispatch({
          type: "fetchLogin",
          payload: {
            userName,
            passWord
          }
        })
    };
  }
)(Login);
