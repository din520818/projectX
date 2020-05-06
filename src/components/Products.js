import React, {useState, useContext, useEffect} from 'react'
import Table from "material-table"
import AddIcon from '@material-ui/icons/Add'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import SearchIcon from '@material-ui/icons/Search'
import {CartContext} from './cartContext'
import {APIURL} from '../config/CONFIG.json';

export default function Products() {
  const [cart, setCart] = useContext(CartContext)
  // const [products, setProducts] = useContext(ProductContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${APIURL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

  function qcheck(rowitem) {
    const qvalue = cart.filter(item => item.item == rowitem.item)
    if (qvalue.length == 0) {
      setCart([
        ...cart,
        {
          item:rowitem.item,
          price:rowitem.price,
          quantity:1
        }
      ])
    }
    else {
      setCart([
      ])
    }
  }

  return (
    <div style={{ maxWidth: "100%" }}>
        <Table
          icons={{ 
            Add: AddIcon,
            ClearAll: ClearAllIcon,
            FirstPage: FirstPageIcon,
            LastPage: LastPageIcon,
            NextPage: ChevronRightIcon,
            PreviousPage: ChevronLeftIcon,
            Search: SearchIcon,
          }}
          actions={[
            {
              icon: '+',
              tooltip: 'Add Item',
              onClick: (event, rowData) => qcheck(rowData)
            }
          ]}
          columns={[
            { title: "#", field: "itemNo", type: "numeric", width:"15px" },
            { title: "Item", field: "item" },
            { title: "Price", field: "price", type: "numeric" },
            {
              title: "Stock",
              field: "stock"
            }
          ]}
          data={
            products.map(product => (
              {
                itemNo: 1,
                item: product.item,
                price: product.price,
                stock: product.stock
              }
            ))
          }
          title="All products"
        />
    </div>
  )
}