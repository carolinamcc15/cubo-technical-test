export const PageHeader = ({ title, total = 0 }: PropTypes) => {
  return (
    <header
      className='flex flex-col justify-center items-center bg-cover bg-center h-56 sm:h-64 md:h-72 backdrop-blur-sm'
      style={{ backgroundImage: 'url("animated-squares-bg.svg")' }}
    >
      <h1 className="page-title mb-3 text-white text-4xl sm:text-5xl lg:text-7xl font-black tracking-wider upper font-title">
        {title}
      </h1>
      {total > 0 && (
        <p className=' text-primary-dark bg-white p-1 px-4 rounded-full bg-opacity-40 font-medium'>
          Total: {total}
        </p>
      )}
    </header>
  );
};

type PropTypes = {
  title: string;
  total?: number;
};
