import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';

function ShoppingList (props) {
const [items,setitems]= useState([
{id: uuidv4() , name: "Eggs" },
{id: uuidv4() , name: "Milk" },
{id: uuidv4() , name: 'Steak' },
{id: uuidv4(), name: "Water"}])
console.log(props.data);
const [item,setitem]= useState(props.data);
return (
<Container>
    <Button color="dark" style={{marginBottom: '2rm'} }
        onClick= {() => {
        const name = prompt("Enter Item" )
        if(name){
         const it= {_id:uuidv4(),name:name}  
         setitem(item => [...item,it])
         fetch('/api/hello', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({name:it.name}),
          })
        }}}>
        Add Item
    </Button>
    <div>
    {item.map( ({_id, name})=> (
                <h1 key={_id}> {name} </h1>
                ))}
    </div>
    <ListGroup>
        <TransitionGroup className = "shopping-1ist">
            {items.map( ({id, name})=> (
                <CSSTransition key={id} timeout = {500} className= "fade" >
                <ListGroupItem> {name} </ListGroupItem>
                </CSSTransition>
                ))}
        </TransitionGroup>
    </ListGroup>
</Container>
)
}

export default ShoppingList;