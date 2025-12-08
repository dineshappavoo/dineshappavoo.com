This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
# Install npm if you have not done that already
# only needed the first time you setup the server locally
cd ~/workspace/dineshappavoo.com/.  # this assumes you are downloading the project under workspace

npm install

# to check the CI
npm ci

# And then run build locally
npm run build

# finally deploy command. This will generate /out folder with all the static files
# this /out folder is needed for github to host the static pages
npm run deploy

# you can use export to make sure everything is exported
# I didn't use export command a few times, but it still worked
npm run export

# for local testing you can simply run npm run dev even before deploy command
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# TO CONFIGURE GITHUB PAGES
# go to the repo dineshappavoo.com
# from settings-> pages, add dineshappavoo.com in Custom domain field. Please follow the read me section near that field. Or you can ask chatgpt. You need to add some IP
# addresses to GODADDY DNS for this to work

## AUTO GENERATED README BELOW:
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
