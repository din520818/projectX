import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from 'material-table';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    input: {
      '& > *': {
        marginBottom: theme.spacing(2),
        width: '50ch'
      },
    },
    root: {
        margin: theme.spacing(2),
    },
    buttons: {
        marginTop: '10px'
    },
    buttonItem: {
        marginRight: '8px'
    }
  }));
  
export default function SidePanel() {
const classes = useStyles();

return (
    <div className={classes.root}>
        <form className={classes.input} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Enter bar code" variant="outlined" />
        </form>
        <Table
          columns={[
            { title: "#", field: "itemNo", type: "numeric", width: "12px" },
            { title: "Item", field: "item" },
            { title: "Quantity", field: "quantity", type: "numeric" },
            {
              title: "Price",
              field: "price",
              type: "numeric"
            }
          ]}
          data={[
            { itemNo: 1, item: "Coke", quantity: 7, price: 550 },
            { itemNo: 2, item: "Apple", quantity: 15, price: 200 }
          ]}
          title="Items"
        />
        <div className={classes.buttons}>
            <Button className={classes.buttonItem} variant="contained">Print</Button>
            <Button className={classes.buttonItem} variant="contained" color="primary">Pay</Button>
        </div>
    </div>
);
}