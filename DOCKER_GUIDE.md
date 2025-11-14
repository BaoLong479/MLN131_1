# 🐳 Docker Deployment Guide

## 📋 Prerequisites

- Docker Desktop installed (Windows/Mac) or Docker Engine (Linux)
- Docker Compose v2.0+
- OpenAI API key (see API_KEYS_GUIDE.md)

## 🚀 Quick Start

### 1. Setup Environment Variables

Copy the example env file:
```bash
cp .env.example .env
```

Edit `.env` with your API keys:
```env
OPENAI_API_KEY=sk-proj-your-key-here
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4o-mini
PHOTO_RESTORE_API_KEY=sk-proj-your-key-here
PHOTO_RESTORE_BASE_URL=https://api.openai.com/v1
PHOTO_RESTORE_MODEL=dall-e-3
```

### 2. Build and Run

```bash
# Build and start all services
docker-compose up -d --build

# Or use newer docker compose command
docker compose up -d --build
```

### 3. Access the Application

Open browser and go to:
```
http://localhost:36969
```

## 🔧 Docker Commands

### Start Services
```bash
docker-compose up -d
```

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
# All services
docker-compose logs -f

# Frontend only
docker-compose logs -f frontend

# Backend only
docker-compose logs -f backend
```

### Restart Services
```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart backend
docker-compose restart frontend
```

### Rebuild After Code Changes
```bash
docker-compose down
docker-compose up -d --build
```

### Check Status
```bash
docker-compose ps
```

### Remove Everything (including volumes)
```bash
docker-compose down -v
docker system prune -a
```

## 📦 Container Architecture

```
Host Machine (Port 36969)
    ↓
┌─────────────────────────────────┐
│   Frontend Container (Nginx)    │
│   - Angular App                 │
│   - Nginx reverse proxy         │
│   - Port: 80 (internal)         │
│   - Exposed: 36969 (host)       │
└────────────┬────────────────────┘
             │
             │ HTTP Proxy
             ↓
┌─────────────────────────────────┐
│   Backend Container (Node)      │
│   - Express API                 │
│   - OpenAI Integration          │
│   - Port: 3000 (internal)       │
└─────────────────────────────────┘
```

## 🔍 Service Details

### Frontend (Nginx)
- **Image**: nginx:alpine
- **Build**: Multi-stage build with Node.js
- **Port**: 36969 (host) → 80 (container)
- **Features**:
  - Serves static Angular files
  - Reverse proxy to backend
  - Gzip compression
  - Cache headers
  - Health check endpoint

### Backend (Node.js)
- **Image**: node:20-alpine
- **Port**: 3000 (internal only)
- **Features**:
  - Express API server
  - OpenAI integration
  - Environment variables
  - Health check endpoint

## 🌐 Network Configuration

Services communicate via Docker network:
- Network name: `sociomind-network`
- Type: Bridge network
- Internal DNS: Services can reach each other by name
  - Frontend → `http://backend:3000`
  - Backend → Isolated, not directly accessible from host

## 🔒 Security

### Environment Variables
- Never commit `.env` to git
- Use Docker secrets for production
- API keys are passed as environment variables

### Network Isolation
- Backend not exposed to host
- Only frontend accessible via port 36969
- Inter-service communication via internal network

## 🏥 Health Checks

Both services have health checks:

**Frontend:**
```bash
curl http://localhost:36969/health
```

**Backend (inside container):**
```bash
docker exec sociomind-backend node -e "require('http').get('http://localhost:3000/api/health')"
```

## 🐛 Troubleshooting

### Issue: Port 36969 already in use
```bash
# Find process using port
netstat -ano | findstr :36969

# Or change port in docker-compose.yml
ports:
  - "8080:80"  # Use 8080 instead
```

### Issue: Build fails
```bash
# Clean rebuild
docker-compose down
docker system prune -a
docker-compose up -d --build
```

### Issue: Backend can't connect
```bash
# Check logs
docker-compose logs backend

# Verify env variables
docker-compose exec backend env | grep OPENAI
```

### Issue: Frontend shows 502 Bad Gateway
```bash
# Backend might not be ready
docker-compose restart backend
docker-compose logs -f backend

# Check if backend is healthy
docker-compose ps
```

### Issue: Changes not reflected
```bash
# Rebuild with no cache
docker-compose build --no-cache
docker-compose up -d
```

## 📊 Resource Usage

### Typical Resource Usage:
- Frontend: ~50MB RAM
- Backend: ~100-200MB RAM
- Total: ~150-250MB RAM

### Limits (Optional):
Add to docker-compose.yml:
```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
```

## 🚀 Production Deployment

### Using Docker Compose on VPS

1. **Install Docker on VPS:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

2. **Clone repository:**
```bash
git clone https://github.com/BaoLong479/MLN131_1.git
cd MLN131_1
```

3. **Setup environment:**
```bash
cp .env.example .env
nano .env  # Edit with your keys
```

4. **Run:**
```bash
docker compose up -d --build
```

5. **Configure firewall:**
```bash
sudo ufw allow 36969/tcp
```

### Using Docker Hub

1. **Build and push:**
```bash
docker build -t yourusername/sociomind-frontend:latest -f Dockerfile.frontend .
docker build -t yourusername/sociomind-backend:latest -f Dockerfile.backend .
docker push yourusername/sociomind-frontend:latest
docker push yourusername/sociomind-backend:latest
```

2. **Update docker-compose.yml:**
```yaml
services:
  backend:
    image: yourusername/sociomind-backend:latest
  frontend:
    image: yourusername/sociomind-frontend:latest
```

## 🔄 CI/CD Integration

### GitHub Actions Example:
```yaml
name: Build and Push Docker Images

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build images
        run: |
          docker-compose build
      - name: Push to registry
        run: |
          docker-compose push
```

## 📝 Configuration Files

### docker-compose.yml
Main orchestration file with services, networks, and ports.

### Dockerfile.frontend
Multi-stage build:
1. Build Angular app with Node
2. Serve with Nginx

### Dockerfile.backend
Simple Node.js container with Express server.

### nginx.conf
Nginx configuration:
- Reverse proxy to backend
- Static file serving
- Gzip compression
- Cache headers

### .dockerignore
Excludes unnecessary files from Docker build.

## 🎯 Best Practices

1. **Use .dockerignore** to reduce build context
2. **Multi-stage builds** for smaller images
3. **Health checks** for reliability
4. **Named volumes** for persistent data
5. **Environment variables** for configuration
6. **Network isolation** for security
7. **Restart policies** for resilience

## 📞 Support

- Docker Documentation: https://docs.docker.com/
- Docker Compose: https://docs.docker.com/compose/
- Nginx Documentation: https://nginx.org/en/docs/

---

**Happy Dockerizing! 🐳**
