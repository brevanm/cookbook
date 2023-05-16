import { useState } from 'react';
import Menu from '../../components/Menu';

const menuItems = [
  { value: 'all', label: 'All Categories' },
  { value: '1', label: 'Category 1' },
  { value: '2', label: 'Category 2' }
];

const HomePage = () => {
  const [selected, setSelected] = useState<string>('all');

  return (
    <div className="bg-slate-800 h-screen">
      <Menu selected={selected} onClick={setSelected} options={menuItems} />
    </div>
  );
};

export default HomePage;
