import { clsx } from "clsx";

import HeaderPage from "./../HeaderPage/HeaderPage";
import styles from "./FormUser.module.scss";
import Button from "./../Button/Button";

function FormUser({ closeDialog }) {
  const logout = () => {
    localStorage.removeItem("User")
    sessionStorage.removeItem("User")
    closeDialog()
  };

  return (
    <div id="login" className="d-flex flex-column align-items-center">
      <HeaderPage headerText="Đăng nhập tài khoản" />
      <form id="login-form" className={clsx(styles["container"], "w-100 mb-5")}>
        <div className="d-flex mb-3">
          <label htmlFor="user-name" className="form-label mr-3">
            Tên:
          </label>
          <input
            type="text"
            className={clsx(styles["form-control"], "form-control")}
            required
          />
        </div>
      </form>
      <Button primary onClick={logout}>
        Đăng xuất
      </Button>
    </div>
  );
}

export default FormUser;
