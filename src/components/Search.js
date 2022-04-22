import React, { useState, useEffect } from 'react';

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const [price, setPrice] = useState({ priceFrom: 0, priceTo: 0 });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    value = isNaN(value) ? 0 : value;
    setPrice({ ...price, [name]: value });
  };

  const onCheckboxClick = (name, checked) => {
    setColumns({ ...columns, [name]: checked });
  };

  useEffect(() => {
    const filterProducts = () => {
      let items = props.products.filter((product) => {
        if (price.priceFrom && price.priceTo) {
          return product.price >= price.priceFrom && product.price <= price.priceTo;
        } else if (price.priceFrom) {
          return product.price >= price.priceFrom;
        } else if (price.priceTo) {
          return product.price <= price.priceTo;
        }
        return true;
      });
      setDisplayedProducts(items);
    };
    filterProducts();
  }, [price, props]);

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom.toString()}
        priceTo={price.priceTo.toString()}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        columns={columns} />
    </div>
  );
};

export default Search;
