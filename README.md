# RBAC B2B Delivery Tracker

## Project Overview
The **RBAC B2B Delivery Tracker** is a web application designed to manage B2B ordering and delivery with role-based access control. It allows various roles (e.g., Restaurant Manager, Order Tracker, Wholesale Manager, Delivery Personnel) to perform specific actions securely. The system provides a backend API, a frontend user interface, and an API Gateway to ensure secure, streamlined communication between services.

## Technologies
- **Backend:** Node.js with Express (or NestJS), PostgreSQL, Sequelize ORM
- **Frontend:** React (or Next.js) with modern JavaScript libraries for UI/UX
- **API Gateway:** Custom Express-based gateway for secure routing and RBAC enforcement
- **Authentication:** JWT-based authentication and SSO integration (Keycloak/Auth0)
- **CI/CD:** GitHub Actions for automated testing and deployment
- **Database:** PostgreSQL (with migrations and seed files stored in the `db/` folder)

## Folder Structure
- **backend/**: Contains the server code, REST API endpoints, RBAC logic, and database models.
  - `src/controllers/`: Controllers for handling business logic.
  - `src/models/`: Database models such as User, Role, and Permission.
  - `src/routes/`: Defines API routes.
  - `src/middleware/`: Authentication and RBAC middleware functions.
- **frontend/**: Contains the client-side application built with React/Next.js.
  - `src/components/`: Reusable UI components.
  - `src/pages/`: Application pages (e.g., Login, Dashboard).
- **api-gateway/**: Manages API requests, security, and routing between external clients and backend services.
- **db/**: Database scripts, including migrations and seed data.
- **.github/workflows/**: GitHub Actions configuration for CI/CD.
- **README.md**: Documentation and setup instructions for the project.

## Setup Instructions
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/DiamondElis/RBAC-B2B-Delivery-Tracker.git
   cd RBAC-B2B-Delivery-Tracker
