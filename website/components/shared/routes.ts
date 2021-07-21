import { IEventSort } from "@data-access";

export const routes = {
  landing: () => "/",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allImageGalleries: () => "/photo",
  singleImageGallery: (slug: string) => `/photo/${slug}`,

  allVideoGalleries: () => `/video`,
  singleVideoGallery: (slug: string) => `/video/${slug}`,

  allEvents: () => "/event",
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
      eventId,
      sort,
      index: String(index),
    }).toString();

    return `/event/single?${params}`;
  },

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
