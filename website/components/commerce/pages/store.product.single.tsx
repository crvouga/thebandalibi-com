import { ChipSelection, Image, UniformGrid } from "@components/generic";
import {
  IProduct,
  IProductOption,
  ISettings,
  optionToString,
  productToOptionsByName,
} from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { differenceBy, includesBy, unionBy } from "@utility";
import React, { useState } from "react";
import { PageWrapper } from "../../top-level";
import { ShoppingCartAddButton } from "../shopping-cart";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
};

export const ProductSingle = ({ settings, product }: IProductSingleProps) => {
  const [selected, setSelected] = useState<IProductOption[]>([]);

  const select = (option: IProductOption) => {
    setSelected((selected) =>
      unionBy((option) => option.name, selected, [option])
    );
  };

  const unselect = (option: IProductOption) => {
    setSelected((selected) => differenceBy(optionToString, selected, [option]));
  };

  const isSelected = (option: IProductOption) => {
    return includesBy(optionToString, option, selected);
  };

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

          <Box p={2}>
            <Typography variant="h1">{product.name}</Typography>

            <Box>
              {Object.entries(optionsByName).map(([name, options]) => (
                <Box key={name}>
                  <Typography variant="h3">{name}</Typography>
                  <ChipSelection
                    onSelect={select}
                    onUnselect={unselect}
                    items={options}
                    isSelected={isSelected}
                    toKey={optionToString}
                    toLabel={(option) => option.value}
                  />
                </Box>
              ))}
            </Box>

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
