#!/bin/bash

# Build the application
echo "Building application..."
npm run build

# Copy static files to server/public for production server and dist/ for static deployment
echo "Organizing files for deployment..."
if [ -d "dist/public" ]; then
    # For static deployment (copy to dist/)
    cp -r dist/public/* dist/
    
    # For production server (copy to server/public/)
    mkdir -p server/public
    cp -r dist/public/* server/public/
    
    # Clean up the original dist/public
    rm -rf dist/public
    
    echo "Files organized for both static and server deployment"
    echo "Static files in dist/ for static deployment"
    echo "Static files in server/public/ for production server"
else
    echo "No dist/public directory found, build may have failed"
    exit 1
fi

echo "Deployment build complete!"
echo "Files in dist/:"
ls -la dist/