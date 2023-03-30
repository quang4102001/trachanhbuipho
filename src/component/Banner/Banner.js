import clsx from "clsx";

import styles from "./Banner.module.scss";
import { bannerList } from "./BannerList";

function Banner() {
  return (
    <div className={clsx(styles["banner"], "banner row px-3")}>
      {bannerList.map((banner, index) => (
        <div key={index} className={clsx(styles["banner__item"], "banner__item col-4")}>
          <img
            className={clsx(styles["banner__item__img"])}
            src={banner.img}
            alt={`banner-${banner.img}`}
          />
          <span className={clsx(styles["banner__item__line"])}></span>
          <span className={clsx(styles["banner__item__layer"])}></span>
        </div>
      ))}
    </div>
  );
}

export default Banner;
