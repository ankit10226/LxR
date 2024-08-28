import React from "react";
import homePic from "../../assets/images/homePic.png";
import Button from "../UI/Button/Button";

const Body = () => {
  return (
    <div className="h-4/6 w-full flex">
      <div className="h-full w-2/3 pl-20">
        <Button className="rounded-md h-8 shadow w-32 bg-[#D1D3E8] text-[#232732] font-semibold my-2 cursor-pointer">
          Show Trailer
        </Button>
        <p className="text-[#24262F] font-semibold text-6xl">
          Where <span className="text-[#6439BA]">achitects</span> create <br />{" "}
          awesome things priceless
        </p>
        <p className="text-[#6E6C6D] pt-4 pb-4 text-xl">
          Find, explore and learn in an awesome <br /> place find, explore and
          learn in great.
        </p>
        <Button className="rounded-md h-8 w-20 border border-[#6143BD] text-white font-semibold my-2 cursor-pointer bg-[#6143BD] ease-linear duration-300 mr-4">
          Login
        </Button>
        <Button className="rounded-md h-8 shadow w-32 bg-[#D1D3E8] text-[#232732] font-semibold my-2 cursor-pointer">
          Learn More
        </Button>
      </div>
      <div className="h-full w-1/3 flex justify-center">
        <img src={homePic} alt="homePic" className="h-full" />
      </div>
    </div>
  );
};

export default Body;
