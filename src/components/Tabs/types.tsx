import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ITabsProps {
  children: ReactNode;
  className?: string;
  style?: object;
  handler?: () => void;
}

export interface ITabsContext {
  active: number;
  // eslint-disable-next-line no-unused-vars
  setActive: Dispatch<SetStateAction<number>>;
}
