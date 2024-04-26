import { useEffect } from 'react';

const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title ? `Characters | ${title}` : 'Characters app';
  }, [title]);
};

export default usePageTitle;
