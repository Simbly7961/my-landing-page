import "./App.css";
import BodySection from "./components/BodySection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <div className="header-wrapper">
        <HeaderSection />
      </div>
      <div className="body-wrapper">
        <BodySection />
      </div>
      <div className="footer-wrapper">
        <FooterSection />
      </div>
    </>
  );
}

export default App;
