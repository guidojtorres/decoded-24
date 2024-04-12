import React, { FC, ReactElement } from "react";

interface Props {
  isActive: boolean;
  child: ReactElement;
  id: string;
  labelledBy: string;
}

const TabContent: FC<Props> = ({ isActive, child, id, labelledBy }) => {
  const clone = React.cloneElement(child, {
    id: id,
    ariaLabelledBy: labelledBy,
  });
  return isActive && clone;
};

export default TabContent;
