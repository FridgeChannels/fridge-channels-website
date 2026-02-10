#!/bin/bash

# Ensure docker is running
if ! docker info > /dev/null 2>&1; then
  echo "Error: Docker is not running."
  exit 1
fi

echo "Building and starting the Docker container..."
docker-compose up --build -d

echo "Container started! Application should be available at http://localhost:3000"
docker-compose logs -f
