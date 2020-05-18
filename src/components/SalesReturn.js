import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
          { title: 'Discount(%)', field: 'discount' },
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
        title="Sales Return"
        columns={[
          { title: 'Date of Return', field: 'dateOfReturn' },
          { title: 'Date of Purchase', field: 'dateOfPurchase' },
          { title: 'Client Name', field: 'clientName'},
          { title: 'Address', field: 'address'}
        ]}
        data={[
          { dateOfReturn: '5/15/2020', date: '4/15/2020', clientName: 'Safal Bastola', amount:'1,111' },
          { dateOfReturn: '6/15/2020', date: '5/15/2020', clientName: 'Dinesh Bhusal', amount:'2,452' },
        ]}        
        actions={[
          {
            icon: 'add',
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: (event) => handleClickOpen()
          }
        ]}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Invoice</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="dateOfReturn"
            label="Date of Return"
          />
          <TextField
            autoFocus
            margin="dense"
            id="dateOfPurchase"
            label="Date of Purchase"
          />
          <TextField
            autoFocus
            margin="dense"
            id="clientName"
            label="Client Name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="contactNo"
            label="Contact No."
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
