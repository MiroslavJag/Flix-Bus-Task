import React, { Component } from 'react';

import '../App.css';
import SearchResults from './SearchResults';
import SomeComp from './SomeComp';
import SearchForm from './SearchFrom';


class Home extends Component {
  state ={
    searchedData: null
  }


  render() {
    return (
      <div className="App">
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}

export default Home;