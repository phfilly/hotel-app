export interface MultiFilter {
  name: string;
  unit?: string;
  icon?: string;
  key: string;
  symbol?: string;
  slider?: SlideProperties;
}

export interface SlideProperties {
  min?: number;
  max?: number;
  step?: number;
}

export interface BlockSelectFilter {
  name: string;
  key: string;
  blockSelect: BlockSelect;
}

export interface BlockSelect {
  values: string[];
  isMultiSelect: boolean;
  symbol: string;
}

export const filters: MultiFilter[] = [
  {
    name: "Max Price",
    unit: "€",
    icon: "euro_symbol",
    key: "CURRENCY",
    slider: {
      min: 100,
      step: 50,
      max: 2000
    }
  },
  {
    name: "Min Rating",
    unit: "",
    icon: "insert_emoticon",
    key: "RATING",
    slider: {
      min: 1,
      step: 1,
      max: 10
    }
  },
  {
    name: "Distance from city center",
    unit: "km",
    icon: "near_me",
    key: "DISTANCE",
    slider: {
      min: 1,
      step: 10,
      max: 500
    }
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

export const block_filters: BlockSelectFilter[] = [
  {
    name: "Guest Rating",
    key: "GUEST_RATING",
    blockSelect: {
      values: ["Any", "6", "7", "8", "9"],
      isMultiSelect: false,
      symbol: "+"
    }
  },
  {
    name: "Star Rating",
    key: "STAR_RATING",
    blockSelect: {
      values: ["Any", "2", "3", "4", "5"],
      isMultiSelect: true,
      symbol: "&#9733;"
    }
  }
];
