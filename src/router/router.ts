import HomeScreen from "../pages/HomeScreen";
import PlanetsList from "../pages/PlanetsList";

type Routes = {
  [key: `/${string}`]: () => string;
};

const routes: Routes = {
  "/": HomeScreen,
  "/planets": PlanetsList,
};

function router() {
  const content = document.getElementById("app");
  const path = window.location.pathname as `/${string}`;

  if (content) {
    content.innerHTML = "";
    let maPage = routes[path] ?? null;

    if (maPage) {
      content.innerHTML = maPage();
    }
  }
}

window.addEventListener("popstate", router);

export default router;
