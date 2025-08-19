# Mock Backend Mobile API

Next.js backend service สำหรับ mobile application พร้อม authentication และ CRUD operations

## Features

- 🔐 **Authentication System** - JWT-based authentication
- 👥 **User Management** - CRUD operations สำหรับ users
- 📦 **Product Management** - CRUD operations สำหรับ products
- 🛡️ **Role-based Access Control** - Admin และ User roles
- 📄 **Pagination & Filtering** - สำหรับ API responses
- 🔒 **Security Middleware** - Authentication และ authorization
- 📝 **TypeScript** - Fully typed API responses

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Users
- `GET /api/users` - Get all users (with pagination & search)
- `POST /api/users` - Create new user (Admin only)
- `GET /api/users/[id]` - Get user by ID
- `PUT /api/users/[id]` - Update user (Admin only)
- `DELETE /api/users/[id]` - Delete user (Admin only)

### Products
- `GET /api/products` - Get all products (with pagination, search, filtering)
- `POST /api/products` - Create new product
- `GET /api/products/[id]` - Get product by ID
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

## Getting Started

### Prerequisites
- Node.js 18+ 
- Bun 1.0+

### Why Bun?

Bun เป็น JavaScript runtime ที่เร็วและมีประสิทธิภาพ:
- ⚡ **Fast** - ติดตั้ง packages เร็วกว่า npm ถึง 30x
- 🚀 **Efficient** - ใช้ memory น้อยกว่า
- 🔧 **All-in-one** - Runtime, package manager, bundler, test runner
- 📦 **Compatible** - รองรับ npm packages ทั้งหมด

### Installing Bun

```bash
# macOS & Linux
curl -fsSL https://bun.sh/install | bash

# Windows (with WSL)
curl -fsSL https://bun.sh/install | bash

# หรือใช้ npm
npm install -g bun
```

### Installation

1. Clone repository:
```bash
git clone <repository-url>
cd mock-backend-mobile
```

2. Install dependencies:
```bash
bun install
```

3. Setup environment variables:
```bash
cp env.example .env.local
# แก้ไขค่าใน .env.local ตามต้องการ
```

4. Run development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) ใน browser

## Environment Variables

สร้างไฟล์ `.env.local` และกำหนดค่าต่อไปนี้:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mock_backend
DB_USER=postgres
DB_PASSWORD=password

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h

# Server Configuration
PORT=3000
NODE_ENV=development
```

## Default Users

ระบบมี default users สำหรับทดสอบ:

### Admin User
- Email: `admin@example.com`
- Password: `password123`
- Role: `admin`

### Regular User
- Email: `user@example.com`
- Password: `password123`
- Role: `user`

## API Usage Examples

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'
```

### Get Products (with authentication)
```bash
curl -X GET http://localhost:3000/api/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Create Product
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"New Product","description":"Product description","price":99.99,"category":"Electronics","stock":10}'
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── users/
│   │   │   └── [id]/
│   │   └── products/
│   │       └── [id]/
│   └── globals.css
├── lib/
│   ├── middleware/
│   │   └── auth.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── response.ts
└── config/
    └── database.ts
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **TailwindCSS** - Styling
- **Bun** - JavaScript runtime & package manager

## Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun install` - Install dependencies
- `bun run clean` - Clean project files

### Bun Commands

```bash
# Install dependencies
bun install

# Run scripts
bun run dev
bun run build
bun run start

# Direct execution (faster)
bun dev
bun build
bun start

# Add new package
bun add package-name
bun add -d package-name  # dev dependency

# Remove package
bun remove package-name
```

### Using Makefile (Optional)

สำหรับความสะดวก สามารถใช้ Makefile ได้:

```bash
make help      # Show available commands
make install   # Install dependencies
make dev       # Start development server
make build     # Build for production
make start     # Start production server
make lint      # Run ESLint
make clean     # Clean project files
```

### Code Style

- ใช้ TypeScript สำหรับ type safety
- ใช้ early returns เพื่อ readability
- ใช้ descriptive naming conventions
- Implement proper error handling
- ใช้ middleware สำหรับ authentication

## Security Features

- JWT token validation
- Password hashing ด้วย bcrypt
- Role-based access control
- Input validation
- Error handling ที่ไม่เปิดเผย sensitive information

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

MIT License
