import React from 'react'

const Notification = ({message, messageStyle}) => {
    if (message === null) {
        return null
    }
    return (
        <div className={messageStyle}>
            {message}
        </div>
    )
}

export default {Notification}