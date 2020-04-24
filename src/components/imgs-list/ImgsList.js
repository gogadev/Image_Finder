import React from "react";
import { Link } from "react-router-dom";

import "./imgs-list.style.css";

const ImgList = ({ imgs }) => {
  return (
    <div className="img-list">
      <div className="list">
        {imgs &&
          imgs.map((img) => {
            return (
              <div key={img.id}>
                <img
                  className="preview"
                  src={img.largeImageURL}
                  alt={img.tags}
                />
                <Link
                  to={{
                    pathname: `/image/${img.id}`,
                    state: { img },
                  }}
                >
                  <button className="view">View</button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImgList;
