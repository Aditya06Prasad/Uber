# Uber Backend API Documentation

## Overview
This is the backend API for the Uber application built with Express.js and MongoDB.

---

## Endpoints

### User Registration

#### **POST** `/users/register`

Register a new user account in the system.

---

## Request Details

### URL
```
POST http://localhost:4000/users/register
```

### Headers
```
Content-Type: application/json
```

### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

### Required Fields

| Field | Type | Requirements | Description |
|-------|------|--------------|-------------|
| `fullname.firstname` | String | Min 3 characters | User's first name |
| `fullname.lastname` | String | Min 3 characters | User's last name |
| `email` | String | Valid email format, Unique | User's email address |
| `password` | String | Min 6 characters | User's password (will be hashed) |

---

## Response Details

### Success Response (201 Created)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null
  }
}
```

### Status Codes

| Status Code | Description |
|-------------|-------------|
| `201` | **Created** - User successfully registered. Returns authentication token and user object. |
| `400` | **Bad Request** - Validation error. Check required fields and their formats. |
| `409` | **Conflict** - Email already exists in the database. |
| `500` | **Internal Server Error** - Server-side error occurred. |

---

## Validation Errors (400)

### Invalid First Name Length
```json
{
  "errors": [
    {
      "msg": "First Name should be atleast of 3 chars",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

### Invalid Email Format
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Invalid Password Length
```json
{
  "errors": [
    {
      "msg": "Password must be more than of 6 chars",
      "param": "password",
      "location": "body"
    }
  ]
}
```

---

## Duplicate Email Error (409)

```json
{
  "message": "E11000 duplicate key error collection: uber.users index: email_1 dup key: { email: \"john@example.com\" }"
}
```

---

## Example Requests

### cURL
```bash
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Postman
1. Set method to **POST**
2. Enter URL: `http://localhost:4000/users/register`
3. Go to **Headers** tab and add:
   - Key: `Content-Type`
   - Value: `application/json`
4. Go to **Body** tab, select **raw**, choose **JSON**
5. Paste the request body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "password123"
}
```

### JavaScript (Fetch API)
```javascript
const registerUser = async () => {
  const response = await fetch('http://localhost:4000/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fullname: {
        firstname: 'John',
        lastname: 'Doe'
      },
      email: 'john@example.com',
      password: 'password123'
    })
  });
  
  const data = await response.json();
  console.log(data);
};
```

---

## Notes

- Passwords are automatically hashed using bcrypt before storing in the database
- An authentication token (JWT) is returned upon successful registration
- Each email must be unique in the system
- The API uses MongoDB for data persistence
- All timestamps are automatically managed by MongoDB
