import { useState } from "react";
import clsx from "clsx";

import styles from "./Slide.module.scss";
import { slideList } from "./SlideList";
import { useEffect } from "react";
import { LeftIcon, RightIcon } from "../Icon/Icon";

function Slide() {
  const [slideShow, setSlideShow] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideShow(preState => preState + 1)
    }, 5000)
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  useEffect(() => {
    const slideArr = Array.from(document.querySelectorAll(".my-slides"));
    const dotArr = Array.from(document.querySelectorAll(".dot"));
    if (slideShow === -1) {
      setSlideShow(2);
    } else if (slideShow === 3) {
      setSlideShow(0);
    }
    slideArr.forEach((slide, index) => {
      if (slideShow === index) {
        slide.style.display = "block"
        dotArr[index].style.backgroundColor = "var(--primary-color)"
      } else {
        slide.style.display = "none"
        dotArr[index].style.backgroundColor = "#bbb"
      }
    });
  }, [slideShow]);

  return (
    <>
      <div className={clsx(styles["slideshow-container"])}>
        {slideList.map((slide, index) => (
          <div className={clsx(styles["my-slides"], "my-slides")} key={index}>
            <img src={slide.img} className={clsx("w-100")} alt="slide"/>
          </div>
        ))}
        <span
          className={clsx(styles["prev"], "position-absolute")}
          onClick={() => setSlideShow((preState) => preState-1)}
        >
          <LeftIcon/>
        </span>
        <span
          className={clsx(styles["next"], "position-absolute")}
          onClick={() => setSlideShow((preState) => preState+1)}
        >
          <RightIcon/>
        </span>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <span
          className={clsx(styles["dot"], "dot")}
          onClick={() => setSlideShow(0)}
        ></span>
        <span
          className={clsx(styles["dot"], "dot")}
          onClick={() => setSlideShow(1)}
        ></span>
        <span
          className={clsx(styles["dot"], "dot")}
          onClick={() => setSlideShow(2)}
        ></span>
      </div>
    </>
  );
}

export default Slide;
