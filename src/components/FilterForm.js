import React from 'react';

export const FilterForm = (props) => {

  const onPriceInputChange = (e) => {
    props.onPriceInputChange(e.target.name, parseInt(e.target.value));
  };

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..."
        value={props.priceFrom}
        onChange={onPriceInputChange} />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..."
        value={props.priceTo}
        onChange={onPriceInputChange} />
    </div>
  );
};
