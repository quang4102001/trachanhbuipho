import clsx from "clsx";
import { publicNavigation } from "../../../routes/routes";
import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from "./Navigation.module.scss";
import { cartContext } from "./../../../App";

function Navigation() {
  const { cart } = useContext(cartContext);
  const numberItem = cart.reduce((acc, item) => acc + item.number, 0);

  return (
    <div
      className={clsx(
        styles["navigation"],
        "d-flex flex-column position-fixed"
      )}
    >
      <ul className={clsx(styles["nav-list"], "w-100")}>
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
