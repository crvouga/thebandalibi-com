import { ChipSelection } from "@components/generic";
import {
  IProduct,
  IProductOption,
  optionToString,
  productToOptionsByName,
  selectedOptionsToVariant,
} from "@data-access";
import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { differenceBy, includesBy, unionBy } from "@utility";
import React, { useState } from "react";

const unionOptions = (left: IProductOption[], right: IProductOption[]) => {
  return unionBy((option) => option.name, left, right);
};

const differenceOptions = (left: IProductOption[], right: IProductOption[]) => {
  return differenceBy((option) => `${option.name}${option.value}`, left, right);
};

export const useProductOptionsState = ({ product }: { product: IProduct }) => {
  const [selected, setSelected] = useState<IProductOption[]>(() => {
    const optionsByName = productToOptionsByName(product);
    const initial = Object.entries(optionsByName).map(
      ([name, options]) => options[Math.floor((options.length - 1) / 2)]
    );
    return initial;
  });

  const select = (option: IProductOption) => {
    setSelected((selected) => {
      const next = unionOptions(selected, [option]);

      const isNextInvalid = !selectedOptionsToVariant(product, next);

      if (isNextInvalid) {
        return selected;
      }

      return next;
    });
  };

  const unselect = (option: IProductOption) => {
    setSelected((selected) => differenceOptions(selected, [option]));
  };

  const isSelected = (option: IProductOption) => {
    return includesBy(
      (option) => `${option.name}${option.value}`,
      option,
      selected
    );
  };

  const isDisabled = (option: IProductOption) => {
    return !selectedOptionsToVariant(product, unionOptions(selected, [option]));
  };

  return {
    isSelected,
    isDisabled,
    select,
    unselect,
    selectedOptions: selected,
  };
};

export const ProductOptions = ({
  product,
  state,
}: {
  product: IProduct;
  state: ReturnType<typeof useProductOptionsState>;
}) => {
  const optionsByName = productToOptionsByName(product);
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingX: 2,
        paddingTop: 2,
      }}
    >
      {Object.entries(optionsByName).map(([name, options]) => {
        const selectedOption = options.find(state.isSelected);
        return (
          <Box key={name} sx={{ paddingBottom: 2 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <Typography component="div" variant="h4" sx={{ marginRight: 1 }}>
                {name}
              </Typography>

              <Typography
                component="div"
                variant="h6"
                fontWeight="bold"
                color="text.secondary"
              >
                {selectedOption?.value}
              </Typography>
            </Box>
            <ChipSelection
              items={options}
              toKey={optionToString}
              toLabel={(option) => option.value}
              onSelect={state.select}
              isSelected={state.isSelected}
              isDisabled={state.isDisabled}
            />
          </Box>
        );
      })}
    </Paper>
  );
};
