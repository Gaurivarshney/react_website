import React from 'react'
// import web from 'https://pngimg.com/uploads/computer_pc/computer_pc_PNG7719.png';
import Common from './Common';

function Home() {
  return (
    <div>
     <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
            <Common title="Grow Your Business From"
                button="Get More"
                main="React Website"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates?"
                link="/service"
                image='https://pngimg.com/uploads/computer_pc/computer_pc_PNG7719.png'
            />
            </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Home
