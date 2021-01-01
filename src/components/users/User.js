import React, { Fragment, Component } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        loading: PropTypes.bool,
        getUser: PropTypes.func.isRequired
    }

    render() {
        const { 
        name,
        avatar_url,
        location,
        bio,
        company,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable } = this.props.user

        const { loading } = this.props

        if (loading) return <Spinner />

        return (
            <Fragment>               
                <Link to='/' className='btn btn-light'>
                    Back To Search
                </Link>
                Hireable: {' '}
                { hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/> }
                <div className='card grid-2'>
                    <div>
                    <img src={avatar_url} alt='user avatar' className='round-img' styles={{ width: '150px' }}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio:</h3>
                        <p>{bio}</p>
                            </Fragment>}
                        <a href={html_url} className='btn btn-dark my-1'>Github profile</a>
                        <ul>
                        <li><strong>Username: </strong>
                        {login}
                        </li>
                        <li><strong>Company: </strong>
                        {company}
                        </li>
                        <li><strong>Website: </strong>
                        {blog}
                        </li>
                        </ul>
                    </div>
                    <div>
                        <p>Followers: {followers}</p>
                        <p>Following: {following}</p>
                        <p>Public repos: {public_repos}</p>
                        <p>Public gists: {public_gists}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default User
