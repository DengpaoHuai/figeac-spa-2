type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Planet>;
};

const PlanetsList = () => {
  let planetResponse: PlanetResponse = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };

  const getData = async (url: string) => {
    (
      document.getElementById("monsuperloader") as HTMLDivElement
    ).style.display = "block";
    const nextButton = document.getElementById(
      "next"
    ) as HTMLButtonElement | null;
    if (nextButton) {
      nextButton.disabled = true;
    }
    const previousButton = document.getElementById(
      "previous"
    ) as HTMLButtonElement | null;
    if (previousButton) {
      previousButton.disabled = true;
    }
    //(document.getElementById("previous") as HTMLButtonElement).disabled = true;
    const list = document.getElementById("list");
    list?.remove();
    const div = document.createElement("div");
    div.id = "list";
    document.getElementById("planets")?.appendChild(div);

    try {
      const result = await fetch(url);
      const data: PlanetResponse = await result.json();
      (
        document.getElementById("monsuperloader") as HTMLDivElement
      ).style.display = "none";
      planetResponse = data;
      data.next && nextButton && (nextButton.disabled = false);
      data.previous && previousButton && (previousButton.disabled = false);

      data.results.forEach((planet) => {
        const p = document.createElement("p");
        p.innerText = planet.name;
        document.getElementById("list")?.appendChild(p);
      });
      console.log(data);
      console.log("coucou");
    } catch (error) {}
  };

  document.addEventListener("DOMContentLoaded", () => {
    getData("https://swapi.dev/api/planets");

    document.getElementById("next")?.addEventListener("click", () => {
      if (planetResponse.next) {
        getData(planetResponse.next);
      }
    });

    document.getElementById("previous")?.addEventListener("click", () => {
      if (planetResponse.previous) {
        getData(planetResponse.previous);
      }
    });
  });

  return `
  <div id="monsuperloader" class="loader"></div>
  <div id="planets">
  <h1>Planets</h1>
    <div id="list">
    </div>
  </div>
  <button id="previous">Previous</button>
  <button id="next">Next</button>
`;
};

export default PlanetsList;
