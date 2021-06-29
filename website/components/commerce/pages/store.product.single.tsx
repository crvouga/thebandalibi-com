import { ChipSelection, Image, UniformGrid } from "@components/generic";
import {
  IProductOption,
  IProduct,
  ISettings,
  productToOptionsByName,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { PageWrapper } from "../../top-level";
import { ShoppingCartAddButton } from "../shopping-cart";
import { ProductVariantCard } from "../cards";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
};

export const ProductSingle = ({ settings, product }: IProductSingleProps) => {
  console.log({ product, optionsByName: productToOptionsByName(product) });

  const [selected, setSelected] = useState<IProductOption[]>([]);

  const optionsByName = productToOptionsByName(product);

  return (
    <PageWrapper pageTitle={["Store", product.name]} settings={settings}>
      <Container disableGutters>
        <UniformGrid ItemProps={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Container maxWidth="sm" disableGutters>
            <Image
              aspectRatio={1}
              src={product.thumbnail.src}
              alt={product.name}
            />
          </Container>

          <Box paddingX={2}>
            {Object.entries(optionsByName).map(([name, options]) => (
              <Box key={name}>
                <Typography variant="h3">{name}</Typography>
                <ChipSelection
                  onSelect={(option) => {
                    setSelected((selected) => [...selected, option]);
                  }}
                  onUnselect={(option) => {
                    setSelected((selected) =>
                      selected.filter(
                        (selected) => selected.value !== option.value
                      )
                    );
                  }}
                  items={options}
                  isSelected={(option) =>
                    selected.some((selected) => selected.value === option.value)
                  }
                  toKey={(option) => option.value}
                  toLabel={(option) => option.value}
                />
              </Box>
            ))}
          </Box>

          <Box p={2}>
            <Typography variant="h1">{product.name}</Typography>

            <ShoppingCartAddButton />

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
