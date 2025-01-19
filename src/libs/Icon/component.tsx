import React from "react";
import classNames from "classnames";
import classes from "./styles.module.scss";
import { Color, colors } from "assets/styles/colors";

const prefix = "icon";
export function Icon({
  size = 16,
  type,
  className,
  color,
}: {
  size?: number;
  type: IconType;
  className?: string;
  color?: Color;
}): JSX.Element {
  const icons: Record<IconType, JSX.Element> = {
    [iconTypes.shop]: <Shop color={color} />,
    [iconTypes.loading]: <Loading />,
    [iconTypes.expand]: <Expand />,
    [iconTypes.chevronDownSolid]: <ChevronDownSolid />,
    [iconTypes.enterprise]: <Enterprise />,
    [iconTypes.brand]: <Brand />,
    [iconTypes.menu]: <Menu />,
    [iconTypes.drag]: <Drag />,
    [iconTypes.surprised]: <Surprised color={color} />,
    [iconTypes.eatin]: <Eatin color={color} />,
    [iconTypes.takeout]: <Takeout color={color} />,
    [iconTypes.payment]: <Payment color={color} />,
    [iconTypes.table]: <Table color={color} />,
    [iconTypes.qr]: <QR color={color} />,
    [iconTypes.locker]: <Locker color={color} />,
    [iconTypes.pos]: <Pos color={color} />,
    [iconTypes.line]: <Line />,
    [iconTypes.plan]: <Plan size={size} color={color} />,
  };
  return (
    <i
      className={classNames(classes[prefix], className, {
        [classes[`${prefix}--loading`]]: type === iconTypes.loading,
      })}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {icons[type]}
    </i>
  );
}

function Shop({ color = colors.gray600 }: { color?: Color }): JSX.Element {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0323 11.6H22.4C22.7 11.6 23 11.5 23.2 11.2C23.4 10.9 23.5 10.6 23.4 10.3L21.4 2.7C21.3 2.3 20.9 2 20.4 2H3.5C3 2 2.6 2.3 2.5 2.8L0.5 10.4C0.5 10.7 0.5 11 0.7 11.2C0.9 11.5 1.2 11.6 1.5 11.6H3.96766C3.38567 11.6141 3 12.0105 3 12.5996V20.5996C3 22.2996 4.3 23.5996 6 23.5996H18C19.6 23.5996 21 22.2996 21 20.5996V12.5996C21 12.0105 20.6143 11.6141 20.0323 11.6ZM19.9677 11.6H4.03234C4.61433 11.6141 5 12.0105 5 12.5996V20.5996C5 21.1996 5.4 21.5996 6 21.5996H18C18.6 21.5996 19 21.1996 19 20.5996V12.5996C19 12.0105 19.3857 11.6141 19.9677 11.6ZM21.1 9.6H2.8L4.3 4H19.6L21.1 9.6Z"
        // fill={color}
      />
    </svg>
  );
}

function Loading(): JSX.Element {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.08 22C6.48 22 2 17.52 2 12.08C2 6.64 6.48 2 12.08 2C17.68 2 22.16 6.48 22.16 12.08C22.16 13.04 21.52 13.68 20.56 13.68C19.6 13.68 18.96 13.04 18.96 12.08C18.8 8.24 15.76 5.2 12.08 5.2C8.24 5.2 5.2 8.24 5.2 12.08C5.2 15.92 8.24 18.96 12.08 18.96C13.04 18.96 13.68 19.6 13.68 20.56C13.68 21.52 12.88 22 12.08 22Z"
        fill="#DDDDDD"
      />
      <path
        d="M17.9984 19.5995C17.5184 19.5995 17.1984 19.4395 16.8784 19.1195C16.2384 18.4795 16.2384 17.5195 16.8784 16.8795C18.1584 15.5995 18.9584 13.8395 18.9584 12.0795C18.9584 11.1195 19.5984 10.4795 20.5584 10.4795C21.5184 10.4795 22.1584 11.1195 22.1584 12.0795C22.1584 14.7995 21.0384 17.3595 19.2784 19.1195C18.7984 19.4395 18.4784 19.5995 17.9984 19.5995Z"
        fill="#AFAFAF"
      />
      <path
        d="M12.08 22C6.48 22 2 17.52 2 12.08C2 6.64 6.48 2 12.08 2C17.68 2 22.16 6.48 22.16 12.08C22.16 13.04 21.52 13.68 20.56 13.68C19.6 13.68 18.96 13.04 18.96 12.08C18.8 8.24 15.76 5.2 12.08 5.2C8.24 5.2 5.2 8.24 5.2 12.08C5.2 15.92 8.24 18.96 12.08 18.96C13.04 18.96 13.68 19.6 13.68 20.56C13.68 21.52 12.88 22 12.08 22Z"
        fill="#DDDDDD"
      />
      <path
        d="M18.8013 18.6395C18.4813 18.6395 18.1613 18.4795 17.8413 18.3195C17.2013 17.6795 17.0413 16.7195 17.5213 16.0795C18.3213 14.9595 18.8013 13.5195 18.8013 12.0795C18.8013 11.1195 19.4413 10.4795 20.4013 10.4795C21.3613 10.4795 22.0013 11.1195 22.0013 12.0795C22.0013 14.1595 21.3613 16.2395 20.0813 17.9995C19.9213 18.3195 19.4413 18.6395 18.8013 18.6395Z"
        fill="#AFAFAF"
      />
    </svg>
  );
}

