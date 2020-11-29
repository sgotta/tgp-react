import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useFetchMovies = (url) => {
  const isMounted = useRef(true);

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then(({ Search }) =>
        Search?.map((item) => {
          return {
            id: item.imdbID,
            title: item.Title,
            year: item.Year,
            type: item.Type,
          };
        })
      )
      .then((data) => {
        if (isMounted.current) {
          setstate({
            data,
            loading: false,
            error: null,
          });
        }
      })
      .catch(() => {
        setstate({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info',
        });
      });
  }, [url]);

  return state;
};
