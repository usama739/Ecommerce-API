A simple e-commerce API built with Node.js, Express.js, and Supabase.

## Table of Contents
- [Documentation](#documentation)
- [Installation](#installation)
- [Endpoints](#endpoints)
  - [Authentication](#authentication)
  - [Product Management](#product-management)
  - [Cart Management](#cart-management)
  - [Order Placement](#order-placement)


## Documentation
API documentation is available at `/api-docs`.


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

![1_User Registration](https://github.com/usama739/Ecommerce-API/assets/89732076/70c26ff5-50f3-49b7-9d9d-29a5b669ce5a)

Login
URL: POST `/api/auth/login`

Description: Logs in a user.

![2_User Login](https://github.com/usama739/Ecommerce-API/assets/89732076/69d97f64-8d30-4d74-b313-55765e2198de)


# Product Management
Create a New Product
URL: POST `/api/products`

Description: Creates a new product.

![3_Creating New Product](https://github.com/usama739/Ecommerce-API/assets/89732076/44e919f2-9e61-408b-aac0-39ac72c4e9e5)


Retrieve or Filter Products by Category
URL: GET `/api/products?category=CategoryName`

Description: Retrieves products filtered by category.

![4_Filtering Products by Category](https://github.com/usama739/Ecommerce-API/assets/89732076/a124252b-c405-42a9-b368-96e904837be1)

Update a Product
URL: PUT `/api/products/:id`  
Description: Updates the details of an existing product.
![5_Updating Product](https://github.com/usama739/Ecommerce-API/assets/89732076/d57afa42-4d8f-4390-85d0-89e8c7bb322a)

Delete a Product
URL: DELETE `/api/products/:id`
Description: Deletes a product.
![6_Deleting Product](https://github.com/usama739/Ecommerce-API/assets/89732076/3605d36e-f570-4e48-b266-3472b4cd3530)


## Cart Management
Create a New Cart
URL: POST `/api/cart`
Description: Creates a new cart for a user.
![7_Create Cart](https://github.com/usama739/Ecommerce-API/assets/89732076/006ca7cc-6d43-43b8-9438-4c304d89da3c)

Add Product to Cart
URL: POST `/api/cart/add`
Description: Adds a product to the user's cart with a specified quantity.
![8_Adding Product to cart](https://github.com/usama739/Ecommerce-API/assets/89732076/2e1e6f10-c903-4ce2-a343-a37ccdfbb6f1)

Remove Product from Cart
URL: POST `/api/cart/remove`
Description: Removes a product from the user's cart.
![9_Remove from cart (Incorrect Authentication)](https://github.com/usama739/Ecommerce-API/assets/89732076/5e651994-0c35-4955-bead-ccb202caf791)
![10_Remove from cart](https://github.com/usama739/Ecommerce-API/assets/89732076/760ef7eb-4af4-4247-8ab3-3e2af3fbd4bc)

Get Cart Contents
URL: GET `/api/cart/:userId`
Description: Retrieves the contents of the user's cart.
![11_Get cart content](https://github.com/usama739/Ecommerce-API/assets/89732076/bae3c457-d728-42eb-8b3c-adf4e70d05f6)


## Order Placement
lace an Order
URL: POST `/api/orders`
Description: Places an order by converting the contents of the user's cart into an order.
![12_Order Placed](https://github.com/usama739/Ecommerce-API/assets/89732076/992b1f1d-6556-479b-877c-e43e18fd2db7)

Get Order Details
URL: GET `/api/orders/:id`
Description: Retrieves order details by order ID.
![13_Get Order Content (Incorrect Authentication)](https://github.com/usama739/Ecommerce-API/assets/89732076/6bd8e50e-a1b3-4be3-9eab-234c79743ad5)
![14_Get Order Content](https://github.com/usama739/Ecommerce-API/assets/89732076/f46a3fbb-3410-422a-8ba0-c17ebe2c4358)