function Expand(): JSX.Element {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.7564 4.75879L4.7564 7.75879M7.99859 0.758789L0.757812 7.99956"
        stroke="#666666"
      />
    </svg>
  );
}

const ChevronDownSolid = ({ color = colors.gray800 }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7 15.7L18.7 9.7C19.1 9.3 19.1 8.7 18.7 8.3C18.5 8.1 18.3 8 18 8L6 8C5.7 8 5.5 8.1 5.3 8.3C4.9 8.7 4.9 9.3 5.3 9.7L11.3 15.7C11.7 16.1 12.3 16.1 12.7 15.7Z"
        // fill={color}
      />
    </svg>
  );
};

const Brand = ({ color = colors.gray800 }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8984 23.2002H7.89844C7.29844 23.2002 6.89844 22.8002 6.89844 22.2002C6.89844 21.6002 7.29844 21.2002 7.89844 21.2002H15.8984C16.4984 21.2002 16.8984 21.6002 16.8984 22.2002C16.8984 22.8002 16.4984 23.2002 15.8984 23.2002Z"
        // fill={color}
      />
      <path
        d="M13.7016 5.7C13.1016 5.7 12.7016 5.3 12.7016 4.7V2.8C12.7016 2.6 12.6016 2.5 12.5016 2.5H11.3016C11.2016 2.5 11.1016 2.6 11.1016 2.8V4.7C11.1016 5.3 10.7016 5.7 10.1016 5.7C9.50156 5.7 9.10156 5.3 9.10156 4.7V2.8C9.10156 1.5 10.1016 0.5 11.3016 0.5H12.4016C13.6016 0.5 14.7016 1.5 14.7016 2.8V4.7C14.7016 5.2 14.3016 5.7 13.7016 5.7Z"
        // fill={color}
      />
      <path
        d="M13.7 23C13.1 23 12.7 22.6 12.7 22V16.1C12.7 15.5 13.1 15.1 13.7 15.1C14.3 15.1 14.7 15.5 14.7 16.1V22C14.7 22.5 14.3 23 13.7 23Z"
        // fill={color}
      />
      <path
        d="M10.1016 22.9996C9.50156 22.9996 9.10156 22.5996 9.10156 21.9996V16.0996C9.10156 15.4996 9.50156 15.0996 10.1016 15.0996C10.7016 15.0996 11.1016 15.4996 11.1016 16.0996V21.9996C11.1016 22.4996 10.6016 22.9996 10.1016 22.9996Z"
        // fill={color}
      />
      <path
        d="M17.7 16.7H6.1C5 16.7 4 15.7 4 14.5V6.5C4 5.3 5 4.4 6.1 4.4H17.6C18.8 4.4 19.7 5.4 19.7 6.5V14.5C19.8 15.7 18.8 16.7 17.7 16.7ZM6.1 6.3C6.1 6.3 6 6.4 6 6.5V14.5C6 14.6 6.1 14.6 6.1 14.6H17.6C17.7 14.6 17.7 14.5 17.7 14.5V6.5C17.7 6.4 17.6 6.4 17.6 6.4H6.1V6.3Z"
        // fill={color}
      />
    </svg>
  );
};

const Enterprise = ({ color = colors.gray800 }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 2H5C3.3 2 2 3.3 2 5V21C2 21.6 2.4 22 3 22C3.6 22 4 21.6 4 21V5C4 4.5 4.4 4 5 4H19C19.6 4 20 4.4 20 5V21C20 21.6 20.4 22 21 22C21.6 22 22 21.6 22 21V5C22 3.3 20.7 2 19 2Z"
        // fill={color}
      />
      <path
        d="M10 5.9H7C6.4 5.9 6 6.3 6 6.9V9.9C6 10.5 6.4 10.9 7 10.9H10C10.6 10.9 11 10.5 11 9.9V6.9C11 6.3 10.6 5.9 10 5.9ZM9 8.9H8V7.9H9V8.9Z"
        // fill={color}
      />
      <path
        d="M10 12.5H7C6.4 12.5 6 12.9 6 13.5V16.5C6 17.1 6.4 17.5 7 17.5H10C10.6 17.5 11 17.1 11 16.5V13.5C11 12.9 10.6 12.5 10 12.5ZM9 15.5H8V14.5H9V15.5Z"
        // fill={color}
      />
      <path
        d="M17 5.9H14C13.4 5.9 13 6.3 13 6.9V9.9C13 10.5 13.4 10.9 14 10.9H17C17.6 10.9 18 10.5 18 9.9V6.9C18 6.3 17.6 5.9 17 5.9ZM16 8.9H15V7.9H16V8.9Z"
        // fill={color}
      />
    </svg>
  );
};

