import { Beer } from '../types/beers.types';

export const createBeer = async (beer: Omit<Beer, '_id'>) => {
  const response = await fetch(
    'https://crudcrud.com/api/87d6121f087f4eae9dce28b1f031a241/beers',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(beer),
    },
  );
  return response.json();
};

const updateBeer = async ({ _id, ...rest }: Beer) => {
  const response = await fetch(
    `https://crudcrud.com/api/87d6121f087f4eae9dce28b1f031a241/beers/${_id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rest),
    },
  );
  return response.json();
};
