import React from "react";

const DetailCard = ({ label, value }) => {
  return (
    <li className="font-semibold">
      {label}: <span className="font-thin">{value}</span>
    </li>
  );
};

export default DetailCard;
