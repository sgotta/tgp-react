import React , {Component} from 'react'
import TablaPersonas from '../components/TablaPersonas';



export class Personajes extends Component{
    state={
        nombrepersonaje:'',
        filtroBusqueda:'' ,
        error:'',
        count:0,
        items:[]
     }
   
     _changeText =(e)=>{
        //   this.setState({nombrepersonaje:e.target.value});
          this.setState({filtroBusqueda:e.target.value});
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
                        <div className="col-sm">
                            <div className="form-group text-left">
                                <label >Nombre del Personaje </label>
                                <input
                                    type="text" className="form-control" 
                                    id="filtro" 
                                    onChange={this._changeText}
                                    placeholder="busqueda..."/>
                            
                            </div>

                        </div>
                        {/* <div className="col-sm text-botton">
                            <button  className="btn btn-primary ">Buscar</button>
                        </div> */}
                    </div>
                   
                {/* </form> */}
               
                <div className="row">
                    <TablaPersonas filtro={this.state.filtroBusqueda} />
                </div>
            </div>
        );

    }
}