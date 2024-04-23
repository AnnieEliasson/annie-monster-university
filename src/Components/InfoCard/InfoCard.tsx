import React, { useContext } from "react";
import { MonsterContext } from "../ContextProvider/MonsterContextProvider";

type PropList = {
  children: React.ReactNode;
};

const InfoCard = ({ children }: PropList) => {
  const { state } = useContext(MonsterContext);
  return <div className="InfoCard">{children}</div>;
};

export default InfoCard;
