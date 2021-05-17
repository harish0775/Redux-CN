export default function movies (state = [] ,action){  // reducer return always new states
    if(action.type === 'ADD_MOVIES'){   // add movies
      return action.movies;
}
return state;
}