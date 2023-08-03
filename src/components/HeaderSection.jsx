import me from "/me1.jpg?url";

const HeaderSection = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center border border-red-500 w-[1440px] p-10 pl-[200px]">
        <div className="flex-2 w-[350px] h-[350px]">
          <img src={me} className="w-full h-full rounded-full" alt="me" />
        </div>
        <div className="flex-1 flex flex-col ml-20">
          <div className="text-secondary text-[18px] h-[18px]">
            Full-Stack Delveloper
          </div>
          <div className="text-[126px] leading-none">Kanchai Saksrijaroen</div>
          <button className="text-white text-[18px] bg-primary w-[225px] h-[60px] mt-8">
            Contract Me
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
