export const Button = ({ text, onClickHandler }: PropTypes) => {
  const handleOnClick = () => {
    onClickHandler();
  };

  return (
    <button
      type='button'
      onClick={handleOnClick}
      className='text-white bg-primary hover:bg-primary-dark focus:outline-none uppercase font-bold rounded-lg text-sm px-4 py-2 text-center transition duration-300 ease-in-out'
    >
      {text}
    </button>
  );
};

type PropTypes = {
  text: string;
  onClickHandler: () => void;
};
