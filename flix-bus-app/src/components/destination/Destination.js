import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import './Destination.css';


const post = (props) => (
    <article className="Destination">
        <p>{props.departureDate}</p>
        <p>FROM:  <span>{props.from}</span></p>
        <p>TO:  <span>{props.to}</span></p>
        <p>PRICE:  <span>{props.price} &euro;</span></p>
        <div className="Info">
            <button onClick={props.clicked}>Reserve</button>
        </div>
    </article>
);


const mapStateProps = state => {
  return{
    destinations: state.destinations,
    error: state.error
  }
}


export default connect(mapStateProps)(post); 
