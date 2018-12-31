import { createNavigationReducer } from "react-navigation-redux-helpers";

import rootNavigation from "../../routers";

const navReducer = createNavigationReducer(rootNavigation);

export default navReducer;