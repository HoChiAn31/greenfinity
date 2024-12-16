import DefaultLayout from "../Layouts/DefaultLayout";
import ContributionPage from "../Pages/Contribution";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import MapPage from "../Pages/Map";
import RegisterPage from "../Pages/Register";
import StationPage from "../Pages/Station";
import WorldPage from "../Pages/World";
import config from "../config";

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  layout?: React.ComponentType<any> | null;
}

const publicRoutes: RouteConfig[] = [
  { path: config.home, component: HomePage, layout: DefaultLayout },
  { path: config.login, component: LoginPage, layout: DefaultLayout },
  { path: config.register, component: RegisterPage, layout: DefaultLayout },

  { path: config.station, component: StationPage, layout: DefaultLayout },
  { path: config.world, component: WorldPage, layout: DefaultLayout },

  { path: config.map, component: MapPage, layout: DefaultLayout },
  {
    path: config.contribution,
    component: ContributionPage,
    layout: DefaultLayout,
  },
];

export { publicRoutes };
