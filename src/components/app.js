import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductGrid  from './productGrid';
import CartTable from './cartTable';
import { fetchProducts, fetchCart ,addToCart }  from '../actions/index';



class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
  }

addToCart = (product) =>{
    this.props.addToCart(product._id,1)
}

  render() {
      const {
          isLoading,
          products,
          cart,
      } = this.props;


      if (isLoading) {
          return <h2>Loading </h2>;
      }

    return (
      <div>
          <h1>Order Menu</h1>
          <ProductGrid
              products = {products}
              addToCart = {this.addToCart}
            />
        <h1> CART </h1>
        <CartTable
            cart = {cart}
            />
      </div>
    );
  }
}

const getProductById = (products,productId) => products.find(p => p._id === productId);
const populateCartItems = (cart,products)=>({
    ...cart,
    items: cart.items.map(item =>({
        ...item,
        product: getProductById(products,item.productId),
    })),
});


const mapStateToProps = (state)=>({
    isLoading: state.product.isLoading,
    products: state.product.products,
    cart: populateCartItems(state.cart.cart,state.product.products),
});

const mapDispatchToProps = {
    fetchProducts,
    fetchCart,
    addToCart,
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
