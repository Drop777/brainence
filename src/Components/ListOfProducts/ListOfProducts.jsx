import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './ListOfProducts.css';

class ListOfProducts extends React.Component {
  state = {
    setOpen: false,
    newName: '',
    newAmount: 0,
    newType: '',

    newNameError: false,
    newAmountError: false,
    newTypeError: false,
  }

  handleOpen = () => {
    this.setState({
      setOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false,
    });
  };

  handleChangeName = ({ target }) => {
    const { value } = target;

    this.setState({
      newName: value,
    });
  };

  handleChangeAmount = ({ target }) => {
    const { value } = target;

    this.setState({
      newAmount: value,
    });
  };

  handleChangeType = ({ target }) => {
    const { value } = target;

    this.setState({
      newType: value,
    });
  };

  handleSubmit = () => {
    const {
      newName, newAmount, newType,
    } = this.state;
    const { addNewProduct } = this.props;
    if (newName === '') {
      this.setState({
        newNameError: true,
      });
    } else if (newAmount === 0) {
      this.setState({
        newNameError: false,
        newAmountError: true,
      });
    } else if (newType === '') {
      this.setState({
        newNameError: false,
        newAmountError: false,
        newTypeError: true,
      });
    } else {
      const newProduct = {
        name: newName,
        amount: newAmount,
        type: newType,
        id: parseInt(Math.random() * 100, 16),
      };
      addNewProduct(newProduct);
      this.setState({
        newName: '',
        newAmount: 0,
        newType: '',

        newNameError: false,
        newAmountError: false,
        newTypeError: false,
      });
      this.handleClose();
    }
  };

  render() {
    const {
      listOfProducts, name, deleteItem, showDetails,
    } = this.props;
    const {
      setOpen, newName, newAmount, newType, newAmountError, newNameError, newTypeError,
    } = this.state;
    return (
      <>
        <div>
          <AppBar position="static">
            <Toolbar className="nav-bar">
              <Typography variant="h6">
                Name:
                {name}
              </Typography>
              <div>
                <IconButton edge="end" aria-label="delete">
                  <Link to="/" className="link exit-button ">
                    <ExitToAppIcon />
                  </Link>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div className="list-container">
          <List>
            {listOfProducts.map((item) => (
              <ListItem key={item.id}>
                <Link to={`/list/${item.id}`} onClick={() => showDetails(item.id)} className="link link-item">
                  <ListItemText
                    primary={item.name}
                  />
                </Link>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <div className="popup-container">
            <Button type="button" variant="contained" color="primary" onClick={this.handleOpen} className="action-button">Add new product</Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={setOpen}
              onClose={this.handleClose}
            >
              <div className="pop-up">
                <h2 id="simple-modal-title">Add new product</h2>
                <form onSubmit={this.handleSubmit}>
                  <TextField
                    onChange={this.handleChangeName}
                    id="outlined-full-width"
                    label="Name"
                    value={newName}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={newNameError}
                  />
                  <TextField
                    onChange={this.handleChangeAmount}
                    id="outlined-full-width"
                    type="number"
                    label="Amount"
                    value={newAmount}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={newAmountError}
                  />
                  <TextField
                    onChange={this.handleChangeType}
                    id="outlined-full-width"
                    label="Type"
                    value={newType}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={newTypeError}
                  />
                  <div className="pop-up-buttons">
                    <Button type="submit" variant="contained" color="primary" className="action-button">Add</Button>
                    <Button type="button" variant="contained" color="primary" onClick={this.handleClose} className="action-button">Cancel</Button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

ListOfProducts.propTypes = {
  addNewProduct: PropTypes.func,
  listOfProducts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    amount: PropTypes.number,
    type: PropTypes.string,
  })),
  name: PropTypes.string,
  deleteItem: PropTypes.func,
  showDetails: PropTypes.func,
}.isRequaired;

export default ListOfProducts;
