import CreateBeer from '../pages/CreateBeer';
import HomeScreen from '../pages/HomeScreen';
import ListBeer from '../pages/ListBeer';
import PlanetsList from '../pages/PlanetsList';

//indexed access types
type Routes = {
  [key: `/${string}`]: () => string;
};

type Routes1 = Record<`/${string}`, () => string>;

const routes: Routes = {
  '/': HomeScreen,
  '/planets': PlanetsList,
  '/beers': ListBeer,
  '/create-beer': CreateBeer,
};

function router() {
  const content = document.getElementById('app');
  const path = window.location.pathname as `/${string}`;

  if (content) {
    content.innerHTML = '';
    let maPage = routes[path] ?? null;

    if (maPage) {
      content.innerHTML = maPage();
    }
  }
}

window.addEventListener('popstate', router);

export default router;