const Menu = ({ color = colors.gray800 }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.4 23.1002H6.4C5.3 23.1002 4.4 22.2002 4.4 21.1002V14.6002C3.6 14.0002 2 12.4002 2 10.0002V2.00017C2 1.40017 2.4 1.00017 3 1.00017C3.6 1.00017 4 1.40017 4 2.00017V10.0002C4 12.0002 5.9 13.2002 5.9 13.2002C6.2 13.4002 6.4 13.7002 6.4 14.1002V21.1002H8.4V14.1002C8.4 13.7002 8.6 13.4002 8.9 13.2002C9 13.2002 10.8 12.0002 10.8 10.0002V2.00017C10.8 1.40017 11.2 1.00017 11.8 1.00017C12.4 1.00017 12.8 1.40017 12.8 2.00017V10.0002C12.8 12.4002 11.2 13.9002 10.4 14.6002V21.1002C10.4 22.2002 9.5 23.1002 8.4 23.1002Z"
        // fill={color}
      />
      <path
        d="M19.9 23.1002H18.7C17.6 23.1002 16.7 22.2002 16.7 21.1002V16.1002H15C14.5 16.1002 14 15.7002 14 15.2002C14 15.0002 13.6 9.20017 15.3 5.90017C17.1 2.00017 20.5 1.10017 20.6 1.00017C20.9 0.900168 21.2 1.00017 21.5 1.20017C21.7 1.40017 21.9 1.70017 21.9 2.00017V21.1002C21.9 22.2002 21 23.1002 19.9 23.1002ZM15.9 14.1002H17.7C18.3 14.1002 18.7 14.5002 18.7 15.1002V21.1002H19.9V3.60017C19 4.10017 17.9 5.10017 17 6.80017C16 8.90017 15.9 12.4002 15.9 14.1002Z"
        // fill={color}
      />
      <path
        d="M6 9.30017C5.4 9.30017 5 8.90017 5 8.30017V2.00017C5 1.40017 5.4 1.00017 6 1.00017C6.6 1.00017 7 1.40017 7 2.00017V8.30017C7 8.90017 6.5 9.30017 6 9.30017Z"
        // fill={color}
      />
      <path
        d="M8.9 9.30017C8.3 9.30017 7.9 8.90017 7.9 8.30017V2.00017C7.9 1.40017 8.3 1.00017 8.9 1.00017C9.5 1.00017 9.9 1.40017 9.9 2.00017V8.30017C9.9 8.90017 9.4 9.30017 8.9 9.30017Z"
        // fill={color}
      />
    </svg>
  );
};

const Drag = ({ color = colors.info }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 12C13.5 10.8954 14.3954 10 15.5 10C16.6046 10 17.5 10.8954 17.5 12C17.5 13.1046 16.6046 14 15.5 14C14.3954 14 13.5 13.1046 13.5 12Z"
        // fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 12C6.5 10.8954 7.39543 10 8.5 10C9.60457 10 10.5 10.8954 10.5 12C10.5 13.1046 9.60457 14 8.5 14C7.39543 14 6.5 13.1046 6.5 12Z"
        // fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 5C13.5 3.89543 14.3954 3 15.5 3C16.6046 3 17.5 3.89543 17.5 5C17.5 6.10457 16.6046 7 15.5 7C14.3954 7 13.5 6.10457 13.5 5Z"
        // fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 5C6.5 3.8953 7.39543 3 8.5 3C9.60457 3 10.5 3.89543 10.5 5C10.5 6.10457 9.60457 7 8.5 7C7.39543 7 6.5 6.10457 6.5 5Z"
        // fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 19C13.5 17.8954 14.3954 17 15.5 17C16.6046 17 17.5 17.8954 17.5 19C17.5 20.1046 16.6046 21 15.5 21C14.3954 21 13.5 20.1046 13.5 19Z"
        // fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 19C6.5 17.8954 7.39543 17 8.5 17C9.60457 17 10.5 17.8954 10.5 19C10.5 20.1046 9.60457 21 8.5 21C7.39543 21 6.5 20.1046 6.5 19Z"
        // fill={color}
      />
    </svg>
  );
};

