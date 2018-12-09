import React from 'react'
import Notification from '../components/Notification'
import PropTypes from 'prop-types'
import { 
    notify
 } from '../reducers/blogReducer'
 import {connect} from 'react-redux';

class BlogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            url: ''
        }
    }

    createBlog = (event) => {
        event.preventDefault()
        const blogObject = {
            title: this.state.title,
            author: this.state.author,
            url: this.state.url
        }
        this.props.createBlog(blogObject)
        /**
        const infotext = 'a new blog \'' + this.state.title + '\' by ' + this.state.author + ' added'
        this.setState({title: '', author: '', url: '', info: infotext})
        setTimeout(() => {
            this.setState({ info: null })
        }, 5000)
         */
        const infotext = 'a new blog \'' + this.state.title + '\' by ' + this.state.author + ' added'
        this.setState({title: '', author: '', url: ''})
        this.props.notify(infotext, 5)
    }
    
    handleBlogFormChange = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    render () {
        return (
            <div>
                <Notification.Notification message={this.props.notification} messageStyle="info-pop-up"/>
                <h3>Create New</h3>
                <form>
                    <div>
                        title
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleBlogFormChange}
                        />
                    </div>
                    <div>
                        author
                        <input
                            type="text"
                            name="author"
                            value={this.state.author}
                            onChange={this.handleBlogFormChange}
                        />
                    </div>
                    <div>
                        url
                        <input
                            type="text"
                            name="url"
                            value={this.state.url}
                            onChange={this.handleBlogFormChange}
                        />
                    </div>
                    <div>
                        <button onClick={this.createBlog}>create</button>
                    </div>
                </form>
            </div>
        )
    }
}

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
      notification: state.notification
    }
  }

const mapDispatchToProps = {
    notify
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogForm)
