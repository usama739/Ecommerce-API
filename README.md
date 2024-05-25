A simple e-commerce API built with Node.js, Express.js, and Supabase.

## Table of Contents
- [Installation](#installation)
- [Endpoints](#endpoints)
  - [Authentication](#authentication)
  - [Product Management](#product-management)
  - [Cart Management](#cart-management)
  - [Order Placement](#order-placement)
- [Documentation](#documentation)
- [Testing](#testing)
- [Deployment](#deployment)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-api.git
   cd ecommerce-api
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory and add your environment variables:
   ```bash
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
4. Start the server:
    ```bash
    npx nodemon server.js

Once the server is running, you can use tools like Postman to interact with the API endpoints.

## Endpoints
## Authentication
    Register a New User
    URL: POST `/api/auth/register`
    Description: Registers a new user.
