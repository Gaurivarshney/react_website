import React from 'react'
import Card from './Card'

function Service() {
  
  return (
    <div>
    <div className="container-fluid d-flex align-items-center justify-content-center">
       <div className="row">
           <div className="col-10 mx-auto">
           <div className="row">
            <h1 className='my-3 text-center'>Our Service</h1>
       {
        Card.map((val,idx)=>{
          return(
            <div className="col-md-4 col-10 mx-auto gy-3" id={idx}>
            <div className="card" >
  <img src={val.img} className="card-img-top" alt="..." style={{height:150, width:300}}/>
  <div className="card-body">
    <h5 className="card-title">{val.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Click here</a>
  </div>
</div>
            </div>
          )
        })
       }

           </div>
       
    
         
           </div>
       </div>
    </div>
   </div>
  )
}

export default Service
