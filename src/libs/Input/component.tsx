import React from "react";
import { forwardRef } from "react";
import classes from "./styles.module.scss";
import classNames from "classnames";

export type InputProps = {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      value,
      placeholder,
      onChange,
      onKeyDown,
      ...props
    }: InputProps,
    ref
  ) => {
    const clazz = classNames(classes.input, className);
    return (
      <input
        ref={ref}
        className={clazz}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...props}
      />
    );
  }
);
