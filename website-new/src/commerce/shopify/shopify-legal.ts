import { ILegalHTML, ILegalGetHTML } from '../commerce-interface';
import { shopifyClient } from './__shopify-client';

const FAIL_MESSAGE = 'Unable to get policy. Send us an email for policy.';

const toLegalHTML = (shop: ShopifyBuy.Shop): ILegalHTML => {
  return {
    privacyPolicyHTML: shop.privacyPolicy.body,
    refundPolicyHTML: shop.refundPolicy.body,
    termsOfServiceHTML: shop.termsOfService.body,
    shippingPolicyHTML: FAIL_MESSAGE,
  };
};

export const getHTML: ILegalGetHTML = async () => {
  const response = await shopifyClient.shop.fetchPolicies();

  return toLegalHTML(response);
};
