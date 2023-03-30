/* eslint-disable jsx-a11y/alt-text */
import clsx from "clsx";

import styles from "./Intro.module.scss";
import { introList } from "./IntroList";

function Intro() {
  return (
    <div className={clsx(styles["intro"])}>
      {introList.map((intro, index) => (
        <div
          key={index}
          className={clsx(
            styles["intro__item"],
            "row d-flex align-items-center",
            !intro.textLeft && "flex-row-reverse"
          )}
        >
          <div className="col-2"></div>
          <div className={clsx(styles["intro__item__title"], "col-4")}>
            <h3
              className={clsx(
                styles["intro__item__title__text"],
                "fw-bold px-3"
              )}
            >
              {intro.text}
            </h3>
            <p className={clsx(styles["intro__item__title__description"])}>
              {intro.description}
            </p>
          </div>
          <div className="col-1"></div>
          <div className={clsx(styles["intro__item__img"], "col-4")}>
            <img src={intro.img} className={clsx(styles[""], "w-100")} />
          </div>
          <div className="col-1"></div>
        </div>
      ))}
    </div>
  );
}

export default Intro;
