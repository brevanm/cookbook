import { useParams } from 'react-router-dom';

const Recipe = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Recipe: {id}</h1>
    </div>
  );
};

export default Recipe;
