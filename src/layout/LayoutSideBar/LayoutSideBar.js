import clsx from "clsx";

import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Navigation from "../component/Navigation/Navigation";
import styles from "./LayoutSideBar.module.scss";
import Space from "./../../component/Space/Space";

function LayoutSideBar({ children }) {
  return (
    <div
      className={clsx(styles["layout-box"], "d-flex justify-content-center")}
    >
      <Navigation/>
      <div className={clsx(styles["container"], "w-100 position-relative")}>
        <Header />
        <div
          className={clsx(
            styles["content"],
            "d-flex flex-column position-relative"
          )}
        >
          <div className="flex-grow-1">{children}</div>
          <Space />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LayoutSideBar;
