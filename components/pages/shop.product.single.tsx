import React from "react";
import { ISettings } from "../../lib/data-access";
import { IProductInfo } from "../../lib/data-access/product";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";

export type IShopProductSingle = {
  settings: ISettings;
  productInfo: IProductInfo;
};

export const ShopProductSingle = (props: IShopProductSingle) => {
  const { settings, productInfo } = props;

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Shop")}
      settings={settings}
    >
      {JSON.stringify(productInfo, null, 10)}
    </PageLayout>
  );
};
