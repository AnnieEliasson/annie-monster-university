import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MonsterContext } from "../Components/ContextProvider/MonsterContextProvider";

const StudentRegister = () => {
  const { state, dispatch } = useContext(MonsterContext);

  const [monsters, setMonsters] = useState(state);

  useEffect(() => {
    setMonsters(state);
  }, [state]);

  const handleChangeHorn = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "horn" && e.target.checked) {
      let result = monsters.filter((m) => m.appearance.horn.hasHorn);
      setMonsters(result);
    } else if (e.target.id === "noHorn" && e.target.checked) {
      let result = monsters.filter((m) => !m.appearance.horn.hasHorn);
      setMonsters(result);
    } else {
      setMonsters(state);
    }
  };

  const handleClickFilter = () => {
    const filter = document.querySelector(".filter") as HTMLElement;
    filter.classList.toggle("show");
  };

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
              onChange={(e) => {
                setMonsters(
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
              }}
              type="text"
              placeholder="Sök..."
            />
            <button onClick={handleClickFilter}>Filter</button>
            <button
              onClick={() => {
                dispatch({ type: "SORT" });
              }}
            >
              sort
            </button>
            <div className="filter">
              <label htmlFor="horn">
                Har horn{" "}
                <input
                  onChange={(e) => {
                    handleChangeHorn(e);
                  }}
                  type="checkbox"
                  name="horn"
                  id="horn"
                />
              </label>
              <label htmlFor="noHorn">
                Har inte horn{" "}
                <input
                  onChange={(e) => {
                    handleChangeHorn(e);
                  }}
                  type="checkbox"
                  name="noHorn"
                  id="noHorn"
                />
              </label>
            </div>

            {monsters.map((monster) => {
              return (
                <li key={monster.id}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to={`/student-register/${monster.id}`}
                  >
                    {monster.firstName} {monster.lastNamn}
                  </NavLink>
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
