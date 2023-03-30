import { clsx } from "clsx";

import styles from "./Footer.module.scss";
import { footerList } from "./FooterList";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="footer" className={clsx(styles["footer"], "pt-3")}>
        {footerList.map((footerList, index) => (
          <div key={index} className={clsx(styles["footer-box"], "px-4 text-white")}>
            <p className={clsx(styles["footer-box__header"], "fw-bold mb-4")}>
              {footerList.headerText}
            </p>
            <ul className={clsx(styles["footer-box__list"])}>
              {footerList.list.map((footerItem, index) => {
                let Comp = "p";
                let props = {};
                if (footerItem.href) {
                  Comp = "a";
                  props.href = footerItem.href;
                } else if (footerItem.to) {
                  Comp = Link;
                  props.to = footerItem.to;
                }
                return (
                  <li
                    key={index}
                    className={clsx(styles["footer-box__item"], "d-flex mb-3")}
                  >
                    {footerItem.icon ? (
                      <span className={clsx(styles["footer-box__item__icon"], "me-3")}>
                        {footerItem.icon}
                      </span>
                    ) : (
                      <></>
                    )}
                    <span>
                      <Comp
                        className={clsx(styles["footer-box__item__text"], "text-white")}
                        {...props}
                      >
                        {footerItem.text}
                      </Comp>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className={clsx(styles["source"], "bg-dark text-white d-flex justify-content-between px-4")}>
        <p>
          © Bản quyền thuộc về Trà Chanh Bụi Phố | Cung cấp bởi Đinh Văn Quang
        </p>
        <img
          src="https://trachanhbuipho.000webhostapp.com/img/license.webp"
          alt=""
        />
      </div>
    </>
  );
}

export default Footer;
