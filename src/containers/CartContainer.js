import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import * as Message from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import { actChangeMessage, actDeleteProduct,actUpdateProduct } from "../actions/index";

class CartContainer extends React.Component {
  render() {
    var { cart } = this.props;

    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotal(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    var {onDeleteProduct, onChangeMessage,onUpdateProduct} = this.props
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem 
        key={index} 
        item={item} 
        index={index}
        onDeleteProduct={onDeleteProduct}
        onChangeMessage={onChangeMessage}
        onUpdateProduct={onUpdateProduct}
        ></CartItem>;
      });
    }
    return result;
  };
  showTotal = (cart) => {
    var sum = 0;
    for (var x of cart) {
      var total = x.product.price * x.quantity;
      sum += total;
    }
    return <CartResult total={sum}></CartResult>;
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProduct: (product) => {
      dispatch(actDeleteProduct(product));
    },
    onChangeMessage: (msg)=>{
      dispatch(actChangeMessage(msg))
    },
    onUpdateProduct : (product,quantity)=>{
      dispatch(actUpdateProduct(product,quantity))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
