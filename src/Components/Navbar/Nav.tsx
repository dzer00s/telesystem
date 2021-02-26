import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles, Paper, Tab, Tabs, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  active: {
    color: 'brown',
  }
}))

const NavBar = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <NavLink to="/posts" activeClassName={classes.active}><Tab label="Посты"/></NavLink>
        <NavLink to="/users" activeClassName={classes.active}><Tab label="Пользователи"/></NavLink>
        <NavLink to="/albums" activeClassName={classes.active}><Tab label="Альбомы"/></NavLink>
      </Tabs>
    </Paper>
  )
}
export default NavBar;