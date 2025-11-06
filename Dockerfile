FROM node:18-alpine

# Cài PHP và các extension cần thiết
RUN apk add --no-cache \
    php \
    php-cli \
    php-phar \
    php-mbstring \
    php-json \
    php-openssl \
    php-tokenizer \
    php-xml \
    php-pdo \
    php-pdo_mysql \
    php-ctype \
    php-curl \
    php-dom \
    php-session \
    php-fileinfo \
    composer

# Tạo thư mục làm việc
WORKDIR /app

# Cài Node dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Cài Laravel dependencies
RUN composer install --no-interaction --optimize-autoloader

# Build frontend
RUN npm run build

# Mở cổng và chạy app
EXPOSE 3000
CMD ["npm", "run", "dev"]
