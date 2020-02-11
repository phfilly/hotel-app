import { SlideFilter, Filter, BlockSelectFilter } from "./filterModels";
import { FilterKey } from "./filterEnum";

export const filters: SlideFilter[] = [
  {
    name: "Max Price",
    unit: {
      name: "€",
      isPrefix: true
    },
    icon: "euro_symbol",
    key: FilterKey.CURRENCY,
    isInverted: false,
    colour: "#0077FF",
    slider: {
      min: 100,
      step: 50,
      max: 2000,
      default: 20
    }
  },
  {
    name: "Min Rating",
    icon: "insert_emoticon",
    key: FilterKey.GUEST_RATING,
    isInverted: true,
    colour: "#0077FF",
    slider: {
      min: 1,
      step: 1,
      max: 10,
      default: 9
    }
  },
  {
    name: "Distance from city center",
    unit: {
      name: "km",
      isSuffix: true
    },
    icon: "near_me",
    key: FilterKey.DISTANCE,
    isInverted: false,
    colour: "#0077FF",
    slider: {
      min: 1,
      step: 10,
      max: 500,
      default: 10
    }
  }
];

export const sortBy: Filter[] = [
  {
    name: "Best supplier & price",
    key: FilterKey.SUPPLIER_AND_PRICE
  },
  {
    name: "Best location",
    key: FilterKey.LOCATION
  }
];

export const block_filters: BlockSelectFilter[] = [
  {
    name: "Guest Rating",
    key: FilterKey.GUEST_RATING,
    blockSelect: {
      values: ["Any", "6", "7", "8", "9"],
      isMultiSelect: false,
      symbol: "+"
    }
  },
  {
    name: "Star Rating",
    key: FilterKey.STAR_RATING,
    blockSelect: {
      values: ["Any", "2", "3", "4", "5"],
      isMultiSelect: true,
      symbol: "&#9733;"
    }
  }
];
