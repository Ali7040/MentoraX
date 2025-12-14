# 🚀 Quick Start Guide

## ✅ Your Nx Monorepo is Ready!

**Your workspace location:**
```
C:\Users\DELL\MentoraX\skill-mentorship-platform
```

You now have a complete monorepo setup with:
- ✅ **Angular 20.3** Frontend
- ✅ **NestJS 11** Backend with Swagger
- ✅ **Nx 22.2.2** Monorepo tools
- ✅ Shared libraries structure (apps/ and libs/)

---

## 📋 Quick Commands

**⚠️ IMPORTANT: Always work from this directory:**
```bash
cd C:\Users\DELL\MentoraX\skill-mentorship-platform
```

### Start Development Servers

**Terminal 1 - Backend (Port 3000):**
```bash
cd C:\Users\DELL\MentoraX\skill-mentorship-platform
npx nx serve backend
```
Then visit: http://localhost:3000/api/docs for Swagger UI

**Terminal 2 - Frontend (Port 4200):**
```bash
cd C:\Users\DELL\MentoraX\skill-mentorship-platform
npx nx serve frontend
```
Then visit: http://localhost:4200

**Or start both together:**
```bash
cd C:\Users\DELL\MentoraX\skill-mentorship-platform
npx nx run-many -t serve -p frontend backend
```

---

## 🏗️ Project Structure

```
skill-mentorship-platform/
├── apps/
│   ├── frontend/              ← Angular 20 App
│   │   ├── src/
│   │   ├── project.json
│   │   └── tsconfig.json
│   ├── backend/               ← NestJS 11 API
│   │   ├── src/
│   │   │   ├── app/
│   │   │   └── main.ts       ← Swagger configured here
│   │   └── project.json
│   └── backend-e2e/           ← Backend tests
├── libs/                      ← Create shared libraries here
├── e2e/                       ← E2E tests
├── .env                       ← Environment variables
└── nx.json                    ← Nx configuration
```

---

## 🎯 Next Steps

### 1. Test the Backend API
```bash
# Start backend
npx nx serve backend

# Open Swagger UI
# Visit: http://localhost:3000/api/docs
```

### 2. Test the Frontend
```bash
# Start frontend
npx nx serve frontend

# Visit: http://localhost:4200
```

### 3. Create a New NestJS Module (Example: Users)
```bash
# Generate module, controller, and service
npx nx g @nx/nest:resource users --project=backend --directory=src/users
```

### 4. Create a Shared Library
```bash
# For shared TypeScript code
npx nx g @nx/js:library shared --directory=libs/shared

# For Angular components
npx nx g @nx/angular:library ui-components --directory=libs/ui-components

# For backend utilities
npx nx g @nx/nest:library backend-utils --directory=libs/backend-utils
```

### 5. Run Tests
```bash
# Test backend
npx nx test backend

# Test frontend
npx nx test frontend

# Test everything
npx nx run-many -t test
```

### 6. Build for Production
```bash
# Build backend
npx nx build backend

# Build frontend
npx nx build frontend

# Build all
npx nx run-many -t build
```

---

## 📚 Swagger Documentation

The backend includes Swagger/OpenAPI documentation configured in:
- File: `apps/backend/src/main.ts`
- URL: http://localhost:3000/api/docs

Example controller with Swagger decorators:
```typescript
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Returns all users' })
  findAll() {
    return [];
  }
}
```

---

## 🔧 Common Tasks

### Add a Package
```bash
# Add to all projects
pnpm add <package-name>

# Add as dev dependency
pnpm add -D <package-name>
```

### Visualize Project Graph
```bash
npx nx graph
```

### Check Project Dependencies
```bash
npx nx show project backend
npx nx show project frontend
```

### Run Affected Commands (after changes)
```bash
# Test only affected projects
npx nx affected -t test

# Build only affected projects
npx nx affected -t build

# Lint only affected projects
npx nx affected -t lint
```

---

## 🌐 Environment Variables

Backend environment variables are in `.env`:
```env
PORT=3000
NODE_ENV=development
API_PREFIX=api
CORS_ORIGIN=http://localhost:4200
```

---

## 📖 Resources

- [Nx Documentation](https://nx.dev)
- [Angular Documentation](https://angular.dev)
- [NestJS Documentation](https://nestjs.com)
- [Swagger Documentation](https://swagger.io/docs/)

---

## ⚡ Pro Tips

1. **Use Nx Console VSCode Extension** for easier command execution
2. **Create shared libraries** in `libs/` for code reusability
3. **Use Nx affected commands** to run only what changed
4. **Leverage Nx cache** for faster builds and tests
5. **Keep your dependencies updated** with `nx migrate`

---

## 🆘 Troubleshooting

### Backend won't start?
```bash
cd apps/backend
pnpm install
```

### Frontend won't serve?
```bash
# Clear Nx cache
npx nx reset
npx nx serve frontend
```

### Port already in use?
Change ports in:
- Backend: `apps/backend/src/main.ts`
- Frontend: `apps/frontend/project.json`

---

Happy coding! 🎉
