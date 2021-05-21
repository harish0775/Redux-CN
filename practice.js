// import React from 'react';
// import Navbar from './Navbar';
// import MovieCard from './MovieCard';
// import { addMovies , setShowFavourites} from '../actions';
// import { data as moviesList } from '../data';

// class App extends React.Component{
//       componentDidMount(){
//           this.props.store.subscribe(() => this.forceUpdate());
//           this.props.store.dispatch(addMovies(moviesList));

//       }
//       isMovieInFavourites = movie => {
//           const{movie} = this.props.store.getState();

//           const index = movies.favourites.indexOF(movie);
//              if(index != -1){
//                  return true;
//              }
//             return false;
//       };

//       changeTab = val => {
//           this.props.store.dispatch(setShowFavourites(val));
//       }

//      render(){
//          const { movies} = this.props.store.getState();

//          console.log('movies', movies);

//          const { list , showFavourites = [],favourites = []} = movies;
        
//          const displayMovies = setShowFavourites ? favourites : list;
             
//      }
//         return (
//            <div className = "App">
//            <Navbar dispatch = {this.props.store.dispatch} />
//             <div className = "main">
//                <div className = "tabs">
//                      <div className = {`tab ${showFavourites ? '' : 'active-tabs'}`}
                       
//                      onclick = {() => this.changeTab(false)}
//                      >
//                         Movies
//                      </div>
//                </div>

//                 className = {`tab $ {showFavourites ? 'active-tabs' : ''}`}

//                 onClick = {() => this.changeTab(true)}
//                 >
//                 Favourites
//             </div>
//             </div>

//             <div id = "list">
//                   <MovieCard
//                     movie = {movie}
//                     key = {movie.imbdID}
//                     dispatch = {this.props.store.dispatch}
//                     isFavourite = {this.isMovieInFavourites(movie)}

//                     />
//         ))}
//         {displayMovies.length === 0 ?(
//             <div className = "no-Movies"> No Movies to display !</div>
//         ) : null}
//             </div>
//         )
// }


// import React,{Component} from 'react';
// import { addMoviesToList, handleMovieSearch}  from '../actions';
// import {data} from '../data';

// import {data} from '../data';

// class Navbar extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             showSearchResults : true,
//             searchText :''
//         };
//     }
//     handleAddToMovies = movie => {
//         this.props.dispatch(addMoviesToList(movie));
//         this.setState({

//             showSearchResults : false
//         });
//     };

//     handleSearchClick = () => {
//         const { searchText} 
//     }
// }