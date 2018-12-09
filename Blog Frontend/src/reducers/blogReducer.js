const initialState = {notification: null}

const reducer = (store = initialState, action) => {
    
    if (action.type === 'SET_NOTIFICATION') {
        
        const newNotification = action.notification
        return {
            notification: newNotification
        }
    }

    if (action.type === 'CLEAR_NOTIFICATION') {
        
        return {
            anecdotes: store.anecdotes,
            notification: null,
            filter: store.filter
        }
    }

    
    return store
}

export const notify = (notification, lengthInSec) => {
    return async (dispatch) => {
        console.log('notification called')
        dispatch({
            type: 'SET_NOTIFICATION',
            notification: notification
        })
        setTimeout(() => {
            console.log('timer out')
            dispatch({
                type: 'CLEAR_NOTIFICATION'
            })
        }, lengthInSec * 1000)
    }
}

export default reducer
