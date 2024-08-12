import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// Public Routes
const publicRoutes = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: config.router.profile, component: Profile },
    { path: config.router.upload, component: Upload, layout: HeaderOnly },
    { path: config.router.search, component: Search, layout: null },
    { path: config.router.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
