# Janusoft (janusoft.in) — Shared AWS EC2 Deployment Guide

This guide details how **Janusoft** is deployed onto your **shared Amazon EC2 compute instance** alongside your other projects (`hackproof.online`, `travel.luxury.online`, `stay.luxury.online`).

---

## 🏗️ Architecture Overview

```text
Visitor
   │
   ▼
Cloudflare (DNS & SSL Edge, Orange-Cloud Proxied)
   │
   ▼
Shared AWS EC2 Compute (Elastic IP)
   │
   ├── Port 80/443: nginx-proxy (Docker Network: app_webnet)
   │      ├── hackproof.online  ──> hackproof-frontend:80
   │      ├── janusoft.in       ──> janusoft-web:80 (NEW)
   │      └── *.luxury.online   ──> luxury services
```

---

## 🌐 Step 1: Cloudflare DNS Record

1. Log into your Cloudflare dashboard for **`janusoft.in`**.
2. Add an **`A` record**:
   - **Type**: `A`
   - **Name**: `@` (root)
   - **IPv4 Address**: Your shared EC2 Elastic IP (e.g., the IP used for `hackproof.online`)
   - **Proxy Status**: **Proxied (Orange Cloud)**
3. Add a **`CNAME` record**:
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Target**: `janusoft.in`
   - **Proxy Status**: **Proxied (Orange Cloud)**
4. In Cloudflare **SSL/TLS settings**:
   - Set to **Full** (or **Flexible**).
   - Because `HTTPS_METHOD=noredirect` is configured in our `docker-compose.yml`, this prevents the 301 infinite redirect loop.

---

## 🚀 Option A: Automated GitHub Actions CI/CD (Recommended)

The deployment workflow is already configured at `.github/workflows/deploy.yml`.

To enable it on GitHub:
1. Go to your GitHub repository: [https://github.com/fireideas007/Janusoft/settings/secrets/actions](https://github.com/fireideas007/Janusoft/settings/secrets/actions)
2. Add the two secrets (identical to your `hackproof-online` repository):
   - `EC2_HOST`: The public IP or DNS of your shared EC2 instance
   - `EC2_SSH_KEY`: Your EC2 private key (`.pem` content)
3. Push any commit to `main` — GitHub Actions will build and deploy automatically!

---

## 🐳 Option B: Docker Compose on EC2 (Shared `app_webnet`)

To deploy manually via SSH on the EC2 instance:

```bash
# 1. On your local machine, build and package:
npm run build
tar -czf /tmp/janusoft.tar.gz dist Dockerfile docker-compose.yml nginx.conf package.json

# 2. Copy to the shared EC2 host:
scp /tmp/janusoft.tar.gz ec2-user@YOUR_EC2_IP:/tmp/

# 3. On the EC2 host:
ssh ec2-user@YOUR_EC2_IP
mkdir -p /home/ec2-user/app/janusoft
tar -zxf /tmp/janusoft.tar.gz -C /home/ec2-user/app/janusoft
cd /home/ec2-user/app/janusoft

# 4. Spin up the container:
docker compose build janusoft-web
docker compose up -d janusoft-web

# 5. Restart nginx-proxy to pick up the new virtual host:
docker restart nginx-proxy
```

---

## 📁 Option C: Native Nginx Routing (`multi-apps-routing.conf`)

If your shared EC2 instance serves static apps natively via `/etc/nginx/sites-available/multi-apps-routing.conf`:

1. Copy your built `dist/` folder to `/var/www/janusoft/dist`.
2. Append this server block to `/etc/nginx/sites-available/multi-apps-routing.conf`:

```nginx
# ------------------------------------------------------------------------------
# JANUSOFT CORPORATE IT (janusoft.in)
# ------------------------------------------------------------------------------
server {
    listen 80;
    server_name janusoft.in www.janusoft.in;

    root /var/www/janusoft/dist;
    index index.html;

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location / {
        try_files $uri $uri/ /index.html;
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    }
}
```

3. Test and reload Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```
