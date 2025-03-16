
# User Management API

This project implements a REST API for managing users and contacts, including user registration, login, logout, getting current user data, and securing routes with token-based authentication.

## Features

### 1: User Registration
- Allows new users to register.
- Ensures `email` and `password` are provided.
- Password is salted and hashed using `bcrypt`.

### 2: User Login
- Allows users to log in.
- Validates `email` and `password`.
- Compares entered password with the hashed password in the database.
- Returns a JWT token upon successful login.

### 3: User Logout
- Logs the user out by deleting their token.

### 4: Get Current User Data
- Retrieves the current logged-in user’s data based on the token.

### 5: Token-based Route Protection
- Protects routes by verifying the validity of the token.

## API Endpoints

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login an existing user.
- `POST /api/auth/logout`: Logout the current user.
- `GET /api/auth/current`: Get the current user's data.

## How to Run the Project

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DariiaBabii/goit-node-rest-api.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The API will be running on `http://localhost:3000`.

4. Test the endpoints using Postman or cURL.
