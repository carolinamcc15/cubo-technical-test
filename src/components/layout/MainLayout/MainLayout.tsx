import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='p-4 md:p-6 lg:p-10 max-w-[1400px] m-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
