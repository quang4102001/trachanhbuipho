import { clsx } from "clsx";
import { useRef, useState } from "react";

import axios from "axios";

import styles from "./FormLogin.module.scss";
import Button from "./../Button/Button";
import HelpAfterForm from "./../HelpAfterForm/HelpAfterForm";
import HeaderPage from "./../HeaderPage/HeaderPage";

function FormLogin({
  toRegister,
  addToStorage,
  handleAfterSubmitSuccess,
  checkEmpty,
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [innerHelpTextUSerName, setInnerHelpTextUSerName] = useState("");
  const [innerHelpTextPassword, setInnerHelpTextPassword] = useState("");
  const [innerHelpTextSubmit, setInnerHelpTextSubmit] = useState("");
  const helpTextSubmit = useRef()

  const validate = () => {
    let checkValid = true;
    const userNameRegex = /^.{0}$|^.{26,}$|.*[^\w\s].*/gm;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,25}$/;

    if (userNameRegex.test(userName)) {
      setInnerHelpTextUSerName("Tài khoản không hợp lệ.");
      checkValid = false;
    } else {
      setInnerHelpTextUSerName("");
    }
    if (!passwordRegex.test(password)) {
      setInnerHelpTextPassword("Mật khẩu không hợp lệ.");
      checkValid = false;
    } else {
      setInnerHelpTextUSerName("");
    }
    checkEmpty(userName, setInnerHelpTextUSerName, checkValid);
    checkEmpty(password, setInnerHelpTextPassword, checkValid);

    return checkValid;
  };

  const checkLogin = async () => {
    const saveUserElement = document.getElementById("save-user");
    const url = `http://localhost/buiphotea/src/api/login.php?username=${userName}&password=${password}`;
    let checkLoginSuccess = false;

    await axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        const user = JSON.stringify(data[0]);
        if (data.length > 0) {
          helpTextSubmit.current.style.color = "var(--primary-color)";
          setInnerHelpTextSubmit("Đăng nhập thành công");
          addToStorage(saveUserElement, user);
          checkLoginSuccess = true;
        } else {
          helpTextSubmit.current.style.color = "var(--active-color)";
          setInnerHelpTextSubmit("Đăng nhập thất bại.");
        }
      })
      .catch(() => {
        helpTextSubmit.current.style.color = "var(--active-color)";
        setInnerHelpTextSubmit("Lỗi kết nối.");
      });

    return checkLoginSuccess;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && checkLogin().then((res) => res && handleAfterSubmitSuccess());
  };

  return (
    <div id="login" className="d-flex flex-column align-items-center">
      <HeaderPage headerText="Đăng nhập tài khoản" />
      <form id="login-form" className={clsx(styles["container"], "w-50 mb-5")}>
        <div className="mb-3">
          <label htmlFor="user-name" className="form-label">
            <span style={{ color: "var(--active-color)" }}>*</span>Tài khoản:
          </label>
          <input
            type="text"
            className={clsx(styles["form-control"], "form-control")}
            value={userName}
            name="username"
            onChange={(e) => setUserName(e.target.value)}
            id="user-name"
            placeholder="Nhập tài khoản"
            required
          />
          <span
            className={clsx(
              styles["help-text"],
              "help-text-after-username d-block mt-3"
            )}
          >
            {innerHelpTextUSerName}
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <span style={{ color: "var(--active-color)" }}>*</span>Mật khẩu:
          </label>
          <input
            type="password"
            className={clsx(styles["form-control"], "form-control")}
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
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
          Đăng nhập
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
      <HelpAfterForm login toRegister={toRegister} />
    </div>
  );
}

export default FormLogin;
