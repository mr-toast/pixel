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

—————————————————————

### Phase 1

—————————————————————

- [x] STAGE 2: Tailwind Conversion
- [x] - refactor styles
- [x] - add custom fonts

—————————————————————

### Phase 2

—————————————————————

- [x] STAGE 3: Convert to T3 Stack
- [ ] STAGE 4: Core Components
- [ ] - threeJs hero
- [ ] - about
- [ ] - stack / skills
- [ ] - examples
- [ ] - contact form

—————————————————————

### Future

—————————————————————

- [ ] STAGE X: Additional Pages
- [ ] STAGE X: Sanity CMS
- [ ] STAGE X: Setup Storybook
