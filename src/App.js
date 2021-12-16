import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import DisplayGuides from './DisplayGuides';
import DisplayDetails from './DisplayDetails';
import Home from './Home';
import Login from './Login';
import { useState, useEffect } from 'react';

const isLogin =()=> {
  if (localStorage.getItem('flag')) return true;
  return false;
} 


function AuthButton(props) {
  const history = useHistory();
  // const [islog, setIslog] = useState(false)

  // useEffect(() => {
  //   // const user = localStorage.getItem('flag');
  //   // console.log('Name',user);
  //   console.log(user);
  //   if(user) {
  //     setIslog(true)
  //   }else {
  //     setIslog(false)
  //   // }
  // }, [])
  const onSignOut =()=> {
      localStorage.removeItem('flag')
      history.push('/');
      props.onLogOut()
    }

  return (
    props.isLoggedIn ? (
      <div>
        Welcome!{localStorage.getItem('flag')}
        <button
          onClick={onSignOut}
        >
          Sign out
        </button>
      </div>
    ) : (
      <p>You are not logged in.</p>
    ))
}

function PrivateRoute({ children, ...rest }) {

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  const [onLogin, setOnLogin] = useState(false);
  return (
    <>
      <Router>
        <AuthButton isLoggedIn={onLogin} onLogOut={() => setOnLogin(false)}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' >
          <Login loggedIn={() => setOnLogin(true)}/>
          </Route>
          <PrivateRoute exact path='/:cityid/:placeid/:guideid'>
            <DisplayDetails />
          </PrivateRoute>
          <PrivateRoute exact path='/:cityid/:placeid'>
            <DisplayGuides />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
