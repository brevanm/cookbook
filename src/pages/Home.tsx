import { useState } from 'react';
import Menu from '../components/Menu';
import Card from '../components/Card';

const menuItems = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'favorites', label: 'Favorites' },
  { value: 'all', label: 'All Categories' },
  { value: 'italian', label: 'Italian' },
  { value: '2', label: 'Category 2' }
];

const Home = () => {
  const [selected, setSelected] = useState<string>('all');

  return (
    <div className="bg-slate-800 h-screen">
      <Menu selected={selected} onClick={setSelected} options={menuItems} />
      <div className="pl-60 pr-16">
        <div className="w-full grid grid-flow-row grid-cols-4 gap-4 p-6" id="content">
          <Card
            name="Chicken Picatta"
            img="https://picsum.photos/200/300"
            categories={['Italian', 'Protein', 'Noodly']}
          />
          <Card name="Meatloaf" img="https://picsum.photos/200/300" categories={[]} />
          <Card
            name="Ur momUr momUr momUr momUr momUr momUr mom"
            img="https://picsum.photos/200/300"
            categories={[]}
          />
          <Card name="Ur mom" img="https://picsum.photos/200/300" categories={[]} />
          <Card name="Ur mom" img="https://picsum.photos/200/300" categories={[]} />
          <Card name="Ur mom" img="https://picsum.photos/200/300" categories={[]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
