/* 




*/

const FIRST_SEPERATOR = "_";
const SECOND_SEPERATOR = "-";

type DecodedSku = {
  id: string;
  color: string;
  size: string;
};

export const decodeSku = (sku: string): DecodedSku => {
  // console.log(sku);
  // if (!sku.includes(FIRST_SEPERATOR)) {
  //   return {
  //     id: sku,
  //   };
  // }

  const [id, colorSize] = sku.split(FIRST_SEPERATOR);
  const [color, size] = colorSize.split(SECOND_SEPERATOR);

  return {
    id,
    color,
    size,
  };
};

export const encodeSku = ({ id, color, size }: DecodedSku) => {
  return [id, FIRST_SEPERATOR, color, SECOND_SEPERATOR, size].join("");
};
