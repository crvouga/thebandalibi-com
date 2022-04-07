import { Commerce } from 'commerce/commerce';
import { formatPrice, productToAveragePrice } from 'commerce/commerce-utils';
import { Content } from 'content/content';
import { GetStaticProps } from 'next';
import React, { ComponentProps } from 'react';
import Landing from 'views/Landing';

type IProps = ComponentProps<typeof Landing>;

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const settings = await Content.Settings.get();
  const products = await Commerce.Products.getAll({ pageSize: 6 });

  return {
    props: {
      ...settings,
      products: products.map((product) => ({
        id: product.productId,
        title: product.productName,
        image: product.thumbnail.src,
        price: formatPrice(productToAveragePrice(product)),
      })),
    },
  };
};

const LandingPage = (props: IProps): JSX.Element => {
  return <Landing {...props} />;
};

export default LandingPage;
