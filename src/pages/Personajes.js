import React , {Component} from 'react'
import TablaPersonas from '../components/TablaPersonas';

export class Personajes extends Component{
    state={
        nombrepersonaje:'',
        filtroBusqueda:'' ,
        error:'',
        count:0,
        items:[{name:"simon", eye_color: "marron"},{name:"dolores", eye_color:"miel"}],
        selectValue:''
     }
     

     _changeText =(e)=>{
        //   this.setState({nombrepersonaje:e.target.value});
          this.setState({filtroBusqueda:e.target.value});
      }

    handleChangeFilter = (e) => {
        this.setState({selectValue: e.target.value});
        console.log(this.state.items)
        console.log(e.target.value)
        let result = this.state.items.filter(personaje => personaje.eye_color === e.target.value);
        console.log(result);
    }
    
    //  _handleSubmit =(e)=>{
    //      e.preventDefault();
    //      this.setState({filtroBusqueda:this.state.nombrepersonaje});
    //      const filtro = this.state.filtroBusqueda;
    //      console.log("submitFILTRO "+filtro);
    // }

    render(){
        return (
            <div className="container">
                <h1 className="text-left">Star Wars</h1>
                {/* <form onSubmit={this._handleSubmit}> */}
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="form-group text-left mb-3">
                            <label >Nombre del Personaje </label>
                                <div className="input-group">
                                    <div class="input-group-append">
                                        <span className="btn btn-outline-secondary">🔍</span>
                                    </div>
                                    <input
                                        type="text" className="form-control" 
                                        id="filtro" 
                                        onChange={this._changeText}
                                        placeholder="Búsqueda..."/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-3">
                            <div className="form-group text-left mb-3">
                                <label >Filtro color de ojos </label>
                                <div className="input-group">
                                    <select placeholder="Seleccione" className="form-control" value={this.state.selectValue} onChange={this.handleChangeFilter}>
                                        <option value="" disabled>Color de ojos 👀</option>
                                        <option value="marron">Marrón</option>
                                        <option value="miel">Miel</option>
                                    </select>
                                    <div class="input-group-append">
                                        <span className="btn btn-outline-secondary" onClick={()=>this.setState({selectValue: ""})}>🗑</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-1" style={{paddingTop:"32px"}}>
                            <button  className="btn btn-primary">Buscar</button>
                        </div>
                    </div>
                   
                {/* </form> */}
               
                <div className="row">
                    {/* ver con dolo de pasar la responsabilidad de filtrar datos a la busqueda */}
                    <TablaPersonas filtro={this.state.filtroBusqueda} />
                </div>
            </div>
        );

    }
}