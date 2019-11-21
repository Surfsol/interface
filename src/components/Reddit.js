import React, { useState } from "react";

import { connect } from 'react-redux'
import {fetchRed} from '../actions/redActions'
import TextField from '@material-ui/core/TextField';
import RedDisplay from "./RedDisplay";



//need to destructure history, so can redirect user to other pages
const Reddit = (props) => {
  const [red, setRed] = useState(
    {
      title: '',
      text: '',
      link: false
    }
  )
 
console.log(`red`, red)
  const handleChange = event => {
    setRed({ ...red, [event.target.name]: event.target.value });
  };


  const handleSubmit = event => {
    event.preventDefault()
    props.fetchRed(red)
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
            name="text"
            label="text"
            type="text"
            id="text"
            autoComplete="current-content"
            value={red.text}
            onChange={handleChange}
          />
        <div>
        <button  type="submit">Get Reddit Data!</button>
        </div>
      </form>
      <RedDisplay red={red}/>
    </div>
    </div>
  )
}

export default connect(
    null,
    {fetchRed}
)(Reddit)