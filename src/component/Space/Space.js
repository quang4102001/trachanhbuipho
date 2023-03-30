import clsx from "clsx"

import styles from "./Space.module.scss"

function Space({space = "48px", noimg}) {
    return ( <div className={clsx(styles["space"], "d-flex align-items-center justify-content-center")} style={{height: space}}>
       {!noimg && <img src="https://doantrachanh.000webhostapp.com/img/icons-title-bottom.webp" alt="space" />}
    </div> );
}

export default Space;