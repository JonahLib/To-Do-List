import { ROUTES } from "@/constants/routes";
import { compile } from "path-to-regexp";

const isExternalRoute = (route: string): boolean => route.includes("http");

export const getNextRoute = (
  routeKey: string,
  params?: Partial<Record<string, string | string[]>>
) => {
  const route = ROUTES[routeKey];

  if (!route) throw Error(`Undefined route: ${routeKey}`);

  if (isExternalRoute(route)) return route;

  return compile(route)(params);
};
