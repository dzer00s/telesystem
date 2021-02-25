import { Component } from "react";
import { Link } from "react-router-dom";
import s from "./Photos.module.css";
import axios from "axios";
import PhotoItem from "./PhotoItem";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

type PhotosState = {
    album: any,
    user: any,
    photos: any[],
    posts: any[],
    loading: boolean,
}
type PhotosProps = {
  readonly match?: any
}

class Photos extends Component<PhotosProps, PhotosState> {
  constructor(props: PhotosProps) {
    super(props);
    const {match} = this.props;

    this.state = {
      album: {
        id: match.params.id,
        title: null,
      },
      user: {
        id: null,
        name: null,
        email: null,
        phone: null,
        website: null,
      },
      photos: [],
      posts: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });

    const album = await this.getAlbum(this.state.album.id);
    const { userId, id, title } = album;

    const albumState = { id, title };

    const user = await this.getUser(userId);

    const { name, email, phone, website } = user;

    const userState = { id: userId, name, email, phone, website };

    const photos = await this.getAlbumPhotos(id);
    const posts = await this.getUserPosts(userId);

    this.setState({
      album: albumState,
      user: userState,
      photos,
      posts,
      loading: false,
    });
  }

  getAlbum = async (id: number) => {
    const album = await api.get(`albums/${id}`);
    return album.data;
  };

  getUser = async (id: number) => {
    const user = await api.get(`users/${id}`);
    return user.data;
  };

  getAlbumPhotos = async (albumId: number) => {
    const photos = await api.get(`photos?albumId=${albumId}`);
    return photos.data;
  };

  getUserPosts = async (userId: number) => {
    const posts = await api.get(`posts?userId=${userId}&_limit=2`);
    return posts.data;
  };

  render() {
    return (
      <main>
        <div className={s.titleBar}>
          <h1 className={s.heading1}>Альбом: {this.state.album.title}</h1>
          <Link className={s.closeBtn} to="/Albums">
            Перейти к Альбомам
          </Link>
        </div>
        <div className={s.photosPage}>
          {this.state.photos.map(photo => (
          <PhotoItem key={photo.id} {...photo} />
          ))}
        </div>
      </main>
    );
  }
}

export default Photos;
