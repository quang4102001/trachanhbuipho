import { clsx } from "clsx";
import { useState, useRef } from "react";
import axios from "axios";

import styles from "./FormRegister.module.scss";
import Button from "./../Button/Button";
import HelpAfterForm from "./../HelpAfterForm/HelpAfterForm";
import HeaderPage from "./../HeaderPage/HeaderPage";

function FormRegister({
  toLogin,
  handleAfterSubmitSuccess,
  addToStorage,
  checkEmpty,
}) {
  const [nameUser, setNameUser] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [innerHelpTextNameUser, setInnerHelpTextNameUser] = useState("");
  const [innerHelpTextUserName, setInnerHelpTextUserName] = useState("");
  const [innerHelpTextPassword, setInnerHelpTextPassword] = useState("");
  const [innerHelpTextRePassword, setInnerHelpTextRePassword] = useState("");
  const [innerHelpTextSubmit, setInnerHelpTextSubmit] = useState("");
  const helpTextSubmit = useRef();

  const changeText = (e, setState) => {
    if (e.target.value[0] === " ") {
      e.target.value = "";
    }
    e.target.value = e.target.value.replace("  ", " ");
    setState(e.target.value);
  };

  const validate = () => {
    let checkValid = true;
    const nameRegex = /^.{0}$|^.{26,}$|.*[^\w\s].*/gm;
    const userNameRegex = /^.{0}$|^.{26,}$|.*[^\w\s].*/gm;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,25}$/;

    if (nameRegex.test(nameUser)) {
      setInnerHelpTextNameUser("Tên người dùng không lệ.");
      checkValid = false;
    } else {
      setInnerHelpTextNameUser("");
    }
    if (userNameRegex.test(userName)) {
      setInnerHelpTextUserName("Tài khoản không lệ.");
      checkValid = false;
    } else {
      setInnerHelpTextUserName("");
    }
    if (!passwordRegex.test(password)) {
      setInnerHelpTextPassword("Mật khẩu không hợp lệ.");
      checkValid = false;
    } else {
      setInnerHelpTextPassword("");
    }
    if (rePassword !== password) {
      setInnerHelpTextRePassword("Mật khẩu không trùng khớp.");
      checkValid = false;
    } else {
      setInnerHelpTextRePassword("");
    }
    checkEmpty(nameUser, setInnerHelpTextNameUser, checkValid);
    checkEmpty(userName, setInnerHelpTextUserName, checkValid);
    checkEmpty(password, setInnerHelpTextPassword, checkValid);
    checkEmpty(rePassword, setInnerHelpTextRePassword, checkValid);
    return checkValid;
  };

  const checkRegister = async () => {
    const saveUserElement = document.getElementById("save-user");
    const url = `http://localhost/buiphotea/src/api/register.php?nameUser=${nameUser.trim()}&userName=${userName.trim()}&password=${password.trim()}`;
    const user = JSON.stringify({
      username: userName,
      password: password,
      permission: "user",
      name: nameUser,
    });
    let checkRegister = false;

    await axios
      .get(url)
      .then((res) => res.data)  
      .then((data) => {
        if (data === "OK") {
          helpTextSubmit.current.style.color = "var(--primary-color)";
          setInnerHelpTextSubmit("Đăng kí thành công");
          addToStorage(saveUserElement, user);
          checkRegister = true;
        } else {
          helpTextSubmit.current.style.color = "var(--active-color)";
          setInnerHelpTextSubmit("Đăng kí thất bại");
        }
      })
      .catch(() => {
        helpTextSubmit.current.style.color = "var(--active-color)";
        setInnerHelpTextSubmit("Lỗi kết nối.");
      });

    return checkRegister;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate() &&
      checkRegister().then((res) => res && handleAfterSubmitSuccess());
  };

  return (
    <div id="login" className="d-flex flex-column align-items-center">
      <HeaderPage headerText="Đăng kí tài khoản" />
      <form id="login-form" className={clsx(styles["container"], "w-50 mb-5")}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            <span style={{ color: "var(--active-color)" }}>*</span>Tên người
            dùng:
          </label>
          <input
            type="text"
            className={clsx(styles["form-control"], "form-control")}
            name="nameuser"
            id="nameuser"
            value={nameUser}
            onChange={(e) => changeText(e, setNameUser)}
            placeholder="Nhập tên người dùng"
            required
          />
          <span
            className={clsx(
              styles["help-text"],
              "help-text-after-nameuser d-block mt-3"
            )}
          >
            {innerHelpTextNameUser}
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="user-name" className="form-label">
            <span style={{ color: "var(--active-color)" }}>*</span>Tài khoản:
          </label>
          <input
            type="text"
            className={clsx(styles["form-control"], "form-control")}
            name="user-name"
            id="user-name"
            value={userName}
            onChange={(e) => changeText(e, setUserName)}
            placeholder="Nhập tài khoản"
            required
          />
          <span
            className={clsx(
              styles["help-text"],
              "help-text-after-username d-block mt-3"
            )}
          >
            {innerHelpTextUserName}
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <span style={{ color: "var(--active-color)" }}>*</span>Mật khẩu:
          </label>
          <input
            type="password"
            className={clsx(styles["form-control"], "form-control")}
            name="password"
            id="password"
            value={password}
            onChange={(e) => changeText(e, setPassword)}
            placeholder="Nhập mật khẩu"
            required
          />
          <span
            className={clsx(
              styles["help-text"],
              "help-text-after-password d-block mt-3"
            )}
          >
            {innerHelpTextPassword}
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <span style={{ color: "var(--active-color)" }}>*</span>Mật khẩu:
          </label>
          <input
            type="password"
            className={clsx(styles["form-control"], "form-control")}
            id="password"
            value={rePassword}
            onChange={(e) => changeText(e, setRePassword)}
            placeholder="Nhập lại mật khẩu"
            required
          />
          <span
            className={clsx(
              styles["help-text"],
              "help-text-after-repassword d-block mt-3"
            )}
          >
            {innerHelpTextRePassword}
          </span>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className={clsx(styles["form-check-input"], "form-check-input")}
            id="save-user"
          />
          <label className="form-check-label" htmlFor="save-user">
            Lưu đăng nhập
          </label>
        </div>
        <Button
          primary
          className={clsx(styles[""], "mt-4")}
          onClick={handleSubmit}
        >
          Đăng kí
        </Button>
        <span
          ref={helpTextSubmit}
          className={clsx(
            styles["help-text"],
            "help-text-after-btn d-block mt-3"
          )}
        >
          {innerHelpTextSubmit}
        </span>
      </form>
      <HelpAfterForm toLogin={toLogin} />
    </div>
  );
}

export default FormRegister;
