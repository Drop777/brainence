import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoginForm } from '../LoginForm';
import { ListOfProducts } from '../ListOfProducts';
import { ProductDetails } from '../ProductDetails';

class App extends React.Component {
  componentDidMount() {
    const { loadData, listOfProducts } = this.props;
    if (listOfProducts.length === 0) {
      loadData();
    }
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/list" exact component={ListOfProducts} />
          <Route path="/list/:itemId" exact component={ProductDetails} />
        </Switch>
      </main>
    );
  }
}

App.propTypes = {
  loadData: PropTypes.func,
  listOfProducts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    amount: PropTypes.number,
    type: PropTypes.string,
  })),
}.isRequaired;

export default App;
