import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

let blog = null
let user = null

describe.only('<Blog />', () => {
    
    beforeAll(() => {
        blog = {
            _id: '5b5b0923eacf4426b0fe45bb',
            title: 'Titteli-kikkeli',
            author: 'Satu Setä',
            url: 'www.homeblog.com',
            likes: 5,
            user: {
                _id: '5b5b090ceacf4426b0fe45ba',
                username: 'Timppa',
                name: 'Timo Timpuri'
            }
        }

        user = {
            username: 'Timppa',
            name: 'Timo Timpuri',
            token: 'abc123aaaaaaaaa'
        }
    })

    it('By default blog only shows title and author.', () => {

        const mockLikeHandler = jest.fn()
        const mockDeleteHandler = jest.fn()
        
        const blogComponent = shallow(<Blog key={blog._id} id={blog._id} blog={blog} user={user} addLike={mockLikeHandler} deleteBlog={mockDeleteHandler} />)
        const nameDiv = blogComponent.find('.nameDiv')

        expect(nameDiv.text()).toContain(blog.title)

        const contentDiv = blogComponent.find('.contentDiv')
        expect(contentDiv.getElement().props.style).toEqual({display: 'none'})
        
    })

    it('After click, the extra info is expanded.', () => {

        const mockLikeHandler = jest.fn()
        const mockDeleteHandler = jest.fn()
        
        const blogComponent = shallow(<Blog key={blog._id} id={blog._id} blog={blog} user={user} addLike={mockLikeHandler} deleteBlog={mockDeleteHandler} />)
        const nameDiv = blogComponent.find('.nameDiv')

        nameDiv.simulate('click')
        
        const contentDiv = blogComponent.find('.contentDiv')
        expect(contentDiv.getElement().props.style).toEqual({display: ''})
        
    })

})