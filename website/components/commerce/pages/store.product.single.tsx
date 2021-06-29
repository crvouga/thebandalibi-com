import {
  ChipSelection,
  Image,
  UniformGrid,
  useUniqueItems,
} from "@components/generic";
import { IProduct, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { PageWrapper } from "../../top-level";
import { equalBy, uniqueBy } from "@utility";

export type IProductSingleProps = {
  settings: ISettings;
  product: IProduct;
};

const useSelectedOptionsState = () => {
  return useUniqueItems<{ name: string; value: string }>({
    equals: (option1, option2) =>
      equalBy((_) => [_.name, _.value].join(", "), option1, option2),

    unique: (selected) => uniqueBy((_) => _.name, selected),
  });
};

export const ProductSingle = ({ settings, product }: IProductSingleProps) => {
  const selectedOptions = useSelectedOptionsState();

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

            <Box paddingY={1}>
              {product.options.map((option) => (
                <Box key={option.name}>
                  <Typography variant="h5">{option.name}</Typography>
                  <ChipSelection
                    items={option.values}
                    isSelected={(value) =>
                      selectedOptions.includes({
                        name: option.name,
                        value: value,
                      })
                    }
                    onUnselect={(value) =>
                      selectedOptions.remove({
                        name: option.name,
                        value,
                      })
                    }
                    onSelect={(value) =>
                      selectedOptions.add({
                        name: option.name,
                        value,
                      })
                    }
                    toKey={(optionValue) => optionValue}
                    toLabel={(optionValue) => optionValue}
                  />
                </Box>
              ))}
            </Box>

            <Button
              startIcon={<MdAddShoppingCart />}
              disabled
              fullWidth
              size="large"
              variant="contained"
              color="primary"
            >
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
