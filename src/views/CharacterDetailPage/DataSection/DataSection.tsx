import { ReactElement } from 'react';

export const DataSection = ({
  icon,
  title,
  textValue = null,
  listValues = null,
  emptyListMessage = '',
}: PropTypes) => {
  return (
    <section className='flex flex-col gap-3 bg-white bg-opacity-50 p-5 rounded-md shadow-lg border-[1px] border-primary-light'>
      <h3 className='flex items-center font-semibold text-primary-dark gap-2'>
        {icon} {title}
      </h3>
      {textValue && <p className='ml-3'>{textValue}</p>}
      {listValues && (
        <ul className='flex flex-col gap-2'>
          {listValues.length > 0 ? (
            listValues.map((element: string) => (
              <li key={element} className='ml-3'>
                <span className=' text-primary-light mr-0.5'>•</span> {element}
              </li>
            ))
          ) : (
            <li className='ml-3 text-gray-500'>{emptyListMessage}</li>
          )}
        </ul>
      )}
    </section>
  );
};

type PropTypes = {
  icon: ReactElement;
  title: string;
  textValue?: string | null;
  listValues?: string[] | null;
  emptyListMessage?: string;
};
