import { FilterKey } from "./filterEnum";

export interface SlideFilter {
  name: string;
  unit?: unitProperty;
  icon?: string;
  key: FilterKey;
  isInverted: boolean;
  colour: string;
  symbol?: string;
  slider?: SlideProperties;
}

export interface unitProperty {
  name: string;
  isSuffix?: boolean;
  isPrefix?: boolean;
}

export interface SlideProperties {
  min?: number;
  max?: number;
  step?: number;
  default: number;
}

export interface BlockSelectFilter {
  name: string;
  key: FilterKey;
  blockSelect: BlockSelect;
}

export interface BlockSelect {
  values: string[];
  isMultiSelect: boolean;
  symbol: string;
}

export interface Filter {
  name: string;
  key: FilterKey;
  values?: string[];
  symbol?: string;
}
