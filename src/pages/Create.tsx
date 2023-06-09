import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import TextField from '../components/TextField';
import IngredientAdd from '../components/Ingredient';
import Progress from '../components/Progress';
import type { Ingredient } from '../utils/api';
import Button from '../components/Button';
import api from '../utils/api';

const Create = () => {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [title, setTitle] = useState<string>('');
  const [instructions, setInstructions] = useState<string>('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  let readyToSubmit = image && title && instructions && ingredients && tags;
  let tooLong = tags.length > 2;

  const submitRecipe = () => {
    if (!image || !title || !instructions || !ingredients || !tags) return;

    setLoading(true);
    api
      .putRecipe({ img: image, title, instructions, ingredients, tags })
      .then(() => {
        setImage(undefined);
        setTitle('');
        setInstructions('');
        setIngredients([]);
        setTags([]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };
  console.log({ image, title });
  return (
    <div className="flex justify-center content-center items-center flex-col">
      <div className="w-1/3">
        <div>
          <img
            className="object-cover"
            src={
              image || 'https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg'
            }
            alt="Recipe default image"
          />
        </div>
        <ImageUpload setImage={setImage} />
        <div className="my-4 flex">
          <h3 className="text-xl font-bold">Recipe Name:</h3>
          <TextField className="ml-4" onChange={(str) => setTitle(str)} text={title} />
        </div>
        <div>
          <h3 className="text-xl font-bold">Tags:</h3>
          {tags.map((tag, i) => {
            return (
              <TextField
                key={`tag-${i}`}
                className="w-1/6 mr-2"
                text={tag}
                onChange={(str) => {
                  const newTags = [...tags];
                  newTags[i] = str;
                  setTags(newTags);
                }}
              />
            );
          })}
          <Button
            className={tooLong ? 'bg-slate-700 cursor-default' : ''}
            onClick={() => {
              if (tooLong) return;
              setTags([...tags, '']);
            }}>
            Add Tag
          </Button>
        </div>
        <div>
          <h3 className="text-xl font-bold">Ingredients:</h3>
          {ingredients.map((ingredient, i) => {
            return (
              <IngredientAdd
                key={`ingredient-${i}`}
                ingredient={ingredient}
                onChange={(ingredient) => {
                  const newIngredients = [...ingredients];
                  newIngredients[i] = ingredient;
                  setIngredients(newIngredients);
                }}
                onRemove={() => {
                  const newIngredients = [...ingredients];
                  newIngredients.splice(i, 1);
                  setIngredients(newIngredients);
                }}
                index={i}
              />
            );
          })}
          <Button
            onClick={() =>
              setIngredients([...ingredients, { name: '', amount: '', measurement: '' }])
            }>
            Add Ingredient
          </Button>
        </div>
        <div className="my-4 flex">
          <h3 className="text-xl font-bold">Instructions:</h3>
          <textarea
            className="ml-4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>
        <div className="my-8 flex justify-end">
          <Button
            className={readyToSubmit ? '' : 'bg-slate-700 cursor-default'}
            onClick={submitRecipe}>
            {loading ? <Progress /> : 'Create Recipe'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Create;
