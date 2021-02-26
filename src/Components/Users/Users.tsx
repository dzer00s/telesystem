import { Card, CardMedia, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import userPhoto from '../../assets/images/icon_user.png';
import Preloader from '../../Features/Preloader';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "100%",
    },
    cardContent: {
      flexGrow: 1,
    }
  }));

const Users: React.FC = () => {
    const classes = useStyles();
    const {users, error, loading} = useTypedSelector(state => state.users)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])
    if (loading) {
        return <Preloader/>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Пользователи
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4}>
            {users.map((u) => (
              <Grid item key={u} xs={12} sm={2} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={userPhoto}
                    title={'Телефон: ' + u.phone}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                      {u.name}
                    </Typography>
                    <Typography>{u.username}</Typography>
                    <Typography>email: {u.email}</Typography>
                    <hr/>
                    <Typography>Адрес проживания:</Typography>
                    <Typography>Город: {u.address.city}</Typography>
                    <Typography>Улица: {u.address.street}</Typography>
  
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    );
};

export default Users;