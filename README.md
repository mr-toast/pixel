## Pixel on Pixel

Built with: Nextjs, Sanity, Typescript, Tailwind

—————————————————————

### Scripts

—————————————————————

```
"dev": "concurrently \"tailwindcss -i src/styles/tailwind.css -o app/dist.css -w\" \"next dev\" ",
"build": "tailwindcss -m -i src/styles/tailwind.css -o app/dist.css && next build",
"start": "next start",
"lint": "next lint"
// sb: "start-storybook --quiet -p 6006 --no-open" -->
// sb:build: "build-storybook"
```

—————————————————————

### Phase 0

—————————————————————

- [x] STAGE 0: Initial Commit
- [x] - add old placeholder
- [x] - add Tailwind
- [x] STAGE 1: Deploy Placeholder

### Phase 1

—————————————————————

- [x] STAGE 2: Tailwind Conversion
- [x] - refactor styles
- [x] - add custom fonts

### Phase 2

—————————————————————

- [x] STAGE 3: Typescript Conversion
- [ ] STAGE 4: Setup Storybook
- [ ] STAGE 5: Core Components
- [ ] STAGE 6: Page Assembly
- [ ] STAGE 7: Sanity CMS
- [ ] STAGE 8: Minimum Build
- [ ] STAGE 9: E2E Test
- [ ] STAGE 10: Deploy
