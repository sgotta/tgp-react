import { useState, useEffect } from "react";
import { getCardsResults } from "./getResultsAPI";

export const useFetchMovies = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getCardsResults().then((cards) => {
      setState([...cards]);
    });
  }, []);

  return state;
};
