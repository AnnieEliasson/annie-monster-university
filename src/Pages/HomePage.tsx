import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
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
        <Outlet />
      </main>
    </div>
  );
};

export default HomePage;
