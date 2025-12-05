# Deployment Guide

This project uses GitHub Actions to automatically deploy to Heroku whenever code is pushed to the `main` branch.

## Setup Instructions

### 1. Get Your Heroku API Key

1. Log in to your Heroku account at https://dashboard.heroku.com
2. Go to Account Settings
3. Scroll down to "API Key" section
4. Click "Reveal" to show your API key
5. Copy the API key

### 2. Get Your Heroku App Name

Your Heroku app name is the name you chose when creating the app (e.g., `my-react-portfolio1-fd9874072225`). You can find it in:
- Your Heroku dashboard URL: `https://dashboard.heroku.com/apps/YOUR_APP_NAME`
- Or run: `heroku apps:info` in your terminal

### 3. Add GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following secrets:

   - **Name:** `HEROKU_API_KEY`
     **Value:** Your Heroku API key (from step 1)

   - **Name:** `HEROKU_APP_NAME`
     **Value:** Your Heroku app name (from step 2)

### 4. Push to Main Branch

Once the secrets are configured, every push to the `main` branch will automatically:
- Install dependencies
- Build the project
- Deploy to Heroku

## Workflow File

The deployment workflow is located at: `.github/workflows/deploy.yml`

## Manual Deployment

If you need to deploy manually, you can still use:

```bash
git push heroku main
```

## Troubleshooting

- **Build fails:** Check the GitHub Actions logs in the "Actions" tab of your repository
- **Deployment fails:** Verify your Heroku API key and app name are correct in GitHub secrets
- **App crashes on Heroku:** Check Heroku logs with `heroku logs --tail`

