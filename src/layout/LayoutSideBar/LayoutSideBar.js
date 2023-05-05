import clsx from "clsx";
import { createContext, useContext, useState } from "react";

import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Navigation from "../component/Navigation/Navigation";
import styles from "./LayoutSideBar.module.scss";
import Space from "./../../component/Space/Space";
import Button from "src/component/Button/Button";
import { RightIcon, UpIcon } from "src/component/Icon/Icon";
import { publicNavigation } from "./../../routes/routes";
import { Link } from "react-router-dom";
import { cartContext } from "./../../App";
import { widthNav } from "src/webServices";

export const navContext = createContext();

function LayoutSideBar({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { cart } = useContext(cartContext);
  const numberItem = cart.reduce((acc, item) => acc + item.number, 0);

  return (
    <navContext.Provider value={{ showNav, setShowNav }}>
      <div
        className={clsx(styles["layout-box"], "d-flex justify-content-center")}
      >
        {showNav ? (
          <Navigation setShowNav={setShowNav} numberItem={numberItem} />
        ) : (
          <div
            className={clsx(
              styles["box-small-nav"],
              "d-flex flex-column justify-content-center align-items-center"
            )}
          >
            <Button
              className={clsx(styles["btn"])}
              onClick={() => setShowNav(true)}
            >
              <RightIcon width="1.8rem" />
            </Button>
            <div
              style={{ borderTop: "1px solid var(--primary-color)" }}
              className="w-100 my-3"
            ></div>
            {publicNavigation.map((route, index) => {
              const Element = route.icon;
              return (
                <Link
                  key={index}
                  className={clsx(styles["btn"])}
                  to={route.path}
                >
                  <Element className={clsx(styles["item"])} width="3rem" />
                  {route.cart ? (
                    <span
                      className={clsx(
                        styles["number-cart"],
                        "d-flex justify-content-center align-items-center text-white position-absolute rounded-circle"
                      )}
                    >
                      {numberItem}
                    </span>
                  ) : (
                    <></>
                  )}
                </Link>
              );
            })}
          </div>
        )}
        <div
          className={clsx(styles["container"], "w-100 position-relative")}
          style={{ marginLeft: `${showNav ? widthNav : "0"}` }}
        >
          <Header showNav={showNav} />
          <div
            className={clsx(
              styles["content"],
              "d-flex flex-column position-relative"
            )}
          >
            <div className="flex-grow-1">{children}</div>
            <Space />
            <Footer />
            <Button
              href="#"
              leftIcon={<UpIcon width="2rem" height="2rem" />}
              boxShadow
              className={clsx(
                styles["btn-go-top"],
                "position-fixed text-success"
              )}
            ></Button>
          </div>
        </div>
      </div>
    </navContext.Provider>
  );
}

export default LayoutSideBar;
