import React, { Component } from 'react'

import './Product.css'


class Product extends Component {
  render () {
    return (
      <div className='Product-container'>
        <img className='Product-avatar' src={ this.props.product['img_url'] } alt="product-avatar" />
        <h4>{this.props.product.name}</h4>
        <p className="Product-price">{this.props.product.price}</p>
      </div>
    )
  }
}

export default Product
