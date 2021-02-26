import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
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