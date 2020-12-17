import React, { Component } from 'react'

class Search extends Component {
    state={
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value })

    onSubmit(e) {
        e.preventDefault()
        this.props.searchUsers(this.state.text)
        this.setState({ text: '' })
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit.bind(this)}>
                    <input type='text' name='text' placeholder='Search Users...' autoComplete='off' value={this.state.text} onChange={this.onChange} />
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>  
            </div>
        )
    }
}

export default Search
