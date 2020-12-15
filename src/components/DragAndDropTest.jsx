import React, {useState } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit ,faTrashAlt} from '@fortawesome/free-solid-svg-icons';


library.add(faEdit,faTrashAlt)


const myItems=[
    {
        id:'elemento-1',
        content:'Elemento-1',
    },
    {
        id:'elemento-2',
        content:'Elemento-2',
    },
    {
        id:'elemento-3',
        content:'Elemento-3',
    },
    ]
const mySelected = [
            {
                id:'elemento-4',
                content:'Elemento-4',
            },
            {
                id:'elemento-5',
                content:'Elemento-5',
            },
            {
                id:'elemento-6',
                content:'Elemento-6',
            },
        ]

// fake data generator
// const getItems = (count, offset = 0) =>
//     Array.from({ length: count }, (v, k) => k).map(k => ({
//         id: `item-${k + offset}`,
//         content: `item ${k + offset}`
//     }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    console.log(list);
    console.log("reorder start:"+startIndex+" end "+endIndex);
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    console.log("move source:"+source+" destino "+destination);
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',
   // align: 'rigth',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : '',
    padding: grid,
    width: 300
});


function DragAndDropTest () {
    const [items, setItems] = useState(myItems);
    const [selected,setSelected]=useState(mySelected);
   

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    const id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    function getList (id) {
        //this.state[this.id2List[id]];
        console.log(id);
        if (id2List[id] === 'items')
            return items;
        else
            return selected;
    }
    function borrarItem (elem){

    }
    function editarItem (elem){

    }

     let agregarElemento = () =>{
    // function agregarElemento(){
        let colSelected = mySelected;
        const maxid = mySelected.length+myItems.length+1;
        const newPos = colSelected.length;
        const nombre= 'elemento-'+maxid.toString();
        colSelected[newPos]= {id:maxid.toString(),content:nombre};
        //mySelected.push({id:maxid.toString(),content:nombre});
        setSelected(colSelected);
    }

    function onDragEnd (result)  {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                getList(source.droppableId),
                source.index,
                destination.index
            );

            //let state = { items };
                   
            if (source.droppableId === 'droppable2') {
                //state = { selected: items };
                setSelected(items);
            }else {
                setItems(items); 
            }

            //this.setState(state);
        } else {
            const result = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination
            );

            // this.setState({
            //     items: result.droppable,
            //     selected: result.droppable2
            // });
            setItems(result.droppable);
            setSelected(result.droppable2);
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
   
        return (
           
            <div className="container-fluid">
                 <button type="button" onClick={agregarElemento}>agregar</button>
                <div className="row justify-content-md-center">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                       <div className="col-sm-4 card">
                         <div className="card-body"
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {items.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div className="card justify-content-md-center"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        </div>
                    )}
                </Droppable>
                
                <Droppable droppableId="droppable2">
                    {(provided, snapshot) => (
                        <div className="col-sm-4 offset-md-2 card">
                        <div className="card-body justify-content-center"
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {selected.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <div className="card "
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}>
                                                <div>
                                                    {item.content}
                                                    <button type="button"  className="btn btn-link"
                                                        onClick={editarItem(item.id)}
                                                        >
                                                        <FontAwesomeIcon icon={faEdit} color="black"/>
                                                    </button>
                                                    <button  type="button" className="btn btn-link" onClick={borrarItem(item.id)}
                                                        >
                                                        <FontAwesomeIcon icon={faTrashAlt} color="black"/>
                                                    </button>

                                                 </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder} 
                            
                        </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            </div>
            </div>
        );
    
}
export default DragAndDropTest;
// Put the things into the DOM!

