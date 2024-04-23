import { Link } from "react-router-dom";

type PropList = {
  goTo: string;
};

const ShortCut = ({ goTo }: PropList) => {
  return (
    <Link className="ShortCut" to={"/student-register"}>
      <p className="green">Gå till:</p>
      <p className="bigger yellow">{goTo}</p>
    </Link>
  );
};

export default ShortCut;
