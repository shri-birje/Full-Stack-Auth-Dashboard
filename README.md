# Frontend Developer Intern Assignment

## Overview
This project is a scalable web application with authentication and a dashboard.
It includes a Next.js frontend and a Node.js + Express backend.

## Tech Stack
- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, MongoDB, JWT
- Auth: JWT + bcrypt

## Features
- User registration & login
- JWT-based authentication
- Protected dashboard routes
- CRUD operations on tasks
- Secure password hashing
- Clean, scalable architecture

## Setup

### Backend
```bash
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

Environment Variables
Backend
MONGO_URI=
JWT_SECRET=

Frontend
NEXT_PUBLIC_API_BASE=http://127.0.0.1:5000/api

Screens

Login

Register

Dashboard

Tasks CRUD

Author

Frontend Developer Intern Assignment


---

## Scalability Notes

- Frontend and backend are decoupled and can be deployed independently
- JWT auth can be migrated to HTTP-only cookies for production
- Pagination can be added to task APIs
- Redis can be used for caching
- API rate limiting and monitoring can be added
- CI/CD pipelines can automate testing and deployment
