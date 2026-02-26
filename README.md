# Safar-X

Safar-X is a full-stack ride-booking app with separate user and captain flows, live ride updates, and Google Maps integration.

## Project Structure

- `Backend/` - Express + MongoDB API, auth, rides, maps, sockets
- `Frontend/` - React + Vite client for user/captain apps

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Axios, Socket.IO Client, GSAP
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, Socket.IO

## Prerequisites

- Node.js 20+
- npm
- MongoDB
- Google Maps API keys

## Environment Variables

### Backend (`Backend/.env`)

```env
PORT=3000
DB_CONNECT=mongodb://127.0.0.1:27017/safarx
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API=your_google_maps_api_key

### Frontend (`Frontend/.env`)
VITE_BASE_URL=http://localhost:3000
VITE_API_URL=http://localhost:3000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_browser_api_key
