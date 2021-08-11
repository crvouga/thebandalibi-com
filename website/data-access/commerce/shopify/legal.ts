import { ILegal, ILegalPages } from "../interface";

const FAIL_MESSAGE = "Failed to get policy. Send us an email for policy.";

const toLegalPages = (shop: ShopifyBuy.Shop): ILegalPages => {
  return {
    privacyPolicyHTML: shop.privacyPolicy.body,
    refundPolicyHTML: shop.refundPolicy.body,
    termsOfServiceHTML: shop.termsOfService.body,
    shippingPolicyHTML: FAIL_MESSAGE,
  };
};

export const Legal = ({
  shopifyClient,
}: {
  shopifyClient: ShopifyBuy.Client;
}): ILegal => {
  return {
    async getPages() {
      const response = await shopifyClient.shop.fetchPolicies();

      const legalPages = toLegalPages(response);

      return legalPages;
    },
  };
};
