import { NavLink, Outlet } from "react-router-dom";
import "../styles/rootlayout.css";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <h1>Proxy Photography</h1>
      <div className="categories">
        <NavLink to="/"></NavLink>

        <NavLink to="Nature">
          <button className="btn">Nature</button>
        </NavLink>

        <NavLink to="Portrait">
          <button className="btn">Portrait</button>
        </NavLink>

        <NavLink to="Weddings">
          <button className="btn">Weddings</button>
        </NavLink>

        <NavLink to="Wildlife">
          <button className="btn">Wildlife</button>
        </NavLink>

        <NavLink to="Babies">
          <button className="btn">Babies</button>
        </NavLink>

        <NavLink to="Pregnant">
          <button className="btn">Pregnant</button>
        </NavLink>

        <NavLink to="Pets">
          <button className="btn">Pets</button>
        </NavLink>

        <NavLink to="SaveTheDate">
          <button className="btn">Save the date</button>
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

