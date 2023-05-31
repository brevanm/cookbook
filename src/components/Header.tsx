import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Create', path: '/create' }
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-slate-800 h-16 px-16 border-b border-slate-700 sticky flex items-center justify-between">
      <a href="/">
        <h1 className="text-2xl font-bold my-auto">Cookbook</h1>
      </a>
      <nav className="flex items-center justify-between space-x-4">
        {links.map((link) => {
          const { name, path } = link;

          return (
            <Link
              key={path}
              to={path}
              className={`text-xl ${
                pathname === path ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'
              }`}>
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
