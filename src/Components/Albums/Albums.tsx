import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
// import AlbumItem from "./AlbumItem";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const api1 = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Albums: React.FC = () => {
  const classes = useStyles();
  const {albums, error, loading} = useTypedSelector(state => state.albums)
  const {fetchAlbums} = useActions()
  useEffect(() => {
    fetchAlbums();
  }, []);

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
            Альбомы
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {albums.map((album) => (
            <Grid item key={album.id} xs={12} sm={6} md={4}>
              {/* <AlbumItem
                key={album.id}
                id={album.id}
                title={album.title}
                username={album.username}
              /> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Albums;