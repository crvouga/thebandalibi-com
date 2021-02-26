import { GridContainer } from "../atoms/grid-container";
import { GridItem } from "../atoms/grid-item";

export const CardGrid = <TItem,>({
  items,
  renderItem,
  getItemKey,
}: {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
  getItemKey: (item: TItem) => string;
}) => {
  return (
    <GridContainer>
      {items.map((item) => (
        <GridItem key={getItemKey(item)} clickable>
          {renderItem(item)}
        </GridItem>
      ))}
    </GridContainer>
  );
};
