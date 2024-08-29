import React from "react";
import homePic from "../../assets/images/homePic.png";
import Button from "../UI/Button/Button";

const Body = (props) => {
  return (
    <div className="flex-grow w-full">
      {props.children}
    </div>
  );
};

export default Body;
