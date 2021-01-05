import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  // async componentDidMount() {
  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
  //   this.setState({ users: res.data, loading: false })
  // }

    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
          <Alert alert={alert} />
          <Search />
          <Users />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/users/:login' component={User} />
          </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;
