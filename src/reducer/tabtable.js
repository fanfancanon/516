const defaultState={
  data:[]
}
export default function(state=defaultState,action){
  switch(action.type){
    case 'TABLE':
      // console.log(action.payload.users)
      return {...state,data:action.payload.users}
    case 'TJ':
        state.data.push(action.payload)
        console.log(state.data)
      return {...state,data:state.data}
    default :
    return state
  }
}