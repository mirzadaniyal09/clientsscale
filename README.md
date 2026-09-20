# Devtrios Clone – React + TypeScript

High-fidelity recreation of the Devtrios digital agency website (https://devtrios.com) built with React 19, TypeScript, Vite, Tailwind CSS v4, and React Router.

## Features

- Fully typed React + TypeScript
- Responsive design (mobile-first)
- Routes:
  - `/` – Homepage (Hero, Services, Case Studies, Industries, Stats, Testimonials, Tech Stack)
  - `/services`
  - `/about-us`
  - `/contact-us`
  - 
  - `/case-studies/:slug`
- Reusable components
- Data-driven content matching the original site
- Contact & Quote forms (client-side demo)

## Getting Started

```bash
cd devtrios-site
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     # Header, Footer, Hero, sections...
  pages/          # Home, Services, About, Contact, GetQuote, CaseStudy
  layouts/        # MainLayout
  data/           # content.ts (all copy)
  types/          # TypeScript interfaces
```

## Notes

- This is a front-end recreation for learning / portfolio purposes.
- Images, exact animations, and backend forms from the live site are approximated.
- Replace the logo and add real assets as needed.
- Forms currently only show a success state (no backend).
