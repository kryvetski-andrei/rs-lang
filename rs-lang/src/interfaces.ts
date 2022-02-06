export interface IRoute {
  [key: string]: () => void;
}
export interface INavItem {
  name: string;
  path: string;
  icon: string;
}
