# Wynyard Street Motors

Static Vite, React, and TypeScript website for Wynyard Street Motors in Devonport.

## Local development

```bash
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` before publishing.

## Cloudflare Pages deployment

The production site uses Cloudflare Pages native Git integration with these settings:

| Setting | Value |
| --- | --- |
| Repository | `charliekw411/Wynyard-Street-Motors` |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Automatic production deployments | Enabled |
| Automatic preview/non-production deployments | Disabled |

No runtime environment variables, Worker, Wrangler configuration, or GitHub Actions workflow is required. Pushing to `main` triggers the production Pages build.
