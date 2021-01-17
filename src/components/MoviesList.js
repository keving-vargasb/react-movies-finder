import { Component } from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

export class MoviesList extends Component {
   render() {
      const { movies } = this.props;

      return (
         <div className="MoviesList">
            {movies.map((movie) => (
               <div key={movie.imdbID} className="MoviesList-item">
                  <Movie
                     id={movie.imdbID}
                     poster={movie.Poster}
                     title={movie.Title}
                     year={movie.Year}
                  ></Movie>
               </div>
            ))}
            ;
         </div>
      );
   }
}

MoviesList.propTypes = {
   movies: PropTypes.array,
};
