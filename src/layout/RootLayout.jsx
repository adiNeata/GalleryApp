import { NavLink, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { style } from "@mui/system";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <h1>Proxy Photography</h1>
      <h2 className="categories">
        <NavLink to="/"></NavLink>

        <NavLink to="Nature">
          <button className="btn btn1">Nature</button>
        </NavLink>

        <NavLink to="Portrait">
          <button className="btn btn1">Portrait</button>
        </NavLink>

        <NavLink to="Weddings">
          <button className="btn btn2">Weddings</button>
        </NavLink>

        <NavLink to="Wildlife">
          <button className="btn btn2">Wildlife</button>
        </NavLink>

        <NavLink to="Babies">
          <button className="btn btn3">Babies</button>
        </NavLink>

        <NavLink to="Pregnant">
          <button className="btn btn3">Pregnant</button>
        </NavLink>

        <NavLink to="Pets">
          <button className="btn btn4">Pets</button>
        </NavLink>

        <NavLink to="SaveTheDate">
          <button className="btn btn4">Save the date</button>
        </NavLink>
      </h2>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

