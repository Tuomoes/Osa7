import React from 'react'
import Linkify from 'react-linkify'
import blogsService from '../services/blogs'
import PropTypes from 'prop-types'


class Blog extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    expandBlog = (blog) => {
        return () => {
            console.log('clickidi-click!! says:' + blog.author)
            this.toggleVisibility()
            console.log(this.user())
        } 
        
    }

    user = () => {
        if (this.props.blog.user === undefined)
            return '-'
        else
            return this.props.blog.user.name
    }

    toggleVisibility = () => {
        this.setState({visible: !this.state.visible})
    }
/** 
    showBlogUser = (blog) {
        if (this.props.blog.user !== null) {
            return this.props.blog.user
        }
    }
*/
    render () {
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }
        const extraInfoStyle = {
            paddingLeft: 10
        }

        return (
            <div>
                <div onClick={this.expandBlog(this.props.blog)} className="nameDiv">
                    {this.props.blog.title} {this.props.blog.author}
                </div>
                <div style={showWhenVisible} className="contentDiv">
                    <div style={extraInfoStyle} className="styleDiv">
                        <div> <Linkify properties={{target: '_blank'}}> {this.props.blog.url} </Linkify> </div>
                        <div className="likesDiv"> {this.props.blog.likes} likes <button onClick={() => this.props.addLike(this.props.id)}>like</button> </div>
                        <div> added by {this.user()}</div>
                        <div> 
                            {(this.props.blog.user === undefined || this.props.user.username === this.props.blog.user.username) ?
                            <button onClick={() => this.props.deleteBlog(this.props.id)}>delete</button> : null} 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Blog.propTypes = {
    id: PropTypes.string.isRequired,
    blog: PropTypes.object.isRequired, 
    user: PropTypes.object.isRequired, 
    addLike: PropTypes.func.isRequired, 
    deleteBlog: PropTypes.func.isRequired
}


export default Blog
