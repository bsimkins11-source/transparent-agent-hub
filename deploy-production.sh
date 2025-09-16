#!/bin/bash

echo "🚀 Deploying to Vercel via GitHub Actions..."
echo ""

# Check if we have uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Staging all changes..."
    git add .
    
    echo "💬 Enter commit message:"
    read commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    git commit -m "$commit_message"
    echo "✅ Changes committed"
else
    echo "✅ No changes to commit"
fi

# Push to GitHub (this triggers Vercel deployment)
echo ""
echo "📤 Pushing to GitHub..."
git push origin main
if [ $? -eq 0 ]; then
    echo "✅ GitHub push successful"
    echo ""
    echo "🎉 Vercel deployment triggered!"
    echo "📋 GitHub Actions will build and deploy to Vercel automatically"
    echo "🔍 Check deployment status at:"
    echo "   https://github.com/bsimkins11-source/transparent-agent-hub/actions"
    echo ""
    echo "⏳ The deployment process includes:"
    echo "   • Frontend build with Vite"
    echo "   • Deploy to Vercel with proper video headers"
    echo "   • Automatic environment configuration"
    echo ""
    echo "🌐 Your app will be available at:"
    echo "   https://transparent-agent-hub.vercel.app"
else
    echo "❌ GitHub push failed"
    exit 1
fi
