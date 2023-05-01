import clsx from "clsx";
import { publicNavigation } from "../../../routes/routes";
import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from "./Navigation.module.scss";
import { cartContext } from "./../../../App";
import Button from "src/component/Button/Button";
import { LeftIcon } from "src/component/Icon/Icon";
import { widthNav } from 'src/webServices';

function Navigation({setShowNav, numberItem}) {
  const { cart } = useContext(cartContext);

  return (
    <div
      className={clsx(
        styles["navigation"],
        "d-flex flex-column position-fixed"
      )}
      style={{width: widthNav}}
    >
      <ul className={clsx(styles["nav-list"], "w-100")}>
        <span>
          <li className={clsx(styles["nav-item"], "w-100")}>
            <Button
              className={clsx(
                styles["nav-item__text"],
                "fw-bold text-uppercase d-flex align-items-center"
              )}
              onClick={() => setShowNav(false)}
            >
              <LeftIcon width="1.8rem" />{" "}
              <span className={clsx(styles["text"])}>Thu gọn</span>
            </Button>
          </li>
        </span>
        <hr />
        {publicNavigation.map((link, index) => {
          return (
            <span key={index}>
              <li className={clsx(styles["nav-item"], "w-100")}>
                <Link
                  className={clsx(
                    styles["nav-item__text"],
                    "fw-bold text-uppercase"
                  )}
                  to={link.path}
                >
                  {link.name}
                  {link.cart && (
                    <span
                      className={clsx(
                        styles["number-cart"],
                        "d-flex justify-content-center align-items-center text-white position-absolute rounded-circle"
                      )}
                    >
                      {numberItem}
                    </span>
                  )}
                </Link>
              </li>
            </span>
          );
        })}
      </ul>
    </div>
  );
}

export default Navigation;
