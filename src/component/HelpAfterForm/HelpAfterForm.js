import clsx from "clsx";

import styles from "./HelpAfterForm.module.scss";
import Button from "../Button/Button";

function HelpAfterForm({ login, toLogin, toRegister }) {
  return (
    <div id="forgot-pass">
      {login ?
      <>
        <p className={clsx(styles["description"])}>
          Bạn quên mật khẩu? Hãy ấn vào <Button to="/">đây</Button>
        </p>
        <p className={clsx(styles["description"])}>
          Bạn không có tài khoản? Hãy ấn vào <Button onClick={() => toRegister()} to="#">đây</Button>
        </p>
      </>
      :
      <p className={clsx(styles["description"])}>
        Bạn đã có tài khoản? Hãy ấn vào <Button onClick={() => toLogin()} to="#">đây</Button>
      </p>}
    </div>
  );
}

export default HelpAfterForm;
