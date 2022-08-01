import React from 'react'

const Filter = (props) => { 
  return (
    <div>
        <input 
        onChange={props.changeName}
        value={props.filterName}
        placeholder='Busca'
        />
    </div>
  )
}

export default Filter