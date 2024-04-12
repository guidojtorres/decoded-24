import React, { Children, ReactNode, isValidElement, useContext } from "react";
import { TabContext } from "./useTabs";
import { ITabsProps } from "./types";
import TabContent from "./TabContent";

const TabPanel: React.FC<ITabsProps> = ({
  children,
  className,
  style,
}: ITabsProps) => {
  const { active } = useContext(TabContext)!;
  const arrayOfChildren = Children.toArray(children);

  return (
    <div className={className} style={style}>
      {arrayOfChildren.map((child: ReactNode, index: number) => {
        const isActive = active === index;
        if (!isValidElement(child)) return;
        return (
          <TabContent
            labelledBy={`${index}-${active}`}
            id={`${index}-${active}-tab`}
            child={child}
            key={index}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default TabPanel;
