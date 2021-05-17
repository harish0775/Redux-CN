// {
//     type : 'ADD_MOVIES',
//     movies
// }
// {
//     type:'DECREASE_COUNT'

// import { data } from "../data";

// }
export const ADD_MOVIES = 'ADD_MOVIES';
//action creators
export function addMovies(movies , id){
    return{
        type : ADD_MOVIES,
        movies ,
        id
    }
}