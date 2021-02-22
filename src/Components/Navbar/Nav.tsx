import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles, Paper, Tab, Tabs, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
  root: {
    flexGrow: 1,
  },
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
        <NavLink to="/posts" activeClassName={""}><Tab label="Посты"/></NavLink>
        <NavLink to="/users" activeClassName={""}><Tab label="Пользователи"/></NavLink>
        <NavLink to="/albums" activeClassName={""}><Tab label="Альбомы"/></NavLink>
      </Tabs>
    </Paper>
  )
}
export default NavBar;