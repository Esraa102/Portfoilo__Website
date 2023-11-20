import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout.jsx";
import { Home, About, MyGithub, Contact } from "./components/index.js";
import { githubData } from "./components/myGithub/fetchData.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      {/* to make a dynamic link */}
      <Route path="contact/" element={<Contact />}>
        <Route path=":userId" element={<Contact />} />
      </Route>
      <Route loader={githubData} path="github" element={<MyGithub />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
