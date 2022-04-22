import React from 'react';
import { render, fireEvent } from '@testing-library/react'

import { FilterForm } from '../../src/components/FilterForm'

describe('FilterForm component', () => {
  it('should invoke the onPriceInputChange callback after "price from" input value changed', () => {
    // given
    const onPriceInputChange = jest.fn();
    const { getByLabelText } = render(<FilterForm
      priceFrom=''
      onPriceInputChange={onPriceInputChange}
    />);

    // when
    fireEvent.change(getByLabelText('Price From:'), { target: {
      name: 'priceFrom',
      value: 123
    }});

    // then
    expect(onPriceInputChange).toHaveBeenCalledWith('priceFrom', 123);
  });

  it('should invoke the onPriceInputChange callback after "price to" input value changed', () => {
    // given
    const onPriceInputChange = jest.fn();
    const { getByLabelText } = render(<FilterForm
      priceFrom=''
      onPriceInputChange={onPriceInputChange}
    />);

    // when
    fireEvent.change(getByLabelText('Price To:'), { target: {
      name: 'priceTo',
      value: 456
    }});

    // then
    expect(onPriceInputChange).toHaveBeenCalledWith('priceTo', 456);
  });

  it('should display the "price from" in input according to passed props', () => {
    // given
    const { getByLabelText } = render(<FilterForm priceFrom='123'/>);
    const input = getByLabelText('Price From:')

    // then
    expect(input.value).toBe('123');
  });

  it('should display the "price to" in input according to passed props', () => {
    // given
    const { getByLabelText } = render(<FilterForm priceTo='456'/>);
    const input = getByLabelText('Price To:')

    // then
    expect(input.value).toBe('456');
  });
});
