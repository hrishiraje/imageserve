import React from 'react';

var ImageList = (props) => (
  <table>
    <tr>
      {props.images.map((imageEntry) => <ImageListEntry image={imageEntry} clickedImage={props.imageClick} />)}
    </tr>
  </table>
);