import React from 'react'

const ItemGrid = ({ items }) => {

  let key = 0
  
  return (
    <div style={{ textAlign: 'center' }}>
      {items.map(item => (
          <h1 key={key++}>{item.name} {item.title}</h1> //I dont know why this works but it does...
        ))}
    </div>
  )
}

export default ItemGrid
