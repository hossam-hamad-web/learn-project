import { useState } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Gallery from "./components/gallery/Gallery";
import Mobile from "./components/mobile/mobile";
import Web from "./components/web/web";
import Ux from "./components/Ux/Ux";
import { CounterContextProvider } from "./Context/CounterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
let query = new QueryClient();
let route = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "gallery",
        element: <Gallery />,
        children: [
          { path: "web", element: <Web /> },
          { path: "mobile", element: <Mobile /> },
          { path: "ux", element: <Ux /> },
        ],
      },
      { path: "mobile", element: <Mobile /> },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <CounterContextProvider>
          <RouterProvider router={route} />
        </CounterContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
