/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import moviesData from '/Users/karthikrao/Desktop/movies-app/src/common/Data/moviesData.js';
import {Link} from "react-router-dom";

export default function TitlebarImageList() {
  var detailLink = "/detail/"+"M2";
  return (
    <article className="home-component-banner">
    <div className="component-heading-home">
    <h1>Upcoming Movies</h1>
    </div>  
    <ImageList sx={{ width: '100%', height: 230 } }>
      {moviesData.map((movie) => (
        <Link className="detail-linker" to={detailLink} key={movie.id} id={movie.id}>
        <ImageListItem key={movie.img} rows={1}>
        <img
            src={`${movie.poster_url}?w=248&fit=crop&auto=format`}
            srcSet={`${movie.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={movie.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={movie.title}
          />
        </ImageListItem>
        </Link>
      ))}
    </ImageList>
    </article>
  );
}

