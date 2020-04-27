import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    padding: '2rem',
  },
});

export const JKPCard = ({ children, ...props }) => {
  const classes = useStyles();
  return <Card className={classes.root} {...props} >{children}</Card>;
}
export const JKPPaper =({ children, ...props }) => {
  const classes = useStyles();
  return <Paper className={classes.root} {...props} >{children}</Paper>;
}