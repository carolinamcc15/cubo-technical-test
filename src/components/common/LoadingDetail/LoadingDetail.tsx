import animatedBg from '../../../assets/svg/animated-squares-dark.svg';

export const LoadingDetail = () => {
  return (
    <div
      className='min-h-[95vh] flex flex-col justify-center items-center bg-cover bg-center p-8 pt-20 sm:pt-14'
      style={{ backgroundImage: `url(${animatedBg})` }}
    >
      <main className='flex flex-col items-center justify-center gap-8 backdrop-blur-sm isolate bg-white/80 ring-1 ring-black/5 animate-pulse dark:bg-white/30 shadow-lg p-4 md:p-6 lg:p-10 pt-0 rounded-md w-full sm:w-auto h-screen sm:min-h-[500px] lg:min-w-[700px] max-w-[1200px] m-auto'>
        <span className='text-white animate-pulse'>Loading</span>
      </main>
    </div>
  );
};
