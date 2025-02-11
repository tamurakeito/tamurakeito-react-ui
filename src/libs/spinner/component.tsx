import classNames from "classnames";
import { CSSProperties } from "react";
import classes from "./styles.module.scss";
import { Icon, iconTypes } from "libs/icon/component";
import React from "react";

export const Spinner = ({
  size = 40,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: CSSProperties;
}): JSX.Element => {
  const clazz = classNames(classes.spinner, className);
  return (
    <div style={style} className={clazz}>
      <Icon type={iconTypes.loading} size={size} />
    </div>
  );
};
