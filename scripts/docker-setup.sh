#!/bin/bash

# Docker Setup Script for Mock Backend Mobile
echo "🐳 Setting up Docker environment for Mock Backend Mobile..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    exit 1
fi

echo "✅ Docker is running"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from env.example..."
    cp env.example .env
    echo "✅ .env file created"
else
    echo "✅ .env file already exists"
fi

# Build Docker image
echo "🔨 Building Docker image..."
docker build -t mock-backend-mobile .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully"
else
    echo "❌ Failed to build Docker image"
    exit 1
fi

# Run container
echo "🚀 Starting container..."
docker-compose up -d api

if [ $? -eq 0 ]; then
    echo "✅ Container started successfully"
    echo ""
    echo "🌐 Application is running at:"
    echo "   API: http://localhost:3000"
    echo "   Swagger: http://localhost:3000/swagger"
    echo "   Health: http://localhost:3000/health"
    echo ""
    echo "📋 Useful commands:"
    echo "   make logs          - View logs"
    echo "   make stop          - Stop container"
    echo "   make test          - Test API"
    echo "   docker-compose down - Stop and remove containers"
else
    echo "❌ Failed to start container"
    exit 1
fi
