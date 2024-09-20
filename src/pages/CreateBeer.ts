import { createBeer } from '../services/beers.service';
import redirect from '../utils/redirect';

const CreateBeer = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document
      .getElementById('beer_form')
      ?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const degree = formData.get('degree') as string;
        const country = formData.get('country') as string;
        createBeer({ name, degree: parseInt(degree), country }).then(
          (response) => {
            redirect('/beers');
          },
        );
      });
  });

  return `<form id="beer_form">
      <label for="name"> Nom </label>
      <input id="name" name="name" />
      <input name="degree" />
      <input name="country" />
      <button>créer</button>
    </form>`;
};

export default CreateBeer;
