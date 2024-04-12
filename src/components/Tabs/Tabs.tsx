import React, { Children, useContext } from "react";
import { ITabsProps } from "./types";
import { TabContext } from "./useTabs";

const Tabs: React.FC<ITabsProps> = ({
  children,
  style,
  handler,
  ...props
}: ITabsProps) => {
  const { active, setActive } = useContext(TabContext)!;
  const arrayOfChildren = Children.toArray(children);

  return (
    <div {...props} style={style}>
      {arrayOfChildren.map((child: any, i: number) => {
        const isSelected = active === i;
        const className = `${child.props.className} ${
          isSelected ? "active" : ""
        }`;

        return React.cloneElement(child, {
          style: { ...child.props.style },
          className,
          onClick: () => {
            handler && handler();
            setActive(i);
          },
          key: i,
          role: "tab",
          "aria-selected": isSelected,
          tabIndex: isSelected ? 0 : -1,
        });
      })}
    </div>
  );
};

export default Tabs;
