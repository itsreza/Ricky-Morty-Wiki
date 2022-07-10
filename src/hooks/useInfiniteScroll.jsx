import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !isFetching
      ) {
        setIsFetching(true);
      }
      if (window.scrollTop === -500 && !isFetching) {
        setIsFetching(true);
      }
    }
    if(isFetching){
      callback()
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);
  
  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
