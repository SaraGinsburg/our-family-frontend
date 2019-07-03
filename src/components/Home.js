import React from 'react'
import Login from './Login'
import Logout from './Logout'
import Signup from './Signup'
import { Link } from 'react-router-dom'


const Home = () => (
  <div>

    <h2>Welcome to Our Family!</h2>
    Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>

  </div>
)


export default Home;
