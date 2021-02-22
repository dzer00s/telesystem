import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    makeStyles,
    Typography,
    Avatar,
    Theme,
    createStyles,
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardOut: {
      textAlign: "left",
    }
  }));
  
  const Post = (props: any) => {
    const classes = useStyles();
    return (
      <Grid item key={props.id} xs={12} sm={2} md={12}>
        <Card className={classes.cardOut}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                A
              </Avatar>
            }
            title="Камиль"
            subheader="17 Февраля, 2021"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.body}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  export default Post;
  