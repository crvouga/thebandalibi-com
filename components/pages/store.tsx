import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import React from "react";
import { ISettings } from "../../lib/data-access";
import { IProduct } from "../../lib/data-access/product";
import { PageLayout } from "../app/layout";
import { DocumentTitle } from "../app/meta";
import { AspectRatio } from "../shared/aspect-ratio";
import { CardActionAreaLink } from "../shared/clickable";
import { UniformGrid } from "../shared/uniform-grid";

export type IStoreProps = {
  settings: ISettings;
  products: IProduct[];
};

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card>
      <CardHeader title={product.name} />
      <AspectRatio ratio={16 / 9}>
        <Image layout="fill" src={product.thumbnailUrl} />
      </AspectRatio>
    </Card>
  );
};

export const Store = (props: IStoreProps) => {
  const { products, settings } = props;

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Music")}
      settings={settings}
    >
      <Container>
        <Box paddingY={2}>
          <Typography variant="h1">Store</Typography>
          <UniformGrid>
            {products.map((product) => (
              <CardActionAreaLink key={product.id} href="/store">
                <ProductCard product={product} />
              </CardActionAreaLink>
            ))}
          </UniformGrid>
        </Box>
      </Container>
    </PageLayout>
  );
};
