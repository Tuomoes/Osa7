import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    it('renders content', () => {
        const blog = {
            title: 'Sinuhe Blogi',
            author: 'Mika Waltari',
            likes: 262426
        }

        const simpleBlogComponent = shallow(<SimpleBlog blog={blog} />)
        const generalInfoDiv = simpleBlogComponent.find('.generalInfo')
        const likesInfoDiv = simpleBlogComponent.find('.likesInfo')

        console.log(likesInfoDiv)

        expect(generalInfoDiv.text()).toContain(blog.title)
        expect(generalInfoDiv.text()).toContain(blog.author)
        expect(likesInfoDiv.text()).toContain(blog.likes)
    })
    
    it('calls function when button is clicked', () => {
        const mockHandler = jest.fn()
        const blog = {
            title: 'Sinuhe Blogi',
            author: 'Mika Waltari',
            likes: 262426
        }

        const simpleBlogComponent = shallow(<SimpleBlog blog={blog} onClick={mockHandler} />)
        const button = simpleBlogComponent.find('button')
        button.simulate('click')
        button.simulate('click')

        expect(mockHandler.mock.calls.length).toBe(2)
    })
})