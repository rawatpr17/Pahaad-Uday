# Pahad Dialogue

## Overview

Pahad Dialogue is a regional news platform focused on delivering local news and updates for Rudraprayag and Uttarakhand. The application is a static-first news website built with Next.js that renders articles from Markdown files with frontmatter metadata. It features categorized news articles covering local events, politics, weather alerts, and regional updates, all presented in a bilingual format (Hindi and English).

The project emphasizes simplicity and performance, leveraging Next.js's static site generation capabilities to pre-render content at build time. Articles are managed as Markdown files in the filesystem, making content management straightforward without requiring a database or CMS.

## Recent Changes

**November 2, 2025 - Vercel to Replit Migration**
- Migrated project from Vercel to Replit environment
- Updated Next.js Link components to use modern API (removed nested `<a>` tags for Next.js 14 compatibility)
- Configured development server to bind to 0.0.0.0:5000 for Replit webview
- Set up deployment configuration for autoscale deployment
- Note: Image assets (hero.jpg, rudraprayag.jpg, local.jpg, weather.jpg) are currently missing from /public/assets/ directory

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Next.js Pages Router with Static Generation**
- Uses Next.js 14.2.3 with the traditional Pages Router (not App Router)
- Implements Static Site Generation (SSG) for optimal performance and SEO
- Pre-renders all article pages at build time using `getStaticPaths` and `getStaticProps`
- Custom `_app.js` provides global layout with header, navigation, and footer

**Rationale**: Static generation ensures fast page loads and better SEO for a content-heavy news site. The Pages Router provides a straightforward routing mechanism suitable for the project's scale.

**Component Structure**
- Minimal component architecture with most UI defined inline
- No separate component library or component directory
- Shared layout and navigation managed through `_app.js`
- React 18.2.0 for rendering

**Styling Approach**
- Custom CSS with mobile-first design principles
- Single global stylesheet (`globals.css`) with CSS variables for theming
- Tailwind configuration present but minimal custom CSS used instead
- Responsive grid layouts using CSS Grid

**Rationale**: Simple CSS approach reduces build complexity and bundle size. The project doesn't require the full weight of a utility-first framework for its current scope.

### Content Management System

**File-Based Markdown Content**
- Articles stored as `.md` files in the `/articles` directory
- Frontmatter metadata includes: title, date, category, slug, image, excerpt
- Content processed using `gray-matter` for frontmatter parsing
- Markdown converted to HTML using `remark` and `remark-html`

**Rationale**: File-based content management eliminates database complexity while maintaining version control through Git. This approach is ideal for a small editorial team and simplifies deployment.

**Article Structure**
- Each article has a unique slug for URL routing
- Categories include: Uttarakhand, Sports, Weather, Local, Politics
- Metadata supports featured images and excerpts for listing pages
- Dynamic routing pattern: `/articles/[slug]`

### Navigation and Routing

**Category-Based Navigation**
- Category pages planned (routes defined in navigation)
- Dynamic article pages using Next.js file-system routing
- Links to category pages: `/categories/[category]`
- Breadcrumb navigation back to home page

**Current State**: Category page implementations not yet present in codebase, only navigation links exist.

### Development and Build Configuration

**Port Configuration**
- Development server runs on port 5000 (custom, not default 3000)
- Binds to `0.0.0.0` for network accessibility (likely for Replit environment)
- Same configuration for production start script

**Build Process**
- Standard Next.js build pipeline
- Static export of all pages at build time
- No custom webpack or build configuration

## External Dependencies

### Core Framework
- **Next.js 14.2.3**: React framework providing SSG, routing, and build tooling
- **React 18.2.0** & **React DOM 18.2.0**: UI rendering library

### Content Processing
- **gray-matter 4.0.3**: YAML frontmatter parser for extracting article metadata from Markdown files
- **remark 14.0.2**: Markdown processor for transforming content
- **remark-html 15.0.1**: Remark plugin to convert Markdown AST to HTML

### Development Tools
- **Tailwind CSS**: Configuration present but minimal usage in current implementation

### Static Assets
- Images stored in `/public/assets/` directory
- Referenced via absolute paths in article frontmatter and components
- No image optimization service or CDN integration currently implemented

### SEO and Crawling
- `robots.txt` configured to allow all crawlers
- Sitemap reference included in robots.txt (sitemap.xml not present in repository)

**Note**: No database, authentication system, or backend API currently implemented. The application is entirely static with no server-side data fetching beyond build-time static generation.