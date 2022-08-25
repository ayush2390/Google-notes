import React, { useState } from 'react'

function CreateArea({onAdd}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setNote((preValue) =>{
            return {
                ...preValue,
                [name]:value
            }
        })
      //  console.log(name, value)
    }

    const handleExpanded = () =>{
        setIsExpanded(true)
    }

    const handleSubmit = (e)=>{
      onAdd(note)
        setNote({
            title: "",
            content: "",
        });
        e.preventDefault()
    }
    //console.log(note)
  return (
    <div>
      <form>
        {isExpanded && 
        <input type='text' placeholder='Title' value={note.title} name='title' onChange={handleChange}/>
        }
        <p>
        <textarea name='content' onClick={handleExpanded} onChange={handleChange} rows = {isExpanded ? 3:1} placeholder='Write note..'></textarea>
        </p>
        <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  )
}

export default CreateArea
