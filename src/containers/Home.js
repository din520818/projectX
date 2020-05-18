import React from 'react'
import {Grid} from '@material-ui/core'
import MainPanel from '../components/MainPanel'
import SidePanel from '../components/SidePanel'
import AppBar from '../components/Appbar'
import {CartProvider} from '../components/cartContext';

// function handleClick(event, rowData) {
//     return (
//         setData({
//             item:rowData.item,
//             price:rowData.price
//         })
//     )
// }

export default function Home() {
    
    return (
        <CartProvider>
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <SidePanel/>
                    </Grid>
                    <Grid item xs={8}>
                        <MainPanel/>
                    </Grid>
                </Grid>
            </div>
        </CartProvider>
    )
}