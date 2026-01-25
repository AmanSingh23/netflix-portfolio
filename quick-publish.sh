#!/bin/bash
# Quick publish script - handles permission issues

echo "🚀 Publishing Netflix Portfolio to GitHub"
echo ""

# Try to remove .git if it exists
if [ -d .git ]; then
    echo "⚠️  Found existing .git directory"
    echo "💡 If you get permission errors, close your IDE/editor and try again"
    rm -rf .git 2>/dev/null || {
        echo "❌ Cannot remove .git - please close your IDE/editor and run this script again"
        exit 1
    }
fi

# Initialize and commit
echo "📦 Initializing Git..."
git init
git add .
git commit -m "Initial commit: Netflix Portfolio with reusable components"
git branch -M main

echo ""
echo "✅ Local repository ready!"
echo ""
echo "📋 Next:"
echo "1. Create repo at: https://github.com/new"
echo "2. Name: netflix-portfolio"
echo "3. Then run:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git"
echo "   git push -u origin main"
