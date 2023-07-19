import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Common(props) {
  return (
    <div>
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-0 d-flex align-items-center justify-content-center flex-column ">
                <h1 className='my-3 ' >{props.title}<br />
                <span style={{color: 'purple'}}> {props.main}</span>
                </h1>
                <h5 className='my-3 '>{props.content}</h5>
                <NavLink to={props.link} className="btn"><Button variant="contained" className='my-3 '>{props.button}</Button></NavLink>
            </div>
            <div className="col-lg-6  order-1 order-lg-2 animated
            ">
               <img src={props.image} alt="Computer_img" />
            </div>
            </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Common
