#!/bin/bash

# =============================================================================
# Simple Senior Fitness - Deploy Script
# Deploys the Astro static site to Hetzner server via rsync
# =============================================================================

set -e  # Exit on any error

# -----------------------------------------------------------------------------
# Configuration - UPDATE THESE VALUES
# -----------------------------------------------------------------------------
SERVER_USER="root"                                # SSH username
SERVER_HOST="95.216.154.150"                      # Server IP or hostname
SERVER_PATH="/var/www/simpleseniorfitness"   # Path on server
SSH_KEY=""                                   # Optional: path to SSH key (e.g., ~/.ssh/id_rsa)

# -----------------------------------------------------------------------------
# Colors for output
# -----------------------------------------------------------------------------
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# -----------------------------------------------------------------------------
# Functions
# -----------------------------------------------------------------------------
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

# -----------------------------------------------------------------------------
# Pre-flight checks
# -----------------------------------------------------------------------------
echo ""
echo "============================================="
echo "  Simple Senior Fitness - Deploy Script"
echo "============================================="
echo ""

# Check if configuration is set
if [ "$SERVER_HOST" == "your-server-ip" ]; then
    log_error "Please configure SERVER_HOST in deploy.sh"
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    log_error "npm is not installed"
fi

# Check if rsync is installed
if ! command -v rsync &> /dev/null; then
    log_error "rsync is not installed"
fi

# -----------------------------------------------------------------------------
# Build
# -----------------------------------------------------------------------------
log_info "Installing dependencies..."
npm install

log_info "Building production site..."
npm run build

if [ ! -d "dist" ]; then
    log_error "Build failed - dist folder not found"
fi

log_success "Build completed!"

# -----------------------------------------------------------------------------
# Deploy
# -----------------------------------------------------------------------------
log_info "Deploying to ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}..."

# Build rsync command
RSYNC_CMD="rsync -avz --delete --progress"

# Add SSH key if specified
if [ -n "$SSH_KEY" ]; then
    RSYNC_CMD="$RSYNC_CMD -e \"ssh -i $SSH_KEY\""
fi

# Execute rsync
$RSYNC_CMD dist/ ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/

log_success "Deploy completed!"

# -----------------------------------------------------------------------------
# Summary
# -----------------------------------------------------------------------------
echo ""
echo "============================================="
echo -e "${GREEN}  Deployment Successful!${NC}"
echo "============================================="
echo ""
echo "  Site: https://simpleseniorfitness.com"
echo "  Server: ${SERVER_HOST}"
echo "  Path: ${SERVER_PATH}"
echo ""
