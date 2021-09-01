import { IEventSort } from "@data-access";
import EventIcon from "@material-ui/icons/Event";
import ImageIcon from "@material-ui/icons/Image";
import InfoIcon from "@material-ui/icons/Info";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { ReactNode } from "react";

export const LABELS = {
  privacyPolicy: "Privacy Policy",
  shippingPolicy: "Shipping Policy",
  refundPolicy: "Refund Policy",
  termsOfService: "Terms Of Service",

  electronicPressKit: "Electronic Press Kit",

  event: "Events",

  home: "Home",
  release: "Music",

  videoGallery: "Videos",
  relatedVideoGalleries: "More Videos",

  imageGallery: "Photos",
  relatedImageGalleries: "More Photos",

  commerce: "Shop",

  product: "Product",
  relatedProducts: "Related Products",
  productDescription: "Details",

  contentDashboard: "Content Dashboard",
  commerceDashboard: "Commerce Dashboard",
  websiteAuthor: "Author",
  developer: "Developer",

  authentication: "Login",
};

export const CALL_TO_ACTIONS = {
  authenticate: "Login",

  releasesLink: "Listen",
  commerceLink: "Shop",
  eventLink: "See Events",
  videoGalleryLink: "Watch Videos",
  imageGalleryLink: "View Photos",
  checkout: "Proceed To Checkout",
  addToCart: "Add To Cart",

  emailListTitle: "Newsletter",
  emailListSubtitle: "Subscribe to our newsletter so you never miss an update.",

  contactTitle: "Contact Us",
  contactSubtitle: "Want to get in touch? Send us an email.",
  contactAction: "Send Email",
};

export const STATIC_IMAGES = {
  events: "/events.jpeg",
};

export const ROUTES = {
  electronicPressKit: "/electronic-press-kit",

  landing: () => "/",

  home: () => "/home",

  developer: "/developer",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allImageGalleries: () => "/image-gallery",
  singleImageGallery: (slug: string) => `/image-gallery/${slug}`,

  allVideoGalleries: () => `/video-gallery`,
  singleVideoGallery: (slug: string) => `/video-gallery/${slug}`,

  allEvents: () => `/event`,
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

  privacyPolicy: "/legal/privacy-policy",
  shippingPolicy: "/legal/shipping-policy",
  termsOfService: "/legal/terms-of-service",
  refundPolicy: "/legal/refund-policy",
};

export const LEGAL_LINKS: { label: string; href: string }[] = [
  {
    label: LABELS.privacyPolicy,
    href: ROUTES.privacyPolicy,
  },
  {
    label: LABELS.refundPolicy,
    href: ROUTES.refundPolicy,
  },
  {
    label: LABELS.shippingPolicy,
    href: ROUTES.shippingPolicy,
  },
  {
    label: LABELS.termsOfService,
    href: ROUTES.termsOfService,
  },
];

export const TOP_LEVEL_LINKS: {
  label: string;
  href: string;
  icon?: ReactNode;
}[] = [
  {
    label: LABELS.release,
    href: ROUTES.allReleases(),
    icon: <MusicNoteIcon />,
  },

  {
    label: LABELS.commerce,
    href: ROUTES.commerce(),
    icon: <StorefrontIcon />,
  },

  {
    label: LABELS.event,
    href: ROUTES.allEvents(),
    icon: <EventIcon />,
  },

  {
    label: LABELS.imageGallery,
    href: ROUTES.allImageGalleries(),
    icon: <ImageIcon />,
  },

  {
    label: LABELS.videoGallery,
    href: ROUTES.allVideoGalleries(),
    icon: <PlayCircleFilledIcon />,
  },

  {
    label: LABELS.electronicPressKit,
    href: ROUTES.electronicPressKit,
    icon: <InfoIcon />,
  },
];
