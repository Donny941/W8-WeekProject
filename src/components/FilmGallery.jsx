import { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

class FilmGallery extends Component {
  state = {
    films: [],
  };
  filmLoad = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${this.props.listFilms}&apikey=608961b1`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ films: data.Search });
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.filmLoad();
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 7,
      speed: 500,
    };
    return (
      <Container className="mt-4">
        <h3 className="mb-3">{this.props.galleryTitle}</h3>
        <div className="slider-container">
          <Slider {...settings}>
            {this.state.films.map((film) => (
              <div key={film.imdbID}>
                <img src={film.Poster} alt="film" style={{ width: "95%", height: "300px", aspectRatio: "1/1", objectFit: "cover", margin: "0 8px" }} />
              </div>
            ))}

            {/* <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
          </Slider>
        </div>
      </Container>
    );
  }
}

export default FilmGallery;
