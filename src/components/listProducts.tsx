import { connect, } from 'react-redux';

import * as ProductActions from '../store/products/actions';
import { IProduct, IProductState } from '../store/products/types';

interface IListProductsProps {
  products: IProduct[],
  toogleProduct(product: IProduct): any,
}

const ListProducts = ({ products, toogleProduct }: IListProductsProps) => {
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
  toogleProduct: (product: IProduct) => dispatch(ProductActions.toogleProduct(product))
})

// conecta ao state e depois ao component
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);