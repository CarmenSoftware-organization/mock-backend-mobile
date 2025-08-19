.PHONY: help install dev build start lint clean

# Default target
help:
	@echo "🚀 Mock Backend Mobile API - Available Commands:"
	@echo ""
	@echo "📦 Setup:"
	@echo "  install     Install dependencies"
	@echo "  clean       Clean project files"
	@echo ""
	@echo "🔄 Development:"
	@echo "  dev         Start development server"
	@echo "  build       Build for production"
	@echo "  start       Start production server"
	@echo ""
	@echo "🔍 Quality:"
	@echo "  lint        Run ESLint"
	@echo "  type-check  Run TypeScript type checking"
	@echo ""
	@echo "📱 Modern Website Features:"
	@echo "  - Responsive design for all devices"
	@echo "  - Modern animations and interactions"
	@echo "  - TailwindCSS 4.1.12 with custom utilities"
	@echo "  - shadcn/ui components"
	@echo "  - TypeScript 5.9.2 for type safety"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	bun install

# Start development server
dev:
	@echo "🚀 Starting development server..."
	bun run dev

# Build for production
build:
	@echo "🔨 Building for production..."
	bun run build

# Start production server
start:
	@echo "🚀 Starting production server..."
	bun run start

# Run ESLint
lint:
	@echo "🔍 Running ESLint..."
	bun run lint

# Type checking
type-check:
	@echo "🔍 Running TypeScript type checking..."
	bun run type-check

# Clean project files
clean:
	@echo "🧹 Cleaning project files..."
	rm -rf .next
	rm -rf node_modules
	rm -rf dist
	rm -rf build
	@echo "✨ Clean complete!"

# Quick setup for new developers
setup: install
	@echo "✅ Setup complete! Run 'make dev' to start development server"

# Show project info
info:
	@echo "📋 Project Information:"
	@echo "  Name: Mock Backend Mobile API"
	@echo "  Framework: Next.js 15.4.7"
	@echo "  Language: TypeScript 5.9.2"
	@echo "  Styling: TailwindCSS 4.1.12"
	@echo "  UI Components: shadcn/ui"
	@echo "  Package Manager: Bun 1.2.20"
	@echo "  React: 19.1.1"
	@echo ""
	@echo "🌐 Website Features:"
	@echo "  - Modern minimal design"
	@echo "  - Responsive layout"
	@echo "  - Interactive animations"
	@echo "  - API documentation"
	@echo "  - Latest Next.js 15 features"
