import React, { useState } from 'react';

import Item from './Item';

import './items.css'

const Items = props => {
  const renderCat = cat => (
    <>
      <h5 className='px-2 py-2'>{cat.label}</h5>
      {renderItems(cat.items)}
    </>
  )

  const renderItems = items => items.map(item => <Item item={item} />)

  const renderCats = () => {
    return props.data.map(cat => renderCat(cat))
  }

  return (
    <ul className="list-unstyled text-end menu-items">
      {renderCats()}
    </ul>
  )
}

export default Items;
