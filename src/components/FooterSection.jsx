import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const FooterSection = () => {
  return (
    <>
      <div className="footer-wrapper flex flex-col  w-full p-10 justify-center items-center  font-head">
        <div className="font-black text-[66px] my-8 w-full text-center">
          Get in touch
        </div>
        <div className="contract text-primary text-[36px] font-black my-8 w-full text-center ">
          <span>Kanchai.sak02@gmail.com</span> | <span>+6683847268</span>
        </div>
        <div className="icon-wrapper flex justify-center gap-20 items-center w-full my-8">
          <a href="https://www.facebook.com/profile.php?id=100008215506678">
            <img src={facebook} />
          </a>
          <a href="https://www.linkedin.com/in/kanchai-saksrijaroen-b2964126b/">
            <img src={linkedin} />
          </a>
          <a href="https://github.com/Simbly7961">
            <img src={github} />
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
