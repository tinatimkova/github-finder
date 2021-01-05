import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

const Search = ({ showClear, clearUsers, setAlert }) => {
    const githubContext = useContext(GithubContext)

    const [text, setText] = useState('')

    const onChange = e => setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('Please enter a user name', 'light')
        } else {
            githubContext.searchUsers(text)
            setText('')
        }
    }
        
        return (
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <input type='text' name='text' placeholder='Search Users...' autoComplete='off' value={text} onChange={onChange} />
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form> 
                {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
            </div>
        )
}

export default Search
