import clsx from "clsx";

import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

function Button({
  to,
  href,
  onClick,
  children,
  leftIcon,
  rightIcon,
  className = "",
  haveAfter,
  fontSize,
  btnLink,
  primary,
  borderRadius,
  boxShadow,
  likeLink,
  ...passProps
}) {
  const _props = {
    onClick,
    ...passProps,
  };

  let Comp = "button";

  if (href) {
    _props.href = href;
    Comp = "a";
  } else if (to) {
    _props.to = to;
    Comp = Link;
  }

  const classCustom = [];
  if (leftIcon & rightIcon) {
    classCustom.push(styles["btn--have-two-icon"]);
  } else if (leftIcon || rightIcon) {
    !children
      ? classCustom.push(styles["btn--just-icon"])
      : classCustom.push(styles["btn--have-icon"]);
  }
  if (to || href || likeLink) {
    classCustom.push(styles["btn--link"]);
  }
  if (haveAfter) {
    classCustom.push(styles["btn--have-after"]);
  }
  if (primary) {
    classCustom.push(styles["btn--primary"]);
  }
  if (borderRadius) {
    classCustom.push(styles["btn--border-radius"]);
  }
  if (boxShadow) {
    classCustom.push(styles["btn--box-shadow"]);
  }

  const classDefault = clsx(
    styles["btn"],
    ...classCustom,
    !!className && className
  );

  return (
    <Comp className={classDefault} {..._props} onClick={onClick}>
      {leftIcon && <span className={clsx(styles["icon"])}>{leftIcon}</span>}
      <span
        style={{ fontSize: fontSize || "1.8rem" }}
        className={clsx(styles["title"])}
      >
        {children}
      </span>
      {rightIcon && <span className={clsx(styles["icon"])}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
