import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './NewsMain.css';

export default class NewsMain extends Component {
  handleImageError = (e) => {
    e.target.src = 'https://placehold.it/600x400/444444/FFFFFF';
  };

  render() {
    let { title, description, imgurl, NewsUrl, date } = this.props;
    return (
      <div className="my-3">
        <div className="card news-card">
          <img
            src={imgurl ? imgurl : "https://placehold.it/600x400/444444/FFFFFF"}
            className="card-img-top"
            alt="News"
            onError={this.handleImageError}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                Updated at <b>{new Date(date).toGMTString()}</b>
              </small>
            </p>
            <a
              rel='noreferrer'
              href={NewsUrl}
              target='_blank'
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
