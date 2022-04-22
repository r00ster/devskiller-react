import React from 'react'

import { Search } from './components/Search'
import products from './assets/products.json';

const App = () => {
  return <Search products={products} />
}

export default App;
