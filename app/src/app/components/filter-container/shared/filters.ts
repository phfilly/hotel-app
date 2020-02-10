export interface SlideFilter {
  name: string;
  unit: string;
  icon: string;
  key: string;
  min: number;
  max: number;
  step: number;
}

export const slide_filters: SlideFilter[] = [
  {
    name: "Max Price",
    unit: "€",
    icon: "euro_symbol",
    key: "CURRENCY",
    min: 100,
    step: 50,
    max: 2000
  },
  {
    name: "Min Rating",
    unit: "",
    icon: "insert_emoticon",
    key: "RATING",
    min: 1,
    step: 1,
    max: 10
  },
  {
    name: "Distance from city center",
    unit: "km",
    icon: "near_me",
    key: "DISTANCE",
    min: 1,
    step: 10,
    max: 500
  }
];

export interface Filter {
  name: string;
  key: string;
  values?: string[];
  symbol?: string;
}

export const sortBy: Filter[] = [
  {
    name: "Best supplier & price",
    key: "SUPPLIER_AND_PRICE"
  },
  {
    name: "Best location",
    key: "LOCATION"
  }
];

export const block_filters: Filter[] = [
  {
    name: "Guest Rating",
    key: "GUEST_RATING",
    values: ["Any", "6", "7", "8", "9"],
    symbol: "+"
  },
  {
    name: "Star Rating",
    key: "STAR_RATING",
    values: ["Any", "2", "3", "4", "5"],
    symbol: "&#9733;"
  }
];
