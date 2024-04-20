import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { MonsterContext } from "../Components/ContextProvider/MonsterContextProvider";

const MonsterPage = () => {
  const { state, dispatch } = useContext(MonsterContext);
  console.log(state);

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
        Utseende:
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
            <span>"Har inga horn"</span>
          )}
        </li>
      </ul>

      <ul>
        Hobbies:{" "}
        {monster[0].hobbies.map((h) => {
          return (
            <li>
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
        to={"/delete"}
      >
        <button>Ta bort student</button>
      </Link>
    </div>
  );
};

export default MonsterPage;
