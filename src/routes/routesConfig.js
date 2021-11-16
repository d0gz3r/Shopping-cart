import HomePage from "../containers/HomePage/HomePage";
import FirstCategoryPage from "../containers/FirstCategoryPage/FirstCategoryPage";
import SecondCategoryPage from "../containers/SecondCategoryPage/SecondCategoryPage";
import BasketPage from "../containers/BasketPage/BasketPage";

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/first',
    exact: true,
    component: FirstCategoryPage
  },
  {
    path: '/second',
    exact: true,
    component: SecondCategoryPage
  },
  {
    path: '/basket',
    exact: true,
    component: BasketPage
  },
]

export default routesConfig;