import React, { Component } from 'react';
import './MovieDetail.css'

class MovieDetail extends Component {
  render() {
    const info = this.props.movie;
    return (
      <div className="detail_page">
          <img className="detail_poster" src={info.poster} alt={info.title} title={info.title} />
          <h1>{info.title}</h1>
          <p className="detail_tags">
              {info.genres.map(tag => <span>{tag}</span>)}
          </p>
          <p className="detail_year">{info.year}</p>
          <div className="detail_summary">
            <p className="tit">Summary</p>
            <p className="txt">{info.summary}</p>
          </div>
      </div>
  );
  }
}

export default MovieDetail