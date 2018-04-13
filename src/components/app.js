import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductGrid  from './productGrid';
import CartTable from './cartTable';
import { fetchProducts, fetchCart ,addToCart, deleteToCart }  from '../actions/index';



class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
  }

addToCart = (product) =>{
    this.props.addToCart(product._id,1)
}
deleteToCart = (item) =>{
    console.log('item',item);
    this.props.deleteToCart(item.productId,1)
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
      let subTotalsPrice = [0];
      let subTotalsItems = [0];
      cart.items.map((item) => {
      subTotalsPrice.push(item.product.price * item.quantity);
      subTotalsItems.push(item.quantity);
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (
      <div>

          <h1> CART </h1>
          <CartTable
              cart = {cart}
              deleteToCart = {this.deleteToCart}
              />
          <div className="grand-total-price grand-total">
                  <span>Total Price:   </span>
                  <span className="total-price">{subTotalsPrice.reduce(reducer)}</span>
          </div>
          <div className="grand-total-items grand-total">
                  <span>Total Items:   </span>
                  <span className="total-items">{subTotalsItems.reduce(reducer)}</span>
          </div>
          <h1>Order Menu</h1>
          <ProductGrid
              products = {products}
              addToCart = {this.addToCart}
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
    deleteToCart,
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
