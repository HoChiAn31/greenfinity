import DefaultLayout from '../Layouts/DefaultLayout';
import ContributionPage from '../Pages/Contribution';
import DonationHistoryPage from '../Pages/DonationHistory';
import EditProfilePage from '../Pages/EditProfile/page';
import HomePage from '../Pages/Home';
import LoginPage from '../Pages/Login';
import MapPage from '../Pages/Map';
import NotFound from '../Pages/NotFound';
import ProfilePage from '../Pages/Profile';
import ProgramRules from '../Pages/ProgramRules';
import RegisterPage from '../Pages/Register';
import StationPage from '../Pages/Station';
import WorldPage from '../Pages/World';
import GreecoinHistoryPage from '../Pages/GreecoinHistory';
import config from '../config';
import RechargePage from '../Pages/Recharge';
import ForumPage from '../Pages/Forum';
import DeleteAccountPage from '../Pages/DeleteAccount';
import StorePage from '../Pages/Store';
import StoreDetailPage from '../Pages/StoreDetail';
import NaiPage from '../Pages/Nai';
import StoryPage from '../Pages/Story';

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
		path: config.recharge,
		component: RechargePage,
		layout: DefaultLayout,
	},
	{
		path: config.forum,
		component: ForumPage,
		layout: DefaultLayout,
	},
	{
		path: config.deleteAccount,
		component: DeleteAccountPage,
		layout: DefaultLayout,
	},
	{
		path: config.store,
		component: StorePage,
		layout: DefaultLayout,
	},
	{
		path: config.storeDetail,
		component: StoreDetailPage,
		layout: DefaultLayout,
	},
	{
		path: config.nai,
		component: NaiPage,
		layout: DefaultLayout,
	},
	{
		path: config.story,
		component: StoryPage,
		layout: DefaultLayout,
	},
	{
		path: config[404],
		component: NotFound,
		layout: DefaultLayout,
	},
];

export { publicRoutes };
