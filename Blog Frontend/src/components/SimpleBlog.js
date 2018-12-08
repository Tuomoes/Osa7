import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
    <div className="wrapper">
        <div className="generalInfo">
            {blog.title} {blog.author}
        </div>
        <div className="likesInfo">
      blog has {blog.likes} likes
            <button onClick={onClick}>like</button>
        </div>
    </div>
)

export default SimpleBlog
