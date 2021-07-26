import { IEventSort } from "@data-access";

export const routes = {
  landing: () => "/",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allImageGalleries: () => "/photo",
  singleImageGallery: (slug: string) => `/photo/${slug}`,

  allVideoGalleries: () => `/video`,
  singleVideoGallery: (slug: string) => `/video/${slug}`,

  allEvents: ({ sort }: { sort: IEventSort }) => `/event?sort=${sort}`,
  singleEvent: ({
    eventId,
    sort,
    index,
  }: {
    eventId: string;
    sort: IEventSort;
    index: number;
  }) => {
    const params = new URLSearchParams({
      sort,
      index: String(index),
      eventId,
    }).toString();

    return `/event/single?${params}`;
  },

  calender: () => "/calender",

  media: () => "/media",

  store: () => "/store",
  singleProduct: ({
    productId,
    variantId,
  }: {
    productId: string;
    variantId?: string;
  }) => `/store/product/${productId}?variantId=${variantId}`,
  shoppingCart: () => "/store/cart",
  checkout: () => "/store/checkout",
};

export const TOP_LEVEL_LINKS: {
  label: string;
  href: string;
}[] = [
  {
    label: "Home",
    href: routes.landing(),
  },

  {
    label: "Music",
    href: routes.allReleases(),
  },

  {
    label: "Photos",
    href: routes.allImageGalleries(),
  },

  {
    label: "Videos",
    href: routes.allVideoGalleries(),
  },

  {
    label: "Shop",
    href: routes.store(),
  },
];
