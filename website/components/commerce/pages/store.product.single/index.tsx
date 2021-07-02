import { Image, UniformGrid } from "@components/generic";
import {
  IProduct,
  ISettings,
  selectedOptionsToVariant,
  productToOptionsByName,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { PageWrapper } from "../../../top-level";
import { ShoppingCartAddButton } from "../../shopping-cart";
import { ProductOptions, useProductOptionsState } from "./product-options";
import { ImageViewModal, SwipeableViews } from "@components/generic";
import { Divider } from "@material-ui/core";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
};

export const ProductSingle = ({ settings, product }: IProductSingleProps) => {
  const optionsState = useProductOptionsState();

  const selectedVariant = selectedOptionsToVariant(
    product,
    optionsState.selected
  );

  const [uiState, setUiState] = useState<"default" | "image-modal-opened">(
    "default"
  );
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <PageWrapper pageTitle={["Store", product.name]} settings={settings}>
      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Container maxWidth="sm" disableGutters>
            <SwipeableViews
              index={imageIndex}
              onChangeIndex={(index) => setImageIndex(index)}
            >
              {product.images.map((image) => (
                <Image
                  onClick={() => setUiState("image-modal-opened")}
                  key={image.src}
                  aspectRatio={1}
                  src={image.src}
                  alt={product.name}
                />
              ))}
            </SwipeableViews>
            <ImageViewModal
              startIndex={imageIndex}
              open={uiState === "image-modal-opened"}
              onClose={() => setUiState("default")}
              images={product.images.map((image) => ({
                src: image.src,
                width: 1000,
                height: 1000,
              }))}
            />
            <Divider />
            <Box display="flex">
              {product.images.map((image, index) => (
                <Box width="120px" onClick={() => setImageIndex(index)}>
                  <Image aspectRatio={1} src={image.src} alt={product.name} />
                </Box>
              ))}
            </Box>
          </Container>

          <Box p={2}>
            <Typography variant="h1">{product.name}</Typography>

            <ProductOptions
              optionsByName={productToOptionsByName(product)}
              optionsState={optionsState}
            />

            <ShoppingCartAddButton disabled={selectedVariant === null} />

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
