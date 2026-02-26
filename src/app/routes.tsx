import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { Layout } = await import("@/app/components/Layout");
      return { Component: Layout };
    },
    children: [
      {
        index: true,
        lazy: async () => {
          const { Home } = await import("@/app/components/Home");
          return { Component: Home };
        },
      },
      {
        path: "menu",
        lazy: async () => {
          const { Menu } = await import("@/app/components/Menu");
          return { Component: Menu };
        },
      },
      {
        path: "standort",
        lazy: async () => {
          const { Location } = await import("@/app/components/Location");
          return { Component: Location };
        },
      },
    ],
  },
]);
