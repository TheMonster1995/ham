import React, { useState } from 'react';

import OrderCounter from './OrderCounter';

import './item.css';

const Item = props => {
  const [count, setCount] = useState(0);

  const renderContent = () => {
    if (!props.item) return null;

    const addItem = () => {
      setCount(count + 1);
      //add item to order list
      return null;
    }

    const removeItem = () => {
      setCount(Math.max(0, count - 1));
      //remove item from order list
      return null
    }

    return (
      <>
        <div className='item-img-div'></div>
        <OrderCounter
          onIncrease={addItem}
          onDecrease={removeItem}
          count={count}
        />
        <div className='pe-3 pt-2'>
          <h6 className='item-title'>{props.item.label}</h6>
          <p className='small text-muted item-description'>{props.item.description}</p>
          <h6 className='item-price' dir="rtl">
            {props.item.price},
            <span className='t-label'>000</span>
            <span className='t-label px-1'>تومان</span>
          </h6>
        </div>
      </>
    )
  }

  return (
    <li className='d-flex justify-content-between flex-nowrap position-relative pb-2 p-0 border-bottom'>
      {renderContent()}
    </li>
  )
}

export default Item;
