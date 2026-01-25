# Deployment Guide

This guide will help you deploy your Netflix Portfolio to various hosting platforms.

## Prerequisites

1. Build the project for production:
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with the production-ready files.

## Hosting Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up/Login** to [Netlify](https://www.netlify.com/)

2. **Connect to GitHub:**
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist/netflix-portfolio` (or `dist/` depending on your Angular config)
     - **Base directory:** (leave empty)

3. **Environment Variables** (if needed):
   - Go to Site settings → Environment variables
   - Add any required variables

4. **Deploy:**
   - Netlify will automatically deploy on every push to your main branch
   - You'll get a free `your-site.netlify.app` URL

### Option 2: Vercel

1. **Sign up/Login** to [Vercel](https://vercel.com/)

2. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   Or connect your GitHub repository through the Vercel dashboard.

4. **Configure:**
   - Framework Preset: Angular
   - Build Command: `npm run build`
   - Output Directory: `dist/netflix-portfolio` (check your `angular.json`)

### Option 3: GitHub Pages

1. **Install angular-cli-ghpages:**
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. **Build for production:**
   ```bash
   npm run build -- --base-href="/your-repo-name/"
   ```

3. **Deploy:**
   ```bash
   npx angular-cli-ghpages --dir=dist/netflix-portfolio
   ```

4. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Select source: `gh-pages` branch
   - Your site will be available at `https://yourusername.github.io/your-repo-name/`

### Option 4: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login:**
   ```bash
   firebase login
   ```

3. **Initialize:**
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Public directory: `dist/netflix-portfolio`
   - Configure as single-page app: Yes
   - Set up automatic builds: Yes

4. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## Build Configuration

Make sure your `angular.json` has the correct output path. Check:
```json
"outputPath": "dist/netflix-portfolio"
```

If it's different, update the deployment commands accordingly.

## Custom Domain

All hosting platforms support custom domains:
- **Netlify:** Site settings → Domain management
- **Vercel:** Project settings → Domains
- **GitHub Pages:** Repository settings → Pages
- **Firebase:** Hosting → Add custom domain

## Continuous Deployment

All platforms support automatic deployments:
- Push to `main` or `master` branch
- Platform automatically builds and deploys
- Get instant preview URLs for pull requests

## Troubleshooting

### 404 Errors on Routes
If you get 404 errors when refreshing pages, configure redirects:

**Netlify:** Create `_redirects` file in `src/`:
```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Build Errors
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check `angular.json` configuration
