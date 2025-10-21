import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import router from "./routing/Router";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
