import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
jest.mock('./services/blogs')
jest.mock('./services/login')

describe('<App />', () => {
    let app
    beforeAll(() => {
        app = mount(<App />)
    })

    it('renders the login title before user has been logged in. Does not render the blogs', () => {
        app.update()
        const blogComponents = app.find(Blog)
        const loginTitle = app.find('.loginTitle')
        expect(loginTitle.text()).toContain('Login to application')
        console.log('blog components length is:', blogComponents.length)
        console.log('blog service blogs length is:', blogService.blogs.length)
        expect(blogComponents.length).toEqual(0)
    })

    it('after login blog count equals 2', async () => {
        app.update()

        const loginButton = app.find('.loginButton')

        await loginButton.simulate('click')
        app.update()
        const blogComponents = app.find(Blog)
        expect(app.state().user).not.toBe(null)
        expect(app.state().user).toEqual(loginService.user)
        console.log('blog components length is:', blogComponents.length)
        console.log('blog service blogs length is:', blogService.blogs.length)
        expect(blogComponents.length).toEqual(blogService.blogs.length)
    })
})
