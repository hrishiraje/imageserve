import React from 'react';

class ImageListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    var imageItemClicked = (image) => {
      this.props.clickedImage(image);
    }

    return (
      <td onClick={imageItemClicked.bind(this, this.props.image)}>{this.props.image.title}</td>
    )


  }

}