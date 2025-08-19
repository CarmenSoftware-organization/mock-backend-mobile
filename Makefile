.PHONY: help install dev build start lint clean test

# Default target
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies with bun"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build for production"
	@echo "  make start      - Start production server"
	@echo "  make lint       - Run ESLint"
	@echo "  make clean      - Clean project files"
	@echo "  make test       - Run tests (if configured)"

# Install dependencies
install:
	@echo "Installing dependencies with bun..."
	bun install

# Start development server
dev:
	@echo "Starting development server..."
	bun run dev

# Build for production
build:
	@echo "Building for production..."
	bun run build

# Start production server
start:
	@echo "Starting production server..."
	bun run start

# Run ESLint
lint:
	@echo "Running ESLint..."
	bun run lint

# Clean project files
clean:
	@echo "Cleaning project files..."
	bun run clean

# Run tests (placeholder)
test:
	@echo "Tests not configured yet. Use 'bun test' when ready."
