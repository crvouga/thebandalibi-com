import { Image, UniformGrid } from "@components/generic";
import { IProduct, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PageWrapper } from "../../top-level";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
};

export const ProductSingle = ({ settings, product }: IProductSingleProps) => {
  return (
    <PageWrapper
      pageTitle={["Store", product.name]}
      settings={settings}
      hideFooter
    >
      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Container maxWidth="sm" disableGutters>
            <Image
              aspectRatio={1}
              src={product.thumbnail.src}
              alt={product.name}
            />
          </Container>
          <Box p={2}>
            <Typography variant="h1">{product.name}</Typography>

            <Button fullWidth size="large" variant="contained" color="primary">
              Add To Cart
            </Button>

            <Box
              paddingY={2}
              dangerouslySetInnerHTML={{ __html: product.descriptionHTML }}
            />
          </Box>
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
