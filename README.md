# Mock Backend Mobile API

Next.js backend service ที่ออกแบบมาเพื่อการพัฒนา mobile application ด้วย modern architecture และ comprehensive API documentation

## 🚀 Features

- **Next.js 15.4.7** - Latest Next.js with App Router
- **TypeScript 5.9.2** - Full type safety
- **TailwindCSS 4.1.12** - Modern utility-first CSS
- **Elysia.js 1.3.11** - Fast web framework for Bun runtime
- **JWT Authentication** - Secure API endpoints
- **Swagger Documentation** - Interactive API docs
- **CORS Support** - Cross-origin resource sharing
- **Modern UI** - Responsive design with animations

## 📦 Installation

```bash
# Clone repository
git clone <repository-url>
cd mock-backend-mobile

# Install dependencies
bun install
```

## 🏃‍♂️ Running the Application

### Next.js Frontend
```bash
# Development
bun run dev

# Production
bun run build
bun run start
```

### Elysia.js API Server
```bash
# Development
bun run dev:api

# Production
bun run start:api
```

### Both Servers (Frontend + API)
```bash
# Using Makefile
make dev-all

# Or manually
bun run dev:api & bun run dev
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **API Server**: http://localhost:3001
- **Swagger UI**: http://localhost:3001/swagger
- **API Health**: http://localhost:3001/health

## 📚 API Documentation

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/profile` - Get user profile (protected)

### Users
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user by ID

### Posts
- `GET /api/posts` - List all posts
- `POST /api/posts` - Create new post (protected)

### Health Check
- `GET /health` - Server health status

## 🔐 Authentication

### Login Example
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "password"}'
```

### Protected Routes
```bash
curl -X GET http://localhost:3001/api/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🛠️ Development

### Available Scripts
```bash
bun run dev          # Start Next.js dev server
bun run dev:api      # Start Elysia API server
bun run build        # Build Next.js app
bun run start        # Start Next.js production server
bun run start:api    # Start Elysia production server
bun run lint         # Run ESLint
```

### Makefile Commands
```bash
make help            # Show all available commands
make dev             # Start Next.js dev server
make dev-api         # Start Elysia API server
make dev-all         # Start both servers
make api-health      # Check API health
make api-users       # Get users from API
make api-login       # Test login endpoint
```

## 🏗️ Project Structure

```
mock-backend-mobile/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx        # Home page
│   │   ├── not-found.tsx   # 404 page
│   │   └── globals.css     # Global styles
│   ├── server.ts            # Elysia.js API server
│   ├── types/               # TypeScript types
│   │   └── elysia.ts       # API types
│   ├── lib/                 # Utility libraries
│   │   └── middleware/     # Auth middleware
│   └── config/              # Configuration files
├── public/                  # Static assets
├── elysia.env              # Elysia environment variables
├── package.json            # Dependencies and scripts
├── Makefile                # Development commands
├── ELYSIA_API.md           # Detailed API documentation
└── README.md               # This file
```

## 🔧 Configuration

### Environment Variables
Create `elysia.env` file:
```env
PORT=3001
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
CORS_ORIGIN=*
```

### Mock Data
- **Admin User**: username: `admin`, password: `password`
- **Sample Users**: user1, user2
- **Sample Posts**: 3 sample posts with different authors

## 🚀 Performance Features

- **Elysia.js**: Ultra-fast web framework
- **Bun Runtime**: Fast JavaScript runtime
- **TypeScript**: Compile-time type checking
- **TailwindCSS**: Optimized CSS framework
- **Next.js 15**: Latest performance optimizations

## 📱 Mobile-First Design

- Responsive layout for all devices
- Touch-friendly interactions
- Optimized for mobile performance
- Progressive Web App ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, Elysia.js, and Bun**
