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
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      {Object.entries(optionsByName).map(([name, options]) => (
        <Box
          key={name}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          paddingBottom={1}
        >
          <Typography variant="h3">{name}</Typography>
          <ChipSelection
            items={options}
            toKey={optionToString}
            toLabel={(option) => option.value}
            onSelect={state.select}
            onUnselect={state.unselect}
            isSelected={state.isSelected}
          />
        </Box>
      ))}
    </Box>
  );
};
