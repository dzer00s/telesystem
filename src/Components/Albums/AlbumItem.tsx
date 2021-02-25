import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import ImgAlbum from "../../assets/images/book.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
}));

const AlbumItem: React.FC = (props: any) => {
  const classes = useStyles();
  return (
    <Link to={`/albums/${props.id}`}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={ImgAlbum}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography>Автор: {props.username}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AlbumItem;
