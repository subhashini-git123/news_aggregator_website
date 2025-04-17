import React from 'react'

const Card = ({data}) => {
  
    console.log("Data prop:", data);
    console.log("Type of data prop:", typeof data);
    
    return (
    
        <div className="section1-content">
            {/* <h1>Card</h1> */}

        {/* {data.map((ele) => {
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
        })} */}
      </div>
    )
}

export default Card
