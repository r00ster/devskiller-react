import { SearchPageObject } from './SearchPageObject'
import products from '../assets/products.json'

describe('Search component', () => {
  it('should display label including number of items', async () => {
    // given
    const search = new SearchPageObject({ products })

    // then
    expect(search.getProductListHeader()).toBe('Product List (30 items)');
  });

  it('should display product row cells', async () => {
    // given
    const search = new SearchPageObject({ products })

    // then
    const firstRow = search.getProductRowCells(0);
    expect(firstRow).toEqual(['PR-1', 'Beef - Tongue, Fresh', 'Food', '6.14', '$']);
  });

  it('should display all columns by default', async () => {
    // given
    const search = new SearchPageObject({ products })

    // then
    const toggleColumnsLabels = search.getToggleColumnsLabels()
    expect(toggleColumnsLabels).toEqual(['id', 'name', 'department', 'price', 'currency']);
  })

  it.each([
    [2, 10, 100, 'correct'],
    [6, 100, 1000, 'correct'],
    [0, 100, 100, 'correct'],
    [1, 3, 3, 'correct'],
    [3, '', 2, 'correct (partial filter)'],
    [2, 900, '', 'correct (partial filter)'],
    [30, '', '', 'correct (partial filter)'],
    [0, 1000, 100, 'incorrect (from > to)'],
    [0, 0, 0, 'incorrect (price=0)'],
  ])('should display %d products after filtering price between %d and %d (%s)', async (count, priceFrom, priceTo) => {
    // given
    const search = new SearchPageObject({ products })

    // when
    await search.fillPriceFromInput(priceFrom)
    await search.fillPriceToInput(priceTo)

    // then
    expect(search.displayedRowsCount()).toBe(count);
  });
});
