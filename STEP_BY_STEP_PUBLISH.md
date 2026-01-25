# 📤 Step-by-Step: Publish to GitHub

## ⚠️ Important: Permission Issue Detected

If you get permission errors, you may need to:
1. Close any IDE/editors that have the project open
2. Or run commands with `sudo` (not recommended)
3. Or manually delete the `.git` folder first

---

## 🚀 Complete Publishing Process

### STEP 1: Prepare Local Repository

Open Terminal and run:

```bash
cd /Users/amansingh/Documents/GitHub/Netflix-portfolio

# Remove existing .git if it exists (may need to close IDE first)
rm -rf .git

# Initialize Git
git init

# Add all files
git add .

# Create commit
git commit -m "Initial commit: Netflix Portfolio with reusable components and production-ready code"

# Set branch to main
git branch -M main
```

### STEP 2: Create GitHub Repository

**You need to do this on GitHub.com:**

1. **Open your browser** and go to: **https://github.com/new**

2. **Fill in the form:**
   - **Repository name:** `netflix-portfolio`
   - **Description:** `Netflix-style portfolio website built with Angular 17+`
   - **Visibility:** Choose **Public** (recommended) or **Private**
   - **⚠️ IMPORTANT:** Do NOT check any of these:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
   - (We already have these files)

3. **Click:** "Create repository"

4. **After creating**, GitHub will show you a page with commands. **DON'T run them yet** - we'll use the commands below.

### STEP 3: Connect and Push

**Back in Terminal**, run these commands:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
# Example: if your GitHub URL is github.com/johndoe, use "johndoe"
git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git

# Push to GitHub
git push -u origin main
```

### STEP 4: Authentication

When you run `git push`, you'll be prompted for credentials:

**Username:** Your GitHub username

**Password:** ⚠️ **DO NOT use your GitHub password!** Use a Personal Access Token instead.

#### How to Create Personal Access Token:

1. Go to: **https://github.com/settings/tokens**
2. Click: **"Generate new token"** → **"Generate new token (classic)"**
3. **Token name:** `netflix-portfolio-push`
4. **Expiration:** Choose 90 days or No expiration
5. **Select scopes:** Check **`repo`** (this gives full repository access)
6. Scroll down and click: **"Generate token"**
7. **⚠️ IMPORTANT:** Copy the token immediately (you won't see it again!)
8. **Use this token as your password** when pushing

### STEP 5: Verify

1. Go to: `https://github.com/YOUR_USERNAME/netflix-portfolio`
2. You should see all your files
3. Check that these files are present:
   - ✅ README.md
   - ✅ .gitignore
   - ✅ package.json
   - ✅ src/ folder
   - ✅ All other project files

---

## 🎉 Success! Now Deploy

### Deploy to Netlify (Recommended - Free & Easy)

1. **Go to:** https://app.netlify.com
2. **Sign up/Login** (you can use your GitHub account)
3. **Click:** "Add new site" → "Import an existing project"
4. **Choose:** GitHub
5. **Authorize** Netlify to access your repositories
6. **Select:** `netflix-portfolio` repository
7. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/netflix-portfolio`
8. **Click:** "Deploy site"
9. **Wait:** 1-2 minutes
10. **🎉 Done!** Your site is live at `https://your-site-name.netlify.app`

**Bonus:** Netlify will automatically deploy every time you push to GitHub!

---

## 🔧 Troubleshooting

### "Operation not permitted" Error

**Solution 1:** Close your IDE/editor and try again

**Solution 2:** Manually delete .git folder
```bash
# Close IDE first, then:
cd /Users/amansingh/Documents/GitHub/Netflix-portfolio
rm -rf .git
# Then run git init again
```

**Solution 3:** Check file permissions
```bash
ls -la /Users/amansingh/Documents/GitHub/Netflix-portfolio/.git
```

### "Authentication failed" Error

- Make sure you're using a **Personal Access Token**, not your password
- Check that the token has `repo` scope
- Verify your GitHub username is correct

### "Repository not found" Error

- Make sure you created the repository on GitHub first
- Check that the repository name matches exactly
- Verify your username in the URL is correct

### "Push rejected" Error

If the repository was initialized with a README:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 📋 Quick Command Reference

```bash
# Full sequence (after creating repo on GitHub):
cd /Users/amansingh/Documents/GitHub/Netflix-portfolio
rm -rf .git
git init
git add .
git commit -m "Initial commit: Netflix Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/netflix-portfolio.git
git push -u origin main
```

---

## ✅ Checklist

- [ ] Removed existing .git folder (if any)
- [ ] Initialized new Git repository
- [ ] Added all files
- [ ] Created initial commit
- [ ] Created repository on GitHub.com
- [ ] Connected local repo to GitHub
- [ ] Created Personal Access Token
- [ ] Pushed code to GitHub
- [ ] Verified files on GitHub
- [ ] Deployed to Netlify/Vercel

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the error message carefully
2. Review the troubleshooting section above
3. Make sure all prerequisites are met
4. Try the manual steps if scripts fail

Good luck! 🚀
