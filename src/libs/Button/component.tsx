import React, { ReactNode } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export type ButtonProps = {
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = buttonVariants.primary,
  size = buttonSizes.sm,
  className,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  const clazz = classNames(
    classes.button,
    classes[`button_${variant}`],
    classes[`button_${size}`],
    {
      [classes[`button_${variant}_disabled`]]: disabled,
    },
    className
  );
  const handleClick = () => {
    !disabled && onClick && onClick();
  };
  return (
    <button
      className={clazz}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export const buttonVariants = {
  primary: "primary",
  white: "white",
  light: "light",
  danger: "danger",
  outline: "outline",
  primaryLight: "primaryLight",
} as const;
export type ButtonVariant =
  (typeof buttonVariants)[keyof typeof buttonVariants];

export const buttonSizes = {
  sm: "sm",
  md: "md",
  xs: "xs",
} as const;
export type ButtonSize = (typeof buttonSizes)[keyof typeof buttonSizes];
