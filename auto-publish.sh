#!/bin/bash
# Automated script to prepare and publish Netflix Portfolio to GitHub

set -e  # Exit on error

echo "🚀 Netflix Portfolio - GitHub Publishing Script"
echo "================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Clean up any existing .git
if [ -d .git ]; then
    echo -e "${YELLOW}⚠️  Existing .git directory found. Removing it...${NC}"
    rm -rf .git
fi

# Step 2: Initialize Git
echo -e "${BLUE}📦 Step 1: Initializing Git repository...${NC}"
git init

# Step 3: Configure Git (if not already configured globally)
echo -e "${BLUE}⚙️  Step 2: Configuring Git...${NC}"
if ! git config user.name > /dev/null 2>&1; then
    echo "Git user.name not set. Please configure:"
    read -p "Enter your name: " git_name
    git config user.name "$git_name"
fi

if ! git config user.email > /dev/null 2>&1; then
    echo "Git user.email not set. Please configure:"
    read -p "Enter your email: " git_email
    git config user.email "$git_email"
fi

# Step 4: Add all files
echo -e "${BLUE}📝 Step 3: Adding all files to Git...${NC}"
git add .

# Step 5: Create initial commit
echo -e "${BLUE}💾 Step 4: Creating initial commit...${NC}"
git commit -m "Initial commit: Netflix Portfolio

✨ Features:
- Netflix-style portfolio website built with Angular 17+
- Reusable components (Tab Navigation, Certification Card, Skill Card, Tag)
- Professional experience timeline with animations
- Skills showcase with dynamic icons
- Certifications display with filtering
- Production-ready code with error handling and accessibility
- Responsive design for all devices
- Ready for deployment to Netlify/Vercel

📦 Includes:
- Complete Angular application
- SCSS styling with Netflix theme
- Reusable component library
- Deployment configurations
- Comprehensive documentation"

# Step 6: Rename branch to main
echo -e "${BLUE}🌿 Step 5: Setting branch to main...${NC}"
git branch -M main

echo ""
echo -e "${GREEN}✅ Git repository initialized successfully!${NC}"
echo ""
echo "================================================"
echo -e "${YELLOW}📋 NEXT STEPS - Follow these instructions:${NC}"
echo "================================================"
echo ""
echo "1️⃣  CREATE GITHUB REPOSITORY:"
echo "   → Go to: https://github.com/new"
echo "   → Repository name: netflix-portfolio"
echo "   → Description: Netflix-style portfolio website built with Angular 17+"
echo "   → Choose: Public or Private"
echo "   → ⚠️  DO NOT check 'Add a README file' (we already have one)"
echo "   → Click: 'Create repository'"
echo ""
echo "2️⃣  CONNECT AND PUSH:"
echo "   After creating the repository, run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git"
echo "   git push -u origin main"
echo ""
echo "   (Replace YOUR_USERNAME with your actual GitHub username)"
echo ""
echo "3️⃣  AUTHENTICATION:"
echo "   When prompted for credentials:"
echo "   → Username: Your GitHub username"
echo "   → Password: Use a Personal Access Token (not your password)"
echo ""
echo "   To create a token:"
echo "   → Go to: https://github.com/settings/tokens"
echo "   → Generate new token (classic)"
echo "   → Select 'repo' scope"
echo "   → Copy and use as password"
echo ""
echo "4️⃣  DEPLOY TO NETLIFY (Recommended):"
echo "   → Go to: https://app.netlify.com"
echo "   → Add new site → Import from GitHub"
echo "   → Build command: npm run build"
echo "   → Publish directory: dist/netflix-portfolio"
echo ""
echo "================================================"
echo -e "${GREEN}🎉 Your code is ready to push!${NC}"
echo "================================================"
