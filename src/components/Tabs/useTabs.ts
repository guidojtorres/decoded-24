import { ITabsContext } from "./types";
import { createContext, useState } from "react";

export const TabContext = createContext<ITabsContext | null>(null);

export const useTabs = () => {
  const [active, setActive] = useState(0);

  return { active, setActive, TabContext };
};
