# ALX Listing App

**ALX Listing App** — A production-grade, scalable Airbnb-style property listing platform architected with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Designed for semantic clarity, type safety, and expressive UI composition.

![Next.js](https://img.shields.io/badge/Next.js-16-blue?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-blue?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

---

## 🚀 Milestone Preview: Responsive Property Detail Page

As part of **Milestone 1**, the Property Detail Page has been implemented with Tailwind CSS and dynamic components.  
This page demonstrates the integration of **PropertyDetail**, **BookingSection**, and **ReviewSection** into a responsive layout.

🔗 **Live Preview:** [Booking Page](https://alx-listing-app-03.gabcares.xyz/booking)

### ✨ Features

- Responsive grid layout with Tailwind CSS
- Property name, rating, and location display
- Image gallery with main and supporting images
- Tabbed sections: Description, What we offer, Reviews, About host
- Amenities list with icons and labels
- Booking section with nightly price, date pickers, and total cost calculation
- Review section with avatars, star ratings, and comments

---

## 📦 Tech Stack

| Tool           | Version     | Purpose                                 |
|----------------|-------------|-----------------------------------------|
| Node.js        | v24+        | Runtime                                 |
| Next.js        | v16 (Pages) | React framework with SSR & routing      |
| TypeScript     | 5.x         | Static typing and DX                    |
| Tailwind CSS   | v4+         | Utility-first styling                   |
| ESLint         | Latest      | Code linting and quality enforcement    |

> 💡 Recommended: VS Code with Tailwind IntelliSense + TypeScript extensions

---

## 🧱 Folder Structure

```folder
└── 📁alx-listing-app-03
    └── 📁.vscode
        ├── settings.json
    └── 📁components
        └── 📁booking
            ├── BookingForm.tsx
            ├── CancellationPolicy.tsx
            ├── OrderSummary.tsx
        └── 📁common
            ├── Amenities.tsx
            ├── Button.tsx
            ├── Card.tsx
            ├── CardGrid.tsx
            ├── DatePickerInput.tsx
            ├── DetailPill.tsx
            ├── DiscountBadge.tsx
            ├── FilterMenu.tsx
            ├── Icon.tsx
            ├── Pill.tsx
            ├── PropertyDescription.tsx
            ├── SortMenu.tsx
        └── 📁layout
            └── 📁sections
                ├── FilterSection.tsx
                ├── HeroSection.tsx
                ├── MadeWithLove.tsx
                ├── MainHeader.tsx
                ├── Navigation.tsx
                ├── PromotionBanner.tsx
            ├── BaseHeader.tsx
            ├── BaseLayout.tsx
            ├── Footer.tsx
            ├── HomeHeader.tsx
            ├── HomeLayout.tsx
        └── 📁property
            ├── BookingSection.tsx
            ├── PropertyDetail.tsx
            ├── PropertyDetailBody.tsx
            ├── ReviewSection.tsx
        ├── .gitkeep
    └── 📁constants
        ├── .gitkeep
        ├── IconName.ts
        ├── index.ts
    └── 📁hooks
        ├── useInfiniteScrollObserver.ts
    └── 📁interfaces
        ├── .gitkeep
        ├── booking.ts
        ├── index.ts
        ├── layout.ts
        ├── property.ts
    └── 📁pages
        └── 📁api
            ├── hello.ts
        └── 📁booking
            ├── index.tsx
        └── 📁property
            ├── [id].tsx
        ├── _app.tsx
        ├── _document.tsx
        ├── index.tsx
    └── 📁public
        └── 📁assets
            └── 📁detail-images
                ├── image19.png
                ├── image21.png
                ├── image22.png
                ├── image24.png
                ├── image25-1.png
                ├── image25-2.png
                ├── image25-3.png
                ├── image25.png
            └── 📁listing-images
                ├── list1.png
                ├── list10.png
                ├── list11.png
                ├── list12.png
                ├── list13.png
                ├── list14.png
                ├── list15.png
                ├── list16.png
                ├── list17.png
                ├── list18.png
                ├── list19.png
                ├── list2.png
                ├── list20.png
                ├── list3.png
                ├── list4.png
                ├── list5.png
                ├── list6.png
                ├── list7.png
                ├── list8.png
                ├── list9.png
            └── 📁svg
                └── 📁icons
                    └── 📁Bold
                        └── 📁Map & Location
                            ├── Map Point.svg
                        └── 📁Security
                            ├── Lock.svg
                    └── 📁Linear
                        └── 📁Arrows
                            ├── Alt Arrow Down.svg
                            ├── Arrow Left.svg
                            ├── Arrow Right.svg
                        └── 📁Essentional, UI
                            ├── Filter.svg
                        └── 📁School
                            ├── Case Minimalistic.svg
                        └── 📁Search
                            ├── Magnifer.svg
                    ├── bathtub 1.svg
                    ├── bed 1.svg
                    ├── bell 1.svg
                    ├── broom 1.svg
                    ├── chef 1.svg
                    ├── credit-card 1.svg
                    ├── Date.svg
                    ├── DIscount.svg
                    ├── Fav.svg
                    ├── hot-tub 1.svg
                    ├── mountain 1.svg
                    ├── pan 1.svg
                    ├── people 1.svg
                    ├── pool 1.svg
                    ├── profile 1.svg
                    ├── profile 2.svg
                    ├── shaker 1.svg
                    ├── Share.svg
                    ├── Star 2.svg
                    ├── sunrise 1.svg
                    ├── wifi 1.svg
                └── 📁logos
                    ├── apartment 1.svg
                    ├── barn 1.svg
                    ├── cabin 1.svg
                    ├── castle-tower 1.svg
                    ├── cottage 1.svg
                    ├── farm 1-1.svg
                    ├── farm 1.svg
                    ├── home 1.svg
                    ├── island (1) 1.svg
                    ├── key-chain 1.svg
                    ├── living-room 1.svg
                    ├── mansion 1.svg
                    ├── palm-tree 1.svg
                    ├── swimming-pool 1.svg
                    ├── tent 1.svg
                    ├── treehouse (1) 1.svg
                    ├── vacations 1.svg
                    ├── villa 1.svg
                ├── alx-white.svg
                ├── alx.svg
            ├── hero-section-image.png
            ├── icons.svg
            ├── sprite.svg
            ├── sprites.svg
        ├── alx.png
        ├── android-chrome-192x192.png
        ├── android-chrome-512x512.png
        ├── apple-touch-icon.png
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── favicon.ico
        ├── site.webmanifest
    └── 📁styles
        ├── globals.css
    └── 📁utils
        ├── date.ts
        ├── icon.ts
        ├── index.ts
        ├── slugify.ts
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.json
    ├── build-sprite.ts
    ├── eslint.config.mjs
    ├── LICENSE
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── pnpm-workspace.yaml
    ├── postcss.config.mjs
    ├── README.md
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## ⚙️ Getting Started

```bash
git clone https://github.com/D0nG4667/alx-listing-app-03.git
cd alx-listing-app-03
npm install
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## ✅ Verification Checklist

- [x] Dev server runs without errors
- [x] Linting and type-checking pass
- [x] Tailwind styles render correctly
- [x] Responsive layout verified across breakpoints
- [x] Static assets load from `/assets/...`
- [x] Layout components (`Header`, `Footer`, `Layout`) render consistently across pages
- [x] Hero section displays background image and headline text correctly
- [x] Filter pills render dynamically and respond to user interaction
- [x] Property cards render with correct data from `PROPERTYLISTINGSAMPLE`
- [x] Infinite scroll loads additional cards using Intersection Observer
- [x] Fade-in animation triggers correctly on new card render
- [x] “Show more” button replaced with “No more listings” when exhausted
- [x] TypeScript interfaces (`PropertyProps`, etc.) enforce prop safety across components
- [x] Tailwind animation (`fade-in`) configured and applied via `tailwind.config.ts`
- [x] Layout integrated globally via `_app.tsx`
- [x] Project structure matches modular, scalable architecture
- [x] Deployed successfully to Vercel at `alx-listing-app-03.gabcares.xyz`

---

## 📖 Changelog

### Milestone 00 — Responsive Listing Page

- ✅ Created layout components: `Header`, `Footer`, `Layout`
- ✅ Defined `PropertyProps` interface and sample data
- ✅ Implemented hero section, filters, and listing grid
- ✅ Integrated Tailwind animations and infinite scroll
- ✅ Deployed to Vercel at `alx-listing-app-03.gabcares.xyz`

---

## 🧾 NPM Scripts

This project includes a curated set of scripts to streamline development, enforce code quality, and automate asset generation. Each script is designed for clarity, speed, and operational consistency.

```json
"scripts": {
  "dev": "next dev",
  "build": "ts-node build-sprite.ts && next build",
  "start": "next start",
  "lint": "eslint",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "sprite": "ts-node build-sprite.ts",
  "sprite:watch": "concurrently -k -n SPRITE -c cyan \"ts-node build-sprite.ts --watch\""
}
```

### 🔧 Script Descriptions

| Script           | Purpose |
|------------------|---------|
| **`dev`**         | Launches the Next.js development server with hot reloading at `localhost:3000`. |
| **`build`**       | Runs the `build-sprite.ts` script to generate the SVG sprite sheet, then compiles the Next.js app for production. |
| **`start`**       | Starts the optimized production build using `next start`. |
| **`lint`**        | Runs ESLint across the codebase to enforce code quality and catch potential issues. |
| **`format`**      | Formats all files using Prettier based on `.prettierrc.json` rules. |
| **`format:check`**| Checks for formatting issues without modifying files — useful for CI pipelines. |
| **`sprite`**      | Manually triggers the SVG sprite generation script (`build-sprite.ts`) using `ts-node`. |
| **`sprite:watch`**| Watches for changes in SVG assets and regenerates the sprite sheet in real time using `concurrently` with colored logging. |

> 💡 The `build-sprite.ts` script is a custom utility that consolidates individual SVG icons into a single sprite sheet (`sprite.svg`) for optimized inline usage. This ensures minimal HTTP requests and consistent icon rendering across the app.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

### Recommended Workflow

```bash
git checkout -b feature/my-feature
npm run lint && npm run typecheck
git commit -m "feat: add my-feature"
git push origin feature/my-feature
```

---

## 👤 Author

**Gabriel Okundaye**  

- GitHub: [@D0nG4667](https://github.com/D0nG4667)  
- LinkedIn: [Dr. Gabriel Okundaye](https://www.linkedin.com/in/dr-gabriel-okundaye)

---

## 🌟 Show Your Support

If this project inspires or helps you, consider giving it a ⭐️. Your support fuels future iterations and open-source contributions.
