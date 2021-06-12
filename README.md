# [thebandalibi.com](https://thebandalibi.com/)

## Dashboards

- [vercel deployment](https://vercel.com/crvouga/the-band-alibi)
- [sanity dashboard](https://www.sanity.io/teams/personal/project/mswm483g/settings)

## Commerce

- code copyed from [vercel/commerce](https://github.com/vercel/commerce)

### Configuration

#### How to change providers

Open .env.local and change the value of COMMERCE_PROVIDER to the provider you would like to use, then set the environment variables for that provider (use .env.template as the base).

The setup for Shopify would look like this for example:

COMMERCE_PROVIDER=shopify
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=xxxxxxx.myshopify.com
And check that the tsconfig.json resolves to the chosen provider:

"@framework": ["framework/shopify"],
"@framework/_": ["framework/shopify/_"]
That's it!

## alibi.music

- [reserved](https://iwantmyname.com/dashboard/domains/pre-orders)
- [.music info](https://music.us/)
