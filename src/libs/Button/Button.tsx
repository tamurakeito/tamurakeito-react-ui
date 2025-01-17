import React from "react";
import "./button.css";

type Props = {
  label: string;
  btnColor: string;
  clickEvent: () => void;
};

export const Button: React.FC<Props> = (props: Props) => (
  <button className={`btn btn-${props.btnColor}`} onClick={props.clickEvent}>
    {props.label}
  </button>
);
