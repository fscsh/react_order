import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/index'

class App extends Component {
    componentWillMount(){
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
          <h1>order menu</h1>
          {products.map(product =><h3>{product.name}</h3>)}
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
    isProductsLoading: state.product.isLoading,
        products: state.product.products
});

const mapDispatchToProps = {
    fetchProducts,
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
