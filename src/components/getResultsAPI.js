
const API_KEY = 'cc92689'


//parametros usados para las busquedas
//-----------------------------------------------------
// tipoBusqueda    |       valor
//      s       ------> Movie title to search for.
//
const OMDbAPI = (tipoBusqueda, valor) => {
    return (`http://www.omdbapi.com/?apikey=${API_KEY}&${tipoBusqueda}=${valor}`)
}



export const getCardsResults = async() => {
    
    const res = await fetch( OMDbAPI('s','back+to+the+future') );
    const { Search } = await res.json();

    const cards = Search.map((item) => {
        return {
            titulo: item.Title,
            subtitulo: item.Year,
            descripcion: item.Type 
        } 
    });

    return cards;
}