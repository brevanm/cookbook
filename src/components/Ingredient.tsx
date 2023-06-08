import TextField from './TextField';
import type { Ingredient } from '../utils/api';
import { useState } from 'react';
import DeleteIcon from '../assets/delete.svg';

type Props = {
  ingredient: Ingredient;
  onChange: (ingredient: Ingredient) => void;
  onRemove: () => void;
  index: number;
};

const IngredientAdd = (props: Props) => {
  const { ingredient, onChange, onRemove, index } = props;

  const [hover, setHover] = useState<boolean>(false);

  const { name, amount, measurement } = ingredient;

  return (
    <div
      className="flex justify-between w-full my-2 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <h2 className="text-l font-bold"> Ingredient {index + 1}: </h2>
      <TextField
        text={amount}
        className="w-1/6"
        onChange={(str) => {
          const regex = /^[0-9]*(?:\.[0-9]*)?(?:\/[0-9]*(?:\.[0-9]*)?)*$/;

          if (regex.test(str)) {
            onChange({ ...ingredient, amount: str });
          }
        }}
      />
      <TextField
        className="w-1/6"
        text={measurement}
        onChange={(str) => onChange({ ...ingredient, measurement: str })}
      />
      <TextField
        className="w-1/3"
        text={name}
        onChange={(str) => onChange({ ...ingredient, name: str })}
      />
      {hover ? (
        <img className="cursor-pointer w-6 h-6" onClick={onRemove} src={DeleteIcon} />
      ) : (
        <span className="w-6 h-6" />
      )}
    </div>
  );
};

export default IngredientAdd;
