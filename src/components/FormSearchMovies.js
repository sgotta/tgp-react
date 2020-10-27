import React, { useState } from 'react';

export const FormSearchMovies = React.memo( ({setSearch}) => {
    
    console.log('me volvi a dibujar FormSearchMovies')
    
    const defaultInputs = {
        title:'',
        year:'',
        type:''
    }

    const [inputValues, setInputValues] = useState(defaultInputs);
    
    const {title, year, type} = inputValues; 

    const handleInputChange = (event) => {

        const { target } = event;
        
        setInputValues({
            ...inputValues,
            [ target.name ]: target.value //se usa de esta forma para un manejo independiente de input   
        })
    }

    const handleSubmit = (event) => {
        setSearch(inputValues);
        console.log('se actualizo search con :',inputValues)  
    }

    const handleInputsClean = (event) => {
        setInputValues(defaultInputs)
    }


    return (
        <div>            
            {/* estos datos se van cargando a medida que se van completanto los input */}
            { ( (title !== '') || (year !== '') || (type !== '') ) &&
                <div style={{textAlign:"left"}}>
                    { (title !== '') && <span style={{marginRight:"8px", fontSize: "14px"}} className="badge badge-light">{title}</span> }
                    { (year !== '') && <span style={{marginRight:"8px", fontSize: "14px"}} className="badge badge-light">{year}</span> }
                    { (type !== '') && <span style={{marginRight:"8px", fontSize: "14px"}} className="badge badge-light">{type}</span> }
                </div>
            }
            
            <hr />
            
            <div className="row">
            <div className="form-group col">
                <input 
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="title"
                    value={ title }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group col">
                <input 
                    className="form-control"
                    type="text"
                    name="year"
                    placeholder="year"
                    autoComplete="off"
                    value={ year }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group col">
                <input 
                    className="form-control"
                    type="text"
                    name="type"
                    placeholder="type"
                    value={ type }
                    onChange={ handleInputChange }
                />
            </div>
            </div>
            <button onClick={ handleSubmit } className="btn btn-primary" style={{marginRight:"8px"}} >Buscar</button>
            <button onClick={ handleInputsClean } className="btn btn-light" style={{marginRight:"8px"}} >Limpiar</button>
        </div>
    )
} )