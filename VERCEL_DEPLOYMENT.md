# Deploying Pahaad Dialogue to Vercel

This guide will help you deploy your Pahaad Dialogue news website to Vercel.

## Quick Deploy Options

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Sign in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or sign in with your GitHub, GitLab, or Bitbucket account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Choose one of these methods:
     - **Import Git Repository**: Connect your GitHub/GitLab/Bitbucket repo
     - **Deploy from CLI**: Use the Vercel CLI (see Option 2)

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `.` (leave as default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for your site to build
   - Your site will be live at `your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Your Project Directory**
   ```bash
   vercel
   ```
   Follow the prompts to configure your deployment.

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Project Configuration

This project is already configured for Vercel deployment:

- ✅ `vercel.json` configuration file included
- ✅ Next.js 14.2.3 (fully compatible with Vercel)
- ✅ All dependencies listed in `package.json`
- ✅ Static assets in `/public` directory
- ✅ Modern Link components (Next.js 13+ pattern)

## Environment Variables

Currently, this project doesn't require any environment variables. If you add any in the future:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables (e.g., API keys, database URLs)

## Custom Domain

To add your own domain:

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `paahaaddialogue.com`)
4. Follow the DNS configuration instructions

## Automatic Deployments

Once connected to a Git repository, Vercel automatically:
- Deploys your main/master branch to production
- Creates preview deployments for pull requests
- Rebuilds when you push changes

## Post-Deployment Checklist

After deployment:
- ✅ Check that all images load correctly
- ✅ Test navigation between pages
- ✅ Verify article pages display properly
- ✅ Test on mobile devices
- ✅ Check meta tags and SEO

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

## Project Structure

```
pahad-dialogue/
├── articles/           # Markdown articles
├── pages/             # Next.js pages
│   ├── _app.js       # App wrapper with layout
│   ├── index.js      # Homepage
│   └── articles/     # Article pages
├── public/           # Static assets
│   └── assets/       # Images, logos
├── styles/           # CSS files
├── package.json      # Dependencies
├── vercel.json       # Vercel configuration
└── README.md         # Project documentation
```

---

Your site is ready to deploy! Just follow the steps above and your Pahaad Dialogue news platform will be live on Vercel in minutes.
