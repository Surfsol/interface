import React from 'react'

const Cards = (props) => {
    console.log(props)
    return(
        <>
<h2>Name: {props.items.name}</h2>
        </>
    )
}
export default Cards