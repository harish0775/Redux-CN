import { ADD_MOVIES} from  '../actions'

const intialMoviesState = {
    list : [],
    favourites : []
}
export default function movies (state = intialMoviesState ,action){  // reducer return always new states
    if(action.type === ADD_MOVIES){   // add movies
      return {
          ...state,
          list: action.movies 
      }
      }
return state;
}