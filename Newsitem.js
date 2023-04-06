import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,url,author,date,source}=this.props;
    return (
      <div>
        <div className="card" >
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" 
    style={{left:'10%',zIndex:'2'}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
  <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/06/Exam-1-770x433.jpg":imageUrl} class="card-img-top" alt="..."/>

  <div className="card-body"><span class="badge bg-success">New</span>
    <h5 className="card-title">{title}</h5>
    
    <p className="card-text">{description}</p>
    <a href={url} class="btn btn-dark">Read Full News</a>
    <p className="card-text my-3"><small className="text-muted">By {!author? "Unknown":author} Last updated at {date}</small></p>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem