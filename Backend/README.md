# Safar-X Backend

Safar-X backend is an Express + MongoDB API for user/captain authentication, ride lifecycle management, maps-based fare calculation, and real-time ride updates.

## Features

- User and captain registration/login with JWT auth
- Protected profile and logout endpoints
- Address autocomplete, coordinates, and distance/time lookup
- Ride creation, confirmation, start (OTP), and completion
- Real-time events using Socket.IO

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT + cookie-parser
- Socket.IO
- Google Maps APIs (Geocoding, Distance Matrix, Places)

## Folder Structure

- `app.js` - Express app setup and route mounting
- `server.js` - HTTP server bootstrap and Socket.IO init
- `db/` - MongoDB connection logic
- `routes/` - API route definitions
- `controllers/` - Request handlers
- `services/` - Business logic (maps, fare, rides)
- `models/` - Mongoose schemas
- `middlewares/` - Authentication middleware
- `socket.js` - Socket.IO connection and event handlers

## Prerequisites

- Node.js 20+
- MongoDB database
- Google Maps API key (server-side)

## Environment Variables

Create `Backend/.env`:

```env
PORT=3000
DB_CONNECT=mongodb://127.0.0.1:27017/safarx
JWT_SECRET=replace_with_secure_secret
GOOGLE_MAPS_API=your_google_maps_api_key
```

## Installation and Run

```bash
cd Backend
npm install
node server.js
```

Server runs on `http://localhost:3000` by default.

## Authentication

Protected routes accept token from either:

- Cookie: `token`
- Header: `Authorization: Bearer <token>`

## API Overview

Base URL: `http://localhost:3000`

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| GET | `/` | Public | Basic health response |
| POST | `/users/register` | Public | Register user |
| POST | `/users/login` | Public | User login |
| GET | `/users/profile` | User | Get logged-in user |
| GET | `/users/logout` | User | Logout user |
| POST | `/captains/register` | Public | Register captain |
| POST | `/captains/login` | Public | Captain login |
| GET | `/captains/profile` | Captain | Get logged-in captain |
| GET | `/captains/logout` | Captain | Logout captain |
| GET | `/maps/get-coordinates` | User | Convert address to coordinates |
| GET | `/maps/get-distance-time` | User | Distance and ETA between two points |
| GET | `/maps/get-suggestions` | User | Place autocomplete suggestions |
| POST | `/rides/create` | User | Create ride |
| GET | `/rides/get-fare` | User | Get fare estimates |
| POST | `/rides/confirm` | Captain | Accept ride |
| GET | `/rides/start-ride` | Captain | Start ride with OTP |
| POST | `/rides/end-ride` | Captain | Complete ride |

## Socket.IO Events

Client -> Server:

- `join` `{ userId, userType }`
- `update-location-captain` `{ userId, location: { ltd, lng } }`

Server -> Client:

- `new-ride`
- `ride-confirmed`
- `ride-started`
- `ride-ended`

## Notes

- CORS is currently open (`app.use(cors())`) and Socket.IO origin is `*`.
- There is no npm start script yet; run with `node server.js`.
