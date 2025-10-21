import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from "../views/Home";
import About from "../views/About";
import Info from "../views/Info";
import Detail from "../views/Detail";
import { getPosts, getPost } from "./loaders";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/info",
        Component: Info,
        loader: getPosts
      },
      {
        path: "/info/detail/:id",
        Component: Detail,
        loader: ({params}) => getPost(params)
      }
    ],
  },
]);

export default router;
