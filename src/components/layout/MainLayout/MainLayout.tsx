import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div className='p-4 md:p-6 lg:p-10'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
