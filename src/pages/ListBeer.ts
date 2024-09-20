import { Beer } from '../types/beers.types';

const ListBeer = () => {
  const deleteBeerById = async (id: string) => {
    try {
      await fetch(
        `https://crudcrud.com/api/87d6121f087f4eae9dce28b1f031a241/beers/${id}`,
        {
          method: 'DELETE',
        },
      );
      const elemToRemove = document.getElementById(id);
      elemToRemove?.remove();
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    const list = document.getElementById('list');
    list?.remove();
    const div = document.createElement('div');
    div.id = 'list';
    document.getElementById('beers')?.appendChild(div);

    try {
      const result = await fetch(
        'https://crudcrud.com/api/87d6121f087f4eae9dce28b1f031a241/beers',
      );
      const data: Beer[] = await result.json();

      data.forEach((beer) => {
        const div = document.createElement('div');
        div.id = beer._id;
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        const button = document.createElement('button');
        button.innerText = 'Supprimer';
        button.onclick = () => {
          deleteBeerById(beer._id);
        };
        const p = document.createElement('p');
        p.innerText = beer.name;
        div.appendChild(p);
        div.appendChild(button);
        document.getElementById('list')?.appendChild(div);
      });
    } catch (error) {
      console.error(error);
    }
  };
  document.addEventListener('DOMContentLoaded', async () => {
    getData();
  });

  return `
    <div>
      <h1>Liste des bières</h1>
      <a data-link href="/create-beer">Créer une bière</a>
      <div id="beers"></div>
    </div>
  `;
};

export default ListBeer;
