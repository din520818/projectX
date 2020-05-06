import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {APIURL} from '../config/CONFIG.json';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`${APIURL}/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
  },[])

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>
  return (
    <div>
    {categories.map((category, i) => {
      return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {category.name}
          </Typography>
          <Typography variant="body2" component="p">
            {category.number}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See items</Button>
        </CardActions>
      </Card>
      )})}
    </div>
  )
}