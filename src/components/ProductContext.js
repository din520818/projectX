import React,{useState, useEffect, createContext} from 'react'

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(async () => {
        const response = await fetch('https://my-json-server.typicode.com/Safal479/JSONplaceholder/products')
        const data = await response.json()
        setProducts(data)
    },[])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}