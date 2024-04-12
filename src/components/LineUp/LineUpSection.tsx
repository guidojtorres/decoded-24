import { FC } from "react";
import RectangulosWrapper from "../RectangulosWrapper";
import TabPanel from "../Tabs/TabPanel";
import Tabs from "../Tabs/Tabs";
import { useTabs } from "../Tabs/useTabs";
import LineUpTableDia1 from "./LineUpTableDia1";
import LineUpTableDia2 from "./LineUpTableDia2";
import LineUpTableDia3 from "./LineUpTableDia3";

interface Props {
  isVisible: boolean;
}
const LineUpSection: FC<Props> = ({ isVisible }) => {
  const { active, setActive, TabContext } = useTabs();

  return (
    isVisible && (
      <RectangulosWrapper>
        <section className="main-container lineup-section">
          <div className="inner-container">
            <TabContext.Provider value={{ active, setActive }}>
              <Tabs className="lineup-tabs">
                <div className="lineup-tab-link">Día 1</div>
                <div className="lineup-tab-link">Día 2</div>
                <div className="lineup-tab-link">Día 3</div>
              </Tabs>
              <TabPanel>
                <LineUpTableDia1 />
                <LineUpTableDia2 />
                <LineUpTableDia3 />
              </TabPanel>
            </TabContext.Provider>
          </div>
        </section>
      </RectangulosWrapper>
    )
  );
};

export default LineUpSection;
