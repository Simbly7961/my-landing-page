import "./App.css";
import BodySection from "./components/BodySection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <div className="App-wrapper w-[1440px] flex flex-col justify-center items-center ">
        <section className="header-wrapper">
          <HeaderSection />
        </section>
        <section className="body-wrapper">
          <BodySection />
        </section>
        <section className="footer-wrapper">
          <FooterSection />
        </section>
      </div>
    </>
  );
}

export default App;
