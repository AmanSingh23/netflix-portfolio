# Quick Start Guide - GitHub & Deployment

## 🚀 Quick Setup (5 minutes)

### 1. Initialize Git & Push to GitHub

```bash
# Run the setup script
./setup-git.sh

# OR manually:
git init
git add .
git commit -m "Initial commit: Netflix Portfolio"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `netflix-portfolio`
3. Click **"Create repository"** (don't initialize with README)

### 3. Connect & Push

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Netlify (Easiest)

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/netflix-portfolio`
5. Click **"Deploy site"**
6. Done! Your site is live 🎉

## 📚 Detailed Guides

- **Full GitHub Setup:** See [GITHUB_SETUP.md](./GITHUB_SETUP.md)
- **Deployment Options:** See [DEPLOYMENT.md](./DEPLOYMENT.md)

## ✅ What's Already Configured

- ✅ `.gitignore` - Excludes node_modules, dist, etc.
- ✅ `.netlify.toml` - Netlify configuration
- ✅ `vercel.json` - Vercel configuration
- ✅ `README.md` - Project documentation
- ✅ All deployment files ready

## 🎯 Recommended: Netlify

**Why Netlify?**
- ✅ Free tier with generous limits
- ✅ Automatic deployments on every push
- ✅ Custom domain support
- ✅ HTTPS by default
- ✅ Easy to set up (5 minutes)

## 🔄 Future Updates

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Netlify/Vercel will automatically redeploy! 🚀
