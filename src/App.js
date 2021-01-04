import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import GithubState from './context/github/GithubState';

import './App.css';
import axios from 'axios'

const App = () => {
  const [ users, setUsers ] = useState([])
  const [ user, setUser ] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ alert, setAlert ] = useState(null)
  const [ repos, setRepos ] = useState([])

  // async componentDidMount() {
  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
  //   this.setState({ users: res.data, loading: false })
  // }

    // Search Github users
  const searchUsers = async (text) => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    
    setUsers(res.data.items)
    setLoading(false)
  }

    // Clear users from state
  const clearUsers = () => {
    setUsers([])
  }

  // Show Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })

    setTimeout(() => setAlert(null), 5000)
  }

  // Get a single Github user
  const getUser = async (username) => {
    setLoading(true)

    const res = await axios({
      method: 'get',
      url: `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    })
  
    setUser(res.data)
    setLoading(false)
  }

  // Get user's repos
  const getUserRepos = async (username) => {
    setLoading(true)

    const res = await axios({
      method: 'get',
      url: `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    })

    setRepos(res.data)
    setLoading(false)
  }

    return (
      <GithubState>
      <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
          <Alert alert={alert} />
          <Search 
            searchUsers={searchUsers} 
            clearUsers={clearUsers} 
            showClear={users.length > 0 ? true : false}
            setAlert={showAlert}
          />
          <Users users={users} loading={loading} />
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
            <Route exact path='/users/:login' render={props => (
              <User {...props} 
              getUser={getUser} 
              user={user}
              repos={repos}
              getUserRepos={getUserRepos}
              loading={loading} />
            )} />
          </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
}

export default App;
