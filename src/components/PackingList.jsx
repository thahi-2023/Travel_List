
import React from 'react'
import Item from './Item'


//import ReactDOM from 'react-dom/client'

function PackingList({items, onDeleteItem, onToggle}) {
  return (
    <div className='list'>
        <ul>
            {items.map((item) =>(
                <Item item={item} key={item.id} onDeleteItem ={onDeleteItem} onToggle ={onToggle}/>
            )
            )}
        </ul>
    </div>
  )
}

export default PackingList