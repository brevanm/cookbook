import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Card from '../components/Card';
import api from '../utils/api';
import type { Recipe } from '../utils/api';
import Progress from '../components/Progress';

const Home = () => {
  const [selected, setSelected] = useState<string>('All Categories');

  const [recipes, setRecipes] = useState<Recipe[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [menuItems, setMenuItems] = useState<string[]>(['All Categories', 'Eat Again']);

  useEffect(() => {
    api
      .getTags()
      .then(({ data: { tags } }) => {
        console.log({ tags });
        setMenuItems([...new Set([...menuItems, ...tags])]);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setRecipes(undefined);
    api
      .getRecipes(selected)
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
  }, [selected]);

  return (
    <div className="bg-slate-800 h-screen">
      <Menu selected={selected} onClick={setSelected} options={menuItems} />
      <div className="pl-60 pr-16">
        {loading && (
          <div className="w-full h-screen flex flex-col align-center justify-center">
            <Progress />
          </div>
        )}
        {error && <div>{error}</div>}
        <div className="w-full grid grid-flow-row grid-cols-4 gap-4 p-6" id="content">
          {recipes &&
            recipes.map((recipe) => {
              const { title, img, recipeid } = recipe;

              return (
                <Card
                  key={recipeid}
                  name={title}
                  img={img}
                  categories={[]}
                  recipeid={recipeid || ''}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
