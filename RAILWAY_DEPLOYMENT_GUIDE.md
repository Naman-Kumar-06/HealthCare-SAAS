# Railway.com Deployment Guide

## Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account
- Railway.com account (free tier available)
- Your project code pushed to a GitHub repository

### Step 1: Prepare Your Project
Your project is already configured with the necessary files:
- ✅ `railway.json` - Railway deployment configuration
- ✅ `nixpacks.toml` - Build configuration for Nixpacks
- ✅ `package.json` - Node.js dependencies and scripts

### Step 2: Push to GitHub
1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Healthcare portfolio"
   ```

2. Create a new repository on GitHub
3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy on Railway
1. Go to [railway.app](https://railway.app)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your healthcare portfolio repository
6. Railway will automatically detect it's a Node.js project

### Step 4: Configure Environment Variables (if needed)
If your project requires environment variables:
1. Go to your project dashboard on Railway
2. Click on the "Variables" tab
3. Add any required environment variables
4. For this portfolio project, no additional variables are needed

### Step 5: Custom Domain (Optional)
1. In your Railway project dashboard
2. Go to "Settings" → "Domains"
3. Add your custom domain or use the provided Railway domain

### Step 6: Monitor Deployment
1. Check the "Deployments" tab to monitor build progress
2. View logs if there are any issues
3. Once deployed, click the provided URL to view your live site

## Build Configuration Details

### Railway Configuration (`railway.json`)
- Uses Nixpacks builder for Node.js
- Starts with `npm run start`
- Health check on root path `/`
- Auto-restart on failure

### Build Process (`nixpacks.toml`)
- Node.js 20.x runtime
- NPM 9.x package manager
- Runs `npm ci` for clean install
- Builds with `npm run build`
- Starts production server

## Troubleshooting

### Common Issues:
1. **Build fails**: Check that all dependencies are in `package.json`
2. **Start command fails**: Ensure `npm run start` works locally
3. **Port issues**: Railway automatically assigns PORT environment variable

### Logs Access:
- View deployment logs in Railway dashboard
- Monitor runtime logs in the "Logs" section

## Cost Information
- Railway offers a free tier with generous limits
- Upgrade to Pro plan for production applications
- Pricing is usage-based (CPU time, bandwidth, storage)

## Domain Information
- Free `.railway.app` subdomain included
- Custom domains available on all plans
- HTTPS automatically enabled

Your healthcare portfolio will be live at: `https://your-project-name.up.railway.app`