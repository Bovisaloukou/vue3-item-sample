# Vue 3 + TypeScript Code Sample

Minimal code sample demonstrating: typed composable with axios, reusable card component with Tailwind, TypeScript strict mode.

## Requirements satisfied

| Constraint | Implementation |
|---|---|
| TypeScript strict | `tsconfig.json` with `strict: true`, `noImplicitAny`, `strictNullChecks` |
| Composition API only | `<script setup lang="ts">` across all components |
| Axios via configured client | `src/lib/axios.ts` exports `apiClient`, no native `fetch` |
| Explicit error handling | `useItem.ts` handles success / 404 / network error distinctly |
| Tailwind only | No inline styles, no custom `<style>` blocks |
| Typed props & emits | `defineProps<...>()` and `defineEmits<...>()` with interfaces |

## Structure

```
vue3-item-sample/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── env.d.ts
└── src/
    ├── main.ts
    ├── App.vue
    ├── style.css
    ├── lib/
    │   └── axios.ts
    ├── types/
    │   └── item.ts
    ├── composables/
    │   └── useItem.ts
    └── components/
        └── ItemCard.vue
```

## Run locally

```bash
npm install
npm run type-check
npm run dev
```

Build:

```bash
npm run build
```

## Notes on approach

When joining an existing Vue codebase, I start by reading the router and store modules to map data flow, then trace one feature end-to-end (component → composable → API service) before touching code. This mirrors my approach on a multi-tenant ERP frontend contribution where I added typed TypeScript services and chart integrations (VueApexCharts) on top of conventions set by the existing team.
