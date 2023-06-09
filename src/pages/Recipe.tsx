import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api, { imageApiUrl } from '../utils/api';
import type { Recipe } from '../utils/api';

const Recipe = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    api
      .getRecipe(id)
      .then(({ data: { recipe } }) => {
        setRecipe(recipe);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  console.log({ recipe, loading, error });
  if (error) return <div>{error}</div>;
  if (loading || !recipe) return <div>Loading...</div>;

  const { title, ingredients, instructions, img } = recipe;

  const ingredientsList = ingredients.map((ingredient) => {
    const { name, measurement, amount } = ingredient;

    return <li key={`ingredient-${name}`}>{`${amount}${measurement} ${name}`}</li>;
  });

  return (
    <div className="mx-64 py-2">
      <h1 className="text-3xl font-bold py-4">{title}</h1>
      <div className="w-full aspect-w-16 aspect-h-9">
        <img className="w-full h-full object-cover" src={imageApiUrl + '/' + img} alt="recipe" />
      </div>
      <h2 className="text-xl font-bold py-4">Ingredients</h2>
      <ol className="list-decimal">{ingredientsList}</ol>
      <h2 className="text-xl font-bold py-4">Instructions</h2>
      <p>{instructions}</p>
    </div>
  );
};

export default Recipe;
