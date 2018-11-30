import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/actions/index';


class SearchForm extends Component {

  state = {
    destinations: {
      cityOne : "Munich",
      cityTwo: "Berlin"
    }
  }

  render(){
    return(
      <div className="App">
        <h1>Search your ride!</h1>
          <label style={{marginLeft:'10px'}}>From</label>
          <select style={{marginLeft:'10px'}}>
            <option>{this.state.destinations.cityOne}</option>
            <option>{this.state.destinations.cityTwo}</option>
          </select>
          <label style={{marginLeft:'10px'}}>To</label>
          <select style={{marginLeft:'10px'}}>
            <option>{this.state.destinations.cityTwo}</option>
            <option>{this.state.destinations.cityOne}</option>
          </select>
          <button 
            style={{padding:'10px', marginLeft:'10px', color: 'white', backgroundColor: 'orange'}}
            onClick={this.props.getSearchData}
            >Search</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getSearchData: () => dispatch(actions.getSearchData())
  }
}

export default connect(null, mapDispatchToProps)(SearchForm);