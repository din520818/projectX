import React, {useContext} from 'react'
import Table from "material-table"
import AddIcon from '@material-ui/icons/Add'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import SearchIcon from '@material-ui/icons/Search'
import {CartContext} from './cartContext';

export default function Products() {
  const [cart, setCart] = useContext(CartContext)
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
              onClick: (event, rowData) => setCart([...cart, {item:rowData.item, price:rowData.price, quantity: 1}])
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
          data={[
            { itemNo: 1, item: "Cake", price: 550, stock: 79 },
            { itemNo: 2, item: "Icecream", price: 85, stock: 43 },
            { itemNo: 3, item: "Coke", price: 50, stock: 88 },
            { itemNo: 4, item: "Apple", price: 25, stock: 656 },
            { itemNo: 5, item: "Frooti", price: 55, stock: 66 }
          ]}
          title="All products"
        />
    </div>
  )
}