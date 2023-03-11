import React from "react";
import "./App.css";
import Gallery from "./Gallery";
import Nature from "./Nature";
import Portrait from "./Portrait";
import Weddings from "./Weddings";
import Wildlife from "./Wildlife";
import Babies from "./Babies";
import Pregnant from "./Pregnant";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//Layout
import RootLayout from "../name-of-your-project/src/layouts/RootLayout";
import Pets from "./Pets";
import { Save } from "@mui/icons-material";
import Savethedate from "./Savethedate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Gallery />} />
      <Route path="Nature" element={<Nature />} />
      <Route path="Portrait" element={<Portrait />} />
      <Route path="Weddings" element={<Weddings />} />
      <Route path="Wildlife" element={<Wildlife />} />
      <Route path="Babies" element={<Babies />} />
      <Route path="Pregnant" element={<Pregnant />} />
      <Route path="Pets" element={<Pets />} />
      <Route path="SaveTheDate" element={<Savethedate />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
