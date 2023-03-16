import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
     let {title, description }= this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem;"}}>
         <img src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0125%2Fr1122112_1296x729_16%2D9.jpg" class="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{description}</p>
        <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
      
    )
  }
}

export default NewsItem