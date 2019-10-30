import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

const mapStateToProps = (state) => ({
  productDetails: state.productDetails,
});

const connectedProductDetails = connect(mapStateToProps, null)(ProductDetails);

export {
  connectedProductDetails as ProductDetails,
};
