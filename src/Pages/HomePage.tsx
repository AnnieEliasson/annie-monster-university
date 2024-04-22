import { Link, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MonsterContext } from "../Components/ContextProvider/MonsterContextProvider";

const HomePage = () => {
  const { state, dispatch } = useContext(MonsterContext);

  const [test, setTest] = useState(state);

  useEffect(() => {
    setTest(state);
  }, [state]);

  return (
    <div>
      <nav>
        <h1>Monster University</h1>
        <ul>
          <li>
            <Link to={"/"}>Startsidan</Link>
          </li>
          <li>
            <Link to={"/student-register"}>Student Register</Link>
          </li>
          <li>Kontakt</li>
        </ul>
      </nav>
      <main>
        <div className="sidebar">
          {
            <ul>
              <Link to={`/AddPage`}>
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
                    <Link to={`/${monster.id}`}>
                      {monster.firstName} {monster.lastNamn}
                    </Link>
                  </li>
                );
              })}
            </ul>
          }
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default HomePage;
