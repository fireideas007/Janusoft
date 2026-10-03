# Stage 1: Build static React Vite bundle
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production Node.js server with Express API & Static SPA serving
FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
COPY server.js ./

ENV PORT=80
ENV NODE_ENV=production
ENV DATA_DIR=/app/data

EXPOSE 80
CMD ["node", "server.js"]
