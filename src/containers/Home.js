import React from 'react'
import {Grid} from '@material-ui/core'
import MainPanel from '../components/MainPanel'
import SidePanel from '../components/SidePanel'
import AppDrawer from '../components/Appbar'

export default function Home() {
    return (
        <div>
            <AppDrawer/>
            <Grid container>
                <Grid item xs={4}>
                    <SidePanel/>
                </Grid>
                <Grid item xs={8}>
                    <MainPanel/>
                </Grid>
            </Grid>
        </div>
    )
}