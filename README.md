# Healthcare SaaS Portfolio Application

## Overview

This is a modern healthcare tech portfolio landing page showcasing two SaaS products: HDIMS (Health Data Information Management System) and DonorLink (Cloud-Based Blood Management System). The application features a responsive design with healthcare-themed styling, product showcases, technology stack displays, and contact information. Built as a professional portfolio site for demonstrating healthcare technology solutions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom healthcare-themed color palette
- **UI Components**: Shadcn/ui component library based on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: tsx for TypeScript execution in development

### Deployment Strategy
- **Platform**: Replit with autoscale deployment target
- **Port Configuration**: Internal port 5000, external port 80
- **Build Process**: Vite build for frontend, esbuild for backend bundling
- **Environment**: Development and production configurations with appropriate optimizations

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Location**: `shared/schema.ts` using Drizzle ORM
- **Validation**: Zod schemas for runtime type validation
- **Migrations**: Drizzle Kit for database migrations in `migrations/` directory

### Frontend Components
- **Home Page**: Portfolio showcase with healthcare platform features
- **UI Library**: Comprehensive set of accessible components (buttons, cards, forms, etc.)
- **Responsive Design**: Mobile-first approach with breakpoint-based navigation
- **Healthcare Theming**: Custom CSS variables for healthcare industry branding

### Backend Services
- **Storage Interface**: Abstracted storage layer with both memory and database implementations
- **API Routes**: RESTful API structure with `/api` prefix
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging for API endpoints

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **API Layer**: Express.js routes handle HTTP requests with proper error handling
3. **Business Logic**: Storage interface abstracts database operations
4. **Database**: PostgreSQL stores user data and application state
5. **Response**: JSON responses with appropriate HTTP status codes

The application uses a simple request-response pattern with the storage interface providing abstraction between the API layer and database operations.

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM and query builder
- **@tanstack/react-query**: Server state management and caching
- **express**: Web application framework for Node.js

### UI Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library for consistent iconography
- **wouter**: Lightweight routing library

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` starts both frontend and backend in development mode
- **Production Build**: `npm run build` creates optimized bundles for both frontend and backend
- **Production Start**: `npm run start` runs the production server
- **Database Management**: `npm run db:push` applies schema changes to the database

The deployment uses autoscale configuration to handle varying traffic loads efficiently.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 23, 2025: Created modern healthcare portfolio landing page with:
  - Hero section with healthcare branding and call-to-action buttons
  - Product showcase cards for HDIMS and DonorLink with tech stack badges
  - Technologies section displaying backend, frontend, and deployment tools
  - Contact section with email, GitHub, and LinkedIn links
  - Responsive navigation with mobile menu
  - Healthcare-themed color scheme (blue/green medical colors)
  - Custom button styling with proper hover effects and transitions
  - Railway deployment configuration (railway.json, nixpacks.toml)
  - Comprehensive deployment guide for Railway.com

## Deployment Configuration

### Railway.com Setup
- **railway.json**: Deployment configuration with Nixpacks builder
- **nixpacks.toml**: Build configuration for Node.js 20.x
- **RAILWAY_DEPLOYMENT_GUIDE.md**: Step-by-step deployment instructions
- Build process: npm ci → npm run build → npm run start
- Health check configured on root path
- Auto-restart on failure with retry policy

### Production Ready
- Production build optimized with Vite + esbuild
- Static assets served efficiently
- Environment variable support
- Proper error handling and logging

## Changelog

Changelog:
- June 23, 2025: Initial setup and healthcare portfolio implementation