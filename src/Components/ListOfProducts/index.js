import { connect } from 'react-redux';
import ListOfProducts from './ListOfProducts';
import { deleteItem, showDetails, addNewProduct } from '../../store/actions';

const mapStateToProps = (state) => ({
  listOfProducts: state.listOfProducts,
  name: state.name,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  showDetails: (id) => dispatch(showDetails(id)),
  addNewProduct: (newProduct) => dispatch(addNewProduct(newProduct)),
});

const connectedListOfProducts = connect(mapStateToProps, mapDispatchToProps)(ListOfProducts);

export {
  connectedListOfProducts as ListOfProducts,
};