const Surprised = ({ color = colors.info }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23ZM12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3ZM9 10C8.5 10 8 9.6 8 9C8 8.4 8.4 8 9 8C9.6 8 10 8.4 10 9C10 9.6 9.6 10 9 10ZM15 10C14.4 10 14 9.6 14 9C14 8.4 14.4 8 15 8C15.6 8 16 8.4 16 9C16 9.6 15.6 10 15 10ZM12 19.3C10.2 19.3 8.7 17.6 8.7 15.6C8.7 13.6 10.2 11.9 12 11.9C13.8 11.9 15.3 13.6 15.3 15.6C15.3 17.6 13.8 19.3 12 19.3ZM12 13.4C11.1 13.4 10.3 14.4 10.3 15.5C10.3 16.7 11.1 17.6 12 17.6C12.9 17.6 13.7 16.6 13.7 15.5C13.7 14.3 12.9 13.4 12 13.4Z"
        // fill={color}
      />
    </svg>
  );
};

const Eatin = ({ color = colors.gray800 }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00008 19.2501H4.33342C3.41675 19.2501 2.66675 18.5001 2.66675 17.5835V12.1668C2.00008 11.6668 0.666748 10.3335 0.666748 8.33347V1.66681C0.666748 1.16681 1.00008 0.833473 1.50008 0.833473C2.00008 0.833473 2.33341 1.16681 2.33341 1.66681V8.33347C2.33341 10.0001 3.91675 11.0001 3.91675 11.0001C4.16675 11.1668 4.33342 11.4168 4.33342 11.7501V17.5835H6.00008V11.7501C6.00008 11.4168 6.16675 11.1668 6.41675 11.0001C6.50008 11.0001 8.00008 10.0001 8.00008 8.33347V1.66681C8.00008 1.16681 8.33342 0.833473 8.83342 0.833473C9.33342 0.833473 9.66675 1.16681 9.66675 1.66681V8.33347C9.66675 10.3335 8.33341 11.5835 7.66675 12.1668V17.5835C7.66675 18.5001 6.91675 19.2501 6.00008 19.2501Z"
        // fill={color}
      />
      <path
        d="M15.5834 19.2501H14.5834C13.6667 19.2501 12.9167 18.5001 12.9167 17.5835V13.4168H11.5001C11.0834 13.4168 10.6667 13.0835 10.6667 12.6668C10.6667 12.5001 10.3334 7.66681 11.7501 4.91681C13.2501 1.66681 16.0834 0.916807 16.1667 0.833473C16.4167 0.75014 16.6667 0.833473 16.9167 1.00014C17.0834 1.16681 17.2501 1.41681 17.2501 1.66681V17.5835C17.2501 18.5001 16.5001 19.2501 15.5834 19.2501ZM12.2501 11.7501H13.7501C14.2501 11.7501 14.5834 12.0835 14.5834 12.5835V17.5835H15.5834V3.00014C14.8334 3.41681 13.9167 4.25014 13.1667 5.66681C12.3334 7.41681 12.2501 10.3335 12.2501 11.7501Z"
        // fill={color}
      />
      <path
        d="M4.00008 7.75014C3.50008 7.75014 3.16675 7.41681 3.16675 6.91681V1.66681C3.16675 1.16681 3.50008 0.833473 4.00008 0.833473C4.50008 0.833473 4.83342 1.16681 4.83342 1.66681V6.91681C4.83342 7.41681 4.41675 7.75014 4.00008 7.75014Z"
        // fill={color}
      />
      <path
        d="M6.41675 7.75014C5.91675 7.75014 5.58342 7.41681 5.58342 6.91681V1.66681C5.58342 1.16681 5.91675 0.833473 6.41675 0.833473C6.91675 0.833473 7.25008 1.16681 7.25008 1.66681V6.91681C7.25008 7.41681 6.83342 7.75014 6.41675 7.75014Z"
        // fill={color}
      />
    </svg>
  );
};

const Takeout = ({ color = colors.gray800 }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="24"
      height="24"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2 12.1C7.6 12.1 5.5 10 5.5 7.4C5.5 6.8 5.9 6.4 6.5 6.4C7.1 6.4 7.5 6.8 7.5 7.4C7.5 8.9 8.7 10.1 10.2 10.1C11.7 10.1 12.9 8.9 12.9 7.4C12.9 6.8 13.3 6.4 13.9 6.4C14.5 6.4 14.9 6.8 14.9 7.4C14.8 10 12.7 12.1 10.2 12.1Z"
        // fill={color}
      />
      <path
        d="M17.5 22.1H2.8C1.2 22.1 0 20.8 0 19.3V19.2L1.8 3.6C1.9 3.4 2 3.2 2.1 3L4.8 0.3C5.1 0.1 5.3 0 5.6 0H14.8C15.1 0 15.3 0.1 15.5 0.3L18.2 3C18.4 3.2 18.5 3.4 18.5 3.6L20.3 19.2V19.3C20.3 20.9 19 22.1 17.5 22.1ZM2 19.4C2 19.8 2.4 20.2 2.8 20.2H17.4C17.8 20.2 18.2 19.9 18.2 19.4L16.5 4.2L14.3 2H6L3.8 4.2L2 19.4Z"
        // fill={color}
      />
      <path
        d="M17.5 4.7H2.8C2.2 4.7 1.8 4.3 1.8 3.7C1.8 3.1 2.2 2.7 2.8 2.7H17.4C18 2.7 18.4 3.1 18.4 3.7C18.4 4.3 18 4.7 17.5 4.7Z"
        // fill={color}
      />
    </svg>
  );
};

const Payment = ({ color = colors.gray800 }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4H4C2.3 4 1 5.3 1 7V17C1 18.7 2.3 20 4 20H20C21.7 20 23 18.7 23 17V7C23 5.3 21.7 4 20 4ZM4 6H20C20.6 6 21 6.4 21 7V9H3V7C3 6.4 3.4 6 4 6ZM20 18H4C3.4 18 3 17.6 3 17V11H21V17C21 17.6 20.6 18 20 18Z"
        // fill={color}
      />
      <path
        d="M8.8 14H5.8C5.2 14 4.8 14.4 4.8 15C4.8 15.6 5.2 16 5.8 16H8.8C9.4 16 9.8 15.6 9.8 15C9.8 14.4 9.4 14 8.8 14Z"
        // fill={color}
      />
    </svg>
  );
};

const Table = ({ color = colors.primary }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7 9H3C2.4 9 2 8.6 2 8C2 7.4 2.4 7 3 7H21.7C22.3 7 22.7 7.4 22.7 8C22.7 8.6 22.2 9 21.7 9Z"
        // fill={color}
      />
      <path
        d="M21.4 13.2H3.3C2 13.2 1 12.2 1 10.9V8.5C1 8.1 1.1 7.6 1.3 7.2L3.7 2.3C4 1.5 4.8 1 5.7 1H19C19.9 1 20.6 1.5 21 2.3L23.4 7.3C23.6 7.7 23.7 8.1 23.7 8.6V11C23.7 12.2 22.6 13.2 21.4 13.2ZM5.4 3.1L3.1 8.1C3 8.2 3 8.4 3 8.5V10.9C3 11 3.1 11.2 3.3 11.2H21.4C21.5 11.2 21.7 11.1 21.7 10.9V8.5C21.7 8.4 21.7 8.2 21.6 8.1L19.2 3.2C19.2 3.1 19.1 3 19 3H5.7C5.6 3 5.5 3.1 5.4 3.1Z"
        // fill={color}
      />
      <path
        d="M16.3 22H8.3C7.7 22 7.3 21.6 7.3 21C7.3 20.4 7.7 20 8.3 20H16.3C16.9 20 17.3 20.4 17.3 21C17.3 21.6 16.9 22 16.3 22Z"
        // fill={color}
      />
      <path
        d="M12.3 21.1C11.7 21.1 11.3 20.7 11.3 20.1V12.7C11.3 12.1 11.7 11.7 12.3 11.7C12.9 11.7 13.3 12.1 13.3 12.7V20.1C13.3 20.7 12.9 21.1 12.3 21.1Z"
        // fill={color}
      />
    </svg>
  );
};

