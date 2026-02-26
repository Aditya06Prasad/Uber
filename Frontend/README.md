# Safar-X Frontend

Safar-X frontend is a React + Vite client for rider and captain flows, including live location updates, real-time ride status, and Google Maps tracking.

## Features

- User and captain auth screens
- Ride booking and fare estimation
- Captain ride accept/start/end flow
- Real-time updates through Socket.IO
- Live map rendering with Google Maps

## Tech Stack

- React 19
- React Router
- Vite
- Tailwind CSS v4
- Axios
- Socket.IO Client
- GSAP
- Google Maps JavaScript API

## Folder Structure

- `src/pages/` - Route-level screens
- `src/components/` - Shared UI and ride panels
- `src/context/` - User/captain/socket providers
- `src/App.jsx` - Route definitions
- `src/main.jsx` - App bootstrap and provider wiring

## Prerequisites

- Node.js 20+
- Backend server running (default: `http://localhost:3000`)
- Google Maps browser API key

## Environment Variables

Create `Frontend/.env`:

```env
VITE_BASE_URL=http://localhost:3000
VITE_API_URL=http://localhost:3000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_browser_api_key
```

Notes:

- `VITE_BASE_URL` is used for most API and socket calls.
- `VITE_API_URL` is currently used by logout pages.

## Installation and Run

```bash
cd Frontend
npm install
npm run dev
```

Vite dev server runs on `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## App Routes

- `/`
- `/home`
- `/signup`
- `/login`
- `/logout`
- `/captain-signup`
- `/captain-login`
- `/captain-home`
- `/captain-riding`
- `/captain-logout`
- `/riding`

## Integration Notes

- Socket client connects using `VITE_BASE_URL`.
- Protected API calls send JWT as `Authorization: Bearer <token>`.
- Start backend before running the frontend to avoid request/socket failures.
