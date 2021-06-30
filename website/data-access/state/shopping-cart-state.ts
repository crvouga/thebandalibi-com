import { commerce } from "@data-access";
import { useState } from "react";
import { useQuery } from "react-query";

export const useShoppingCart = () => {
  const cartQuery = useQuery(["cart"], () => commerce.checkout.create());
};
