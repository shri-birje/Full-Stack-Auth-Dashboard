# API Documentation

## Auth
POST /api/auth/register  
POST /api/auth/login  

## User
GET /api/user/profile (protected)

## Tasks
GET /api/tasks  
POST /api/tasks  
PUT /api/tasks/:id  
DELETE /api/tasks/:id  

All protected routes require:
Authorization: Bearer <token>
