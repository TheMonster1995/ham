import React, { createRef, useState, useEffect } from 'react';

import Categories from './Categories';
import Items from './Items';

const Menu = props => {
  const [section, setSection] = useState(null)
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const data = [
      {
        name: 'hot-coffee',
        label: 'قهوه گرم',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      },
      {
        name: 'cold-coffee',
        label: 'قهوه سرد',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      },
      {
        name: 'tea',
        label: 'چای و دمنوش',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      },
      {
        name: 'cake',
        label: 'کیک',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      },
      {
        name: 'cold-drink',
        label: 'نوشیدنی سرد',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      },
      {
        name: 'shake',
        label: 'شیک و اسموتی',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      },
      {
        name: 'appetizer',
        label: 'پیش غذا',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      },
      {
        name: 'meal',
        label: 'غذا',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      },
      {
        name: 'breakfast',
        label: 'صبحانه',
        ref: createRef(null),
        items: [
          {
            name: 'restrito',
            label: 'ریستریتو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'espressp',
            label: 'اسپرسو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'dopio',
            label: 'دوپیو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'longo',
            label: 'لانگو',
            description: 'توضیحات',
            price: '26'
          },
          {
            name: 'americano',
            label: 'آمریکانو',
            description: 'توضیحات',
            price: '26'
          }
        ]
      }
    ]
    setMenu(data);
    setSection(data[0].name)
  }, [])

  return (
    <>
      <Categories data={menu} />
      <Items data={menu} />
    </>
  )
}

export default Menu;
