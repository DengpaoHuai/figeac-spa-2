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
  results: Planet[];
};

const PlanetsList = () => {
  let planetResponse: PlanetResponse = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };

  const getData = async (url: string) => {
    // document.getElementById("monsuperloader").style.display = "block";
    ///document.getElementById("next").disabled = false;
    // document.getElementById("previous").disabled = false;
    const list = document.getElementById("list");
    list?.remove();
    const div = document.createElement("div");
    div.id = "list";
    document.getElementById("planets")?.appendChild(div);

    try {
      const result = await fetch(url);
      const data: PlanetResponse = await result.json();
      //   document.getElementById("monsuperloader").style.display = "none";
      planetResponse = data;
      //  if (!data.next) document.getElementById("next").disabled = true;
      //  if (!data.previous) document.getElementById("previous").disabled = true;
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

  getData("https://swapi.dev/api/planets");
  return `
  
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
