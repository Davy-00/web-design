#!/bin/bash

# Resume Website Deployment Script
# This script helps deploy your resume website to GitHub Pages

echo "🚀 Resume Website Deployment Script"
echo "=================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "⚠️  Git repository not found. Initializing..."
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Update resume website"
fi
git commit -m "$commit_message"

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote repository found."
    echo "Please add your GitHub repository URL:"
    read -p "Enter GitHub repository URL: " repo_url
    git remote add origin "$repo_url"
    echo "✅ Remote repository added"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Click on 'Settings' tab"
echo "3. Scroll down to 'Pages' section"
echo "4. Select 'Deploy from a branch'"
echo "5. Choose 'main' branch and '/ (root)' folder"
echo "6. Click 'Save'"
echo ""
echo "🌐 Your site will be available at:"
echo "https://yourusername.github.io/repository-name"
echo ""
echo "⏰ Note: It may take a few minutes for the site to become available." 