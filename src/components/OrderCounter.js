import React, { useState } from 'react';

import './orderCounter.css';

const OrderCounter = ({onIncrease, onDecrease, count}) => {
  const renderCounter = () => {
    return (
      <>
        <button type="button" className='counter-delete-btn btn btn-light rounded-0 p-0' onClick={onDecrease}><i className='bi bi-dash'></i></button>
        <span className={count === 0 ? 'add-btn text-center pt-1 rounded-top w-100' : 'count pt-1'} onClick={onIncrease}>{count === 0 ? 'افزودن' : count}</span>
        <button type="button" className='counter-add-btn btn btn-light rounded-0 p-0' onClick={onIncrease}><i className='bi bi-plus'></i></button>
      </>
    )
  }

  return (
    <div className='counter-parent d-flex flex-column justify-content-end'>
      <div className={`counter-content mx-auto rounded-top d-flex justify-content-between ${count === 0 ? 'close' : 'open'}`}>
        {renderCounter()}
      </div>
    </div>
  )
}

export default OrderCounter;
