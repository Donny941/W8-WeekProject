import { Component } from "react";
import { PlayCircleFill } from "react-bootstrap-icons";

class FilmBio extends Component {
  state = {
    film: [],
  };

  filmLoad = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${this.props.idFilm}&apikey=608961b1`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ film: data });
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = () => {
    this.filmLoad();
  };
  render() {
    return (
      <div className="p-2 z-2 bg-netflixbg w-100 d-flex flex-column justify-content-between border border-start-0 border-3 rounded">
        <div>
          <h5 style={{ width: "200px" }}>{this.state.film.Title}</h5>
          <p>Year: {this.state.film.Year}</p>
          <p className="desc-cut">{this.state.film.Plot}</p>
        </div>
        <div className="d-flex justify-content-end">
          <PlayCircleFill className="fs-2 me-3 " />
        </div>
      </div>
    );
  }
}
export default FilmBio;
