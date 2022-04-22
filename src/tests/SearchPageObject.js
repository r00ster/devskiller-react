import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, screen } from '@testing-library/react'

import { Search } from '../components/Search';

export class SearchPageObject {
  constructor({ products }){
    this.handler = render(<Search products={products} />);
    this.elements = {
      priceFrom: this.handler.getByLabelText('Price From:'),
      priceTo: this.handler.getByLabelText('Price To:'),
    }
  }

  async fillPriceFromInput(value) {
    act(() => {
      fireEvent.change(this.elements.priceFrom, { target: { value: value, name: 'priceFrom' } })
    });
    return await this.waitForComponentToUpdate()
  }
  
  async fillPriceToInput(value) {
    act(() => {
      fireEvent.change(this.elements.priceTo, { target: { value: value, name: 'priceTo' } })
    });
    return await this.waitForComponentToUpdate()
  }
  
  displayedRowsCount() {
    return this.handler.container.querySelectorAll('#product-list tbody tr').length
  }

  async waitForComponentToUpdate(){
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
  };

  getProductListHeader() {
    return this.handler.container.querySelector('#product-list header').textContent
  }

  getProductRowCells(rowIdx) {
    const cells = this.handler.container.querySelectorAll('#product-list tbody tr')[rowIdx].querySelectorAll('td');
    return [...cells].map(node => node.textContent)
  }

  getToggleColumnsLabels(){
    const labels = this.handler.container.querySelectorAll('.toggle-columns label');
    return [...labels].map(node => node.textContent)
  }
}
