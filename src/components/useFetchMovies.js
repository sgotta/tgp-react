import { useState, useEffect } from "react";
import { getCardsResults } from "./getResultsAPI";

export const useFetchMovies = () => {
    
    const [state, setstate] = useState([]);

    useEffect( () => {
        getCardsResults().then( (cards) => {
            setstate([...cards]);
        });
    }, []);

    return state;
}