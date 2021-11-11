import React from "react";

const NewsItem = (props) => {
  return (
    <div className="my-2">
      <div className="card">
        <img
          src={props.imageUrl} className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{props.title} <span className="badge bg-warning text-dark"> {props.source} </span> </h5>
          <p className="card-text">{props.description} </p>
          <p className="card-text"> <small className="text-muted"> Published By {props.author? props.author: "Unknown"} on {new Date(props.date).toGMTString()} </small></p>
          <a href={props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem
