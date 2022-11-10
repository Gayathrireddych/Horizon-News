import React from 'react'

const NewsItem = (props)=>{


  // constructor(){
  //   super()
  //   console.log("construtor called in news items")
  // }





    let { title, description, imgUrl, newsUrl, date, author,source } =props


    return (



      <div>
        <div className="card">
        <span className="badge rounded-pill bg-danger"  >{source}</span>
          <img src={imgUrl} className="card-img-top img-thumbnail" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">by {!author ? "unknown" : author} on {date}</small></p>
            <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
            
          </div>
        </div>

      </div>

    )
}

export default NewsItem
