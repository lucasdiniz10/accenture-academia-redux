import { IProduct } from "./types";
import { ThunkAction } from "redux-thunk";
import api from "../../services/api";
import { RootState } from "..";
import { AnyAction } from "redux";


export function toogleProduct(product: IProduct) {
  return {
    type: 'TOOGLE_PRODUCT',
    product
  }
}

export function setProducts(products: IProduct[]) {
  return {
    type: 'SET_PRODUCTS',
    products
  }
}

export function getProducts(): ThunkAction<void, RootState, unknown, AnyAction> {
  return dispatch => {
    api.get('products').then(
      success => dispatch(setProducts(success.data)),
      error => alert('Erro ao buscar produtos')
    )
  }
}