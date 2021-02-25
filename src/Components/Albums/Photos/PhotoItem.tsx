import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    photoItem: {
      cursor: 'pointer',
    },
    item: {
      textAlign: 'center',
      verticalAlign: 'middle',
    }
}));

const PhotoItem: React.FC = (props: any) => {
    const classes = useStyles();
    return (
    <figure className={classes.item}>
        <img src={props.thumbnailUrl} alt='' className={classes.photoItem} />
        <figcaption>{props.title}</figcaption>
    </figure>
    )
}

export default PhotoItem;