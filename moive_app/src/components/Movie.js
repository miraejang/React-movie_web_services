import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                        id,
                        year,
                        title,
                        summary,
                        poster,
                        genres
                    }
                }}
                className="container"
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <p className="movie__summary">{summary.length > 200 ? summary.slice(0, 200)+'...' : summary}</p>
                    <ul className ="movie__genres">
                        {genres.map((genre, index) => 
                            <li key={index} className="genres__genre">{genre}</li>
                        )}
                    </ul>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
