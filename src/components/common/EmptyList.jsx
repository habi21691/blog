import React from "react";
import empty from "../../assets/search.gif";


const EmptyList = () => {
  return (
    <>
      <div className="grid items-center justify-center font-semibold text-3xl pb-20 text-orange-500 font-serif">
        <img src={empty} alt="empty" className="font-sm"/>
        <h1>
          Not Found
          </h1>
      </div>
    </>
  );
};

export default EmptyList;
