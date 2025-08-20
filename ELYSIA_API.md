# Elysia.js API Documentation

## ภาพรวม
Elysia.js server ที่สร้างขึ้นเพื่อเป็น mock backend สำหรับ mobile application development

## การรัน Server

### Development Mode
```bash
bun run dev:api
```

### Production Mode
```bash
bun run start:api
```

Server จะรันที่ port 3001 (หรือตามที่กำหนดใน environment variable PORT)

## API Endpoints

### Base URL
```
http://localhost:3001
```

### Health Check
- **GET** `/health` - ตรวจสอบสถานะ server

### Authentication
- **POST** `/api/auth/login` - เข้าสู่ระบบ
- **POST** `/api/auth/register` - ลงทะเบียน
- **GET** `/api/auth/profile` - ดูข้อมูล profile (ต้องมี token)

### Users
- **GET** `/api/users` - รายการ users ทั้งหมด
- **GET** `/api/users/:id` - ดูข้อมูล user ตาม ID

### Posts
- **GET** `/api/posts` - รายการ posts ทั้งหมด
- **POST** `/api/posts` - สร้าง post ใหม่ (ต้องมี token)

## Authentication

### Login
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "password"}'
```

### Protected Routes
สำหรับ endpoints ที่ต้องการ authentication ให้ส่ง token ใน header:
```bash
curl -X GET http://localhost:3001/api/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Swagger Documentation
เมื่อรัน server แล้ว สามารถเข้าดู Swagger UI ได้ที่:
```
http://localhost:3001/swagger
```

## Environment Variables
- `PORT` - Port ที่ server จะรัน (default: 3001)
- `JWT_SECRET` - Secret key สำหรับ JWT (default: 'your-secret-key')

## Mock Data

### Users
- admin (username: admin, password: password)
- user1
- user2

### Posts
- First Post
- Second Post  
- Third Post

## Features
- ✅ CORS support
- ✅ JWT authentication
- ✅ Swagger documentation
- ✅ TypeScript support
- ✅ Fast performance
- ✅ Built-in validation
- ✅ Plugin system

