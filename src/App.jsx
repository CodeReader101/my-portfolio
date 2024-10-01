import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
