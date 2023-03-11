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
        <span class="">
          <NavLink to="/"></NavLink>
        </span>
        <span>
          <NavLink
            to="Nature"
            style={({ isActive }) => ({
              fontSize: isActive ? "15px" : "15px",
            })}
          >
            <button>Nature</button>
          </NavLink>
        </span>
        <span>
          <NavLink
            to="Portrait"
            style={({ isActive }) => ({
              borderStyle: isActive ? "inset" : "inset",
            })}
          >
            Portrait
          </NavLink>
        </span>
        <span>
          <NavLink
            to="Weddings"
            style={({ isActive }) => ({
              borderStyle: isActive ? "inset" : "inset",
            })}
          >
            Weddings
          </NavLink>
        </span>
        <span>
          <NavLink
            to="Wildlife"
            style={({ isActive }) => ({
              borderStyle: isActive ? "inset" : "inset",
            })}
          >
            Wildlife
          </NavLink>
        </span>
        <span>
          <NavLink
            to="Babies"
            style={({ isActive }) => ({
              borderStyle: isActive ? "inset" : "inset",
            })}
          >
            Babies
          </NavLink>
        </span>
        <span>
          <NavLink
            to="Pregnant"
            style={({ isActive }) => ({
              borderStyle: isActive ? "inset" : "inset",
            })}
          >
            Pregnant
          </NavLink>
        </span>
        <span>
          <NavLink
            to="Pets"
            style={({ isActive }) => ({
              borderStyle: isActive ? "inset" : "inset",
            })}
          >
            Pets
          </NavLink>
        </span>
        <span>
          <NavLink
            to="SaveTheDate"
            style={({ isActive }) => ({
              borderStyle: isActive ? "inset" : "inset",
            })}
          >
            Save the date
          </NavLink>
        </span>
      </h2>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
