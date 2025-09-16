#!/bin/bash

echo "🚀 Deploying to GitHub (Triggers GitHub Actions)..."
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

# Push to GitHub (this triggers GitHub Actions)
echo ""
echo "📤 Pushing to GitHub..."
git push origin main
if [ $? -eq 0 ]; then
    echo "✅ GitHub push successful"
    echo ""
    echo "🎉 Deployment triggered!"
    echo "📋 GitHub Actions will handle the build and deployment automatically"
    echo "🔍 Check deployment status at:"
    echo "   https://github.com/bsimkins11-source/transparent-agent-hub/actions"
    echo ""
    echo "⏳ The deployment process includes:"
    echo "   • Frontend build and test"
    echo "   • Backend deployment to GCP Cloud Run"
    echo "   • Automatic environment configuration"
else
    echo "❌ GitHub push failed"
    exit 1
fi
