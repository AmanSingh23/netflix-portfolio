# 📤 How to Publish Your Repository to GitHub

## Quick Method (Recommended)

### Step 1: Run the Setup Script

Open Terminal in your project directory and run:

```bash
cd /Users/amansingh/Documents/GitHub/Netflix-portfolio
./publish-to-github.sh
```

This will:
- Initialize Git repository
- Add all files
- Create initial commit
- Set branch to main

### Step 2: Create GitHub Repository

1. **Go to GitHub:** https://github.com/new
2. **Repository name:** `netflix-portfolio` (or your preferred name)
3. **Description:** `Netflix-style portfolio website built with Angular 17+`
4. **Visibility:** Choose Public or Private
5. **Important:** DO NOT check "Add a README file", "Add .gitignore", or "Choose a license" (we already have these)
6. **Click:** "Create repository"

### Step 3: Connect and Push

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git
git push -u origin main
```

You'll be prompted for your GitHub credentials. Use:
- **Username:** Your GitHub username
- **Password:** Use a Personal Access Token (not your password)

### Step 4: Get Personal Access Token (if needed)

If GitHub asks for a token instead of password:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: `netflix-portfolio-push`
4. Select scopes: Check `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token and use it as your password when pushing

---

## Manual Method (If script doesn't work)

If you encounter permission issues, run these commands manually:

```bash
# Navigate to project
cd /Users/amansingh/Documents/GitHub/Netflix-portfolio

# Remove existing .git if corrupted
rm -rf .git

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Netflix Portfolio"

# Set branch to main
git branch -M main

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git

# Push to GitHub
git push -u origin main
```

---

## After Publishing

### Verify on GitHub

1. Go to your repository: `https://github.com/YOUR_USERNAME/netflix-portfolio`
2. You should see all your files
3. Check that README.md, .gitignore, and other config files are there

### Deploy to Netlify (Recommended)

1. **Go to:** https://app.netlify.com
2. **Sign up/Login** (can use GitHub account)
3. **Click:** "Add new site" → "Import an existing project"
4. **Choose:** GitHub
5. **Authorize** Netlify to access your repositories
6. **Select:** `netflix-portfolio` repository
7. **Configure build:**
   - Build command: `npm run build`
   - Publish directory: `dist/netflix-portfolio`
8. **Click:** "Deploy site"
9. **Wait:** 1-2 minutes for deployment
10. **Done!** Your site is live at `https://your-site-name.netlify.app`

### Deploy to Vercel (Alternative)

1. **Go to:** https://vercel.com
2. **Sign up/Login** (can use GitHub account)
3. **Click:** "Add New Project"
4. **Import** your `netflix-portfolio` repository
5. **Vercel auto-detects Angular:**
   - Framework: Angular
   - Build Command: `npm run build`
   - Output Directory: `dist/netflix-portfolio`
6. **Click:** "Deploy"
7. **Done!** Your site is live at `https://your-project.vercel.app`

---

## Troubleshooting

### Permission Denied Error

If you get "Operation not permitted":
```bash
# Check directory permissions
ls -la /Users/amansingh/Documents/GitHub/Netflix-portfolio

# If needed, fix permissions
chmod -R u+w /Users/amansingh/Documents/GitHub/Netflix-portfolio
```

### Git Not Found

Install Git:
```bash
# macOS (if not installed)
xcode-select --install
```

### Authentication Failed

- Use Personal Access Token instead of password
- Make sure token has `repo` scope
- Check your GitHub username is correct

### Push Rejected

If you get "push rejected":
```bash
# Force push (only if you're sure)
git push -u origin main --force
```

---

## Next Steps After Publishing

1. ✅ **Verify repository** is on GitHub
2. ✅ **Deploy to Netlify/Vercel** for hosting
3. ✅ **Set up custom domain** (optional)
4. ✅ **Share your portfolio** URL

---

## Need Help?

- **GitHub Setup:** See `GITHUB_SETUP.md`
- **Deployment:** See `DEPLOYMENT.md`
- **Quick Start:** See `QUICK_START.md`
