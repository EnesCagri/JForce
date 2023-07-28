import React from "react";

const InfoCard = ({ title, content }) => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <label className="font-bold text-xl">{title}</label>
      </div>
      <div className="w-3/4 text-xl">{content}</div>
    </div>
  );
};

export default InfoCard;
