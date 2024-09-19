import PlanetsList, { Text } from "./pages/PlanetsList.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = PlanetsList();

//setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
