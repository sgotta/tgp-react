import React from 'react';
import PropTypes from 'prop-types';

export const CardItem = ( props ) => {
    const {titulo, subtitulo, descripcion} = props;
    
    return (
        <div class="card text-white bg-secondary mb-3 animate__animated animate__fadeIn" style={{width: "18rem", margin: "1rem" }}  >
            <div class="card-header">{titulo}</div>
            <div class="card-body">
                <h5 class="card-title">{subtitulo}</h5>
                <p class="card-text">{descripcion}</p>
            </div>
        </div>
    )
}

CardItem.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
}