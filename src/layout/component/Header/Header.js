import clsx from "clsx";
import { useState } from "react";

import {
  PhoneIcon,
  MailIcon,
  LoginIcon,
  RegisterIcon,
  UserIcon,
} from "../../../component/Icon/Icon";
import styles from "./Header.module.scss";
import Button from "../../../component/Button/Button";
import Layer from "./../../../component/Layer/Layer";

function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const isLoggedIn = !!localStorage.getItem("User");
  isLoggedIn && sessionStorage.setItem("User", localStorage.getItem("User"));
  const isLogIn = !!sessionStorage.getItem("User");
  const user = JSON.parse(sessionStorage.getItem("User"));

  return (
    <div
      className={clsx(
        styles["header"],
        "d-flex bg-white flex-column align-items-center position-fixed"
      )}
    >
      <div
        className={clsx(
          styles["header-info"],
          "w-100 d-flex justify-content-between"
        )}
      >
        <div className={clsx(styles["header-info__contact-list"])}>
          <Button
            fontSize="1.8rem"
            leftIcon={<PhoneIcon width="1.8rem" />}
            href="tel:0975258748"
          >
            0975258748
          </Button>
          <Button
            fontSize="1.8rem"
            haveAfter
            leftIcon={<MailIcon width="1.8rem" />}
            href="mailto:mdc011646069@gmail.com"
          >
            mdc01164069@gmail.com
          </Button>
        </div>
        <div className={clsx(styles["header-info__account-list"])}>
          {!isLogIn ? (
            <>
              <Button
                likeLink
                fontSize="1.8rem"
                leftIcon={<LoginIcon width="1.8rem" />}
                onClick={() => setOpenLogin(true)}
              >
                Đăng nhập
              </Button>
              {openLogin && (
                <Layer
                  openDialog={openLogin}
                  login
                  setOpenDialog={setOpenLogin}
                />
              )}
              <Button
                likeLink
                className="ms-3"
                fontSize="1.8rem"
                leftIcon={<RegisterIcon width="1.8rem" />}
                onClick={() => setOpenRegister(true)}
              >
                Đăng kí
              </Button>
              {openRegister && (
                <Layer
                  openDialog={openRegister}
                  register
                  setOpenDialog={setOpenRegister}
                />
              )}
            </>
          ) : (
            <>
              <Button
                likeLink
                fontSize="1.8rem"
                leftIcon={<UserIcon width="1.8rem" />}
                onClick={() => setOpenUser(true)}
              >
                {user.name}
              </Button>
              {openUser && (
                <Layer openDialog={openUser} user setOpenDialog={setOpenUser} />
              )}
            </>
          )}
        </div>
      </div>
      {/* <div className={clsx(styles["header-box"], "row align-items-center")}>
        {headerBoxList.map((item, index) => {
          return item.id === 1 ? (
            <div className={clsx("col-3")} key={index}>
              <Link to="/">
                <img src={item.img} alt="logo" />
              </Link>
            </div>
          ) : (
            <div
              className={clsx("col-3 d-flex align-items-center")}
              key={index}
            >
              <div
                className={clsx(
                  styles["header-box__item__icon"],
                  "d-flex justify-content-center align-items-center"
                )}
              >
                {item.img}
              </div>
              <div className={clsx(styles["header-box__text-box"])}>
                <p className={clsx(styles["text-large"])}>{item.largeText}</p>
                <p className={clsx(styles["text-small"])}>{item.smallText}</p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Header;
