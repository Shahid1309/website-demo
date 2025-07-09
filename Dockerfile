# 1. Use official Node.js LTS image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency files and install dependencies using Yarn
COPY package.json yarn.lock ./
RUN yarn install

# 4. Copy the rest of the application
COPY . .

# 5. Build the Next.js app
RUN yarn build

# 6. Create a smaller production image
FROM node:18-alpine AS runner
WORKDIR /app

# 7. Copy production files and install only necessary deps
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# 8. Expose the app on port 3000
EXPOSE 3000

# 9. Start the app
CMD ["yarn", "start"]
