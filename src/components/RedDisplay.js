import React, { useState } from 'react';
import {connect} from 'react-redux'
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, UncontrolledCollapse, Button, TabContent, TabPane,
   Nav, NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';

import NAVBAR from './Mode'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

 
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
  
      console.log(`props.fact.user_review`,props.fact)
   
    return (
      <>
      <div>
    <h3>Title: {props.red.title}</h3>
    <h3>Content: {props.red.text}</h3>
      </div>
      </>
    );
  };

  const mapStateToProps = state => {
    return {
     title: state.favorites.myfavorites,

      loggedInId: state.loginId.idUser
    };
   
  };
  
  export default connect(
    mapStateToProps,
    { null }
  )(Favorites);