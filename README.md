# 🚀 Mock Backend Mobile

A high-performance mock backend service built with **Elysia** and **Bun** runtime, designed for mobile application development and testing.

## ✨ Features

- **⚡ Ultra-fast**: Built with Elysia framework and Bun runtime
- **🔧 Mock API**: Ready-to-use mock endpoints for mobile app development
- **🐳 Docker Ready**: Containerized with Docker for easy deployment
- **☁️ Cloud Deploy**: Configured for Render platform deployment
- **📱 Mobile Optimized**: Designed specifically for mobile app backend needs
- **🔄 Hot Reload**: Development server with watch mode

## 🛠️ Tech Stack

- **Framework**: [Elysia](https://elysiajs.com/) - Fast web framework for Bun
- **Runtime**: [Bun](https://bun.sh/) - All-in-one JavaScript runtime
- **Language**: TypeScript
- **Container**: Docker
- **Deployment**: Render

## 📋 Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- [Node.js](https://nodejs.org/) (v18 or higher) - for compatibility
- [Docker](https://docker.com/) (optional, for containerization)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd mock-backend-mobile
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Start Development Server

```bash
bun run dev
```

Your server will be running at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
mock-backend-mobile/
├── src/
│   └── index.ts          # Main application entry point
├── Dockerfile            # Docker configuration
├── render.yaml           # Render deployment configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🐳 Docker

### Build Image

```bash
docker build -t mock-backend-mobile .
```

### Run Container

```bash
docker run -p 3000:3000 mock-backend-mobile
```

### Docker Compose

```yaml
version: '3.8'
services:
  mock-backend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
```

## ☁️ Deployment

### Render Platform

This project is configured for automatic deployment on Render:

1. Connect your GitHub repository to Render
2. Render will automatically detect the `render.yaml` configuration
3. Your service will be deployed automatically on every push to main branch

### Environment Variables

- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 3000)

## 🔧 Development

### Available Scripts

```bash
# Start development server with hot reload
bun run dev

# Run tests
bun run test

# Build for production
bun run build
```

### API Endpoints

- `GET /` - Health check and welcome message
- More endpoints coming soon...

## 📱 Mobile Integration

This backend is designed to work seamlessly with mobile applications:

- **RESTful API**: Standard REST endpoints
- **CORS Enabled**: Cross-origin requests supported
- **JSON Response**: Consistent JSON response format
- **Error Handling**: Proper HTTP status codes and error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

- Create an issue in the GitHub repository
- Check the [Elysia documentation](https://elysiajs.com/)
- Check the [Bun documentation](https://bun.sh/docs)

## 🚀 Roadmap

- [ ] Add more mock API endpoints
- [ ] Implement authentication middleware
- [ ] Add database integration
- [ ] Create comprehensive API documentation
- [ ] Add rate limiting
- [ ] Implement logging and monitoring

---

Made with ❤️ using [Elysia](https://elysiajs.com/) + [Bun](https://bun.sh/)