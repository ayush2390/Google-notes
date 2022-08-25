import React from 'react'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
//import Button from '@mui/material'


function Note({title, content, id, onDelete}) {
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() =>onDelete(id)}><DeleteOutlineIcon /></button>
    </div>
  )
}

export default Note
