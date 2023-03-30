import { clsx } from 'clsx';

import styles from "./HeaderPage.module.scss"


function HeaderPage({headerText}) {
  return (
    <>
      <div
        className={clsx(
          styles["header"],
          "d-flex flex-column align-items-center text-center pt-3"
        )}
      >
        <img
          className={clsx(styles["header-img"])}
          src="https://doantrachanh.000webhostapp.com/img/icons-title-top.webp"
          alt="icons-title-top"
        />
        <p className={clsx(styles["header-text"])}>{headerText}</p>
      </div>
    </>
  );
}

export default HeaderPage;
