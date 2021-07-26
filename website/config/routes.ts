import { IEventSort } from "@data-access";

export const LABELS = {
  landingPage: "Home",
  release: "Music",

  videoGallery: "Videos",
  relatedVideoGalleries: "Related Videos",

  imageGallery: "Photos",
  relatedImageGalleries: "Related Photos",

  commerce: "Shop",

  product: "Product",
  relatedProducts: "Related Products",
};

export const CALL_TO_ACTIONS = {
  commerceLink: "Shop Merch",
  videoGalleryLink: "Watch Videos",
  imageGalleryLink: "View Photos",
  checkout: "Proceed To Checkout",
  addToCart: "Add To Cart",
};

export const ROUTES = {
  landing: () => "/",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allImageGalleries: () => "/image-gallery",
  singleImageGallery: (slug: string) => `/image-gallery/${slug}`,

  allVideoGalleries: () => `/video-gallery`,
  singleVideoGallery: (slug: string) => `/video-gallery/${slug}`,

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

  commerce: () => "/commerce",
  singleProduct: ({
    productId,
    variantId,
  }: {
    productId: string;
    variantId?: string;
  }) => `/commerce/product/${productId}?variantId=${variantId}`,
};

export const TOP_LEVEL_LINKS: {
  label: string;
  href: string;
}[] = [
  {
    label: LABELS.landingPage,
    href: ROUTES.landing(),
  },

  {
    label: LABELS.release,
    href: ROUTES.allReleases(),
  },

  {
    label: LABELS.imageGallery,
    href: ROUTES.allImageGalleries(),
  },

  {
    label: LABELS.videoGallery,
    href: ROUTES.allVideoGalleries(),
  },

  {
    label: LABELS.commerce,
    href: ROUTES.commerce(),
  },
];
