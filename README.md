This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.






# In order to import a component in next js  add the following line at the top :
#		import "@/Componenets/Feature"


# There are 4 types of file name conventions :
#	products : An indepedent ROUTE .
#	[productId] / products/[productid] : A dynamic ROUT where the [productID] can be replaced by any ROUTE and will show the page.jsx file in its place (params)
#	(folder) : A folder that is NOT A ROUTE . it gathers components of same category .
#	@Card : It is a component that can be called in any route using the { import "@Card" } location line added on top . 

# There is a thing that works with the GET,POST,Patch,DELETE functionalities of api work . (videos from 30-40 )