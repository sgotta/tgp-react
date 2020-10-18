import React from 'react';
import { useFetchMovies } from './useFetchMovies';
import { CardItem } from './CardItem';

export const ListCards = ( ) => {   

    const state = useFetchMovies();
    
    return (
        <div className="container text-center">
            <div className="card-grid" >
                <div className="row">
                {
                    state.map((card) => {
                        return (
                            <CardItem
                                key={card.titulo}
                                { ...card } 
                            /> 
                        )
                    })
                }
                </div>
            </div>
            </div>
    )
}