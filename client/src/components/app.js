var React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: this.props.images,
      selectedImage: null
    };
  }

  imageClick(video) {
    console.log('I was clicked');
  }

  render() {
    console.log('Im rendering');
    return (
      <div>
        <ImageList images={this.state.imageList}/>
        <DisplayedImage image={this.state.selectedImage} />
      </div>
    );
  }

}

module.exports.App = App;