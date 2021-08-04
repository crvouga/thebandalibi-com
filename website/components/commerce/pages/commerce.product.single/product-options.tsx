import { ChipSelection } from "@components/generic";
import { IProductOption, optionToString } from "@data-access";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { differenceBy, includesBy, unionBy } from "@utility";
import React, { useState } from "react";

export const useProductOptionsState = () => {
  const [selected, setSelected] = useState<IProductOption[]>([]);

  const select = (option: IProductOption) => {
    setSelected((selected) =>
      unionBy((option) => option.name, selected, [option])
    );
  };

  const unselect = (option: IProductOption) => {
    setSelected((selected) =>
      differenceBy((option) => `${option.name}${option.value}`, selected, [
        option,
      ])
    );
  };

  const isSelected = (option: IProductOption) => {
    return includesBy(
      (option) => `${option.name}${option.value}`,
      option,
      selected
    );
  };

  return {
    isSelected,
    select,
    unselect,
    selectedOptions: selected,
  };
};

export const ProductOptions = ({
  optionsByName,
  state,
}: {
  optionsByName: { [name: string]: IProductOption[] };
  state: ReturnType<typeof useProductOptionsState>;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Object.entries(optionsByName).map(([name, options]) => {
        return (
          <Box key={name} sx={{ paddingBottom: 1 }}>
            <Typography component="div" variant="h5" gutterBottom>
              {name}
            </Typography>
            <ChipSelection
              items={options}
              toKey={optionToString}
              toLabel={(option) => option.value}
              onSelect={state.select}
              onUnselect={state.unselect}
              isSelected={state.isSelected}
            />
          </Box>
        );
      })}
    </Box>
  );
};
