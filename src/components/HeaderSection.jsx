import me from "/me1.jpg?url";

const HeaderSection = () => {
  return (
    <>
      <h1 className="">HeaderSection</h1>
      <div className="flex flex-row  ">
        <div className="flex-2 w-[350px] h-[350px]">
          <img src={me} className="w-full h-full rounded-full" alt="me" />
        </div>
        <div className="flex-1 flex flex-col items-start text-[126px] ">
          <span className="text-secondary text-[18px]">
            Full-Stack Delveloper
          </span>
          <span>Kanchai</span>
          <span>Saksrijaroen</span>
          <button className="text-white text-[18px] bg-primary w-[225px] h-[60px]">
            Contract Me
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
