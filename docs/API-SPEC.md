# CampusConnect API Specification (v1)

Base URL: `http://localhost:3000/api/v1`

## Endpoints Overview

| Method | Endpoint | Auth Required | Success Status | Error Statuses | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/health` | No | `200 OK` | `500` | Check if the API server is running |
| `POST` | `/sessions` | No | `200 OK` | `400`, `401`, `500` | Authenticate user and issue JWT |
| `GET` | `/users/me` | Yes (`Bearer <token>`) | `200 OK` | `401`, `500` | Return the currently authenticated user |

---

## 1. Health Check — `GET /api/v1/health`

### Response `200 OK`
```json
{
  "status": "ok"
}