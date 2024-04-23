import React from "react";

type PropList = {
  children: React.ReactNode;
};

const InfoCard = ({ children }: PropList) => {
  return <div className="InfoCard">{children}</div>;
};

export default InfoCard;
