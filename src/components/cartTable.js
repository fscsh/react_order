
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.table`
  width: 100%;
  border-collapse:collapse;

  td,th{
      border: 1px solid #DDD;
      padding: 8px;
      text-align: left;
  }
  tr:nth-child(even){
      background: #DDD;
  }
`;


const CartTable = ({ cart }) => (
  <Wrapper>
      <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>quantity</th>
            <th>add</th>
            <th>delete</th>
          </tr>
      </thead>
      <tbody>
          {cart.items.map(item =>(
              <tr key = {item.productId}>
                <td> {item.product.name}</td>
                <td> {item.product.price}</td>
                <td> {item.quantity}</td>
                <td> <button onClick={() => addToCart(product)}>
                    Add
                </button></td>
                <td><button onClick={() => deleteToCart(product)}>
                    Delete
                </button>
            </td>
              </tr>
          ))}
      </tbody>
  </Wrapper>
);

CartTable.propTypes = {
    cart:PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            product: PropTypes.shape({
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
            }).isRequired,
            productId: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
};

export default CartTable;
