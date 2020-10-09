import React from 'react';
import { useFetchMovies } from './useFetchMovies';
import { CardItem } from './CardItem';

export const ListCards = ( ) => {   

    const state = useFetchMovies();
    
    return (
        <> 
            <hr />
            <h2> Listado de prueba </h2>
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
        </>
    )
}