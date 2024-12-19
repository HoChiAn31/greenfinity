import DefaultLayout from "../Layouts/DefaultLayout";
import ContributionPage from "../Pages/Contribution";
import DonationHistoryPage from "../Pages/DonationHistory";
import EditProfilePage from "../Pages/EditProfile/page";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import MapPage from "../Pages/Map";
import NotFound from "../Pages/NotFound";
import ProfilePage from "../Pages/Profile";
import ProgramRules from "../Pages/ProgramRules";
import RegisterPage from "../Pages/Register";
import StationPage from "../Pages/Station";
import WorldPage from "../Pages/World";
import GreecoinHistoryPage from "../Pages/GreecoinHistory";
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
  { path: config.programRules, component: ProgramRules, layout: DefaultLayout },
  { path: config.map, component: MapPage, layout: DefaultLayout },
  // profile
  { path: config.profile, component: ProfilePage, layout: DefaultLayout },
  {
    path: config.editProfile,
    component: EditProfilePage,
    layout: DefaultLayout,
  },
  {
    path: config.donationHistoryPage,
    component: DonationHistoryPage,
    layout: DefaultLayout,
  },
  {
    path: config.greecoinHistory,
    component: GreecoinHistoryPage,
    layout: DefaultLayout,
  },
  {
    path: config.contribution,
    component: ContributionPage,
    layout: DefaultLayout,
  },
  {
    path: config[404],
    component: NotFound,
    layout: DefaultLayout,
  },
];

export { publicRoutes };
