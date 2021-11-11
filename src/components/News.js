import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews()
    // eslint-disable-next-line
  },[])

 
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${
      props.apiKey
    }&category=${props.category}&country=${props.country}&pageSize=${
      props.pageSize
    }&page=${page+1}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults);
  }

  const updateNews = async () => {
    props.setProgress(10);
    console.log('Page Size='+props.pageSize)
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${
      props.apiKey
    }&category=${props.category}&country=${props.country}&pageSize=${
      props.pageSize
    }&page=${page}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setLoading(false)
    setTotalResults(parsedData.totalResults);
    props.setProgress(100)
  }

  /*
  const handlePreviousClick = async () => {
    setPage(page+1)
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page-1)
    updateNews();
  };
  */

  return (
    <>
      <h1 className="text-center" style={{margin:"90px 0px 35px 0px"}}>MonkeyNews - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
      <div className="container">
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      </div>
      </InfiniteScroll>
      {/* {
        !loading && <div className="d-flex justify-content-between">
        <button
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={handlePreviousClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={
            page + 1 >
            Math.ceil(totalResults / props.pageSize)
          }
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
        </div>
      } */}
    </> 
  );
}

export default News;