const QR = ({ color = colors.gray600 }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="100%"
      height="100%"
      viewBox="0 0 14 15"
      fillRule="evenodd"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M5.2513 1.6665H2.33464C2.02522 1.6665 1.72847 1.78942 1.50968 2.00821C1.29089 2.22701 1.16797 2.52375 1.16797 2.83317V5.74984C1.16797 6.05926 1.29089 6.356 1.50968 6.57479C1.72847 6.79359 2.02522 6.9165 2.33464 6.9165H5.2513C5.56072 6.9165 5.85747 6.79359 6.07626 6.57479C6.29505 6.356 6.41797 6.05926 6.41797 5.74984V2.83317C6.41797 2.52375 6.29505 2.22701 6.07626 2.00821C5.85747 1.78942 5.56072 1.6665 5.2513 1.6665ZM5.2513 5.45817C5.2513 5.53553 5.22057 5.60971 5.16587 5.66441C5.11118 5.71911 5.03699 5.74984 4.95964 5.74984H2.6263C2.54895 5.74984 2.47476 5.71911 2.42006 5.66441C2.36536 5.60971 2.33464 5.53553 2.33464 5.45817V3.12484C2.33464 3.04748 2.36536 2.9733 2.42006 2.9186C2.47476 2.8639 2.54895 2.83317 2.6263 2.83317H4.95964C5.03699 2.83317 5.11118 2.8639 5.16587 2.9186C5.22057 2.9733 5.2513 3.04748 5.2513 3.12484V5.45817Z"
        // fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6654 1.6665H8.7487C8.43928 1.6665 8.14253 1.78942 7.92374 2.00821C7.70495 2.22701 7.58203 2.52375 7.58203 2.83317V5.74984C7.58203 6.05926 7.70495 6.356 7.92374 6.57479C8.14253 6.79359 8.43928 6.9165 8.7487 6.9165H11.6654C11.9748 6.9165 12.2715 6.79359 12.4903 6.57479C12.7091 6.356 12.832 6.05926 12.832 5.74984V2.83317C12.832 2.52375 12.7091 2.22701 12.4903 2.00821C12.2715 1.78942 11.9748 1.6665 11.6654 1.6665ZM11.6654 5.45817C11.6654 5.53553 11.6346 5.60971 11.5799 5.66441C11.5252 5.71911 11.4511 5.74984 11.3737 5.74984H9.04036C8.96301 5.74984 8.88882 5.71911 8.83412 5.66441C8.77943 5.60971 8.7487 5.53553 8.7487 5.45817V3.12484C8.7487 3.04748 8.77943 2.9733 8.83412 2.9186C8.88882 2.8639 8.96301 2.83317 9.04036 2.83317H11.3737C11.4511 2.83317 11.5252 2.8639 11.5799 2.9186C11.6346 2.9733 11.6654 3.04748 11.6654 3.12484V5.45817Z"
        // fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.2513 8.0835H2.33464C2.02522 8.0835 1.72847 8.20641 1.50968 8.42521C1.29089 8.644 1.16797 8.94074 1.16797 9.25016V12.1668C1.16797 12.4762 1.29089 12.773 1.50968 12.9918C1.72847 13.2106 2.02522 13.3335 2.33464 13.3335H5.2513C5.56072 13.3335 5.85747 13.2106 6.07626 12.9918C6.29505 12.773 6.41797 12.4762 6.41797 12.1668V9.25016C6.41797 8.94074 6.29505 8.644 6.07626 8.42521C5.85747 8.20641 5.56072 8.0835 5.2513 8.0835ZM5.2513 11.8752C5.2513 11.9525 5.22057 12.0267 5.16587 12.0814C5.11118 12.1361 5.03699 12.1668 4.95964 12.1668H2.6263C2.54895 12.1668 2.47476 12.1361 2.42006 12.0814C2.36536 12.0267 2.33464 11.9525 2.33464 11.8752V9.54183C2.33464 9.46447 2.36536 9.39029 2.42006 9.33559C2.47476 9.28089 2.54895 9.25016 2.6263 9.25016H4.95964C5.03699 9.25016 5.11118 9.28089 5.16587 9.33559C5.22057 9.39029 5.2513 9.46447 5.2513 9.54183V11.8752Z"
        // fill={color}
      />
      {/* <path d="M11.082 9.8335H9.33203V11.5835H11.082V9.8335Z" fill={color} /> */}
      {/* <path d="M12.832 11.5835H11.082V13.3335H12.832V11.5835Z" fill={color} /> */}
      <path
        d="M9.33203 11.5835H7.58203V13.3335H9.33203V11.5835Z"
        // fill={color}
      />
      {/* <path d="M12.832 8.0835H11.082V9.8335H12.832V8.0835Z" fill={color} /> */}
      {/* <path d="M9.33203 8.0835H7.58203V9.8335H9.33203V8.0835Z" fill={color} /> */}
    </svg>
  );
};
const Locker = ({ color = colors.primary }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1878 22H3.81223C2.81047 22 2 21.1895 2 20.1878V3.81223C2 2.81047 2.81047 2 3.81223 2H20.1878C21.1895 2 22 2.81047 22 3.81223V20.1878C22 21.1895 21.1895 22 20.1878 22Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M17.7261 18H6.27385C6.1257 18 6 17.8788 6 17.7261V6.27385C6 6.1257 6.12121 6 6.27385 6H17.7261C17.8743 6 18 6.12121 18 6.27385V17.7261C18 17.8788 17.8788 18 17.7261 18Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M9.5 10.5176V13.3416"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Pos = ({ color = colors.primary }: { color?: Color }) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12.8V10C19 8.7 17.9 7.6 16.6 7.6H9.6V6H11.6C12.2 6 12.6 5.6 12.6 5V1C12.6 0.4 12.2 0 11.6 0H5.6C5 0 4.6 0.4 4.6 1V5C4.6 5.6 5 6 5.6 6H7.6V7.5H5.4C4.1 7.5 3 8.6 3 10V12.9C1.3 12.9 0 14.1 0 15.7V20.1C0 21.6 1.3 22.9 3 22.9H19C20.7 22.9 22 21.7 22 20.1V15.7C22 14.1 20.7 12.8 19 12.8ZM6.6 2H10.6V4H6.6V2ZM5 10C5 9.8 5.2 9.6 5.4 9.6H16.6C16.8 9.6 17 9.8 17 10V12.9H5V10ZM20 20.1C20 20.5 19.5 20.9 19 20.9H3C2.5 20.9 2 20.5 2 20.1V15.7C2 15.3 2.5 14.9 3 14.9H19C19.5 14.9 20 15.3 20 15.7V20.1Z"
        // fill={color}
      />
    </svg>
  );
};

