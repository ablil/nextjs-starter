This is a [Next.js](https://nextjs.org) project **template** bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To use this project as a template for a new project, run the following:
```bash
npx create-next-app --example https://github.com/ablil/nextjs-starter <Your application name>
```
Besides the default dependencies from Nextjs, this template have some extra dependencies, please check [package.json](package.json).

## Configuration

This template is configured with some default values, please make sure to updated what's necessary on [config.ts](lib/config.ts).


This templates also includes the following:
* state management with [Redux](https://redux.js.org/) and [Redux-saga](https://redux-saga.js.org/).
* Authentication with [NextAuth](https://next-auth.js.org/) 
* some re-usable components (check [here](components/common/))
* re-usable css styles/utilties
* husky and lint-staged to formater code before each commit

## Authentication

This template uses [NextAuth](https://next-auth.js.org/) for authentication, it has [Credentials]( https://next-auth.js.org/providers/credentials ) authentication already configured with dummy credentials, make sure to update the file [route.ts](app/api/auth/[...nextauth]/route.ts) with your logic to verify user credentials.

You can configure all **private routes** on [middleware.ts](middleware.ts).

The following two routes have a dummy form that needs your adjustments:
* /auth/login
* /auth/register

## Maintenance mode

Maintenance mode can be enabled by setting env variable `MAINTENANCE_ENABLED=true`, this will make sure all endpoints
 are redirected automatically to `/maintenance` endpoint (configured on `next.config.js`).

**Changing env variable requires deployment**