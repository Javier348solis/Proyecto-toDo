import React from 'react'

export default function EstructuraList({Boton}) {
  return (
<div className=''>
<form>
    
      <input className='spacetask' type="text"/>
      <button className='boton1' onClick={Boton}>Add task</button>
      <section className='squad'></section>
    </form>
    <div>
    <input className='Counter' type="number" />
    <p>No tasks added</p>
    </div>
</div>
  )
}


