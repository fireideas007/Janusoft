#!/usr/bin/env bash
# ==============================================================================
# Janusoft (janusoft.in) One-Command Deploy to Shared AWS EC2
# ==============================================================================

set -euo pipefail

EC2_HOST="${EC2_HOST:-}"
EC2_KEY="${EC2_KEY:-}"

if [[ -z "$EC2_HOST" ]]; then
  echo "Usage: EC2_HOST=<your-ec2-ip> EC2_KEY=<path-to-pem> ./scripts/deploy-shared-aws.sh"
  exit 1
fi

SSH_CMD="ssh"
SCP_CMD="scp"
if [[ -n "$EC2_KEY" ]]; then
  SSH_CMD="ssh -i $EC2_KEY"
  SCP_CMD="scp -i $EC2_KEY"
fi

echo "==> [1/4] Building production assets with Vite..."
npm run build

echo "==> [2/4] Packaging Janusoft deployment bundle..."
TAR_PATH="/tmp/janusoft-deploy.tar.gz"
tar -czf "$TAR_PATH" dist Dockerfile docker-compose.yml nginx.conf package.json

echo "==> [3/4] Uploading to shared EC2 host ($EC2_HOST)..."
$SCP_CMD -o StrictHostKeyChecking=no "$TAR_PATH" "ec2-user@$EC2_HOST:/tmp/janusoft-deploy.tar.gz"
rm -f "$TAR_PATH"

echo "==> [4/4] Executing Docker update on shared EC2..."
$SSH_CMD -o StrictHostKeyChecking=no "ec2-user@$EC2_HOST" << 'EOF'
  set -euo pipefail
  APP_DIR="/home/ec2-user/app/janusoft"
  mkdir -p "$APP_DIR"
  tar -zxf /tmp/janusoft-deploy.tar.gz -C "$APP_DIR"
  rm -f /tmp/janusoft-deploy.tar.gz

  cd "$APP_DIR"
  echo "--> Building container in shared app_webnet network..."
  docker compose build janusoft-web
  docker rm -f janusoft-web || true
  docker compose up -d --remove-orphans janusoft-web

  echo "--> Restarting nginx-proxy to refresh virtual hosts..."
  docker restart nginx-proxy || true

  echo "==> SUCCESS: janusoft.in is live on shared AWS EC2!"
  docker ps | grep janusoft || true
EOF
