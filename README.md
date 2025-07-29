# ShoppyGlobe Backend

This is the backend for the ShoppyGlobe e-commerce application built with **Node.js**, **Express**, and **MongoDB**.

---

## Features

- User registration & login (JWT auth)
- Product listing and management
- Shopping cart operations (add/update/delete)
- MongoDB integration using Mongoose
- API tested with ThunderClient
- Input validation & error handling

---

## Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- JWT for Authentication
- ThunderClient for API Testing


##  API Overview

###  User
- `POST /api/users/register` – Register user  
- `POST /api/users/login` – Login user

###  Product
- `GET /api/products` – Get products  
- `POST /api/products` – Add product *(protected)*

###  Cart
- `GET /api/cart` – View cart  
- `POST /api/cart` – Add to cart  
- `PUT /api/cart/:id` – Update item  
- `DELETE /api/cart/:id` – Delete item

---

##  Setup

```bash
git clone https://github.com/your-username/shoppyglobe-backend.git
cd shoppyglobe-backend
npm install



Start server:
npm start


Screenshots
API testing screenshots are available in the /screenshots folder.


 Author
Dnyaneshwar Patil
MCA Student | Backend Developer



hello Sir/Madam,

Please find my project submission link below:

GitHub Repository: https://github.com/dnyaneshwar1303/shoppy_Backend

Regards,  
Dnyaneshwar Patil