const Line = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.8842 36H8.11575C3.63375 36 0 32.3662 0 27.8842V8.11575C0 3.63375 3.63375 0 8.11575 0H27.8842C32.3662 0 36 3.63375 36 8.11575V27.8842C36 32.3662 32.3662 36 27.8842 36Z"
      fill="#06C755"
    />
    <path
      d="M29.9994 16.3035C29.9994 10.9327 24.6151 6.56323 17.9968 6.56323C11.3795 6.56323 5.99414 10.9327 5.99414 16.3035C5.99414 21.1185 10.2646 25.1505 16.0325 25.9132C16.4229 25.9976 16.955 26.1709 17.09 26.505C17.2115 26.8087 17.1688 27.2835 17.1294 27.5906C17.1294 27.5906 16.9888 28.4377 16.9584 28.6177C16.9055 28.9215 16.7176 29.8046 17.9979 29.2646C19.2793 28.7246 24.9099 25.1944 27.4276 22.2964C29.1658 20.3895 29.9994 18.4534 29.9994 16.3035Z"
      fill="white"
    />
    <path
      d="M26.0059 19.4051H22.6388H22.6343C22.5072 19.4051 22.4048 19.3027 22.4048 19.1756V19.1722V13.9432V13.9387C22.4048 13.8116 22.5072 13.7092 22.6343 13.7092H22.6388H26.0059C26.1319 13.7092 26.2354 13.8127 26.2354 13.9387V14.7904C26.2354 14.9175 26.133 15.0199 26.0059 15.0199H23.7143V15.9041H26.0059C26.1319 15.9041 26.2354 16.0076 26.2354 16.1336V16.9852C26.2354 17.1124 26.133 17.2147 26.0059 17.2147H23.7143V18.099H26.0059C26.1319 18.099 26.2354 18.2025 26.2354 18.3285V19.1801C26.2354 19.3027 26.133 19.4051 26.0059 19.4051Z"
      fill="#06C755"
    />
    <path
      d="M13.5329 19.4051C13.6589 19.4051 13.7624 19.3027 13.7624 19.1756V18.324C13.7624 18.198 13.6589 18.0945 13.5329 18.0945H11.2413V13.9365C11.2413 13.8105 11.1378 13.707 11.0118 13.707H10.1602C10.033 13.707 9.93066 13.8093 9.93066 13.9365V19.1711V19.1745C9.93066 19.3016 10.033 19.404 10.1602 19.404H10.1647H13.5329V19.4051Z"
      fill="#06C755"
    />
    <path
      d="M15.5626 13.7081H14.7109C14.5849 13.7081 14.4814 13.8105 14.4814 13.9376V19.1756C14.4814 19.3016 14.5838 19.4051 14.7109 19.4051H15.5626C15.6897 19.4051 15.7921 19.3027 15.7921 19.1756V13.9376C15.7921 13.8116 15.6897 13.7081 15.5626 13.7081Z"
      fill="#06C755"
    />
    <path
      d="M21.3573 13.7081H20.5057C20.3786 13.7081 20.2762 13.8105 20.2762 13.9376V17.0483L17.88 13.8116C17.8743 13.8038 17.8676 13.7959 17.862 13.788L17.8608 13.7869C17.8563 13.7824 17.8518 13.7768 17.8473 13.7723C17.8462 13.7711 17.844 13.77 17.8428 13.7689C17.8383 13.7655 17.835 13.7621 17.8305 13.7588C17.8282 13.7576 17.826 13.7554 17.8237 13.7543C17.8203 13.7509 17.8158 13.7486 17.8113 13.7464C17.8091 13.7453 17.8068 13.743 17.8046 13.7419C17.8001 13.7396 17.7967 13.7374 17.7922 13.7351C17.79 13.734 17.7877 13.7329 17.7855 13.7318C17.781 13.7295 17.7765 13.7273 17.772 13.7261C17.7697 13.725 17.7675 13.7239 17.7641 13.7239C17.7596 13.7228 17.7551 13.7205 17.7506 13.7194C17.7483 13.7183 17.745 13.7183 17.7427 13.7171C17.7382 13.716 17.7337 13.7149 17.7292 13.7138C17.7258 13.7126 17.7225 13.7126 17.7191 13.7126C17.7146 13.7115 17.7112 13.7115 17.7067 13.7115C17.7022 13.7115 17.6988 13.7115 17.6943 13.7104C17.6921 13.7104 17.6887 13.7104 17.6865 13.7104H16.8405C16.7145 13.7104 16.611 13.8128 16.611 13.9399V19.1779C16.611 19.3039 16.7133 19.4074 16.8405 19.4074H17.6921C17.8192 19.4074 17.9216 19.305 17.9216 19.1779V16.0673L20.3212 19.3084C20.3381 19.332 20.3583 19.3511 20.3808 19.3658C20.382 19.3669 20.3831 19.3669 20.3831 19.368C20.3876 19.3714 20.3921 19.3736 20.3977 19.377C20.4 19.3781 20.4022 19.3793 20.4045 19.3804C20.4078 19.3826 20.4123 19.3838 20.4157 19.386C20.4191 19.3883 20.4236 19.3894 20.427 19.3905C20.4292 19.3916 20.4315 19.3928 20.4337 19.3928C20.4393 19.395 20.4438 19.3961 20.4495 19.3973C20.4506 19.3973 20.4517 19.3984 20.4528 19.3984C20.472 19.4029 20.4922 19.4063 20.5125 19.4063H21.3585C21.4845 19.4063 21.588 19.3039 21.588 19.1768V13.9388C21.5868 13.8116 21.4845 13.7081 21.3573 13.7081Z"
      fill="#06C755"
    />
  </svg>
);

