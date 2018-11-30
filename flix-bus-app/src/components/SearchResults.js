import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Destination from './destination/Destination';
import Cart from './Cart';

class SearchedResults extends Component {
  state = {
    selectedDestination: null
    
  }

  postSelectedHandler = (id) => {
    this.setState({selectedDestination: id});
}

  render(){
    let results = <p style={{margin: 'auto'}}>Please click the Search button to get your best ride ever!</p>
    if(this.props.destinations){
      results = this.props.destinations.map(destination => {
        return <Destination 
          key={destination.tripId}
          departureDate={destination.departureDate}
          from={destination.from}
          to={destination.to}
          price={destination.price}
          clicked={()=> this.postSelectedHandler(destination.tripId)}/>
      })
    }
    if(this.props.error){
      return <h4 style={{color:'red'}}>Something went wrong!</h4>
    }

    return(
      <>
        <div style={{display: 'flex'}}>
          {results}
        </div>
        <section>
          <Cart id={this.state.selectedDestination}/>>
        </section>
      </>
    )
  }
}

const mapStateProps = state => {
  return{
    destinations: state.destinations,
    error: state.error
  }
}

export default connect(mapStateProps)(SearchedResults); 