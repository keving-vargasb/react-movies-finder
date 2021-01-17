import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import { MoviesList } from "./components/MoviesList";

class App extends Component {
   state = {
      results: [],
   };

   _handleResults = (results) => {
      this.setState({
         results,
      });
   };

   render() {
      return (
         <div className="App">
            <Title>Search movie</Title>
            <div className="SearchForm-wrapper">
               <SearchForm onResults={this._handleResults}></SearchForm>
            </div>
            {this.state.results.length === 0 ? (
               <p> Sin Resultados</p>
            ) : (
               <MoviesList movies={this.state.results}></MoviesList>
            )}
         </div>
      );
   }
}

export default App;
