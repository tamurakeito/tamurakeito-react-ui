import classNames from "classnames";
import classes from "./styles.module.scss";
import React, { ReactNode } from "react";

export const Center = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const clazz = classNames([classes.center, className]);
  return (
    <div className={clazz}>
      <div>{children}</div>
    </div>
  );
};
