import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ProductGrid  from './productGrid';
import { fetchProducts }  from '../actions/index'

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }
  render() {
      const {
          isLoading,
          products,
      } = this.props;

      if (isLoading) {
          return <h2>Loading </h2>;
      }
    return (
      <div>
          <h1>Order Menu</h1>
          <ProductGrid
              products = {products}
            />
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
    isLoading: state.product.isLoading,
    products: state.product.products,
});

const mapDispatchToProps = {
    fetchProducts,
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
