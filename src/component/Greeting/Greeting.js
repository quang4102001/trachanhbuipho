import clsx from "clsx";

import styles from "./Greeting.module.scss";
import { greetingList } from "./GreetingList";
import Button from './../Button/Button';

function Greeting() {
  return (
    <div className={clsx(styles["greeting"], "w-100 greeting px-3")}>
      {greetingList.map((greeting, index) => (
        <div
          key={index}
          className={clsx(
            styles["greeting__item"],
            "row d-flex align-items-center",
            !greeting.textLeft ? "flex-row-reverse" : ""
          )}
        >
          <div className="col-2"></div>
          <div className={clsx(styles["greeting__item__text-box"], "col-3")}>
            <Button className={clsx(styles["greeting__item__text"], "fw-bold px-3")}>
              {greeting.text}
            </Button>
            <p className={clsx(styles["greeting__item__description"])}>{greeting.description}</p>
          </div>
          <div className="col-1"></div>
          <div className={clsx(styles["greeting__item__img-box"], "col-4")}>
            <img
              className={clsx(styles["greeting__item__img"], "rounded-circle")}
              src={greeting.img}
              alt={`greeting-${greeting.id}`}
            ></img>
          </div>
          <div className="col-2"></div>
        </div>
      ))}
    </div>
  );
}

export default Greeting;
