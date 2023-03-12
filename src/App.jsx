import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//import styles
import "./styles/App.css";

//import layout
import RootLayout from "./layout/RootLayout";
import Footer from "./Footer";

//import pages
import Gallery from "./pages/Gallery";
import Nature from "./pages/Nature";
import Portrait from "./pages/Portrait";
import Weddings from "./pages/Weddings";
import Wildlife from "./pages//Wildlife";
import Babies from "./pages/Babies";
import Pregnant from "./pages/Pregnant";
import Savethedate from "./pages/Savethedate";
import Pets from "./pages/Pets";



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
