export const colors = {
  black: "black",
  gray100: "gray_100",
  gray200: "gray_200",
  gray300: "gray_300",
  gray400: "gray_400",
  gray500: "gray_500",
  gray600: "gray_600",
  gray700: "gray_700",
  gray800: "gray_800",
  gray900: "gray_900",
  white: "white",
  primary: "primary",
  primarySoft: "primary_soft",
  info: "info",
} as const;
export type Color = (typeof colors)[keyof typeof colors];
