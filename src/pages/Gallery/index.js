import React from "react";
import { connect } from "react-redux";

import "./style.scss";

import { getPictures } from "../../actions/GalleryActions";

class GalleryPage extends React.Component {
  componentDidMount() {
    this.props.getPictures();
  }

  render() {
    const { pics } = this.props;

    return (
      <main className="main">
        <h1 className="gallery__header">Новости</h1>
        <div className="gallery__pictures-wrapper">
          {pics.map((pic, index) => (
            <img
              src={pic}
              key={index}
              alt={`gallery_${index}`}
              className="gallery__picture"
            />
          ))}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    pics: store.gallery.pics,
  };
};

const mapDispatchToProps = {
  getPictures: getPictures,
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
