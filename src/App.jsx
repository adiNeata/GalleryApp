import React from "react";
import "./App.css";
import Gallery from "./Gallery";
import Nature from "./pages/Nature";
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
import RootLayout from "./layout/RootLayout";
import Pets from "./pages/Pets";
import { Save } from "@mui/icons-material";
import Savethedate from "./Savethedate";
import Footer from "./Footer";

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
  return (
    <div className="App">
      <div className="content-wrap">
        <RouterProvider router={router} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
