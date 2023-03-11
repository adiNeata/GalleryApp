import { NavLink, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { style } from "@mui/system";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Proxy Photography</h1>
        </nav>
      </header>
      <h2 className="categories">
        <NavLink to="/"></NavLink>

        <NavLink
          to="Nature"
          style={({ isActive }) => ({
            borderStyle: isActive ? "inset" : "inset",
          })}
        >
          Nature
        </NavLink>

        <NavLink
          to="Portrait"
          style={({ isActive }) => ({
            borderStyle: isActive ? "inset" : "inset",
          })}
        >
          Portrait
        </NavLink>

        <NavLink
          to="Weddings"
          style={({ isActive }) => ({
            borderStyle: isActive ? "inset" : "inset",
          })}
        >
          Weddings
        </NavLink>

        <NavLink
          to="Wildlife"
          style={({ isActive }) => ({
            borderStyle: isActive ? "inset" : "inset",
          })}
        >
          Wildlife
        </NavLink>

        <NavLink
          to="Babies"
          style={({ isActive }) => ({
            borderStyle: isActive ? "inset" : "inset",
          })}
        >
          Babies
        </NavLink>

        <NavLink
          to="Pregnant"
          style={({ isActive }) => ({
            borderStyle: isActive ? "inset" : "inset",
          })}
        >
          Pregnant
        </NavLink>

        <NavLink
          to="Pets"
          style={({ isActive }) => ({
            borderStyle: isActive ? "inset" : "inset",
          })}
        >
          Pets
        </NavLink>

        <NavLink
          to="SaveTheDate"
          style={({ isActive }) => ({
            borderStyle: isActive ? "inset" : "inset",
          })}
        >
          Save the date
        </NavLink>
      </h2>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
