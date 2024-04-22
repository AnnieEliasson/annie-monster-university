import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { MonsterContext } from "../Components/ContextProvider/MonsterContextProvider";
import EditPage from "./EditPage";

const MonsterPage = () => {
  const { state, dispatch } = useContext(MonsterContext);
  const [edit, setEdit] = useState(false);

  const params = useParams();

  let monster = state.filter(
    (monster) => String(monster.id) == params.monsterId
  );

  return (
    <div className="MonsterPage">
      <h2>
        {monster[0].firstName} {monster[0].lastNamn}
      </h2>
      <ul>
        <li>
          Program: <span>{monster[0].program}</span>
        </li>
        <li>
          Hemstad: <span>{monster[0].homeTown}</span>
        </li>
      </ul>
      <ul>
        <span className="ul-title">Utseende:</span>
        <li>
          Antal ögon: <span>{monster[0].appearance.eyes}</span>
        </li>
        <li>
          Antal tentakler: <span>{monster[0].appearance.tentacles}</span>
        </li>
        <li>
          Färg: <span>{monster[0].appearance.color}</span>
        </li>
        <li>
          Hud/Päls: <span>{monster[0].appearance.skin}</span>
        </li>
        <li>
          Horn:
          {monster[0].appearance.horn.hasHorn ? (
            <span> {monster[0].appearance.horn.description}</span>
          ) : (
            <span> Har inga horn</span>
          )}
        </li>
      </ul>

      <ul className="hobbies">
        <span className="ul-title">Hobbies: </span>
        {monster[0].hobbies.map((h) => {
          return (
            <li key={h}>
              <span>{h}</span>
            </li>
          );
        })}
      </ul>

      <Link
        onClick={() =>
          dispatch({
            type: "REMOVE",
            payload: String(monster[0].id),
          })
        }
        to={"/student-register/delete"}
      >
        <button>Ta bort student</button>
      </Link>

      <button onClick={() => setEdit(true)}>Ändra</button>
      {edit && <EditPage editMonster={monster[0]} setEdit={setEdit} />}
    </div>
  );
};

export default MonsterPage;
