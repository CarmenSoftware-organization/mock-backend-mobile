# Mock Backend Mobile API

Mock backend API ที่สร้างด้วย **Elysia** และ **Bun** สำหรับการพัฒนา mobile application

## 🚀 Features

- ⚡ **Fast & Lightweight** - ใช้ Elysia framework ที่มีประสิทธิภาพสูง
- 🔒 **Type Safety** - TypeScript support พร้อม validation
- 📱 **Mobile Ready** - RESTful API endpoints สำหรับ mobile app
- 🏥 **Health Monitoring** - Health check endpoints
- 🛡️ **Error Handling** - Global error handling และ validation
- 📚 **API Documentation** - Auto-generated API documentation
- 🐳 **Docker Ready** - Docker support พร้อม multi-stage build
- 🔄 **Hot Reload** - Development mode พร้อม hot reload

## 🛠️ Tech Stack

- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime
- **Framework**: [Elysia](https://elysiajs.com/) - Fast web framework
- **Language**: TypeScript
- **Package Manager**: Bun
- **Containerization**: Docker + Docker Compose

## 📦 Installation

```bash
# Clone repository
git clone <your-repo-url>
cd mock-backend-mobile

# Install dependencies
bun install
```

## 🚀 Getting Started

### Development Mode
```bash
# Run with hot reload
bun run dev
```

### Production Mode
```bash
# Build project
bun run build

# Start production server
bun run start
```

### Type Checking
```bash
# Check TypeScript types
bun run type-check
```

## 🐳 Docker Deployment

### Quick Start
```bash
# Build and run production container
make deploy

# หรือใช้คำสั่งแยก
make build
make run
```

### Available Commands
```bash
make help          # แสดงคำสั่งทั้งหมด
make build         # Build Docker image
make run           # รัน production container
make run-dev       # รัน development container
make stop          # หยุด containers
make clean         # ลบ containers และ images
make logs          # แสดง logs
make test          # ทดสอบ API endpoints
```

### Docker Compose
```bash
# Production
docker-compose up -d api

# Development (with hot reload)
docker-compose --profile dev up -d api-dev

# Stop all services
docker-compose down
```

### Manual Docker Commands
```bash
# Build image
docker build -t mock-backend-mobile .

# Run container
docker run -d -p 3000:3000 --name mock-backend mock-backend-mobile

# View logs
docker logs -f mock-backend

# Stop container
docker stop mock-backend
```

## 🌐 API Endpoints

### Health Check
- `GET /health` - Health status ของ server

### Root
- `GET /` - API information และ available endpoints

### Users API
- `GET /api/users` - ดึงข้อมูล users ทั้งหมด
- `POST /api/users` - สร้าง user ใหม่
- `GET /api/users/:id` - ดึงข้อมูล user ตาม ID
- `PUT /api/users/:id` - อัปเดตข้อมูล user
- `DELETE /api/users/:id` - ลบ user

### Swagger Documentation
- `GET /swagger` - Interactive API documentation

## 📝 API Examples

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
  }'
```

### Get User by ID
```bash
curl http://localhost:3000/api/users/1
```

### Update User
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Updated"
  }'
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

## 🔧 Configuration

Server จะรันที่ port **3000** โดย default

```typescript
// src/config.ts
export const config = {
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: process.env.HOST || "localhost",
  },
  // ... more config
}
```

### Environment Variables
```bash
PORT=3000                    # Server port
HOST=localhost              # Server host
NODE_ENV=development        # Environment
API_VERSION=v1              # API version
CORS_ORIGIN=http://localhost:3000  # CORS origin
```

## 📁 Project Structure

```
mock-backend-mobile/
├── src/
│   ├── index.ts          # Main application file
│   ├── config.ts         # Configuration
│   ├── types/
│   │   └── user.ts       # Type definitions
│   ├── routes/
│   │   └── users.ts      # Users API routes
│   ├── utils/
│   │   └── fileDb.ts     # File database utilities
│   └── data/
│       └── users.json    # Mock data storage
├── package.json          # Dependencies และ scripts
├── tsconfig.json         # TypeScript configuration
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose services
├── Makefile              # Build automation
├── .dockerignore         # Docker ignore rules
├── README.md             # Project documentation
└── LICENSE               # MIT License
```

## 🧪 Testing

```bash
# Test with Docker
make test

# Manual testing
curl http://localhost:3000/health
curl http://localhost:3000/api/users
```

## 🚀 Deployment

### Production
```bash
# Build and deploy
make deploy

# หรือใช้ Docker Compose
docker-compose up -d api
```

### Development
```bash
# Run with hot reload
make run-dev

# หรือใช้ Docker Compose
docker-compose --profile dev up -d api-dev
```

## 📚 Additional Resources

- [Elysia Documentation](https://elysiajs.com/)
- [Bun Documentation](https://bun.sh/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Docker Documentation](https://docs.docker.com/)

## 🤝 Contributing

1. Fork project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License - ดูรายละเอียดใน [LICENSE](LICENSE) file

---

**Happy Coding! 🎉**