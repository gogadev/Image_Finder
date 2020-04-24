import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/down.png";
import "./img-view.style.css";

const ImgView = (props) => {
  const {
    largeImageURL: image,
    tags,
    user: owner,
    pageURL,
  } = props.location.state.img;

  return (
    <div className="img-view">
      <div className="details">
        <img className="large-img" src={image} alt={tags} />
        <div className="detail">
          <p className="info">&copy;pixabay</p>
          <h4 className="credit">
            Credit: <span>{owner}</span>
          </h4>
          <h4 className="download">
            <strong>Download</strong>
            <div>
              <img className="icon" src={img} alt="" />
            </div>
            <span>
              <a target="_blank" href={pageURL}>
                Go To Download
              </a>
            </span>
          </h4>
          <Link to="/">
            <button className="home">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImgView;
