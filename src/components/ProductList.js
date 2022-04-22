import React from 'react';

export const ProductList = (props) => {
  const { id, name, department, price, currency } = props.columns;
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {id && <th>ID</th>}
            {name && <th>Name</th>}
            {department && <th>Department</th>}
            {price && <th>Price</th>}
            {currency && <th>Currency</th>}
          </tr>
        </thead>
        <tbody>
          {
            props.products.map((product, index) => {
              return (
                <tr key={index}>
                  {id && <td>{product.id}</td>}
                  {name && <td>{product.name}</td>}
                  {department && <td>{product.department}</td>}
                  {price && <td>{product.price}</td>}
                  {currency && <td>{product.currency}</td>}
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
