# User Authentication API

This repository contains the **backend** for a user authentication system built with **Node.js**, **Express**, **Prisma**, **PostgreSQL**, **JWT**, and **Bcrypt**.

## Technologies Used

- **Node.js** – JavaScript runtime for building backend services  
- **Express** – Minimalist web framework for Node.js  
- **Prisma** – Type-safe ORM for working with PostgreSQL  
- **PostgreSQL** – Relational database for storing user data  
- **JWT (JSON Web Tokens)** – Authentication and authorization mechanism  
- **Bcrypt** – Secure hashing algorithm for password encryption  
- **Docker** – Containerization platform for consistent development environments

## Features

The API supports the following features:

- **User Registration**: Allows users to create an account with a hashed password.
- **User Login**: Verifies credentials and returns a JWT token for authenticated access.
- **Protected Route**: Lists all registered users for authenticated users (requires JWT).

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Download and install it from [Node.js official website](https://nodejs.org/).
- **Docker & Docker Compose**: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

## Installation

To get this project up and running locally, follow these steps:

1. **Clone the repository**:
   - Clone the repository to your local machine using the command: 
     ```bash
     git clone https://github.com/tulioanesio/Auth-API.git
     ```

2. **Install the dependencies**:
   - Run the following command to install all the required dependencies:
     ```bash
     npm install
     ```

3. **Configure the environment variables**:
   - Create a `.env` file in the root of the project and add the following environment variables:
     ```.env
     DATABASE_URL="your_mongodb_connection_string"
     JWT_SECRET="your_jwt_secret_key"
     ```
   - You can create a JWT_SECRET in the terminal using:
     ```
     node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
     ```
4. **Run Docker**
   
   - Spin up a PostgreSQL container using Docker Compose:
     ```
     docker-compose up -d
     ```
5. **Initialize Prisma**:
   - Run the following commands to generate Prisma client and set up the database:
     ```bash
     npx prisma migrate dev
     npx prisma generate
     ```
    
6. **Start the server**:
   - Start the backend server by running:
     ```bash
     node server.js
     ```
     The API will be available at: [http://localhost:3000](http://localhost:3000)

7. **Live Demo**:

   - The project is deployed and available on **Vercel**:

   - [**User Authentication**](https://auth-front-mu.vercel.app/)
