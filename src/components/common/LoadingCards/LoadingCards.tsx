export const LoadingCards = ({ quantity }: PropTypes) => {
  return (
    <>
      {Array.from({ length: quantity }, (_, index) => (
        <li
          key={index}
          className='flex bg-white p-6 sm:h-64 rounded-2xl shadow-lg gap-5 select-none '
        >
          <div className='flex flex-col flex-1 gap-5 '>
            <div className='flex flex-1 flex-col gap-3'>
              <div className='bg-gray-200 w-full animate-pulse h-36 rounded-2xl'></div>
              <div className='bg-gray-200 w-full animate-pulse h-5 rounded-2xl'></div>
              <div className='bg-gray-200 w-full animate-pulse h-3 rounded-2xl'></div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

type PropTypes = {
  quantity: number;
};
