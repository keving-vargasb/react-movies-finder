import { Component } from "react";

import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";

export class Home extends Component {
   state = {
      usedSearch: false,
      results: [],
   };

   _handleResults = (results) => {
      this.setState({
         results,
         usedSearch: true,
      });
   };

   _renderResults = () => {
      return this.state.results.length === 0 ? (
         <small>Results not found</small>
      ) : (
         <MoviesList movies={this.state.results}></MoviesList>
      );
   };

   render() {
      return (
         <div>
            <Title>Search movie</Title>
            <div className="SearchForm-wrapper">
               <SearchForm onResults={this._handleResults}></SearchForm>
            </div>
            {this.state.usedSearch ? (
               this._renderResults()
            ) : (
               <small>Use the form to search a movie</small>
            )}
         </div>
      );
   }
}
