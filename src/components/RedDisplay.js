import React, { useState } from 'react';
import {connect} from 'react-redux'
import Cards from './Cards'

//import classnames from 'classnames';


//import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


 
const useStyles = makeStyles({
    rating1: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      margin: "0, auto",
      padding: "1rem",
      fontSize: "2rem",
    },
  });
  
  
  
  const RedDisplay = (props) => {
  
      console.log(`props RedDisplay`,props.list)
   
    return (
      <>
      {props.list.map((e) => (
          <Cards items = {e}/>
        
      ))}
      
      </>
    );
  };

  const mapStateToProps = state => {
    return {
        list: state.redReducer.red,
        loggedInId: state.loginReducer.idUser
    };
   
  };
  
  export default connect(
    mapStateToProps,
  )(RedDisplay);