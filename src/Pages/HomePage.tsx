import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { MonsterContext } from "../Components/ContextProvider/MonsterContextProvider";

const HomePage = () => {
  const { state } = useContext(MonsterContext);

  return (
    <div>
      <nav>
        <h1>Monster University</h1>
        <ul>
          <li>Startsidan</li>
          <li>Testing</li>
          <li>Kontakt</li>
        </ul>
      </nav>
      <main>
        <div className="sidebar">
          {
            <ul>
              <input type="text" placeholder="Sök..." />
              <button>Filter</button>
              {state.map((monster) => {
                return (
                  <li>
                    <Link key={monster.id} to={`/${monster.id}`}>
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
