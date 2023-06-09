import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
