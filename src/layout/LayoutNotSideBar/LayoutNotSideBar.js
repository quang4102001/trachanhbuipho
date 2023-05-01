import classNames from "classnames/bind"

import Header from './../component/Header/Header';  
import Footer from './../component/Footer/Footer';
import styles from "./LayoutNotSideBar.module.scss"

const cx = classNames.bind(styles)

function LayoutNotSideBar({children}) {
  return (
    <div>
      <Header fullWidth/>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default LayoutNotSideBar;
