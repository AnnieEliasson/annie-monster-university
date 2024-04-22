import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MonsterContext } from "../Components/ContextProvider/MonsterContextProvider";

const StudentRegister = () => {
  const { state, dispatch } = useContext(MonsterContext);

  const [test, setTest] = useState(state);

  useEffect(() => {
    setTest(state);
  }, [state]);
  return (
    <div className="StudentRegister">
      <div className="sidebar">
        {
          <ul>
            <Link to={`/student-register/AddPage`}>
              <button>Lägg till student</button>
            </Link>
            <br />
            <input
              onChange={
                (e) => {
                  setTest(
                    state.filter(
                      (x) =>
                        x.firstName
                          .toLocaleLowerCase()
                          .includes(e.target.value) ||
                        x.lastNamn
                          .toLocaleLowerCase()
                          .includes(e.target.value.toLocaleLowerCase())
                    )
                  );
                }
                /* dispatch({ type: "FILTER", payload: e.target.value }) */
              }
              type="text"
              placeholder="Sök..."
            />
            <button>Filter</button>
            <button
              onClick={() => {
                dispatch({ type: "SORT" });
              }}
            >
              sort
            </button>
            {test.map((monster) => {
              return (
                <li key={monster.id}>
                  <Link to={`/student-register/${monster.id}`}>
                    {monster.firstName} {monster.lastNamn}
                  </Link>
                </li>
              );
            })}
          </ul>
        }
      </div>
      <Outlet />
    </div>
  );
};

export default StudentRegister;
