import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Products from './Products';
import Staff from './Staff';
import Categories from './Categories';
import Transactions from './Transactions';
import { Paper } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ListIcon from '@material-ui/icons/List'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import PeopleIcon from '@material-ui/icons/People'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2)
  },
}));

export default function MainPanel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Tabs"
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary">
          <Tab icon={<ShoppingCartIcon/>} label="Products" {...a11yProps(0)} />
          <Tab icon={<ListIcon/>} label="Categories" {...a11yProps(1)} />
          <Tab icon={<CompareArrowsIcon/>} label="Transactions" {...a11yProps(2)} />
          <Tab icon={<PeopleIcon/>} label="Staff" {...a11yProps(3)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Products/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Categories/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Transactions/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Staff/>
      </TabPanel>
    </div>
  );
}
