import React from 'react';
import Playlist from '../../playlist/components/playlist.js';
import './category.css';

function Category(props) {
  return (
    <div>
      <p>{props.description}</p>
      <h2>{props.title}</h2>
      <Playlist 
        handleOpenModal={props.handleOpenModal}
        playlist={props.playlist}
      />
    </div>
  )
}

export default Category;