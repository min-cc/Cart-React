import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import ProductItem from "../components/ProductItem";
import PropTypes from "prop-types";
import { actAddToCart, actChangeMessage } from "../actions/index";
class ProductsContainer extends React.Component {
  render() {
    var { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
  showProducts(products) {
    var { onAddToCart, onChangeMessage} = this.props;
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            onChangeMessage={onChangeMessage}
            key={index}
            product={product}
            onAddToCart={onAddToCart}
          ></ProductItem>
        );
      });
    }
    return result;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch,props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
