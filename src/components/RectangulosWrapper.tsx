import { FC, ReactNode } from "react";
import Rectangulos1 from "../assets/img/rectangulos-1.png";
import Rectangulos2 from "../assets/img/rectangulos-2.png";

interface Props {
  children: ReactNode;
}

const RectangulosWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="rectangulos-wrapper">
      {children}
      <img src={Rectangulos1} alt="" className="rect-1" />
      <img src={Rectangulos2} alt="" className="rect-2" />
    </div>
  );
};

export default RectangulosWrapper;
