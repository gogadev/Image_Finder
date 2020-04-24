import React from "react";
import "./img-search.style.css";

const ImgSearch = ({ getImgs}) => {

  return <div className="search">
    <form onSubmit={getImgs} className="form">
      <input type="search" 
        name="searchValue"        
        placeholder="Search For Images"
      />
      <button className="btn" type="submit">Search</button>
    </form>
  </div>;
};

export default ImgSearch;
