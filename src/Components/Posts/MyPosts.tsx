import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Post from "./Post";
import Button from "@material-ui/core/Button";
import { Container, Typography } from "@material-ui/core";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  ButtonMarginTop: {
    marginTop: 50,
  }
}));


const MyPosts: React.FC = () => {
  const classes = useStyles();
  const {posts, error, loading} = useTypedSelector(state => state.posts)
  const {fetchPosts} = useActions()

  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) {
      return <h1>loading ...</h1>
  }
  if (error) {
      return <h1>{error}</h1>
  }

  
  // const [bodyField, setField] = useState(undefined);

  // let addNewPost = () => {
  //   props.AddPost(bodyField);
  //   setField("");
  // };

  // const handleChange = (event: any) => {
  //   setField(event.target.value);
  // }

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
            Посты
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {posts.map((p) => (
            <Post message={p.title} body={p.body} />
          ))}
        </Grid>
        <Grid container spacing={4} justify="center" alignItems="center" className={classes.ButtonMarginTop} >
            <form>
              {/* <label> */}
                {/* Добавить пост */}
                {/* <input type="text" value={bodyField} onChange={handleChange}></input> */}
              {/* </label> */}
              <Button variant="contained" color="primary">Добавить пост</Button>
            </form>
        </Grid>
      </Container>
    </main>
  );
};

export default MyPosts;
