import Logo from "../assets/img/d24-logo.svg";
import Title from "../assets/img/d24-header.svg";
import { FC, SetStateAction } from "react";
interface Props {
  setActiveSection: React.Dispatch<SetStateAction<number>>;
  activeTab: number;
}

const HeaderBanner: FC<Props> = ({ setActiveSection, activeTab }) => {
  return (
    <header className="header-banner">
      <div className="main-container">
        <img src={Logo} alt="D24" />
        <div className="hline"></div>
        <div className="title-section">
          <img src={Title} alt="Decoded 24" />
          <p>
            Align subtract pen boolean editor follower bullet hand. Component
            flatten clip frame figma. Editor library arrow flatten follower
            device.
          </p>
        </div>
        <div className="header-tabs">
          <div
            className={`header-tab-link ${activeTab === 0 ? "active" : ""}`}
            onClick={() => setActiveSection(0)}
          >
            <span>Line up</span>
          </div>
          <div
            className={`header-tab-link ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveSection(1)}
          >
            <span>EXPLORE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBanner;
