import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props)=>{





  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }






  const updateNews = async() => {



    props.setProgress(30)
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    
    setLoading(true)


    let req = new Request(url);

    const response = await fetch(req)
    const parsedData = await response.json()
    
    props.setProgress(50)
    
    // console.log(parsedData)
    
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(70)

  }
  
  
  
  useEffect(() => {
    
    
    
    async function fetchData() {
      await updateNews()
      props.setProgress(100)
    }
    
    document.title = `${capitalizeFirstLetter(props.category)} - HorizonNews`

    fetchData()
    
    
    
     // eslint-disable-next-line react-hooks/exhaustive-deps
  
  },[])
  

  
  useEffect(() => {

    const pageUpdate = async ()=>{
  
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;



    let req = new Request(url);

    const response = await fetch(req)
    const parsedData = await response.json()



    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)

    }

    pageUpdate()

     // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [page])
  


  const fetchMoreData = async () =>{



    setPage(page+1)

    
  }



    return (
      <>

        <h1 className='text-center' style={{marginTop : "5rem"}} >{capitalizeFirstLetter(props.category)} - Top Headlines</h1>







        {loading && <Spinner />}




        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >


        <div className="container">
          <div className="row">

            {articles.map((element) => {


              let { title, description, url, urlToImage } = element


              return <div key={url} className="col-md-6 col-lg-4 mt-3">


                <NewsItem title={title && title.slice(0, 46)} description={description && description.slice(0, 81)} imgUrl={urlToImage ? urlToImage : "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg"} newsUrl={url} date={new Date(element.publishedAt).toGMTString()} author={element.author} source={element.source.name} />



              </div>


})}
          </div>

  </div>

        </InfiniteScroll>













      </>
    )
}


News.defaultProps = {
  country: 'in',
  category: "science",
  apiKey: "830dc516ea424bc1b95e386d1734cc2f",
  pageSize: 9
}


News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  pageSize: PropTypes.number
}






export default News
