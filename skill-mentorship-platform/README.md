# Skill Mentorship Platform

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ A modern monorepo application built with **Nx**, featuring **Angular 20** frontend and **NestJS 11** backend with **Swagger** documentation.

## 🏗️ Project Structure

```
skill-mentorship-platform/
├── apps/
│   ├── frontend/          # Angular 20 application
│   ├── backend/           # NestJS 11 API server with Swagger
│   └── backend-e2e/       # Backend E2E tests
├── libs/                  # Shared libraries (create as needed)
├── e2e/                   # E2E tests
└── node_modules/
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended) or npm

### Installation

```sh
pnpm install
```

## 📦 Available Commands

### Development

```sh
# Serve Angular frontend (http://localhost:4200)
npx nx serve frontend

# Serve NestJS backend (http://localhost:3000)
npx nx serve backend

# Serve both frontend and backend concurrently
npx nx run-many -t serve -p frontend backend
```

### Build

```sh
# Build frontend
npx nx build frontend

# Build backend
npx nx build backend

# Build all apps
npx nx run-many -t build
```

### Testing

```sh
# Test frontend
npx nx test frontend

# Test backend
npx nx test backend

# Run all tests
npx nx run-many -t test
```

### Linting

```sh
# Lint frontend
npx nx lint frontend

# Lint backend
npx nx lint backend

# Lint all projects
npx nx run-many -t lint
```

## 📚 API Documentation (Swagger)

When the backend is running, Swagger UI is available at:
**http://localhost:3000/api/docs**

The API endpoints are prefixed with `/api`:
- Health check: http://localhost:3000/api

## 🛠️ Tech Stack

### Frontend
- **Angular 20.3.0** - Modern web framework
- **RxJS 7.8** - Reactive programming
- **Rspack** - Fast module bundler

### Backend
- **NestJS 11** - Progressive Node.js framework
- **Swagger/OpenAPI** - API documentation
- **Express** - HTTP server
- **TypeScript** - Type safety

### DevTools
- **Nx 22.2.2** - Monorepo build system
- **Jest** - Testing framework
- **Playwright** - E2E testing
- **ESLint** - Code linting

## 📁 Creating New Projects

### Generate a new library

```sh
# Create shared TypeScript library
npx nx g @nx/js:library my-lib --directory=libs/my-lib

# Create Angular library (UI components, services, etc.)
npx nx g @nx/angular:library ui-components --directory=libs/ui-components

# Create NestJS library (shared backend code)
npx nx g @nx/nest:library shared --directory=libs/backend/shared
```

### Generate a new NestJS module

```sh
# Generate a new NestJS module in backend
npx nx g @nx/nest:module users --project=backend --directory=src/users

# Generate controller
npx nx g @nx/nest:controller users --project=backend --directory=src/users

# Generate service
npx nx g @nx/nest:service users --project=backend --directory=src/users
```

## 🔧 Environment Variables

### Backend

Create a `.env` file in the root:
```
PORT=3000
NODE_ENV=development
```

### Frontend

Environment files are located in `apps/frontend/src/environments/`

## 📊 Visualize Dependencies

```sh
npx nx graph
```

## 🧪 CI/CD

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/otGKrlpV6A)


```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-standalone-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
