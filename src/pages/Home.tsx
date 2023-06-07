import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Card from '../components/Card';
import api from '../utils/api';
import type { Recipe } from '../utils/api';
import Progress from '../components/Progress';

const menuItems = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'favorites', label: 'Favorites' },
  { value: 'all', label: 'All Categories' },
  { value: 'italian', label: 'Italian' },
  { value: '2', label: 'Category 2' }
];

const id = '1';

const Home = () => {
  const [selected, setSelected] = useState<string>('all');

  const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    api
      .getRecipes(id)
      .then(({ data: { recipes } }) => {
        console.log({ recipes });
        setRecipes(recipes);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="bg-slate-800 h-screen">
      <Menu selected={selected} onClick={setSelected} options={menuItems} />
      <div className="pl-60 pr-16">
        <div className="w-full grid grid-flow-row grid-cols-4 gap-4 p-6" id="content">
          {loading && <Progress />}
          {error && <div>{error}</div>}
          {recipes &&
            recipes.map((recipe) => {
              const { title, img, recipeid } = recipe;

              return (
                <Card key={recipeid} name={title} img={img} categories={[]} recipeid={recipeid} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
