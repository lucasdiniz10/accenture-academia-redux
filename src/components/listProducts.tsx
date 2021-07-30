import { useEffect } from 'react';
import { connect, } from 'react-redux';

import api from "../services/api";

import * as ProductActions from '../store/products/actions';
import { IProduct, IProductState } from '../store/products/types';

interface IListProductsProps {
  products: IProduct[],
  toogleProduct(product: IProduct): void,
  getProducts(): void,
}

const ListProducts = ({ products, toogleProduct, getProducts }: IListProductsProps) => {

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <div>
      <div>
        <h2>Lista de Produtos</h2>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Valor: R$ {product.value}</p>
            <button onClick={() => toogleProduct(product)}>Selecionar Curso</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: IProductState) => ({
  products: state.product.products,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toogleProduct: (product: IProduct) => dispatch(ProductActions.toogleProduct(product)),
  getProducts: () => dispatch(ProductActions.getProducts())
})

// conecta ao state e depois ao component
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);