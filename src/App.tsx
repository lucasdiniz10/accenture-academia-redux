import { Provider } from 'react-redux';
import ListProducts from './components/listProducts';
import Products from './components/products';
import store from './store';

function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <Provider store={store}>
        <ListProducts></ListProducts>
        <Products></Products>
      </Provider>
    </div>
  );
}

export default App;
