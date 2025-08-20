.PHONY: help dev dev-api build start start-api clean install

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	bun install

dev: ## Run Next.js development server
	bun run dev

dev-api: ## Run Elysia API development server
	bun run dev:api

build: ## Build Next.js application
	bun run build

start: ## Start Next.js production server
	bun run start

start-api: ## Start Elysia API production server
	bun run start:api

clean: ## Clean build artifacts and dependencies
	bun run clean

test: ## Run tests
	bun test

lint: ## Run ESLint
	bun run lint

format: ## Format code with Prettier
	bun run format

# Elysia specific commands
api-health: ## Check Elysia API health
	curl -s http://localhost:3001/health | jq .

api-users: ## Get users from Elysia API
	curl -s http://localhost:3001/api/users | jq .

api-login: ## Login to Elysia API (admin/password)
	curl -s http://localhost:3001/api/auth/login \
		-H "Content-Type: application/json" \
		-d '{"username": "admin", "password": "password"}' | jq .

# Combined development
dev-all: ## Run both Next.js and Elysia servers
	@echo "Starting both servers..."
	@make dev-api &
	@make dev &
	@wait
