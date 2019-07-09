import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'


const Home = () => (


<div>

    <span>
      <h2>Welcome to Our Family!</h2>
      Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </span>


  </div>
)


export default Home;
