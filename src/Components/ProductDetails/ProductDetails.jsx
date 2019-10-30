import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import './ProductDetails.css';

const ProductDetails = ({ productDetails }) => (
  <Paper className="container-details">
    <Typography variant="h5" component="h3">
      {productDetails.name}
    </Typography>
    <Typography component="p">
      Amount:
      {productDetails.amount}
    </Typography>
    <Typography component="p">
      Type:
      {productDetails.type}
    </Typography>
    <IconButton edge="end" aria-label="delete">
      <Link to="/list">
        <ArrowBackIosIcon />
      </Link>
    </IconButton>
  </Paper>
);

ProductDetails.propTypes = {
  productDetails: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    amount: PropTypes.number,
    type: PropTypes.string,
  }),
}.isRequaired;

export default ProductDetails;
