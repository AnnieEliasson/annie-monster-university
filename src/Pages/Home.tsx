import React, { useContext } from "react";
import TotalStudents from "../Components/InfoCard/InfoCard";
import ShortCut from "../Components/ShortCut/ShortCut";
import { Link } from "react-router-dom";
import { MonsterContext } from "../Components/ContextProvider/MonsterContextProvider";
import InfoCard from "../Components/InfoCard/InfoCard";

const Home = () => {
  const { state } = useContext(MonsterContext);

  let totalEyes = 0;
  state.forEach((m) => {
    totalEyes = totalEyes + m.appearance.eyes;
  });

  return (
    <div className="Home">
      <InfoCard>
        <p className="green">Antal Elever på skolan</p>
        <p className="number yellow">{state.length}</p>
      </InfoCard>

      <ShortCut goTo={"Student Register"} />
      <ShortCut goTo={"Kontaktlista"} />

      <InfoCard>
        <p className="green">Antal ögon på skolan</p>
        <p className="number yellow">{totalEyes}</p>
      </InfoCard>

      <InfoCard>
        <h3 className="green">Aktuella händelser:</h3>
        <p>
          <ul className="yellow">
            <li>Ny Rektor!</li>
            <li>Skolmästerskap</li>
          </ul>
        </p>
      </InfoCard>

      <ShortCut goTo={"Program"} />
      <ShortCut goTo={"Personal"} />
      <ShortCut goTo={"Kalender"} />
    </div>
  );
};

export default Home;
