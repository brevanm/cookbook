import { Link } from 'react-router-dom';

type Props = {
  name: string;
  img: string;
  categories: string[];
};

const Card = (props: Props) => {
  const { categories, img, name } = props;

  const chips = categories.map((category) => {
    return (
      <div
        key={`${name}-card-${category}`}
        className="bg-slate-700 rounded-full px-2 py-1 text-xs text-white mr-1">
        {category}
      </div>
    );
  });

  return (
    <Link to={`/recipe/${name}`}>
      <div className="w-64 h-52 hover:scale-105 transition bg-slate-500 rounded overflow-hidden hover:cursor-pointer">
        <div className="h-2/3">
          <img src={img} alt="random" className="w-full h-full object-cover" />
        </div>
        <div className="h-1/3 p-2 flex flex-col justify-between">
          <h3 className="truncate">{name}</h3>
          <div className="flex overflow-x-hidden ">{chips}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
