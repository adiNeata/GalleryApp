import { NavLink, Outlet } from "react-router-dom";
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
          <NavLink to="/">Portofolio</NavLink>
        </span>
        <span>
          <NavLink to="about">About</NavLink>
        </span>
        <span>
          <NavLink to="LoveStory">Love-Story</NavLink>
        </span>
        <span>
          <NavLink to="Weddings">Weddings</NavLink>
        </span>
      </h2>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
