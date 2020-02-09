export interface Webfilter {
  name: string;
  unit: string;
  icon: string;
}

export const webFilters: Webfilter[] = [
  {
    name: "Max Price",
    unit: "€",
    icon: "euro_symbol"
  },
  {
    name: "Min Rating",
    unit: "",
    icon: "insert_emoticon"
  },
  {
    name: "Distance from city center",
    unit: "km",
    icon: "near_me"
  }
];

export const sortBy = [
  {
    name: "Best supplier & price",
    value: "SUPPLIER_AND_PRICE"
  },
  {
    name: "Best location",
    value: "LOCATION"
  }
];

export const mobileFilters = [
  {
    name: "Guest Rating",
    key: "GUEST_RATING",
    values: ["Any", "6+", "7+", "8+", "9+"]
  },
  {
    name: "Star Rating",
    key: "STAR_RATING",
    values: ["Any", "2&#9733;", "3&#9733;", "4&#9733;", "5&#9733;"]
  }
];
