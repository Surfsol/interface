import React, { useState } from "react";

import { connect } from 'react-redux'
import {fetchRed} from '../actions/redActions'
import TextField from '@material-ui/core/TextField';



//need to destructure history, so can redirect user to other pages
const Reddit = (props) => {
  const [red, setRed] = useState(
    {
      title: '',
      content: ''
    }
  )
 
console.log(`red`, red)
  const handleChange = event => {
    setRed({ ...red, [event.target.name]: event.target.value });
  };


  const handleSubmit = event => {
    event.preventDefault()
    props.fetchRed()
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
        <button  type="submit">Get Reddit Data!</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default connect(
    null,
    {fetchRed}
)(Reddit)