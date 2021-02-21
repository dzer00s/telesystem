import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  icon: {
    marginRight: theme.spacing(2),
  },
}))

const Header = () => {
  const classes = useStyles();
  return (
  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Tele System
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
export default Header;