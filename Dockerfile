# -------- build stage --------
FROM node:18-alpine AS build
WORKDIR /app
# Copy only what npm needs
COPY package.json package-lock.json ./
# Faster, smaller, deterministic install
RUN npm ci --no-audit --no-fund
# Copy source after deps are installed
COPY . .

# Build
RUN npm run build

# -------- runtime stage --------
FROM nginx:alpine

# Remove default nginx assets
RUN rm -rf /usr/share/nginx/html/*

# Copy only built output
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
