import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export class News extends Component {
  
  articles=[
    {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }
  ]
  constructor(){
     super();
     this.state={
     articles:this.articles
     
     }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3406364a08a44a49948bca24b9604754&page=${this.state.page+1}&pageSize=6`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles,
      loading:false
    })
  }
  handlePrevClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3406364a08a44a49948bca24b9604754&page=${this.state.page-1}&pageSize=6`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false
      })
  }
  handleNextClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3406364a08a44a49948bca24b9604754&page=2&pageSize=6`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
      })
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="my-4" style={{textAlign:'center', border:'80px'}}>A-Z News Top Headlines</h2>
        {this.state.loading && <Spinner/>}

        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0,45):" "} description={element.description ? element.description.slice(0,45): " "} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
          
        </div>

        <div className="container d-flex justify-content-between my-5">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
      </div>

      
    )
  }
}

export default News