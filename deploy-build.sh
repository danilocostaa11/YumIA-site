#!/bin/bash

# Build the application
echo "Building application..."
npm run build

# Move static files from dist/public to dist for deployment
echo "Reorganizing files for deployment..."
if [ -d "dist/public" ]; then
    cp -r dist/public/* dist/
    rm -rf dist/public
    echo "Files successfully moved to dist/ for deployment"
else
    echo "No dist/public directory found, build may have failed"
    exit 1
fi

echo "Deployment build complete!"
echo "Files in dist/:"
ls -la dist/