import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    root: {
      width: 1000,
    }
  });

export default function FreeAction() {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        columns: [
          { title: 'Item', field: 'item' },
          { title: 'Quantity', field: 'quantity' },
          {
            title: 'Price',
            field: 'price',
          },
        ],
        data: [
        ],
      });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    const classes = useStyles()
    return (
        <div className={classes.root}>
      <MaterialTable
        title="Purchase Return"
        columns={[
          { title: 'Bill No.', field: 'billNo' },
          { title: 'Purchase Date', field: 'purchaseDate' },
          { title: 'Return Date', field: 'returnDate' },
          { title: 'Supplier', field: 'supplier', lookup: { 34: 'Supplier1', 63: 'Supplier2' }},
          {
            title: 'Purchase Amount (Rs.)',
            field: 'amount',
          },
        ]}
        data={[
          { billNo: '1', date: '2/18/2020', supplier: 34, amount:'555' },
          { billNo: '2', date: '3/18/2020', supplier: 63, amount: '245' },
        ]}        
        actions={[
          {
            icon: 'add',
            tooltip: 'Add',
            isFreeAction: true,
            onClick: (event) => handleClickOpen()
          }
        ]}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Purchase Bill</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="billNo"
            label="Bill No"
          />
          <TextField
            autoFocus
            margin="dense"
            id="purchaseDate"
            label="Purchase Date"
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="returnDate"
            label="Return Date"
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="supplier"
            label="Supplier"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="shippingCost"
            label="Shipping Cost (Rs)"
          />
          <MaterialTable
            title="Items"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                    });
                    }, 600);
                }),
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    if (oldData) {
                        setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                        });
                    }
                    }, 600);
                }),
                onRowDelete: (oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                    });
                    }, 600);
                }),
            }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
  }
