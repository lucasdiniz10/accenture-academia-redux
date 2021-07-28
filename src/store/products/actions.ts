import { IProduct } from "./types";

export function toogleProduct(product: IProduct) {
  return {
    type: 'TOOGLE_PRODUCT',
    product
  }
}