import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

  // In your component body


function ShoppingList (props) {
  const router = useRouter()

const [item,setitem]= useState(props.data);


function handleRemoveItem ( _id)  {
  var deleteditem =  item.filter(function(ite) {
    return ite._id != _id;
  });
    setitem(deleteditem)

    console.log(deleteditem)
}
return (
  <div>
<Container>
    <Button color="dark" style={{marginBottom: '2rm'} }
        onClick= {() => {
        const name = prompt("Enter Item" )
        if(name){
         const it= {_id:uuidv4(),name:name}  
         
         fetch('/api/post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(it),
          }).then(res => {
            console.log(res)
            if (res.statusText=="OK") {
              var newitems = [it].concat(item);
              setitem(newitems)
              //setitem(item => [...item,it])
            } else {
              console.log("error in posting")
            }
      
        });
        }}}>
        Add Item
    </Button>
 
    <ListGroup>
        <TransitionGroup className = "shopping-1ist">
          
            {item.map( ({_id, name})=> (
                
                <ListGroupItem key={_id}> 
                <Button className='remove-btn ' color='danger'
                 onClick= {() => {
                  fetch('/api/'+_id, {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }).then(res => {

                    if (res.statusText=="OK") {
                      console.log("in")
                      handleRemoveItem

                    } else {
                      console.log("error in deleting")
                    }
              
                });
                  
                 }}> X </Button>
                   {" "+name} </ListGroupItem>
               
                ))}
                
        </TransitionGroup>
    </ListGroup>
</Container>
</div>
)
}

export default ShoppingList;