import React from 'react';

class ToDoList extends React.Component{
 constructor(){
   super();
   this.state = {
     items: []
   }
   this.onSubmit = this.onSubmit.bind(this)
   this.onRemove = this.onRemove.bind(this)
 }

 onSubmit(event){
   event.preventDefault()
   let action = {type: 'ADD_TODO', payload: {title: event.target.firstChild.value}}
   this.props.store.dispatch(action)
   event.target.firstChild.value = ""
  }

  onRemove(event){
  	let action = {type: 'REMOVE_TODO', payload: {id: event.target.id}}
  	this.props.store.dispatch(action)
  }

 render(){
   return(
     <div>
       <ul>
         {this.props.store.getState().map((item, index)=>{
           return <li>{item.title} <button id={index} onClick={this.onRemove}>Remove</button></li>
         })}
       </ul>
       <form onSubmit={this.onSubmit}>
         <input></input>
       </form>
     </div>
   )
 }
}

export default ToDoList