const Plan = ({
  size = 39,
  color = colors.primary,
}: {
  size?: number;
  color?: Color;
}) => {
  return (
    <svg
      className={classes[`color_${color}`]}
      width={size}
      height={size}
      viewBox="0 0 39 39"
      // fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M31.525 37.8625H7.15C4.55 37.8625 2.4375 35.75 2.4375 33.15V6.3375C2.4375 3.7375 4.55 1.625 7.15 1.625H31.6875C34.2875 1.625 36.4 3.7375 36.4 6.3375V33.3125C36.2375 35.75 34.125 37.8625 31.525 37.8625ZM7.15 4.875C6.3375 4.875 5.6875 5.525 5.6875 6.3375V33.3125C5.6875 34.125 6.3375 34.775 7.15 34.775H31.6875C32.5 34.775 33.15 34.125 33.15 33.3125V6.3375C33.15 5.525 32.5 4.875 31.6875 4.875H7.15Z" />
      <path d="M10.8862 13C9.91123 13 9.26123 12.35 9.26123 11.375C9.26123 10.4 9.91123 9.75 10.8862 9.75C11.8612 9.75 12.5112 10.4 12.5112 11.375C12.5112 12.35 11.6987 13 10.8862 13Z" />
      <path d="M27.7423 13H16.1327C15.2281 13 14.625 12.35 14.625 11.375C14.625 10.4 15.2281 9.75 16.1327 9.75H27.7423C28.6469 9.75 29.25 10.4 29.25 11.375C29.25 12.35 28.6469 13 27.7423 13Z" />
      <path d="M10.8862 21.1247C9.91123 21.1247 9.26123 20.4747 9.26123 19.4997C9.26123 18.5247 9.91123 17.8747 10.8862 17.8747C11.8612 17.8747 12.5112 18.5247 12.5112 19.4997C12.5112 20.4747 11.6987 21.1247 10.8862 21.1247Z" />
      <path d="M27.7423 21.125H16.1327C15.2281 21.125 14.625 20.475 14.625 19.5C14.625 18.525 15.2281 17.875 16.1327 17.875H27.7423C28.6469 17.875 29.25 18.525 29.25 19.5C29.25 20.475 28.6469 21.125 27.7423 21.125Z" />
      <path d="M10.8862 29.25C9.91123 29.25 9.26123 28.6 9.26123 27.625C9.26123 26.65 9.91123 26 10.8862 26C11.8612 26 12.5112 26.65 12.5112 27.625C12.5112 28.6 11.6987 29.25 10.8862 29.25Z" />
      <path d="M27.7423 29.25H16.1327C15.2281 29.25 14.625 28.6 14.625 27.625C14.625 26.65 15.2281 26 16.1327 26H27.7423C28.6469 26 29.25 26.65 29.25 27.625C29.25 28.6 28.6469 29.25 27.7423 29.25Z" />
    </svg>
  );
};

export const iconTypes = {
  shop: "shop",
  loading: "loading",
  expand: "expand",
  chevronDownSolid: "chevronDownSolid",
  enterprise: "enterprise",
  brand: "brand",
  menu: "menu",
  drag: "drag",
  surprised: "surprised",
  eatin: "eatin",
  takeout: "takeout",
  payment: "payment",
  table: "table",
  qr: "qr",
  locker: "locker",
  pos: "pos",
  line: "line",
  plan: "plan",
} as const;
export type IconType = (typeof iconTypes)[keyof typeof iconTypes];
