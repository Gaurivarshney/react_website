import React from 'react'
import { Route,Switch, Redirect} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Menu from './Menu'
import Service from './Service'
import Footer from './Footer'

function App() {
 
 
  return (
    <div>
    <Menu/>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact  path="/contact" component={Contact} />
      <Route exact path="/service" component={Service}/>
      <Redirect exact path="/"/>
    </Switch>
    <Footer/>


    {/* <About/>
    <Contact/> */}

      
    </div>
  )
}

export default App


