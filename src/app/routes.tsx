import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { Home } from "@/app/components/Home";
import { Menu } from "@/app/components/Menu";
import { Location } from "@/app/components/Location";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "standort", Component: Location },
    ],
  },
]);
