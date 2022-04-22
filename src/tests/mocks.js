export const MOCK_PRODUCT_BEEF = {
  id: 1,
  name: "Beef - Tongue, Fresh",
  price: 6.14,
  department: "Food",
  currency: '$'
}

export const MOCK_PRODUCT_IPHONE = {
  id: 2,
  name: "IPhone X",
  price: 900.13,
  department: "Electronics",
  currency: '$'
}

export const MOCK_PRODUCT_GUITAR = {
  id: 3,
  name: "Gibson Les Paul",
  price: 900.67,
  department: "Music",
  currency: '$'
}

export const MOCK_PRODUCT_LIST = [
  MOCK_PRODUCT_BEEF,
  MOCK_PRODUCT_IPHONE,
  MOCK_PRODUCT_GUITAR,
];



export const MOCK_COLUMNS_ALL = {
  id: true,
  name: true,
  department: true,
  currency: true,
  price: true
};

export const MOCK_COLUMNS_ALL_BUT_ID = {
  id: false,
  name: true,
  department: true,
  currency: true,
  price: true
};

export const MOCK_COLUMNS_ONLY_ID = {
  id: true,
  name: false,
  department: false,
  currency: false,
  price: false
};

export const MOCK_COLUMNS_NONE = {
  id: false,
  name: false,
  department: false,
  currency: false,
  price: false
};



export const MOCK_SCENARIOS = [
  {
    scenario: "COLUMNS-ALL",
    product: MOCK_PRODUCT_BEEF,
    columns: MOCK_COLUMNS_ALL,
  },
  {
    scenario: "COLUMNS-ALL-BUT-ID",
    product: MOCK_PRODUCT_BEEF,
    columns: MOCK_COLUMNS_ALL_BUT_ID,
  },
  {
    scenario: "COLUMNS-ONLY-ID",
    product: MOCK_PRODUCT_BEEF,
    columns: MOCK_COLUMNS_ONLY_ID,
  },
  {
    scenario: "COLUMNS-NONE",
    product: MOCK_PRODUCT_BEEF,
    columns: MOCK_COLUMNS_NONE,
  },
]
