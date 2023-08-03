import "./App.css";
import BodySection from "./components/BodySection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <>
      <div className="App-wrapper w-full h-full flex flex-col justify-center items-center ">
        <section className="header-wrapper w-full h-full">
          <HeaderSection />
        </section>
        <div className="bg-Gadient w-full h-[180px]"></div>
        <section className="body-wrapper w-full h-full">
          <BodySection />
        </section>
        <div className="bg-Gadient-revert w-full h-[180px]"></div>
        <section className="footer-wrapper w-full h-full">
          <FooterSection />
        </section>
      </div>
    </>
  );
}

export default App;
