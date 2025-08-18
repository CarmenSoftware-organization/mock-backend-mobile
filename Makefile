.PHONY: help build run run-dev stop clean logs test setup docker-setup

# Default target
help:
	@echo "Available commands:"
	@echo "  setup         - Initial project setup"
	@echo "  docker-setup  - Setup Docker environment"
	@echo "  build         - Build Docker image"
	@echo "  run           - Run production container"
	@echo "  run-dev       - Run development container"
	@echo "  stop          - Stop all containers"
	@echo "  clean         - Remove containers and images"
	@echo "  logs          - Show container logs"
	@echo "  test          - Test API endpoints"

# Initial project setup
setup:
	@echo "🚀 Setting up Mock Backend Mobile project..."
	bun install
	@echo "✅ Setup completed!"

# Docker environment setup
docker-setup:
	@echo "🐳 Setting up Docker environment..."
	@if [ -f "scripts/docker-setup.sh" ]; then \
		./scripts/docker-setup.sh; \
	else \
		echo "❌ Docker setup script not found"; \
		exit 1; \
	fi

# Build Docker image
build:
	docker build -t mock-backend-mobile .

# Run production container
run:
	docker-compose up -d api

# Run development container
run-dev:
	docker-compose --profile dev up -d api-dev

# Stop all containers
stop:
	docker-compose down

# Clean up containers and images
clean:
	docker-compose down -v --rmi all
	docker system prune -f

# Show container logs
logs:
	docker-compose logs -f api

# Test API endpoints
test:
	@echo "Testing API endpoints..."
	@echo "Health check:"
	@curl -s http://localhost:3000/health | jq .
	@echo "\nAPI info:"
	@curl -s http://localhost:3000/ | jq .
	@echo "\nUsers list:"
	@curl -s http://localhost:3000/api/users | jq .

# Build and run in one command
deploy: build run
	@echo "Application deployed successfully!"
	@echo "API available at: http://localhost:3000"
	@echo "Swagger docs at: http://localhost:3000/swagger"
