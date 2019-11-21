import React, { useState } from "react";

import { connect } from 'react-redux'
import {fetchFav} from '../actions/redActions'
import TextField from '@material-ui/core/TextField';
import RedDisplay from "./RedDisplay";



//need to destructure history, so can redirect user to other pages
const Favorites = (props) => {
  const [fav, setFav] = useState(
    {
      title: '',
      content: '',
      link: false,
      user_id: 1
    }
  )
 
console.log(`red`, red)
  const handleChange = event => {
    setRed({ ...red, [event.target.name]: event.target.value });
  };


  const handleSubmit = event => {
    event.preventDefault()
    props.fetchFav(fav)
  }


      

  return (
    <div>
      <div className='backgroundR'></div>
      <div className='content'> 
      <h1>Get Reddit Data</h1>
      <form onSubmit={handleSubmit}>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="title"
            name="title"
            autoComplete="title"
            value={red.title}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="content"
            label="content"
            type="content"
            id="content"
            autoComplete="current-content"
            value={red.content}
            onChange={handleChange}
          />
        <div>
        <button  type="submit">Save as Favorite!</button>
        </div>
      </form>
      
    </div>
    </div>
  )
}

export default connect(
    null,
    {fetchFav}
)(Favorites)