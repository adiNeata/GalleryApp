import React from "react";
import "./App.css";
import Gallery from "./Gallery";
import About from "./About";
import LoveStory from "./LoveStory";
import Weddings from "./Weddings";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//Layout
import RootLayout from "../name-of-your-project/src/layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Gallery />} />
      <Route path="about" element={<About />} />
      <Route path="LoveStory" element={<LoveStory />} />
      <Route path="Weddings" element={<Weddings />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
