import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function Login(props) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: "/" } };

  console.log(from.pathname);

  const handleUsername = e => {
    setUser(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  // LOGIN SUCCESS
  const handleSubmit =e=> {
    e.preventDefault();
    if(user === 'suman' && password === '12345') {
      localStorage.setItem('flag', user)
      console.log(from);
      history.replace(from)
      props.loggedIn()
  }}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">Username</label>
      <input type="text" id='user' onChange={handleUsername} />
      <label htmlFor="password">Password</label>
      <input type="password" id='password' onChange={handlePassword} />
      <button type="submit">Login In</button>
    </form>
  )
}

export default Login
