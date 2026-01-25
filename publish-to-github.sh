#!/bin/bash
# Script to publish Netflix Portfolio to GitHub

echo "🚀 Publishing Netflix Portfolio to GitHub..."
echo ""

# Check if .git exists and remove it if corrupted
if [ -d .git ]; then
    echo "⚠️  Existing .git directory found. Removing it..."
    rm -rf .git
fi

# Initialize git repository
echo "📦 Initializing Git repository..."
git init

# Add all files
echo "📝 Adding all files..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Netflix Portfolio with reusable components and production-ready code

- Netflix-style portfolio website built with Angular 17+
- Reusable components (Tab Navigation, Certification Card, Skill Card, Tag)
- Professional experience timeline
- Skills showcase with icons
- Certifications display
- Production-ready code with proper error handling and accessibility
- Ready for deployment to Netlify/Vercel"

# Rename branch to main
echo "🌿 Setting branch to main..."
git branch -M main

echo ""
echo "✅ Git repository initialized and ready!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   → Go to https://github.com/new"
echo "   → Repository name: netflix-portfolio"
echo "   → Description: Netflix-style portfolio website built with Angular"
echo "   → Choose Public or Private"
echo "   → DO NOT initialize with README, .gitignore, or license"
echo "   → Click 'Create repository'"
echo ""
echo "2. Connect and push to GitHub:"
echo "   → Copy the repository URL from GitHub"
echo "   → Run these commands (replace YOUR_USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Netlify (recommended):"
echo "   → Go to https://app.netlify.com"
echo "   → Add new site → Import from GitHub"
echo "   → Build command: npm run build"
echo "   → Publish directory: dist/netflix-portfolio"
echo ""
echo "📖 For detailed instructions, see GITHUB_SETUP.md"
