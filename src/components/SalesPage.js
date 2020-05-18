import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Invoice from './Invoice';
import Quotation from './Quotation';
import SalesReturn from './SalesReturn';
import ProformaInvoice from './ProformaInvoice';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 450,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Invoice" {...a11yProps(0)} />
        <Tab label="Sales Return" {...a11yProps(1)} />
        <Tab label="Pro forma Invoice" {...a11yProps(2)} />
        <Tab label="Quotation" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Invoice/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SalesReturn/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        ProformaInvoice
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Quotation/>
      </TabPanel>
    </div>
  );
}
