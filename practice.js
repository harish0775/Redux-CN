import React , { Components} from 'react';
class MovieCard extends Components{
    render(){
        const {movie} = this.props;;
        return(
            <div className = "Movie-cards">
                <div className = "left">
                    <img src = {movie.Poster} alt = "movie-pic"/>
                    
                </div>
                <div className = "right">
                    <div className = "title">
                        {movie.Title} ({movie.Year})
                    </div>
                    <div className
                    = "Plot">{movie.Plot} </div>
                    <div className = "footer">
                        <div className = "rating">{movie.imdbRating}</div> </div>
                        <button className = "favourite-btn">Favourite </button>
                       
                    </div>
                </div>
            </div>
        );
    }
}


import React from 'react';
import ReactDom from 'react-dom';

import {createStore} from 'redux';

import App from './components/App';
import movies from './reducers/movies';
import {data as moviesList } from './data';
import './index.css';;

const store = createStore(movies);
console.log('state',store.getstate());

store.dispatch({
    type : 'ADD_MOVIES'
    movies : moviesList
});
console.log('state',store.getState());

ReactDom.render(<App store = {store} />,document.getElementById');


