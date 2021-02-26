import React, { useEffect } from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import AlbumItem from "./AlbumItem";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Preloader from "../../Features/Preloader";

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
            Альбомы
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {albums.map((album) => (
            <Grid item key={album.id} xs={12} sm={6} md={4}>
              <AlbumItem
                {...album}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Albums;