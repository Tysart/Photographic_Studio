# TESSART Website

Production-ready landing website for **Фотоателье TESSART** built with Next.js App Router + TypeScript + Tailwind CSS.

## Tech
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next/font (Cormorant Garamond + Inter)

## Routes
- `/` - minimal home with booking modal and info modals
- `/gallery` - grid gallery with keyboard-enabled lightbox

## One-place config
Edit business data in:
- `config/site.ts`

You can change there:
- brand and SEO text
- price
- contact links (Telegram / WhatsApp / phone)
- modal copy
- gallery placeholders list

## Images
Replace placeholders in:
- `public/images/hero-placeholder.jpg`
- `public/images/gallery-placeholder.jpg`

If you want unique gallery images, update `galleryItems` in `config/site.ts` to point to real files, for example:
- `/images/gallery/01.jpg`
- `/images/gallery/02.jpg`

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Deploy (Vercel)
1. Push repository to GitHub.
2. Import repository in Vercel.
3. Framework preset: Next.js.
4. Deploy.
