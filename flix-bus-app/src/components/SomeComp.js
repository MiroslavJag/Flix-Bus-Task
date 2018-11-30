import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import '../App.css';

class someComp extends Component {


componentDidMount(){
  console.log(this.props.destinations)
}


  render(){
    let listFinall = <p>Please click the button to get a list!</p>
    if(this.props.destinations){
      listFinall = this.props.destinations.map(post => {
        return <li key={post.tripId}>{post.from}</li>
      })
    }
    if(this.props.error){
      return <h4 style={{color:'red'}}>Something went wrong!</h4>
    }

    return(
      <div className="App">
        {listFinall}
        <button onClick={this.props.getSearchData}>Get List</button>
      </div>
    )
  }
}



const mapStateProps = state => {
  return{
    destinations: state.destinations,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getSearchData: () => dispatch(actions.getSearchData())
  }
}

export default connect(mapStateProps, mapDispatchToProps)(someComp); 
