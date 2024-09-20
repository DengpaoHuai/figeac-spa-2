import PlanetsList, { Text } from "./pages/PlanetsList.ts";
import router from "./router/router.ts";
import "./style.css";

router();
//setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

document.addEventListener("click", (e) => {
  const event = e?.target as unknown;
  if (event instanceof HTMLLinkElement) {
    if (event.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, "", event.href);
      router();
    }
  }
});
