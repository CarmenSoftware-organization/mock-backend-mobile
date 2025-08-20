import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { jwt } from '@elysiajs/jwt'
import { swagger } from '@elysiajs/swagger'

// Create Elysia app
const app = new Elysia()
  .use(cors())
  .use(
    jwt({
      name: 'jwt',
      secret: process.env.JWT_SECRET || 'your-secret-key'
    })
  )
  .use(
    swagger({
      documentation: {
        info: {
          title: 'Mock Backend Mobile API',
          version: '1.0.0',
          description: 'Next.js backend service สำหรับการพัฒนา mobile application'
        },
        tags: [
          { name: 'Auth', description: 'Authentication endpoints' },
          { name: 'Users', description: 'User management endpoints' },
          { name: 'Health', description: 'Health check endpoints' }
        ]
      }
    })
  )
  .get('/', () => ({
    message: 'Mock Backend Mobile API',
    version: '1.0.0',
    status: 'running'
  }))
  .get('/health', () => ({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  }))
  .group('/api', app => app
    .group('/auth', app => app
      .post('/login', async ({ body, jwt }) => {
        // Mock login endpoint
        const { username, password } = body as { username: string; password: string }
        
        if (username === 'admin' && password === 'password') {
          const token = await jwt.sign({
            id: 1,
            username: 'admin',
            role: 'admin'
          })
          
          return {
            success: true,
            message: 'Login successful',
            token,
            user: {
              id: 1,
              username: 'admin',
              role: 'admin'
            }
          }
        }
        
        return {
          success: false,
          message: 'Invalid credentials'
        }
      })
      .post('/register', async ({ body }) => {
        // Mock register endpoint
        const { username, email } = body as { username: string; email: string; password: string }
        
        return {
          success: true,
          message: 'User registered successfully',
          user: {
            id: Date.now(),
            username,
            email
          }
        }
      })
      .get('/profile', async ({ jwt, headers }) => {
        // Protected route example
        const authHeader = headers.authorization
        if (!authHeader) {
          return {
            success: false,
            message: 'No token provided'
          }
        }
        
        const token = authHeader.replace('Bearer ', '')
        const payload = await jwt.verify(token)
        
        if (!payload) {
          return {
            success: false,
            message: 'Invalid token'
          }
        }
        
        return {
          success: true,
          user: payload
        }
      })
    )
    .group('/users', app => app
      .get('/', () => {
        // Mock users list
        return {
          success: true,
          users: [
            { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
            { id: 2, username: 'user1', email: 'user1@example.com', role: 'user' },
            { id: 3, username: 'user2', email: 'user2@example.com', role: 'user' }
          ]
        }
      })
      .get('/:id', ({ params }) => {
        // Mock get user by ID
        const userId = parseInt(params.id)
        const users = [
          { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
          { id: 2, username: 'user1', email: 'user1@example.com', role: 'user' },
          { id: 3, username: 'user2', email: 'user2@example.com', role: 'user' }
        ]
        
        const user = users.find(u => u.id === userId)
        if (!user) {
          return {
            success: false,
            message: 'User not found'
          }
        }
        
        return {
          success: true,
          user
        }
      })
    )
    .group('/posts', app => app
      .get('/', () => {
        // Mock posts list
        return {
          success: true,
          posts: [
            { id: 1, title: 'First Post', content: 'This is the first post', author: 'admin' },
            { id: 2, title: 'Second Post', content: 'This is the second post', author: 'user1' },
            { id: 3, title: 'Third Post', content: 'This is the third post', author: 'user2' }
          ]
        }
      })
      .post('/', async ({ body, jwt, headers }) => {
        // Protected route - create post
        const authHeader = headers.authorization
        if (!authHeader) {
          return {
            success: false,
            message: 'Authentication required'
          }
        }
        
        const token = authHeader.replace('Bearer ', '')
        const payload = await jwt.verify(token)
        
        if (!payload) {
          return {
            success: false,
            message: 'Invalid token'
          }
        }
        
        const { title, content } = body as { title: string; content: string }
        
        return {
          success: true,
          message: 'Post created successfully',
          post: {
            id: Date.now(),
            title,
            content,
            author: (payload as { username: string }).username,
            createdAt: new Date().toISOString()
          }
        }
      })
    )
  )
  .listen(process.env.PORT || 3001)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app
