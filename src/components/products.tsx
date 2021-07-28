import { connect } from 'react-redux';

import { IProduct } from '../store/products/types';
import { RootState } from '../store';

interface IProductProps {
  product?: IProduct,
}

const Products = ({ product }: IProductProps) => {
  return (
    <>
      {
        product && (
          <div>
            <h2>Página do Produto</h2>
            <h3>{product.title}</h3>
            <p>Valor: R$ {product.value}</p>
            <h4>Módulos</h4>
            <ul>
              {product.modules.map(module => (
                <li key={module.id}>{module.title}</li>
              ))}
            </ul>
          </div>
        )}
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  product: state.product.product,
})

export default connect(mapStateToProps)(Products);