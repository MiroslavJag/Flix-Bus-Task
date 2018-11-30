import React, { Component } from 'react';

class Cart extends Component {
  state = {
    loadedDestiantion: null
  }

  render(){
    let cartDes = <p>Your Shopping Cart is empty!</p>
    if(this.props.id){
      cartDes = <h2>Shopping Cart</h2>

    }
    return(
      <section>
        {cartDes}
      </section>
    )
  }
}


export default Cart;