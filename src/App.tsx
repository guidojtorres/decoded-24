import { useState } from "react";
import HeaderBanner from "./components/HeaderBanner";
import LineUpSection from "./components/LineUp/LineUpSection";
import ExploreSection from "./components/Explore/ExploreSection";
import LoginButton from "./components/Login";
import Footer from "./components/Footer";
import { ResponseContextProvider } from "./Context";

function App() {
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <>
      <HeaderBanner
        activeTab={activeSection}
        setActiveSection={setActiveSection}
      />
      <ResponseContextProvider>
        <ExploreSection isVisible={activeSection === 1} />
        <LineUpSection isVisible={activeSection === 0} />
      </ResponseContextProvider>
      {/* <LoginButton /> */}
      <Footer />
    </>
  );
}

export default App;
