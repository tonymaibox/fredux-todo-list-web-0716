export default function(state=[], action) {
 switch (action.type) {
   case 'ADD_TODO':
     return [...state, action.payload]
   case 'REMOVE_TODO':
   var newList = [...state]
   newList.splice(action.payload.id, 1)
   return newList
   default: return state
 }
}

// let action = (type: 'ADD_TODO', payload: {title: 'Buy Milk'})
// this.props.store.dispatch()