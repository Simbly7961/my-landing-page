import me from "/me1.jpg?url";
import niceIcon from "../assets/niceToMeetYou.svg";

const HeaderSection = () => {
  return (
    <>
      <div className="flex justify-center gap-20  w-full h-full p-10 ">
        <div className=" w-[350px] h-[350px] relative">
          <img src={me} className="w-full h-full rounded-full" alt="me" />
          <img src={niceIcon} className=" absolute right-[1%] bottom-[1%]" />
        </div>
        <div className="flex flex-col ml-20 ">
          <div className="text-secondary text-[18px] h-[18px] font-bold font-body">
            Full-Stack Delveloper
          </div>
          <div className="text-[126px] leading-none font-head">
            Kanchai <br /> Saksrijaroen
          </div>
          <button className="text-white text-[18px] bg-primary w-[225px] h-[60px] mt-8 font-body">
            Contract Me
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
