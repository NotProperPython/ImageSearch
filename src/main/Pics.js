import React from "react";
import SearchBar from "../components/SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "../components/ImageList";

class Pics extends React.Component {
  state = { images: [] };
  onSearchSubmit = (term) => {
    unsplash
      .get("/search/photos", {
        params: {
          query: term,
        },
      })
      .then((res) => {
        this.setState({ images: res.data.results });
      });
  };
  render() {
    const style = { marginTop: "10px" };
    return (
      <div className="ui container" style={style}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default Pics;
