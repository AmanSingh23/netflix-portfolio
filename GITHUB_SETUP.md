# GitHub Setup & Deployment Guide

Follow these steps to push your project to GitHub and deploy it.

## Step 1: Initialize Git Repository

Open your terminal in the project directory and run:

```bash
cd /Users/amansingh/Documents/GitHub/Netflix-portfolio
git init
```

## Step 2: Configure Git (if not already done)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Add All Files

```bash
git add .
```

## Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Netflix Portfolio"
```

## Step 5: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `netflix-portfolio` (or your preferred name)
4. Description: "Netflix-style portfolio website built with Angular"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## Step 6: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 7: Deploy to Hosting Platform

### Option A: Netlify (Easiest - Recommended)

1. Go to [netlify.com](https://www.netlify.com) and sign up/login
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select your `netflix-portfolio` repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/netflix-portfolio`
6. Click **"Deploy site"**
7. Wait for deployment (usually 1-2 minutes)
8. Your site will be live at `https://your-site-name.netlify.app`

**Note:** Netlify will automatically deploy on every push to your main branch!

### Option B: Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Angular:
   - Framework Preset: Angular
   - Build Command: `npm run build`
   - Output Directory: `dist/netflix-portfolio`
5. Click **"Deploy"**
6. Your site will be live at `https://your-project.vercel.app`

### Option C: GitHub Pages

1. Install angular-cli-ghpages:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build with base href:
   ```bash
   npm run build -- --base-href="/netflix-portfolio/"
   ```
   (Replace `netflix-portfolio` with your repository name)

3. Deploy:
   ```bash
   npx angular-cli-ghpages --dir=dist/netflix-portfolio
   ```

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at `https://YOUR_USERNAME.github.io/netflix-portfolio/`

## Step 8: Future Updates

After making changes to your code:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

If using Netlify or Vercel, they will automatically redeploy!

## Troubleshooting

### Build Fails on Hosting Platform

1. Check Node.js version in `package.json` (should be compatible)
2. Make sure all dependencies are in `package.json`, not just `package-lock.json`
3. Check build logs on the hosting platform for specific errors

### 404 Errors on Routes

The configuration files (`.netlify.toml` and `vercel.json`) are already set up to handle Angular routing. If you still get 404s:

- **Netlify:** The `.netlify.toml` file should handle this automatically
- **Vercel:** The `vercel.json` file should handle this automatically
- **GitHub Pages:** Make sure you used the `--base-href` flag

### Assets Not Loading

Make sure all assets are in the `src/assets/` folder and referenced correctly in your code.

## Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

### Vercel
1. Go to Project settings → Domains
2. Add your domain
3. Configure DNS as instructed

## Need Help?

- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) file for more details
- Review hosting platform documentation
- Check Angular deployment guides
