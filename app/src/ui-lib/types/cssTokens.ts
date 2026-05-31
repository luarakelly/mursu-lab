// ui-lib/types/cssTokens.ts

export type Scale =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export type SpaceToken = Scale | React.CSSProperties["gap"];
export type MinWidthToken = Scale | React.CSSProperties["minWidth"];

export type TextWeight =
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

