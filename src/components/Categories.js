import React, { useEffect, useRef, createRef } from 'react';

import './categories.css';

const Categories = props => {
  const renderCategories = () => {
    return (
      <ul className='list-unstyled p-0 categories' dir='rtl'>
        {props.data.map((item, i) => renderCategoryItem(item, i))}
      </ul>
    )
  }

  const renderCategoryItem = (item, i) => (
    <li className='category-item category' key={i}>
      <button type='button' className='btn py-1 px-2 mx-1 rounded-pill category'>
        {item.label}
      </button>
    </li>
  )

  return <>{renderCategories()}</>
}

export default Categories;
