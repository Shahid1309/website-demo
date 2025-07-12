# # 1. Use official Node.js LTS image
# FROM node:18-alpine AS builder

# # 2. Set working directory
# WORKDIR /app

# # 3. Copy dependency files and install dependencies using Yarn
# COPY package.json yarn.lock ./
# RUN yarn install

# # 4. Copy the rest of the application
# COPY . .

# # 5. Build the Next.js app
# RUN yarn build

# # 6. Create a smaller production image
# FROM node:18-alpine AS runner
# WORKDIR /app

# # 7. Copy production files and install only necessary deps
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/next.config.ts ./next.config.ts

# # 8. Expose the app on port 3000
# EXPOSE 3000

# # 9. Start the app
# CMD ["yarn", "start"]
# 1. Use official Node.js LTS image for building
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency files
COPY package.json package-lock.json ./

# 4. Install dependencies using npm
RUN npm install --legacy-peer-deps

# 5. Copy the rest of the application
COPY . .

# 6. Build the Next.js app
RUN npm run build

# ------------------------

# 7. Create a smaller production image
FROM node:18-alpine AS runner

# 8. Set working directory
WORKDIR /app

# 9. Copy necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

# 10. Expose the port
EXPOSE 3000

# 11. Start the app
CMD ["npm", "start"]
