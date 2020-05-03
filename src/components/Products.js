import React from 'react'
import Table from "material-table"

export default function Products() {
  return (
    <div style={{ maxWidth: "100%" }}>
        <Table
          columns={[
            { title: "#", field: "itemNo", type: "numeric" },
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