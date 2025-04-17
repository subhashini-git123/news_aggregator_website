import React, { useState } from "react";
import Card from "./Card";

const News = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);

  const apiKey = "5ebf4f5a41c74d55be288dcc48792aab";
  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`
    );
    const jsonData = await response.json();

    setNewsData(jsonData.articles);
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <nav>
        <div>
          <h1 className="main_heading">News Buzz</h1>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Here... "
            onChange={handleInput}
          ></input>
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        {/* <Card data={newsData}/>  */}
        {newsData.map((ele) => {
          console.log(ele);
          return (
            <>
              <div className="card col-4 line-1-compo">
                <img
                  src={
                    ele.urlToImage == null
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSI24FqEs8bdQfA1gCZD3Ar2qu8hT_030Vv6YTfAl7HG-8uadoX7Pby2QfKtIdiLPjLY&usqp=CAU"
                      : ele.urlToImage
                  }
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{ele.author}</h5>
                  <p className="card-text">{ele.title}</p>
                  <a href={ele.url} target="_blank" className="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </>
          );
        })}
        
      </div>
    </div>
  );
};

export default News;
