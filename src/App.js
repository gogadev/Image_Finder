import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import ImgSearch from "./components/img-search/ImgSearch";
import ImgList from "./components/imgs-list/ImgsList";

import "./App.css";

class App extends Component {
  state = {
    imgs: [],
    error: null,
  };

  getData = async (e) => {
    e.preventDefault();

    const searchTerm = e.target.elements.searchValue.value;
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}&per_page=10&image_type=photo`;
    const request = await fetch(url);
    const response = await request.json();
    this.setState({ imgs: response.hits });
    console.log(this.state.imgs);
    if (!searchTerm) {
      this.setState({ error: "Please Provide A Value" });
    } else {
      this.setState({ imgs: response.hits, error: null });
    }
  };

  render() {
    const { imgs } = this.state;
    return (
      <div>
        <Navbar />
        <ImgSearch getImgs={this.getData} />
        {this.state.error !== null ? (
          <div className="title">{this.state.error}</div>
        ) : (
          <ImgList imgs={imgs} />
        )}
      </div>
    );
  }
}

export default App;
