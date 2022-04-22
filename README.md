# Search-Engine Application with React

## Introduction

You are implementing search/filter functionalities for an online shop application for your client. A colleague of yours has already implemented some of the functionalities requested by the client, but he is currently on holidays. You have to help finish the remaining functionalities, so the team meets the deadline.

The missing functionalities include:
* Checkbox fields that allow users to display or hide specific columns in the table of products.
* Filter fields that allow users to set a range on the items prices.
* Users should be able to see the filtered or searched products in the table.
* Filtering should work when only one filter is applied (partial filtering) or both:
    * If the user provides only the "price from" (minimum), the product price should be within the [priceFrom, infinity] range.
    * If the user provides the "price to" (maximum) only, the product price should be within the [0, priceTo] range.
    * If the user provides both prices (minimum and maximum), the product price should be within the [priceFrom, priceTo] range.
    * If the user provides negative price filters, then all rules above still apply - no products are expected to have negative price (e.g. priceFrom:-50, priceTo:-10 will return no results). The same applies to `0` filters - if the user applies [0, 0] filters, no products are expected to have price equal to zero (priceFrom:0, priceTo: 0).

## Setup

This react application was generated using [Create React App](https://github.com/facebook/create-react-app). It has all the standard setups.

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm start` – run the project locally

## Problem Statement

Your task is to:

* Make sure that products are imported from the `products.json` inside `/src/assets/` folder, which will be used for the search/filter functionalities.
* Put the imported data in the `products` array in the `Search` component.
* Implement the toggle functionality by adding a handler to the checkbox change in the `ToggleColumns` component.
* Pass a columns object to the `ProductList` and reflect the change in the checkbox appropriately (by displaying or hiding the column).
* Pass the filtered products to the `ProductList` component, so they get displayed in the table.
* Show each item from the passed prop in the table inside the `ProductList` component.
* Pass the `priceFrom` and the `priceTo` attributes to the `FilterForm` component as props.
* Implement the change input and submit the form handlers to the `FilterForm` component.
* Change the filtered products that are displayed in the `ProductList`, so that it only contains the products with a price within the specified range.

Note that you're not allowed to change names or signatures of functions passed to components as properties.

For more details, please run the task on the Devskiller platform and see the failing tests.

### Make sure that all tests pass.

## Good Luck!

