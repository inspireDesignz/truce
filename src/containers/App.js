import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="App">
       <AppBar position="static">
         <Toolbar>
           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
             <MenuIcon />
           </IconButton>
           <Typography variant="title" color="inherit" className={classes.flex}>
             TRUCE
           </Typography>
           <Button color="inherit">Login</Button>
         </Toolbar>
       </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);
