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
    setSelected((selected) => differenceBy(optionToString, selected, [option]));
  };

  const isSelected = (option: IProductOption) => {
    return includesBy(optionToString, option, selected);
  };

  return {
    isSelected,
    select,
    unselect,
    selected,
  };
};

export const ProductOptions = ({
  optionsByName,
  optionsState,
}: {
  optionsByName: { [name: string]: IProductOption[] };
  optionsState: ReturnType<typeof useProductOptionsState>;
}) => {
  return (
    <Box>
      {Object.entries(optionsByName).map(([name, options]) => (
        <Box key={name}>
          <Typography variant="h3">{name}</Typography>
          <ChipSelection
            items={options}
            toKey={optionToString}
            toLabel={(option) => option.value}
            onSelect={optionsState.select}
            onUnselect={optionsState.unselect}
            isSelected={optionsState.isSelected}
          />
        </Box>
      ))}
    </Box>
  );
};
