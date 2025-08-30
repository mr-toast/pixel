# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `pnpm run dev` - Starts Next.js development server
- **Build**: `pnpm run build` - Builds the application for production
- **Lint**: `pnpm run lint` - Runs ESLint to check code quality
- **Start**: `pnpm run start` - Starts production server

## Architecture Overview

This is a Next.js portfolio site for "Pixel on Pixel" built with TypeScript and Tailwind CSS. The architecture follows a component-based approach with the following key characteristics:

### Tech Stack
- **Framework**: Next.js 13 with Pages Router (not App Router)
- **Styling**: Tailwind CSS with custom configuration
- **State Management**: Zustand for lightweight state management
- **Theme**: next-themes for dark/light mode switching
- **Content**: JSON-based data structure in `src/data.json`
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics integration

### Project Structure
- **Components**: Modular components in `src/components/` with index.ts barrel exports
- **Layout**: Shared layout wrapper in `src/layout/` with header/footer structure
- **Pages**: Next.js pages in `src/pages/` including API routes
- **Data**: Centralized content in `src/data.json` with TypeScript definitions in `src/types.d.ts`
- **Styles**: Global CSS in `src/styles/globals.css` with Tailwind utilities

### Key Patterns
- Components use forwardRef pattern and barrel exports via index.ts files
- Path aliases configured: `~/*` maps to `./src/*`
- Custom font (Cutive Mono) loaded via next/font/google
- SVG handling configured for both inline components and URL imports
- Dark mode support built into all components

### Important Notes
- TypeScript and ESLint errors are currently ignored in build (see next.config.mjs lines 26-33)
- The codebase has some TODO comments marked with tags: BUG, HACK, NOTE, QUESTION, TODO
- Components use `twMerge` for Tailwind class merging
- The site uses a single-page application structure with hash navigation

### Content Management
All site content is managed through `src/data.json`, including:
- Navigation structures
- Featured work projects
- Client feedback
- Service descriptions
- Contact information

When making changes, ensure consistency with the existing component patterns and Tailwind styling approach.