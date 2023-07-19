import React from 'react'

import Common from './Common';

function About() {
  return (
    <div>
     <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
            <Common title="I am a Web Developer "
                button="Contact Me"
                main="Gauri Varshney"
                content="I have Created this Website, this webpage is a single page application made by React"
                link="/contact"
                image="https://th.bing.com/th/id/OIP.IW_ZHhgytBOebEZpEwuyqwHaFG?w=271&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            />
            </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default About
