# 🚀 Mock Backend Mobile

A high-performance mock backend service built with **Elysia** and **Bun** runtime, designed for mobile application development and testing. This service provides comprehensive mock APIs for enterprise resource planning (ERP) and business management systems.

## ✨ Features

- **⚡ Ultra-fast**: Built with Elysia framework and Bun runtime
- **🔧 Comprehensive Mock APIs**: 25+ ready-to-use mock endpoints for ERP systems
- **📱 Mobile & Web Ready**: Designed for both mobile and web applications
- **🐳 Docker Ready**: Containerized with Docker for easy deployment
- **☁️ Cloud Deploy**: Configured for Render platform deployment
- **🔄 Hot Reload**: Development server with watch mode
- **📚 Swagger Documentation**: Auto-generated API documentation
- **🏢 ERP Focused**: Business units, users, products, workflows, and more

## 🛠️ Tech Stack

- **Framework**: [Elysia](https://elysiajs.com/) - Fast web framework for Bun
- **Runtime**: [Bun](https://bun.sh/) - All-in-one JavaScript runtime
- **Language**: TypeScript
- **API Docs**: Swagger/OpenAPI integration
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

### 4. View API Documentation

Visit [http://localhost:3000/swagger](http://localhost:3000/swagger) for interactive API documentation.

## 🏗️ Project Structure

```
mock-backend-mobile/
├── src/
│   ├── index.ts                    # Main application entry point
│   └── routes/
│       ├── index.ts                # Route aggregator
│       ├── api/                    # Main API endpoints
│       │   ├── auth/               # Authentication endpoints
│       │   ├── business-unit/      # Business unit management
│       │   ├── config/             # Configuration endpoints
│       │   ├── credit-note/        # Credit note management
│       │   ├── credit-term/        # Credit term management
│       │   ├── currencies/         # Currency management
│       │   ├── department/         # Department management
│       │   ├── good-received-note/ # GRN management
│       │   ├── locations/          # Location management
│       │   ├── my-pending/         # Pending items
│       │   ├── price-list/         # Price list management
│       │   ├── products/           # Product management
│       │   ├── purchase-order/     # Purchase order management
│       │   ├── purchase-request/   # Purchase request management
│       │   ├── store-requisition/  # Store requisition management
│       │   ├── tax-profile/        # Tax profile management
│       │   ├── unit/               # Unit management
│       │   ├── user/               # User management
│       │   ├── user-location/      # User location management
│       │   └── workflow/           # Workflow management
│       └── api-system/             # System-level APIs
│           ├── business-unit/       # System business unit
│           ├── cluster/             # Cluster management
│           └── user/                # System user management
├── Dockerfile                       # Docker configuration
├── render.yaml                      # Render deployment configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

## 🔌 Available API Endpoints

### 🔐 Authentication (`/api/auth`)
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/register` - User registration
- `POST /api/auth/invite-user` - Invite new user
- `POST /api/auth/register-confirm` - Confirm registration
- `POST /api/auth/refresh-token` - Refresh access token
- `POST /api/auth/forgot-password` - Password recovery
- `POST /api/auth/mobile` - Mobile authentication
- `POST /api/auth/web` - Web authentication

### 🏢 Business Management
- **Business Units** (`/api/business-unit`) - Business unit operations
- **Departments** (`/api/department`) - Department management
- **Users** (`/api/user`) - User management
- **User Locations** (`/api/user-location`) - User location assignments

### 📦 Product & Inventory
- **Products** (`/api/products`) - Product management
- **Locations** (`/api/locations`) - Location management
- **Units** (`/api/unit`) - Unit of measurement
- **Price Lists** (`/api/price-list`) - Pricing management

### 💰 Financial Management
- **Credit Notes** (`/api/credit-note`) - Credit note operations
- **Credit Terms** (`/api/credit-term`) - Payment terms
- **Credit Note Reasons** (`/api/credit-note-reason`) - Reason codes
- **Tax Profiles** (`/api/tax-profile`) - Tax configuration
- **Currencies** (`/api/currencies`) - Currency management

### 📋 Procurement & Operations
- **Purchase Requests** (`/api/purchase-request`) - Purchase request management
- **Purchase Request Templates** (`/api/purchase-request-template`) - Request templates
- **Purchase Orders** (`/api/purchase-order`) - Purchase order management
- **Store Requisitions** (`/api/store-requisition`) - Store requisition management
- **Good Received Notes** (`/api/good-received-note`) - GRN management

### ⚙️ System & Workflow
- **Workflows** (`/api/workflow`) - Workflow management
- **Configuration** (`/api/config`) - System configuration
- **My Pending Items** (`/api/my-pending/*`) - User's pending items

### 🖥️ System APIs (`/api-system`)
- **System Business Units** (`/api-system/business-unit`) - System-level business unit operations
- **System Clusters** (`/api-system/cluster`) - Cluster management
- **System Users** (`/api-system/user`) - System-level user operations

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

# Build for production
bun run build

# Start production server
bun run start:prod

# Generate routes (if needed)
bun run routes:gen

# Type checking
bun run type-check

# Format code
bun run format

# Clean build artifacts
bun run clean
```

### Development Workflow

1. **Start Development**: `bun run dev` - Starts server with hot reload
2. **API Documentation**: Visit `/swagger` for interactive API docs
3. **Code Quality**: Use `bun run type-check` for TypeScript validation
4. **Formatting**: Use `bun run format` for consistent code style

## 📱 Mobile Integration

This backend is designed to work seamlessly with mobile applications:

- **RESTful API**: Standard REST endpoints with consistent patterns
- **CORS Enabled**: Cross-origin requests supported
- **JSON Response**: Consistent JSON response format
- **Error Handling**: Proper HTTP status codes and error messages
- **Authentication**: Comprehensive auth system for mobile apps
- **Business Logic**: Full ERP functionality for enterprise mobile apps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Elysia framework patterns
- Maintain consistent API response formats
- Add proper error handling
- Update API documentation when adding new endpoints

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

- Create an issue in the GitHub repository
- Check the [Elysia documentation](https://elysiajs.com/)
- Check the [Bun documentation](https://bun.sh/docs)
- Review the Swagger documentation at `/swagger` endpoint

## 🚀 Roadmap

- [x] Core ERP API endpoints
- [x] Authentication system
- [x] Business unit management
- [x] Product and inventory management
- [x] Procurement workflows
- [x] Financial management
- [x] Swagger API documentation
- [ ] Add more mock data responses
- [ ] Implement request validation middleware
- [ ] Add rate limiting
- [ ] Implement comprehensive logging
- [ ] Add health check endpoints
- [ ] Performance monitoring
- [ ] API versioning support

## 📊 API Statistics

- **Total Endpoints**: 25+ API modules
- **Authentication**: 10+ auth endpoints
- **Business Logic**: 15+ business operation endpoints
- **System APIs**: 3 system-level modules
- **Coverage**: Full ERP system simulation

---

Made with ❤️ using [Elysia](https://elysiajs.com/) + [Bun](https://bun.sh/)

**Version**: 1.0.50
**Last Updated**: December 2024