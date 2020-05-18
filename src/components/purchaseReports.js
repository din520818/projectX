import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu'
import MaterialTable from 'material-table';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  table: {
      width: 1000
  }
}));

const options = [
  'Daily',
  'Weekly',
  'Monthly',
  'Yearly',
];

export default function SimpleListMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3">
        Purchase Reports
      </Typography>
      <List component="nav" aria-label="Date Select">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Select report date"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Select report date" secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <div className = {classes.table}>
      <MaterialTable
        title={options[selectedIndex]}
        columns={[
          { title: 'Bill No.', field: 'billNo' },
          { title: 'Date', field: 'date' },
          { title: 'Supplier', field: 'supplier', lookup: { 34: 'Supplier1', 63: 'Supplier2' }},
          {
            title: 'Purchase Amount (Rs.)',
            field: 'amount',
          },
        ]}
        data={[
          { billNo: '1234', date: '2/18/2020', supplier: 34, amount:'11,455' },
          { billNo: '1235', date: '3/18/2020', supplier: 63, amount: '27,246' },
        ]}
      />
      </div>
      <Button className={classes.buttonItem} variant="contained" color="primary">Print</Button>
    </div>
  );
}
