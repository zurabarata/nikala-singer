import { createBrowserRouter } from "react-router";
import { RouteErrorBoundary } from "@/app/components/RouteErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <RouteErrorBoundary />,
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
