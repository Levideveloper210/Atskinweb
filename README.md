# A.T Cosmetics LTD — Next.js storefront

This project contains a responsive Next.js storefront, demo product catalogue, search/filter/sort, product details, persistent cart and WhatsApp checkout.

## Before publishing
Product entries and prices are sample data, not verified inventory. Replace them with actual store products and approved prices in `lib/products.ts`. Replace temporary Unsplash images with images supplied by the business or properly licensed product images. Brands are mentioned in customer reviews and are not confirmation of stock or official partnerships. Delivery charges are not guessed. The checkout opens WhatsApp; it does not take payment or automatically confirm an order.

## Run locally
Requires Node.js 18.17+.
```bash
npm install
npm run dev
```
Visit http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Push to GitHub
Create an empty repository, extract this ZIP, upload the files/folders inside it, then commit to `main`. Or:
```bash
git init
git add .
git commit -m "Build A.T Cosmetics storefront"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy on Vercel
1. Sign in to Vercel and choose Add New → Project.
2. Import the GitHub repository.
3. Keep the framework preset as Next.js and default build settings.
4. Click Deploy. Future pushes to the connected branch redeploy automatically.

## Business information
A.T Cosmetics LTD · 0703 357 4227 · WhatsApp +234 703 357 4227.
Awibe Plaza, 1 MCC Wetheral Road, Uratta Road, Owerri 460242, Imo State, Nigeria.
Supplied listing indicates Tuesday opens at 8:00 AM; other hours are intentionally omitted.
